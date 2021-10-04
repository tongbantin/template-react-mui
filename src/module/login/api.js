import axios from "axios";
import { API_URL } from "./../../utils/api-utils";
import  {common}  from "./../../utils";
export const GetTokenByPassword = async (param)=>{
    let url = `${API_URL.Authen}/auth/jwtrequest`;
    let { result } = await common.to(axios.post(url, param));
    if (result && result.data) return result.data; 
}
