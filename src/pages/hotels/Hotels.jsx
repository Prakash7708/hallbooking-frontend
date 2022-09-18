import React from 'react'
import Header from '../../components/header/Header';
import "../../components/city/city.css";
//import { Link } from 'react-router-dom';
import { useEffect, useState} from "react";
import axios from "../../axios";
import Hotel from './Hotel'
function Hotels(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
    
    
    
      let fetchData = async () => {
        try {
          const res = await axios.get("/hotels");
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <>
    <div><Header type="smallHeader"/>
    </div>
    <div>
    <div className='cities'>
        <h2 className="cityTitle">Hotels</h2>
        <p className='cityDesc'>These hotel have a lot to offer</p>
        <div className="cityImages">

            {
                data.map((input)=>{
                    return <Hotel data={input}/>
                })
            }
</div>
            </div>
    </div>
    </>
  )
}

export default Hotels














                   
            