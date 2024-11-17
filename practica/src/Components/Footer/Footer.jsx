import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://instagram.com" target='blanck'><FaInstagram /></a>
        <a href="https://youtube.com" target='blanck'><FaYoutube /></a>
        <a href="https://twitter.com" target='blanck'><FaTwitter /></a>
    </div>
  )
}

export default Footer