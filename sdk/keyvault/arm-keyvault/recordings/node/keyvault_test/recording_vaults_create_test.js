let nock = require('nock');

module.exports.hash = "d51e0ada81606a978f748fb0d60cf77b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '5e82da6a-7877-4c55-826e-f9692c231200',
  'x-ms-ests-server',
  '2.1.12261.22 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AnyKwLD8SMhEj1YKG5YuyEs; expires=Wed, 16-Feb-2022 03:40:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrTg_vftjv5y_JkO8SBVbhuKRXP89IzeUiI-62s2TCqPGldOpfqIX_7utAQhvlv1rjhL90uxI5oLkFTxRexlK1gYAHz3XOwEYfuG-IWmvDOAicin5ZloVyslCn6YmIOSi1J9Wfq7hpvx9GZfjD6PGSJiRdSedVhN1WMJvR6uBMyvQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 17 Jan 2022 03:40:43 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8dc8696a-d12d-45fc-88c5-22560c861200',
  'x-ms-ests-server',
  '2.1.12261.22 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AhWEiUQKXtNKsWrJ6e1QQOY; expires=Wed, 16-Feb-2022 03:40:44 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrau9FbtRWCKnATh4-Tx7hbmLiL6mJVaO7a3DtNor3yXnDbPR-iCoT407tGEIqr1TjD3PStMc9OIMbaY0_vGBwDZH-UWrr1r4zNtvwWUCGRonhfirCvM7NM4Y7Dyf-6vfJhX84gZVnadtJvyZOdk6dp7zMk71U0xu6OlRkp909qqQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 17 Jan 2022 03:40:44 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.4.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=ff354a6e-3ec3-49ba-879a-a9ab4cce75a7&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'fa9321e2-b6a3-41da-9a3e-caa3e4b21100',
  'x-ms-ests-server',
  '2.1.12261.22 - SEASLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AneuAaJtpgJAk7IhkvNdmW_Lj78gAQAAADvcdtkOAAAA; expires=Wed, 16-Feb-2022 03:40:44 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 17 Jan 2022 03:40:44 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.KeyVault/vaults/myvaultzzzz', {"location":"eastus","properties":{"tenantId":"88888888-8888-8888-8888-888888888888","sku":{"family":"A","name":"standard"},"accessPolicies":[{"tenantId":"88888888-8888-8888-8888-888888888888","objectId":"00000000-0000-0000-0000-000000000000","permissions":{"keys":["encrypt","decrypt","wrapKey","unwrapKey","sign","verify","get","list","create","update","import","delete","backup","restore","recover","purge"],"secrets":["get","list","set","delete","backup","restore","recover","purge"],"certificates":["get","list","delete","create","import","update","managecontacts","getissuers","listissuers","setissuers","deleteissuers","manageissuers","recover","purge"]}}],"enabledForDeployment":true,"enabledForDiskEncryption":true,"enabledForTemplateDeployment":true}})
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fcf3ba5aaf9abb8beb9f6edabc69efaeeaeab298e57573f78b625a574d75de8e7faffcfa27b375d9debdc4bf68ccbffc809e8f461f2db3454e48841fb6d72b7c3808839a94d53403c2d42ccf9a768dcfdaeca2f9e8d12ffe25a38f9a6bc267f1346b33fafba3699d676d3e7b724d8dcfb3fd07d9eebd9dedf3ecfe747b7f36d9d97e389ddedf9e4c3fbdbf737f7ab0ff60ff0181b2afbc11548e57abb2d01eedb7c72d7db3b7b3b7bbbdbbb7bdb3fb66e7dea39d878f7677c7f7eedffb296a5612625f54b3e2bc00246a9bef6444c07b44d14f77d139bd7670fee9749b28fde0fececeeef4fe34ebbd17c5c06f62d0000edbbb0f80c6fecea3fb7be3079f1efcd447440d9a95555eb7450eea7cd4bc5de3c779b6284a20754ce074169a365bceb27a8697da7c992ddb3370c80362898383c9f9f6c1a7e7bbc412d939b14436d9de9b1143ececeece264cb36c3acd9be66545687257dffbc55f034835f9e97c2a6fece8b34dffeffe631e7a8386b6289a86e8427dfee28fdee6d7f4f37b1fe5cb697dbd6aa9c12c37bf5dd5d98a58897e5b2fddef4d7101925ee675718ebf2f72b42d8b063f64aae997f56a26bf148b5555e3ab595ee6fcc9249bbe5dafe817128bb6aaf1519d4f2b0248bfadd6f545fed1f7a91b422327de25dc821e1afee33d814d319fe7e007a67408d1c2a20ea901fd6271b6a35864cbec82e02edb6c4a48f1a8898a6b925dfa0380dc5f84a1fb4380bbbf0590fbbb87ec2ff925842ff1c1a4cc67cfaafa69be2aabeb45be24ae6deb751e7c57346f4f65de683afbdfbfc917ab92f01f82f19a74c553c6cf7ccefae2abba20769ab7edaa7974d7d73f63fe6d9cfd605de7e365dede05d65061e0a66279f1baa5cee8d5d76b62ed7c96cff0fd7a420cfe226fafaafaed317dded0047c74cafd93e0fc","92ff072a2f4a2c56050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'x-ms-client-request-id',
  'e8d69de9-16dc-4267-950c-4ad8ce21fd2f',
  'x-ms-keyvault-service-version',
  '1.5.252.0',
  'x-ms-request-id',
  'd56d4eb9-ed76-47df-acf9-61a739393e93',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Server',
  'Microsoft-IIS/10.0',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-correlation-request-id',
  'ab78ce14-274b-4590-a855-646d4dd43805',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20220117T034055Z:ab78ce14-274b-4590-a855-646d4dd43805',
  'Date',
  'Mon, 17 Jan 2022 03:40:54 GMT'
]);