const prod = false;
export const api_uri = prod?"https://api-lembda.onrender.com":"http://localhost:8080";
const url = `${api_uri}/api`;
export default url