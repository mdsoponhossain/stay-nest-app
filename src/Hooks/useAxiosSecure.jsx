import axios from "axios";


const axiosSecure = axios.create({baseURL:'http://localhost:5000'})

const useAxiosSecure = () => {
    // axiosSecure.interceptors.response.use(response=>{
    //     return response ;
    // }),
    // (error)=>{
    //     console.log(121212,error)
    // }


   return axiosSecure ;
};

export default useAxiosSecure;