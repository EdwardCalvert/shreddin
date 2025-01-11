import wretch from "wretch"
const api =  wretch("https://shreddin-api.coolify.edcalvert.net")
// Cors fetch options
.options({ credentials: "include", mode: "cors" })
// // Handle 403 errors
// .resolve((_) => _.forbidden(handle403));

export default api;