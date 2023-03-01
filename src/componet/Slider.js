import React from 'react'
import '../css/navbar.css'
import '../css/homepage.css'

export default function Slider() {
  return (
    <>
    <div className="slider-box">
        <div id="slider">
            <img  src={require("../assets/image/slider1.jpg")} alt=""/>
            <img  src={require("../assets/image/slider2.jpg")} alt=""/>
            <img  src={require("../assets/image/slider3.jpg")} alt=""/>
            <img  src={require("../assets/image/slider4.jpg")} alt=""/>
        </div>
        <div className="indicators absolute">
            <span id="btn1" className="active"></span>
            <span id="btn2"></span>
            <span id="btn3"></span>
            <span id="btn4"></span>
        </div>
    </div>
    </>
  )
}
