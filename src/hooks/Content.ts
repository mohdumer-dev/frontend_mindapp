import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useContent = () => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BACK}/content`, { withCredentials: true }
            )
            return response.data.content
        },
        refetchOnWindowFocus:true
    }
    )
}
export default useContent