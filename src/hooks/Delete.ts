import axios from "axios"
import { data } from "react-router-dom"
import useContent from "./Content"



const useDelete = async (contentId: string) => {
    const response = await axios.delete(`${import.meta.env.VITE_BACK}/content/${contentId}`, {
        withCredentials: true
    })
    console.log(response?.data?.msg)
    return response.data.msg

}
export default useDelete