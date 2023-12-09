import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <div className="h-screen flex justify-center items-center dark:bg-slate-500"><img src="https://i.ibb.co/1q7qF25/ZZ5H.gif" alt="loading..." /></div>
    }

    if(user){
        return children;
    }

    return  <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;


PrivateRouter.propTypes = {
    children : PropTypes.node
}