import React from 'react'
import '../css/footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from "react-icons/si";
export default function 
() {
  return (
    <footer className='section-p1'>
        <div className='col'>
            <img className='logo' src="img/logo.png" alt="" />
            <h4>Contact</h4>
            <p> <strong>Address:</strong> </p>
            <p> <strong>Home:</strong> </p>
            <p> <strong>Phone:</strong> </p>
            <div className='follow'>
                <h4>Follow us</h4>
                <div className="icon">
                    <i><BsFacebook/></i>
                    <i><BsInstagram/></i>
                    <i><SiGmail/></i>
                </div>
            </div>
        </div>

        <div className='col'>
            <h4>About</h4>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
        </div>
        <div className='col'>
            <h4>My Accout</h4>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
            <a href="">About us</a>
        </div>

        <div className='col install'>
            <h4>Install</h4>
            <a href="">From App Store or Google Play</a>
            <div className="row">
                <img src="img/pay/app.jpg" alt="" />
                <img src="img/pay/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="img/pay/pay.png" alt="" />
        </div>
    </footer>
  )
}
