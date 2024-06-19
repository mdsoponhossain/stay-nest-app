import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const axiosSecure = axios.create({ baseURL: 'https://stay-nest-server-side.vercel.app',withCredentials:true})


const useAxiosSecure = () => {
    const {handleLogOut} = useContext(AuthContext);
    const navigation = useNavigate();
    axiosSecure.interceptors.response.use(response => {
        return response;
    },
    (error) => {
            if(error.response.status === 401 || error.response.status === 403){
                handleLogOut()
                .then(()=>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">login again</a>'
                    });
                    navigation('/login')
                })
                .catch(()=>{
                    
                })
            }
        }
    )



    return axiosSecure;
};

export default useAxiosSecure;