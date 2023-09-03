import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Main from './Main'



const NavBar = () => {
    return (
        <>
            <nav  style={{height:"5rem",color:"whitesmoke",backgroundColor:"blue",width:"100%",display:"flex",alignItems:"center"}}>
                <h2 style={{padding:"3rem"}}>Ashit <span><i> Strore</i></span>  Billing From</h2>
                
            </nav>
            <Main/>
            <Footer/>
        </>
    )
}

export default NavBar
