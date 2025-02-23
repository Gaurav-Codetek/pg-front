import React, { useState, useEffect } from 'react'
import AppChe22 from '../Subjects/AppChe22';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import AppCheMaj22 from '../Subjects/AppCheMaj22'
import DDMaj from '../Subjects/Sem2/DDMaj';
import DDMin from '../Subjects/Sem2/DDMin';

function ContentWindow(props) {
    const navData = useLocation()
    const nav = useNavigate()
    const [data, setData] = useState([])
    const [dropSec, setDropSec] = useState(false);
    const [shortHand, setShortHand] = useState("GP");
    const [userName, setUserName] = useState("Gaurav Patel");
    const [dark, setDark] = useState(false);
    const [display, setDisplay] = useState(<DDMin />)
    const subName = props.subject;

    const onDark = async () => {
        let a = document.querySelector(".page");
        let b = document.querySelector(".darkMode");
        a.style.backgroundColor = "#000";
        a.style.color = "#FFF"
        b.style.backgroundColor = "#FFF"
    }

    const onLight = async () => {
        let a = document.querySelector(".page");
        let b = document.querySelector(".darkMode");
        a.style.backgroundColor = "#FFF";
        a.style.color = "#000"
        b.style.backgroundColor = "#FFF";
    }


    const onLogOut = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}logout`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            // console.log()
            nav("/", { replace: true });
        })
            .catch((e) => {
                console.log("Logout Error")
            })

    }

    const onMinor = () => {
            let a = document.querySelector(".minor");
            let b = document.querySelector(".major");

            a.style.backgroundColor = "#cfcfcf20";
            a.style.color = "rgb(118, 23, 187)";

            b.style.backgroundColor = "#FFF";
            b.style.color = "#000";

            setDisplay(<DDMin />)
    }

    const onMajor = () => {
            let a = document.querySelector(".major");
            let b = document.querySelector(".minor");

            a.style.backgroundColor = "#cfcfcf20";
            a.style.color = "rgb(118, 23, 187)";

            b.style.backgroundColor = "#FFF";
            b.style.color = "#000";

            setDisplay(<DDMaj />)
    }

    const onLoad = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setData(data);
            if (!res.status === 200) {
                console.log("status code error")
                nav('/home');
            }
            const letter1 = data.Name.charAt(0).toUpperCase();
            const n = data.Name.length;
            const lowCase = data.Name.toLowerCase();
            const standardCase = lowCase.charAt(0).toUpperCase() + lowCase.slice(1);
            for (var i = 0; i <= n; i++) {
                if (data.Name.charAt(i) === " ") {
                    const letter2 = data.Name.charAt(i + 1).toUpperCase();
                    const shortHand = letter1 + letter2;
                    setShortHand(shortHand);
                    const a = standardCase.substr(0, i)
                    const result = a + " " + standardCase.charAt(i + 1).toUpperCase() + standardCase.slice(i + 2);
                    setUserName(result)
                    break;
                }
            }
        } catch (err) {
            console.log("Network Error")
            nav('/home')
        }
    }

    useEffect(() => {
        onLoad()
    }, [])

    return (
        <>
            <header>
                <div className="_ProjectName">
                    Digital-<span>Design</span>
                </div>
                <div className="years">
                    <p onClick={onMinor} className='com minor'>Minor</p>
                    <p onClick={onMajor} className='com major'>Major</p>
                </div>
                <div onClick={() => { setDropSec((prev) => !prev) }} className="profile">
                    <div className="dp">
                        {shortHand}
                    </div>
                    <div className="userID">
                        {userName}
                    </div>
                    <div className="dropDown">
                        {dropSec ? (
                            <FaCaretUp color='rgb(118, 23, 187)' />) : (
                            <FaCaretDown color='rgb(118, 23, 187)' />)}
                    </div>
                </div>
                {dropSec ? <div className="dropSec">
                    <li>Edit profile</li>
                    <li>Favourite</li>
                    <li onClick={onLogOut}>Log out</li>
                </div> : <></>}

                <div onClick={() => {
                    dark ? (onLight()) : (onDark())
                    setDark((prev) => !prev)
                }} className="darkMode">
                    {dark ? (<MdDarkMode size="30" color='rgb(118, 23, 187)' />) : (<MdOutlineDarkMode size="30" color='rgb(118, 23, 187)' />)}
                </div>
            </header>
            <main>
                <div className="page">
                    {display}
                </div>
            </main>
        </>
    );
}

export default ContentWindow