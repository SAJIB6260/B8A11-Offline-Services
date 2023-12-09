import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyService = ({service, services, setServices}) => {
    const { _id, name, image, description, price, location } = service;

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignment-11-server-side-five.vercel.app/allService/${_id}`, {
              method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                      'Deleted!',
                      'Your Selected Product has been deleted.',
                      'success'
                  )
                  const remainning = services.filter( service => service._id !== _id)
                  setServices(remainning)
              }
              });
          }
        });
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className='h-[230px] w-[100%]' src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">Name: {name}</h2>
                <p className='text-base font-medium'>{description}</p>
                <p className='text-lg font-semibold'>Price: <span className="text-lg font-extrabold"> ৳ </span>{price}</p>
                <p className='text-lg font-semibold'>Location: {location}</p>
                <div className="card-actions justify-center">
                    <Link className='w-full' to={`/updateService/${_id}`}>
                        <button className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full">Update Service</button>
                    </Link>
                    
                        <div className='w-full'><button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-700 text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full">Delete Service</button></div>
                </div>
            </div>
        </div>
    );
};

export default MyService;

MyService.propTypes = {
    service: PropTypes.object,
    services: PropTypes.object,
    setServices: PropTypes.object
}