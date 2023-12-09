import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Booking = ({booking, bookings, setBookings}) => {
    const { _id, name, image, price, taking_date, instruction } = booking; 

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
            fetch(`https://assignment-11-server-side-five.vercel.app/allBooking/${_id}`, {
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
                  const remainning = bookings.filter( booking => booking._id !== _id)
                  setBookings(remainning)
              }
              });
          }
        });
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='relative'>
                <img className='h-[230px] w-[100%]' src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">Name: {name}</h2>
                <p className='text-lg font-semibold'>Price: <span className="text-lg font-extrabold"> ৳ </span>{price}</p>
                <p className='text-lg font-semibold'>Service Taking Date: <span className='text-lg font-bold text-[#005ed9]'>{taking_date}</span></p>
                <p className='text-lg font-semibold'>Some instruction: <span className='text-lg font-semibold text-[#005ed9]'>{instruction}</span></p>
                <div className="card-actions justify-center">
                        <p className='w-full'>
                        <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-700 text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full">delete</button>
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Booking;

Booking.propTypes = {
    booking: PropTypes.object,
    bookings: PropTypes.object,
    setBookings: PropTypes.object
}