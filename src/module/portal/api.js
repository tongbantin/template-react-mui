import axios from "axios";
import  {common}  from "./../../utils";
import { API_URL } from "./../../utils/api-utils";
export const getMenu =async ()=>{
    let url = `${API_URL.Lobby}/api/Portal/GetDashboardPage`;
    let {result} = await common.to(axios.post(url))
    if(result && result.data)
        return result.data
}
export const GetModulesHelper =async ()=>{
    let url = `${API_URL.Lobby}/api/Portal/GetModulesHelper`;
    let {result} = await common.to(axios.post(url))
    if(result && result.data)
        return result.data
}