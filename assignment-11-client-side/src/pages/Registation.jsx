import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet-async";



const Registation = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const [registationError, setRegistationError] = useState()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const handleRegistation = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, email, password)

        setRegistationError('')


        if (password.length < 6) {
            setRegistationError("Password should be at least 6 characters or longer.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegistationError(
                "Your password should have at least one upper case characters."
            );
            return;
        } else if (!/[!@#$%^&*()_+{}/:;<>,.?~|-]/.test(password)) {
            setRegistationError("Your password should have a special character");
            return;
        }


        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                handleUpdateProfile(name, photo)
                    .then(() => {
                        toast.success("Registation Successfull");
                        navigate("/");
                    });
                form.reset();
            })
            .catch(error => {

                setRegistationError(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className="bg-[#FAFAFA]">
             <Helmet>
                <title>CleaninCO || Registation</title>
            </Helmet>
            <h2 className="text-4xl font-semibold py-10 text-center ">Please Register</h2>
            <form onSubmit={handleRegistation} className="md:w-3/5 xl:w-2/5 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
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
                    <div className="text-center">
                        {
                            registationError && <p className="text-red-600">{registationError}</p>
                        }
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="w-full py-3 bg-[#009FD9] text-white text-xl font-semibold rounded-md">Register</button>
                </div>
            </form>
            <div className="md:w-3/5 xl:w-2/5 mx-auto text-lg mb-10">
                <div className="grid lg:grid-cols-3">
                    <hr className="w-full text-[#334B62] my-auto" />
                    <h2 className="text-center text-lg text-[#334B62] font-semibold my-5">Or Join With</h2>
                    <hr className="w-full text-[#334B62] my-auto" />
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <p className="text-center my-1 text-xl">Already have an account ?</p>
                <p className="text-center mb-10"><Link className="text-[#009FD9] text-lg font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Registation;