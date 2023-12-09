import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateService = () => {


    const service = useLoaderData();

    const { _id, name, image, description, price, location } = service;

    const handleUpdateService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value;
        const location = form.location.value;

        const updatedService = {
            name, 
            image, 
            description, 
            price, 
            location
        }

        //sen data to server 
        fetch(`https://assignment-11-server-side-five.vercel.app/allService/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Name & Other Details Updated',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
                else{
                    Swal.fire({
                        title: 'info!',
                        text: 'NO Changes Here',
                        icon: 'info',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-10 lg:p-24 ">
            <Helmet>
                <title>CleaninCO || Update Service</title>
            </Helmet>
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-9 text-center font-extrabold">Update a Service</h2>
            <form onSubmit={handleUpdateService}>
                {/* form service name and image row */}
                <div className="md:flex mb-4 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Service Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
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
                            <input type="text" name="description" defaultValue={description} placeholder="Service description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Service Price" className="input input-bordered w-full" />
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
                            <input type="text" name="location" defaultValue={location} placeholder="Service Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Service" className="btn-block bg-[#005ed9] mt-8 py-3 text-white text-2xl font-semibold cursor-pointer border-2 rounded-md hover:border-blue-800" />
            </form>
        </div>
    );
};

export default UpdateService;