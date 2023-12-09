import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Booking from "../components/Booking";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://assignment-11-server-side-five.vercel.app/allBooking/user?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])


    if (bookings.length < 1) {
        return (
            <div className="h-screen mx-auto flex justify-center items-center">
                <div>
                    <figure>
                        <img className="" src="https://i.ibb.co/x2Bf4Fj/empty-cart-7359557-6024626.webp" />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-center text-center">
                            <Link to="/">
                                <button className="btn btn-primary bg-[#009FD9]hover:bg-[#005ed9] hover:text-white dark:hover:text-white  border-none w-full">Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    }


    return (
        <div className="container mx-auto">
            <Helmet>
                <title>CleaninCO || My Booking</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking}
                        bookings= {bookings}
                        setBookings={setBookings}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;