import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { BiLogoGoogle } from 'react-icons/bi';
import { RxGithubLogo } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SocialLogin = () => {

    const {signInWithGoogle, signInWithGithub} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    //google log in handle
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
            toast.success('User logged in successfully');
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    //github logIn Handle 
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            console.log(result.user)
            toast.success('User logged in successfully');
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-5">
                <button
                    onClick={handleGoogleSignIn}
                    className="text-lg border-2 border-[#009FD9] text-[#009FD9] flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg hover:bg-[#009FD9] hover:text-white">
                    <BiLogoGoogle></BiLogoGoogle>
                    Google
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className="text-lg border-2 border-[#403F3F]  text-[#403F3F] flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg  hover:text-white hover:bg-[#403F3F]">
                    <RxGithubLogo></RxGithubLogo>
                    Github
                </button>
            </div>
    );
};

export default SocialLogin;