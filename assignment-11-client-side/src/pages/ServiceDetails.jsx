import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Aos from 'aos';
import { Helmet } from 'react-helmet-async';


const ServiceDetails = () => {

      // for aos
  useEffect(() => {
    Aos.init();
  }, [])

    //user data
    const { user } = useContext(AuthContext);
    

    // service data 
    const service = useLoaderData();
    const { name, image, description, price, location, provider_image, provider_name, provider_email } = service;


    const handleBookService = event => {

        event.preventDefault();
        const form = event.target;
        const taking_date = form.taking_date.value;
        const instruction = form.instruction.value;
        console.log(instruction, taking_date)

        const booking = {
            name: name, 
            image: image,
            taking_date,
            instruction,
            provider_email: provider_email,
            provider_image: provider_image,
            user_email: user?.email,
            price: price
        }

        fetch('https://assignment-11-server-side-five.vercel.app/allBooking', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(booking)
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
        });

    }


    return (
        <div className='container mx-auto h-screen' >
            <Helmet>
                <title>CleaninCO || Services Details</title>
            </Helmet>
            <div className="card card-compact bg-base-100 shadow-xl h-screen" data-aos="flip-left" data-aos-duration="1000">
                <figure className='relative'>
                    <img className='w-[100%] h-[100%]' src={image} alt={name} />
                    <div className="avatar absolute bottom-1 left-3">
                        <div className="w-14 rounded-full">
                            <img src={provider_image} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div className='absolute bottom-4 left-20'>
                        <p className='font-medium text-white bg-slate-700 rounded px-1 py-[2px]'>{provider_name}</p>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">Name: {name}</h2>
                    <p className='text-base font-medium'>{description}</p>
                    <p className='text-lg font-semibold'>Price: <span className="text-lg font-extrabold"> ৳ </span>{price}</p>
                    <p className='text-lg font-semibold'>Location: {location}</p>
                    <div className="card-actions justify-center">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {
                            (user?.email === provider_email)  ? <button className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full" disabled="disabled" onClick={() => document.getElementById('my_modal_5').showModal()}>It&apos;s Your Service</button> : <button className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        }
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box space-y-5">
                                <form onSubmit={handleBookService}>
                                    <input className='w-full rounded border border-blue-300' type="date" name="taking_date" placeholder='select date' required />
                                    <input className='w-full rounded border border-blue-300 my-4' type="text" name="instruction" placeholder='address or customized service plan' required />
                                    <div method="dialog w-full">
                                    <input  className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3" type="submit" value="Purchase Service" />
                                    </div>
                                   
                                </form>
                                <div className='modal-action'>
                                    <form method="dialog w-full">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="bg-red-500 hover:bg-red-700 text-white text-center text-base font-medium rounded-lg uppercase p-3">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
