import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const axiosSecure = axios.create({ baseURL: 'http://localhost:5000' })

const useAxiosSecure = () => {
    const {handleLogOut} = useContext(AuthContext);
    const navigation = useNavigate();
    axiosSecure.interceptors.response.use(response => {
        return response;
    },
    (error) => {
            console.log(121212, error.response.status);
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
                    console.log('log out faaild')
                })
            }
        }
    )



    return axiosSecure;
};

export default useAxiosSecure;