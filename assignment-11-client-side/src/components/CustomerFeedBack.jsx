import PropTypes from 'prop-types';

const CustomerFeedBack = ({comment}) => {
    const { feedback, user_name, user_image} = comment;
    return (
<div className="card card-compact bg-slate-700 shadow-2xl my-5 ">
<div className="avatar p-5">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user_image} />
  </div>
  <h2 className="card-title ml-5 text-[#2092F3]">{user_name}</h2>
</div>
  <div className="card-body">
    <p className="font-medium text-base text-blue-400">&#39;&#39; {feedback} &#39;&#39;</p>
  </div>
</div>
    )
};

export default CustomerFeedBack;


CustomerFeedBack.propTypes = {
  comment : PropTypes.object
}