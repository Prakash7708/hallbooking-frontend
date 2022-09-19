import React,{useState} from 'react';
import './header.css';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faCamera, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



function Header({type}) {
    const navigate = useNavigate();
   const [openDate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState({
          adult: 1,
          children: 0,
          room: 1
})
    //alert(options.adult)
const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
            }
        })
}

let doLogin = () => {
        if(localStorage.getItem("react_app_token")){
        localStorage.removeItem("react_app_token");
         alert("logout")
        
        navigate("/hotels");
      }else{
         navigate("/login");
        }
};

return (
    <div className='h-container'>
        <div className='h-row'>
            <div className='h-col'>
               <Link to={"/"}>StayBook</Link>
            </div>
            <div className='h-col'>
               <button onClick={()=>doLogin()}>{
                localStorage.getItem("react_app_token")?<>Logout</>:<>Login</>
               }</button><button onClick={()=>navigate("/register")}>Register</button>
            </div>
        </div>
        <div className='h-row'>
            <div className='h-col'>
             <div className="icons">
                 <div className="icon active">
                <FontAwesomeIcon icon={faBed} />
                    <Link to={'/'}>Stays</Link>
                </div>
                <div className="icon">
                <FontAwesomeIcon icon={faPlane} />
                    <Link to={'/'}>Flight</Link>
                </div>
                <div className="icon">
                <FontAwesomeIcon icon={faCar} />
                    <Link to={'/'}>Car Rentals</Link>
                </div>
                <div className="icon">
                <FontAwesomeIcon icon={faCamera} />
                    <Link to={'/'}>Attractions</Link>
                </div>
                <div className="icon">
                <FontAwesomeIcon icon={faTaxi} />
                    <Link to={'/'}>Airport Taxis</Link>
                </div>
              </div>
            </div>
               {     type !=="smallHeader"&&
                <>
                <div className='h-col'>
                <h2>Make Your Registration</h2>
            </div>
            <div className='h-col'>
                <div className="search">
                    <div className="search-item">
                    <FontAwesomeIcon icon={faBed} className="" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                />
                    </div>
                    <div className="search-item">
                    <FontAwesomeIcon icon={faCalendar} className="" />
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                {openDate &&<DateRange
                    onChange={item => setDate([item.selection])}
                     showSelectionPreview={true}
                       moveRangeOnFirstSelection={false}
                       months={2}
                        ranges={date}    
                         direction="horizontal"
                         className='date'
                      />}
                    </div>
                    <div className="search-item">
                    <FontAwesomeIcon icon={faPerson} className="" />
                <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {
                                 openOptions && (
                                        <div className="options">
                                            <div className="optionsItem">
                                                <span>Adult</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult <=1}>-</button>
                                                    <span>{options.adult}</span>
                                                    <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                            <div className="optionsItem">
                                                <span>Children</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children <=0}>-</button>
                                                    <span>{options.children}</span>
                                                    <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                            <div className="optionsItem">
                                                <span>Room</span>
                                                <div className="optionsButton">
                                                    <button onClick={() => handleOption("room", "decrement")} className='optionsBtn' disabled={options.room <=1}>-</button>
                                                    <span>{options.room}</span>
                                                    <button onClick={() => handleOption("room", "increment")} className='optionsBtn'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                    </div>
                    <div className="search-item">
                        <button className='btnSearch'>Search</button>
                    </div>
                </div>
            </div>
            </> 
     }
        </div>
    </div>
  )
}

export default Header