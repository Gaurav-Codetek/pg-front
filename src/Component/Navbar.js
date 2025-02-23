import React, { useState } from 'react'
import Logo from './Images/Group 10.png'
import './Navbar.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { RiLoader3Line } from 'react-icons/ri'
import { GiPreviousButton } from "react-icons/gi";

function Navbar() {

    const [loader, setLoader] = useState()
    const Nav = useNavigate()
    const openMenu = () => {
        let e = document.querySelector(".nav-btn-inner")
        let f = document.querySelector(".MobLogout")
        // let f = document.querySelector(".one")
        // let g = document.querySelector(".two")
        // let h = document.querySelector(".three")
        f.style.display = "block"
        // g.style.display="block"
        // h.style.display="block"
        e.style.visibility = "visible"
        e.style.width = "65%"

    }

    const closeMenu = () => {
        let e = document.querySelector(".nav-btn-inner")
        let f = document.querySelector(".MobLogout")
        // let g = document.querySelector(".two")
        // let h = document.querySelector(".three")
        setTimeout(() => {
            f.style.display = "none"
            // g.style.display="none"
            // h.style.display="none"
        }, 200)
        e.style.visibility = "hidden"
        e.style.width = "0px"
    }
    const logout = () => {
        setLoader(
            <div className="loader">
                <div className="loadIcon">
                    <RiLoader3Line className='icon' size="75" />
                </div>
            </div>
        )
        fetch(`${process.env.REACT_APP_BASE_URL}logout`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            // console.log()
            Nav("/home", { replace: true });
        })
            .catch((e) => {
                console.log("Logout Error")
            })

    }


    return (
        <>
            {loader}
            <div className="nav-cont">
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="nav-btn">
                        <div className="ham" onClick={openMenu} >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="nav-btn-inner">
                            <div className="back">
                                <GiPreviousButton className='close' size='37' color='rgb(9,146,7)' onClick={closeMenu} />
                                <p>Back</p>
                            </div>
                            <hr />
                            <a className='MobLogout' onClick={logout}>Logout</a>
                            {/* <button onClick={logout}>Logout</button> */}
                        </div>
                        <a className='logout' onClick={logout}>Logout</a>
                    </div>
                </nav>
                <hr />
            </div>
        </>

    );

}

export default Navbar