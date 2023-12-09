import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import SocialLogin from "../components/SocialLogin";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";




const LogIn = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // user login by email and password

        logIn(email, password)
            .then(result => {
                // console.log(result.user)
                toast.success("Logged In Successfully", result.user?.email);
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="bg-[#FAFAFA]">
             <Helmet>
                <title>CleaninCO || LogIn</title>
            </Helmet>
            <h2 className="text-4xl font-bold py-10 text-center dark:text-white">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/5 xl:w-2/5 mx-auto text-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg dark:text-white">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg dark:text-white">Password</span>
                    </label>
                    <div className="form-control relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <span className="absolute top-1/3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>
                            }
                        </span>
                    </div>
                    <label className="pt-2">
                        <a href="#" className="label-text-alt link link-hover text-lg hover:text-[#009FD9] dark:text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="w-full py-3 bg-[#009FD9] text-white text-xl font-semibold rounded-md">Login</button>
                </div>
            </form>
            <div className="md:w-3/5 xl:w-2/5 mx-auto text-lg mb-10">
                <div className="grid lg:grid-cols-3">
                    <hr className="w-full  text-[#334B62] my-auto" />
                    <h2 className="text-center text-lg text-[#334B62] dark:text-white font-semibold my-5">Or Login With</h2>
                    <hr className="w-full text-[#334B62] my-auto" />
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <p className="text-center my-1 text-xl dark:text-white">Don&#39;t have an account ?</p>
                <p className="text-center mb-10"><Link className="text-[#009FD9] text-lg font-bold" to="/registation">Register Now</Link></p>
            </div>
        </div>
    );
};

export default LogIn;