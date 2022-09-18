import React from 'react';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from '../../axios';
import Header from '../../components/header/Header'
import './admin.css';
import { useEffect, useState } from "react";


function Admin() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      hotelname: "",
      s1:false,
      s2:false,
      s3:false,
      d1:false,
      d2:false,
    },
    onSubmit: async (values) => {
     //console.log(values)
     try{ 
      await axios.post("/Createhotel",values)
       }catch(error){
        console.log(error)
      }
    },
});

 useEffect(() => {
  fetchData();
}, []);


let fetchData = async () => {
  try {
    const res = await axios.get("/bookings");
    setData(res.data);
  } catch (error) {
    console.log(error);
  }
};

const cancelBooking = async (id) =>{

  try{
     await axios.put(`/cancelRoom/${id}`,id);
     fetchData();
  }catch(err){
    console.log(err)
  }
}

  
return (

<div className='row'>
        <div className='col-lg-12'>
        <Header type="smallHeader"/>
    </div>
    <div className='col-lg-12'>
      <div className='orders'>
      
      <div className='orders'>
        <h3><b>Room Bookings</b></h3>
        <table className="table table-striped table-dark">
  <thead className="thead-dark Double RoomNO:01">
    <tr>
      <th scope="col">Bookings</th>
      <th scope="col">CustomerID</th>
      <th scope="col">HotelName</th>
      <th scope="col">Room No</th>
      <th scope="col">Cancel Booking</th>
      
    </tr>
  </thead>
  <tbody className='orders'>
    {
        data.map((input)=>{
            return <tr>
            <th scope="row">➤</th>
            <th>{input.userid}</th>
            <td>{input.hotelname}</td>
            {input.RoomNo1? <td>Singel Room No: 01</td>:input.RoomNo2?<td>Single Room No: 02</td>:input.RoomNo3?
            <td>Single Room No:03</td>:input.DoubleRoomNo1?<td>Double RoomNO:01</td>:input.DoubleRoomNo2?<td>Double RoomNO:02</td>:null}
            <td><button onClick={()=>cancelBooking(input)} className='btn btn-outline-danger'>Unreserve</button></td>
            
          </tr>
        })
    
    }
  </tbody>
</table>
    
        </div>
      <div className='col-lg-12 createhotel'><h3>Create Hotels</h3>
      <form onSubmit={formik.handleSubmit}>
      <div className="row admintable">
          <div className="col-lg-12">
            <label>Hotelname</label>
            <input type={"text"} placeholder={"Hotelname"} className={"form-control"} name={"hotelname"}value={formik.values.hotelname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Rating</label>
            <input type={"text"} placeholder={"Rating"} className={"form-control"} name={"hotelrating"}value={formik.values.hotelrating}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Price</label>
            <input type={"text"} placeholder={"Price"} className={"form-control"} name={"hotelprice"}value={formik.values.hotelprice}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Hotel Offers</label>
            <input type={"text"} placeholder={"Offers"} className={"form-control"} name={"hoteloffers"}value={formik.values.hoteloffers}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Location</label>
            <input type={"text"} placeholder={"Location"} className={"form-control"} name={"location"}value={formik.values.location}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>IMG</label>
            <input type={"text"} placeholder={"img url"} className={"form-control"} name={"img"}value={formik.values.img}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type={"submit"} className={"btn btn-dark form-control"}/>
          </div>
          <div>
            <br/>
          </div>
          </div>
      </form>
      </div>
        
        </div>
    </div>
    </div>
  )
}

export default Admin