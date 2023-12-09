import Aos from 'aos';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, image, description, price, location, provider_image, provider_name } = service;

      // for aos
  useEffect(() => {
    Aos.init();
  }, []);

    return (
        <div className="card card-compact bg-base-100  shadow-xl"  data-aos="flip-left" data-aos-duration="1000">
            <figure className='relative'>
                <img className='h-[230px] w-[100%]' src={image} alt={name} />
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
                    <Link className='w-full' to={`/allService/${_id}`}>
                        <button className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 w-full">Views Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.object
}