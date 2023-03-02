// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { TokenCredential } from "@azure/core-auth";
import { StorageContextClient } from "./StorageContextClient";
import { StorageClient as StorageClientContext } from "./generated/src";
import {
  AnonymousCredential,
  Pipeline,
  StoragePipelineOptions,
  BlobServiceClient,
} from "@azure/storage-blob";
import { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential";
import { toBlobEndpointUrl, toDfsEndpointUrl } from "./transforms";
import { escapeURLPath, getAccountNameFromUrl, getURLScheme, iEqual } from "./utils/utils.common";
import { ExtendedServiceClientOptions } from "@azure/core-http-compat";
import { HttpClient, Pipeline as CorePipeline } from "@azure/core-rest-pipeline";

let testOnlyHttpClient: HttpClient | undefined;
/**
 * @internal
 * Set a custom default http client for testing purposes
 */
export function setTestOnlySetHttpClient(httpClient: HttpClient): void {
  testOnlyHttpClient = httpClient;
}

// This function relies on the Pipeline already being initialized by a storage-blob client
function getCoreClientOptions(pipeline: Pipeline): ExtendedServiceClientOptions {
  const { httpClient: v1Client, ...restOptions } = pipeline.options as StoragePipelineOptions;
  let httpClient: HttpClient = (pipeline as any)._coreHttpClient;
  if (!httpClient) {
    throw new Error("Pipeline not correctly initialized; missing V2 HttpClient");
  }

  // check if we're running in a browser test mode and use the xhr client
  if (testOnlyHttpClient && httpClient !== testOnlyHttpClient) {
    httpClient = testOnlyHttpClient;
    (pipeline as any)._coreHttpClient = testOnlyHttpClient;
  }

  const corePipeline: CorePipeline = (pipeline as any)._corePipeline;
  if (!corePipeline) {
    throw new Error("Pipeline not correctly initialized; missing V2 Pipeline");
  }
  return {
    ...restOptions,
    httpClient,
    pipeline: corePipeline,
  };
}

/**
 * A StorageClient represents a based URL class for {@link BlobServiceClient}, {@link ContainerClient}
 * and etc.
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   */
  public readonly url: string;

  public readonly accountName: string;

  /**
   * Encoded URL string value for corresponding blob endpoint.
   */
  protected readonly blobEndpointUrl: string;

  /**
   * Encoded URL string value for corresponding dfs endpoint.
   */
  protected readonly dfsEndpointUrl: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Such as AnonymousCredential, StorageSharedKeyCredential or any credential from the `@azure/identity` package to authenticate requests to the service. You can also provide an object that implements the TokenCredential interface. If not specified, AnonymousCredential is used.
   */
  public readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * storageClientContextWithBlobEndpoint is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator, with its url pointing to the Blob endpoint.
   */
  protected readonly storageClientContextToBlobEndpoint: StorageClientContext;

  /**
   */
  protected readonly isHttps: boolean;

  /**
   * Creates an instance of StorageClient.
   * @param url - url to resource
   * @param pipeline - request policy pipeline.
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.blobEndpointUrl = toBlobEndpointUrl(this.url);
    this.dfsEndpointUrl = toDfsEndpointUrl(this.url);
    this.accountName = getAccountNameFromUrl(this.blobEndpointUrl);
    this.pipeline = pipeline;
    // creating this BlobServiceClient allows us to use the converted V2 Pipeline attached to `pipeline`.
    const blobClient = new BlobServiceClient(url, pipeline);
    this.storageClientContext = new StorageContextClient(
      this.dfsEndpointUrl,
      getCoreClientOptions(pipeline)
    );

    this.storageClientContextToBlobEndpoint = new StorageContextClient(
      this.blobEndpointUrl,
      getCoreClientOptions(pipeline)
    );

    this.isHttps = iEqual(getURLScheme(this.url) || "", "https");

    this.credential = blobClient.credential;

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
    const storageClientContextWithBlobEndpoint = this.storageClientContextToBlobEndpoint as any;
    storageClientContextWithBlobEndpoint.requestContentType = undefined;
  }
}
