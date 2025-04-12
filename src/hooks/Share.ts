import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ShareContent=()=>{
    return useMutation({
        mutationKey:['share'],
        mutationFn:async () => {
            const response=await axios.post(`${import.meta.env.VITE_BACK}/share`,{
                share:true,
            
            },{
                withCredentials:true
            })
            return response.data.msg
        }
    })
}
export default  ShareContent