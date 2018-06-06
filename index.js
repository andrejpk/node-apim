// Load parameters
require('dotenv').load();  // load env from .env file
const AZURE_SUBSCRIPTION_ID = process.env.AZURE_SUBSCRIPTION_ID;
const AZURE_APIM_RG = process.env.AZURE_APIM_RG;
const AZURE_APIM_SERVICENAME = process.env.AZURE_APIM_SERVICENAME;

// do stuff
(async () => {
const msRestAzure = require("ms-rest-azure");
const ApiManagementClient = require("azure-arm-apimanagement");
try {
  const creds = await msRestAzure.interactiveLogin();
  const client = new ApiManagementClient(creds, AZURE_SUBSCRIPTION_ID);
  const scope = "Tenant";
  // const result = await client.policy.listByService(AZURE_APIM_RG, AZURE_APIM_SERVICENAME, scope);
  console.log("Subscriptions:");
  console.log(await client.subscription.list(AZURE_APIM_RG, AZURE_APIM_SERVICENAME));
}
catch (err) {
  console.log('An error ocurred:');
  console.dir(err, {depth: null, colors: true});
}
})();