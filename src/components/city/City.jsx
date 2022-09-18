import React from 'react'
import { Link } from 'react-router-dom'
import './city.css'
export default function City() {
  return (
    <div className='cities'>
        <h2 className="cityTitle">Explore India</h2>
        <p className='cityDesc'>These popular destinations have a lot to offer</p>
        <div className="cityImages">
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kragujevac" />
                            </div>
                            <h4 className='cityImgTitle'>Gova</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Belgrade" />
                            </div>
                            <h4 className='cityImgTitle'>Homalayas</h4>
                            <span className='cityImgProperties'> </span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Aleksandrovac Zupa" />
                            </div>
                            <h4 className='cityImgTitle'>Mumbai</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Leskovac" />
                            </div>
                            <h4 className='cityImgTitle'>Chennai</h4>
                            <span className='cityImgProperties'> </span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Novi Sad" />
                            </div>
                            <h4 className='cityImgTitle'>Kochin</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Leskovac" />
                            </div>
                            <h4 className='cityImgTitle'>Ladak</h4>
                            <span className='cityImgProperties'> </span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Novi Sad" />
                            </div>
                            <h4 className='cityImgTitle'>Kerala</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kragujevac" />
                            </div>
                            <h4 className='cityImgTitle'>New Delhi</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hotels'>
                            <div className="cityImg">
                                <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Belgrade" />
                            </div>
                            <h4 className='cityImgTitle'>Jaipur</h4>
                            <span className='cityImgProperties'></span>
                        </Link>
                    </div>
            </div></div>
  )
}

