import React from 'react'
import {CiLocationOn} from "react-icons/ci"
import {BsTelephone} from 'react-icons/bs'
import {CiMail} from "react-icons/ci"
import {BsClock} from "react-icons/bs"

const Footer = async() => {

    const DUMMY_DATA=[{heading:"Account",subLinks:[{name:"Wishlist"},{name:"Track Order"},{name:"Register As Buyer"},{name:"Track Order"},{name:"Shipping Details"}]},
    {heading:"Useful links",subLinks:[{name:"About Us"},{name:"Contact"},{name:"Hot Deals"},{name:"Promotions"},{name:"New Products"}]},
    {heading:"Help Center",subLinks:[{name:"Payments"},{name:"Refund"},{name:"Checkout"},{name:"Shipping"},{name:"Privacy Policy"}]}
]
const data2=[{heading:"sfgfdgh",subLinks:[{icon:<CiLocationOn/>,darkKey:"Address",name:"1752 School House Road"},
{icon:<BsTelephone/>,darkKey:"Call Us",name:"1733-5565-5465"},
{icon:<CiMail/>,darkKey:"Email",name:"farmacy@contact.com"},
{icon:<BsClock/>,darkKey:"Work Hours",name:"8:00-20:00,Sunday-Thursday"},
// {icon:<CiLocationOn/>,darkKey:"Address",name:"1752 School House Road"}
]}]
  return (
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Footer