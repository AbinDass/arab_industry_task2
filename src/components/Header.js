import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            {/* <img src={logo} alt='/logo' className='img-logo'/> */}
        </div>
        <div className='selector'>
            <button className='selector-btn'> <span><img className='selector-logo' src='https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU='/></span> XYZ Enterprices pvt ltd</button>
            <select />
        </div>
    </div>
  )
}

export default Header
