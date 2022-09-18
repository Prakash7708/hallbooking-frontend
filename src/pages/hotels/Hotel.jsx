import React from 'react'
import "../../components/city/city.css";
import { Link } from 'react-router-dom'


function Hotel(props) {
  return (
    <div className="cityImage">
    <Link to={`/hotel/${props.data.hotelname}`}>
        <div className="cityImg">
            <img src={props.data.img} alt="Kragujevac" />
        </div>
        <h4 className='cityImgTitle'>{props.data.hotelname}</h4>
        <span className='cityImgProperties'></span>
    </Link>
</div>
  )
}

export default Hotel
