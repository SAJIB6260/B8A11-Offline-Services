import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Service from "../components/Service";
import { Helmet } from "react-helmet-async";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import CustomerTestimonial from "../components/CustomerTestimonial";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {
    const {loading} = useContext(AuthContext);
    const services = useLoaderData();

    if(loading){
        return <div className="h-screen flex justify-center items-center dark:bg-slate-500"><img src="https://i.ibb.co/T4Z1D3f/yy3.gif" alt="loading..." /></div>
    }

    return (
        <div>
            <div className="container mx-auto">
            <Helmet>
                <title>CleaninCO || Home</title>
            </Helmet>
            <Banner></Banner>
            <h1 className="text-center text-[#2994EB] text-3xl md:text-5xl font-bold mt-5 lg:mt-10">Popular Services</h1>
            <div id="popular" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5 lg:mt-10">
                {
                    services.slice(4, 8).map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="flex justify-center">
            <Link to="/allService"><button className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 my-7 lg:my-10">Show All</button></Link>
            </div>
                <Gallery></Gallery>
                <CustomerTestimonial></CustomerTestimonial>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;