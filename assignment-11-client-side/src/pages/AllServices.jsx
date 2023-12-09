import { useLoaderData } from "react-router-dom";
import Service from "../components/Service";
import { Helmet } from "react-helmet-async";
// import { useEffect } from "react";


const AllServices = () => {
    const services = useLoaderData();
    // const [services, setServices] = useEffect(loadServices)


    return (
        <div className="container mx-auto">
             <Helmet>
                <title>CleaninCO || All Services</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
                {
                    services.map( service => <Service key={service._id} 
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;