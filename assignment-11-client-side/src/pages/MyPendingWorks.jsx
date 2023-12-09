import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PendingWorkRow from "../components/PendingWorkRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyPendingWorks = () => {
    const { user } = useContext(AuthContext);
    const [pendings, setPendings] = useState([]);

    const url = `https://assignment-11-server-side-five.vercel.app/allBooking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPendings(data))
    }, [url]);

    // delete service
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result)=>{
            if(result.isConfirmed){
                fetch(`https://assignment-11-server-side-five.vercel.app/allBooking/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your Selected Product has been deleted.',
                            'success'
                        )
                        const remaining = pendings.filter(pending => pending._id !== id)
                        setPendings(remaining)
                    }
                })
            }
          })
        
    }


    const handleBookingConfirm = id => {
        fetch(`https://assignment-11-server-side-five.vercel.app/allBooking/${id}`, {
            method: "PATCH",
            headers: {
                "contenet-type" : "application/json"
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state
                const remaining = pendings.filter(pending => pending._id !== id);
                const updated = pendings.find(pending => pending._id === id);
                updated.status = "confirm"
                const newPending = [updated, ...remaining]
                setPendings(newPending)
            }
        })
    }


    return (
        <div className="container mx-auto min-h-screen">
            <Helmet>
                <title>CleaninCO || My Pending Work</title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center my-5 lg:my-10">My Pending Work: {pendings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>

        </th>
        <th>Service Image</th>
        <th>Service name</th>
        <th>Customer Email</th>
        <th>Customer Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {
            pendings.map(pending => <PendingWorkRow key={pending._id}
                pending={pending}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
            ></PendingWorkRow>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyPendingWorks;