import React from 'react'
import Header from '../../components/header/Header'
import './hotel.css'
import { useNavigate,useParams } from "react-router-dom";
function Hotel() {
  let params=useParams();
  let navigate = useNavigate();
  let doLogin = () => {
    if(localStorage.getItem("react_app_token")){
    //localStorage.removeItem("react_app_token");
    navigate(`/booking/${params.id}`);
    
  }else{
    alert("Please login To Continue")
    navigate("/login");
    }
  };

  return (
    <>
    <div>
      <Header type="smallHeader"/>
      
      </div>
      <div className='roomimg'>

         <img src='https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='hotelimg'/>
         <img src='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='hotelimg'/>
         <img src='https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='hotelimg'/>
         <img src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='hotelimg'/>
         
</div>
<div className='footer'>
   <div>
   <h3>{params.id}</h3>
    <p>Select the rooms for your need and Make the Payment successfully</p>
   </div>
   <div>
    <button onClick={()=>doLogin()}>Booking </button>
   </div>
</div>
</>
    
  )
}

export default Hotel