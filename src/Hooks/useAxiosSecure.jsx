import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const axiosSecure = axios.create({ baseURL: 'https://stay-nest-server-side.vercel.app', withCredentials: true })


const useAxiosSecure = () => {
    const { handleLogOut } = useContext(AuthContext);
    const navigation = useNavigate();
    axiosSecure.interceptors.response.use(response => {
        return response;
    },
        (error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                handleLogOut()
                    .then(() => {
                        navigation('/login')
                        Swal.fire({
                            title: "Something went wrong",
                            text: "Login again",
                            icon: "error",
                            showConfirmButton: false,
                            timer:1500
                        });
                    })
                    .catch(() => {

                    })
            }
        }
    )



    return axiosSecure;
};

export default useAxiosSecure;