import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddServices = () => {

    const {user} = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
        const location = form.location.value;

        const addService = {
            name, 
            image, 
            description, 
            price, 
            location, 
            provider_image: user?.photoURL,
            provider_name: user?.displayName,
            provider_email: user?.email
        }
        
        console.log(addService)

        // send data to the server er jonno 1st fetch
        fetch('https://assignment-11-server-side-five.vercel.app/allService', {   // 1st parameter to link and 2nd parameter method, headers, body
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addService)   // most important part 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    form.reset();
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] p-10 lg:p-24 ">
            <Helmet>
                <title>CleaninCO || Add Service</title>
            </Helmet>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-9 text-center font-extrabold">Add a Service</h2>
            <form onSubmit={handleAddService}>
                {/* form service name and image row */}
                <div className="md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Service Name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form Services description and Price row */}
                <div className="md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Service description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Service Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form Service Location row */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Service Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Service Location" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Service" className="btn-block bg-[#005ed9] mt-8 py-3 text-white text-2xl font-semibold cursor-pointer border-2 rounded-md hover:border-blue-800" />
            </form>
        </div>
    );
};

export default AddServices;