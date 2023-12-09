import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import CustomerFeedBack from "./CustomerFeedBack";


const CustomerTestimonial = () => {

    const { user } = useContext(AuthContext);

    const handleAddFeedBack = event => {
        event.preventDefault();

        const form = event.target;
        const feedback = form.feedback.value;

        const customerFeedback = {
            feedback,
            user_email: user?.email,
            user_name: user?.displayName,
            user_image: user?.photoURL
        }

        fetch('https://assignment-11-server-side-five.vercel.app/allFeedBack', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(customerFeedback)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Successfully Added to My Bookings",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
                event.target.reset();
            });
    }

    const [feedBacks, setFeedBacks] = useState([]);

    const url = "https://assignment-11-server-side-five.vercel.app/allFeedBack"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFeedBacks(data))
    }, [])

    return (

        <div>
            <h1 className="text-center text-[#2994EB] text-3xl md:text-5xl font-bold mt-5 lg:mt-10">Customer FeedBack Latest</h1>
            <div className="bg-base-100 my-12">
                <form onSubmit={handleAddFeedBack}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-5 lg:mt-10 ">
                        {
                            feedBacks.slice(-4).map(comment => <CustomerFeedBack key={comment._id} comment={comment}></CustomerFeedBack>)
                        }
                    </div>
                    {
                        user ? (<div>
                            <div className="text-center">
                                <textarea
                                    className="bg-slate-400 border-none text-lg font-medium px-5 py-3 rounded-md w-full"
                                    type="text"
                                    rows="3"
                                    cols="80"
                                    name="feedback"
                                    required
                                    placeholder="Write Your FeedBack"
                                ></textarea>
                            </div>
                            <input
                                type="submit"
                                value="FeedBack Send"
                                className="btn btn-block text-white font-semibold bg-[#009FD9] hover:bg-[#005ed9]"
                            />
                        </div>)
                            :
                            ("")
                    }
                </form>
            </div>
        </div>
    );
};

export default CustomerTestimonial;