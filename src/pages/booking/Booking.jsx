import React from 'react'
import { useEffect, useState} from "react";
import './booking.css'
import { useParams } from "react-router-dom";
import axios from "../../axios";
function Booking() {
  const [loading,setLoading]=useState(false)
  let params=useParams();

const [data, setData] = useState([]);
  useEffect(() => {
      fetchData();
},[]);
  
  
  
let fetchData = async () => {
      try {
        const res = await axios.get(`/hotels/${params.id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
};

const bookRoom = async (id) =>{
  setLoading(true)
  try{
     await axios.put(`/bookRoom/${id}`,data,{
      headers: {
        'Authorization': `${localStorage.getItem("react_app_token")}`
      }
     });
     fetchData();
     setLoading(false)
  }catch(err){
    console.log(err)
  }
}

return (
    <div className='body'>
        <div className='page'>
           
           {loading ? <div className="page"><h2><b>Booking Processing...</b></h2></div>:
           <>
           <h3>{params.id}</h3>
            <div>
              <h4>Available Rooms</h4>
              <h5>Singel Rooms</h5>
             
              <ul>
                
                <li>Room No.01 :<button disabled={data.s1?true:false} onClick={()=>bookRoom("s1")} className={data.s1 ? "btn btn-danger":"btn btn-warning"}>
                {data.s1 ? "Booked":"Book Room"}</button></li>
                <br/>
                <li>Room No.02 :<button disabled={data.s2 ? true:false} onClick={()=>bookRoom("s2")} className={data.s2 ? "btn btn-danger":"btn btn-warning"}>
                {data.s2 ? "Booked":"Book Room"}</button></li>
                <br/>
                <li>Room No.03 :<button disabled={data.s3 ? true:false} onClick={()=>bookRoom("s3")} className={data.s3 ? "btn btn-danger":"btn btn-warning"}>
                {data.s3 ? "Booked":"Book Room"}</button></li>
              </ul>
              <h5>Double Rooms</h5>
              <ul>
              
              <li>Double Room No.01 :<button disabled={data.d1 ? true:false} onClick={()=>bookRoom("d1")} className={data.d1 ? "btn btn-danger":"btn btn-warning"}>
                {data.d1 ? "Booked":"Book Room"}</button></li>
                <br/>
                <li>Double Room No.02 :<button disabled={data.d2?true:false} onClick={()=>bookRoom("d2")} className={data.d2 ? "btn btn-danger":"btn btn-warning"}>
                {data.d2 ? "Booked":"Book Room"}</button></li>
              </ul> 
            </div>
            </>
}
            
        </div>
    </div>
  )
}

export default Booking
