// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes
// https://analysis.windows.net/powerbi/api/Report.Read.All
export const scopes: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "ec7f0183-0f01-4b98-8d47-dcc70e097da9";

// Id of the workspace where the report is hosted
export const workspaceId: string = "2713d9da-5f81-45ac-a841-d7d5a7cb7336";

// Id of the report to be embedded
export const reportId: string = "9c474757-d094-406c-ae95-960e131ac6c4";