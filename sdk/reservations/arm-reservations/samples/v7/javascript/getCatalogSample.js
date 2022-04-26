/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureReservationAPI } = require("@azure/arm-reservations");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the regions and skus that are available for RI purchase for the specified Azure subscription.
 *
 * @summary Get the regions and skus that are available for RI purchase for the specified Azure subscription.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-03-01/examples/GetCatalog.json
 */
async function catalog() {
  const subscriptionId = "23bc208b-083f-4901-ae85-4f98c0c3b4b6";
  const reservedResourceType = "VirtualMachines";
  const location = "eastus";
  const options = { reservedResourceType, location };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.getCatalog(subscriptionId, options);
  console.log(result);
}

catalog().catch(console.error);
