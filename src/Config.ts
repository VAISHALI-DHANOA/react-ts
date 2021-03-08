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

export const accessToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGQ3MzkxYjYtNmQ2Ni00NjI1LWFkYTUtZmY0MzdjMWEwZTljLyIsImlhdCI6MTYxNTIxOTM2MCwibmJmIjoxNjE1MjE5MzYwLCJleHAiOjE2MTUyMjMyNjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFEQlVOenRwSWVFcG9FTlVJaHM2eDYyQWRQSy8xYjFEZ250OGJYdzMrT1Z2ZVZRMTRWUEdETlhjTVpQNTZQMU1pIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImVjN2YwMTgzLTBmMDEtNGI5OC04ZDQ3LWRjYzcwZTA5N2RhOSIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE0MC43OC45OS4xNTYiLCJuYW1lIjoiMnMwcDFfeXV2NUBzdHVkZW50cy5qa3UuYXQiLCJvaWQiOiI0OTJhOTQ2NC00MjBmLTQwNWMtYWViNy05ZWJiMTE0OWM2NGYiLCJwdWlkIjoiMTAwMzIwMDExMjBGN0VBMiIsInJoIjoiMC5BUWtBdHBGempXWnRKVWF0cGY5RGZCb09uSU1CZi13QkQ1aExqVWZjeHc0SmZha0pBSTAuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic3ViIjoicVFMT0lqRlJCQXA2UEQ3eUdibDdQSVRSVUdEeWItRUR2TjlHajJqbWY0USIsInRpZCI6IjhkNzM5MWI2LTZkNjYtNDYyNS1hZGE1LWZmNDM3YzFhMGU5YyIsInVuaXF1ZV9uYW1lIjoiMnMwcDFfeXV2NUBzdHVkZW50cy5qa3UuYXQiLCJ1cG4iOiIyczBwMV95dXY1QHN0dWRlbnRzLmprdS5hdCIsInV0aSI6Im5zSFBsb05kWlVxQ0FmS2xZNGhIQUEiLCJ2ZXIiOiIxLjAifQ.RWENn0HDrd904Jkhu4rmd1d7nYuL9WGm7Z5CahCh224Dh4DTAYRycD4jb9t_IBOlyGKCtKqVaerUmegTs4d2WEWwr79DdAFJJWTCTD4dFmjLEA5xgpx57dsGfyePHGah4RQHcM_VazUl_OmsldOLt92PnNL5tmguTkrdnnSoqfduo-62UKbOKN-0A47-dOj1usbMyFNhpeTehoxg55DDyKnopmsuhAVhSpwkxIB4nin1Mk3Yxpzj8qHpBRt58YrsMnoDR9NNQyf1fQeGImG28DD-uUYR-Z9yv3_AGH0c2Lgv6xM2LYTmxDMDSVsipGoQqi5Kk3vuqe4tLGxrtg7-Pg";

export const embedUrl: string = "https://app.powerbi.com/reportEmbed?reportId=9c474757-d094-406c-ae95-960e131ac6c4&groupId=2713d9da-5f81-45ac-a841-d7d5a7cb7336&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d"