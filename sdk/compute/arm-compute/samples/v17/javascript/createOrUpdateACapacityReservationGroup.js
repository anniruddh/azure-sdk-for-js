/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to The operation to create or update a capacity reservation group. When updating a capacity reservation group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation for more details.
 *
 * @summary The operation to create or update a capacity reservation group. When updating a capacity reservation group, only tags may be modified. Please refer to https://aka.ms/CapacityReservation for more details.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/CreateOrUpdateACapacityReservationGroup.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function createOrUpdateACapacityReservationGroup() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const capacityReservationGroupName = "myCapacityReservationGroup";
  const parameters = {
    location: "westus",
    tags: { department: "finance" },
    zones: ["1", "2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.capacityReservationGroups.createOrUpdate(
    resourceGroupName,
    capacityReservationGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateACapacityReservationGroup().catch(console.error);