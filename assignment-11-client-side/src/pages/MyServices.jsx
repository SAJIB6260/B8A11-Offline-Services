import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MyService from "../components/MyService";

const MyServices = () => {
    const services = useLoaderData();

    if (services.length < 1) {
        return (
            <div className="card container mx-auto  mt-48">
                <figure>
                    <img className="w-100%" src="https://i.ibb.co/tqFSXpw/Z16w.gif" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-center text-center">
                        <Link to="/">
                            <button className="btn btn-primary bg-[#009FD9] hover:bg-[#005ed9] border-none w-full">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        );

    }


    return (
        <div className="container mx-auto">
            <Helmet>
                <title>CleaninCO || My Services</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
                {
                    services.map(service => <MyService key={service._id} service={service}></MyService>)
                }
            </div>
        </div>
    );
};

export default MyServices;