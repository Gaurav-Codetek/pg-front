import React, { useEffect, useState } from 'react'
// import './MainSection.css'
// import Typewriter from 'typewriter-effect'
// import Navbar from './Navbar'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { RiLoader3Line } from 'react-icons/ri'
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaCaretUp } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import BTSem1 from './Cat/BTSem1';
import Default from './Cat/Default';
import Syllabus from './Syllabus/Syllabus';
import CseSem1 from './Cat/CseSem1';
import EceSem1 from './Cat/EceSem1';
import EeeSem1 from './Cat/EeeSem1';
import ITSem1 from './Cat/ITSem1';
import MechSem1 from './Cat/MechSem1';
import MechSem2 from './Cat/MechSem2';
import BTSem2 from './Cat/BTSem2';
import CseSem2 from './Cat/CseSem2';
import EceSem2 from './Cat/EceSem2';
import EeeSem2 from './Cat/EeeSem2';
import ITSem2 from './Cat/ITSem2';
import Loader from './Loader';
import EceSem4 from './Cat/EceSem4';

function MainSection() {
    // const [data, setData] = useState('')
    const Nav = useNavigate();

    const changeLoad = () => {
        setLoader();
    }

    // New Code

    const nav = useNavigate();
    const navData = useLocation();
    const [data, setData] = useState([])
    const [dropSec, setDropSec] = useState(false);
    const [dropSem, setDropSem] = useState(false);
    const [dropBranch, setDropBranch] = useState(false);
    const [listSec, setListSec] = useState(false);
    const [shortHand, setShortHand] = useState(0);
    const [userName, setUserName] = useState("Xxxxxx xxxxx");
    const [semester, setSem] = useState("Select Sem")
    const [branch, setBranch] = useState("Select Branch")
    const [display, setDisplay] = useState(<Default />)
    const [loader, setLoader] = useState(false)
    const [noticeWin, setNoticeWin] = useState(false)



   

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
            setLoader(false)
            setData(data);
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
            if (res.status !== 200) {
                console.log("status code error")
                nav('/home');
            }
        } catch (err) {
            console.log("Network Error")
            nav('/home')
        }
    }

    const onSelect = async () => {
        if (semester === "Sem-1" && branch === "BT") {
            setDisplay(<BTSem1 />)
        }
        else if (semester === "Sem-1" && branch === "CSE") {
            setDisplay(<CseSem1 />)
        }
        else if (semester === "Sem-1" && branch === "ECE") {
            setDisplay(<EceSem1 />)
        }
        else if (semester === "Sem-1" && branch === "EEE") {
            setDisplay(<EeeSem1 />)
        }
        else if (semester === "Sem-1" && branch === "IT") {
            setDisplay(<ITSem1 />)
        }
        else if (semester === "Sem-1" && branch === "MECH") {
            setDisplay(<MechSem1 />)
        }
        else if (semester === "Sem-2" && branch === "BT") {
            setDisplay(<BTSem2 />)
        }
        else if (semester === "Sem-2" && branch === "CSE") {
            setDisplay(<CseSem2 />)
        }
        else if (semester === "Sem-2" && branch === "ECE") {
            setDisplay(<EceSem2 />)
        }
        else if (semester === "Sem-2" && branch === "EEE") {
            setDisplay(<EeeSem2 />)
        }
        else if (semester === "Sem-2" && branch === "IT") {
            setDisplay(<ITSem2 />)
        }
        else if (semester === "Sem-2" && branch === "MECH") {
            setDisplay(<MechSem2 />)
        }
        else if (semester === "Sem-4" && branch === "ECE") {
            setDisplay(<EceSem4/>)
        }
    }

    const onPyq = () => {
        let a = document.querySelector(".pyqBtn");
        let b = document.querySelector(".sylBtn")

        a.style.backgroundColor = "#cfcfcf20";
        a.style.color = "rgb(118, 23, 187)";

        b.style.backgroundColor = "#FFF";
        b.style.color = "#000"
        setListSec(false)
    }

    const onSyl = () => {
        let a = document.querySelector(".pyqBtn");
        let b = document.querySelector(".sylBtn")

        b.style.backgroundColor = "#cfcfcf20";
        b.style.color = "rgb(118, 23, 187)";

        a.style.backgroundColor = "#FFF";
        a.style.color = "#000"
        setListSec(true)
    }

    const onOut = () => {
        if (dropBranch) {
            setDropBranch(false)
        }
        else if (dropSec) {
            setDropSec(false)
        }
        else if (dropSem) {
            setDropSem(false)
        }
    }

    const onNoticeWin = () => {
        let a = document.querySelector(".noticeSec");
        if (!noticeWin) {
            setNoticeWin(true)
            a.style.right = "-300px"
        }
        else if (noticeWin) {
            setNoticeWin(false)
            a.style.right = "0"
        }
    }

    useEffect(() => {
        onLoad()
        setLoader(true)
    }, [])

    const onLogOut = () => {
        const roll = data.RollNo;
        fetch(`${process.env.REACT_APP_BASE_URL}logout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ roll }),
            credentials: "include"
        }).then((res) => {
            // console.log()
            nav("/home", { replace: true });
        })
            .catch((e) => {
                console.log("Logout Error")
            })

    }

    return (
        <>
            {loader ? (<Loader />) : (<></>)}
            <div onClick={onOut} className="home">
                <header>
                    <div className="_ProjectName">
                        Page-<span>Roll</span>
                    </div>
                    <div className="searchBox">
                        <input type="search" name="SearchBox" id="searchBox" placeholder="Search your subject" />
                        <label htmlFor="searchBox"><FaSearch color='rgb(118, 23, 187)' /></label>
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
                </header>
                <main className='mainArea'>
                    <div className="navRTC">
                        <p>Navigation</p>
                        <div className="navSec">
                            <li onClick={onPyq} className='pyqBtn'>Previous Year Questions</li>
                            <li onClick={onSyl} className='sylBtn'>Syllabus</li>
                        </div>
                    </div>
                    {listSec ? (<Syllabus />) : (
                        <div className="listArea">
                            <p><b>Choose section</b> <span className='partySymb'><LuPartyPopper color='rgb(118, 23, 187)' /></span>
                                <div onClick={() => setDropBranch((prev) => !prev)} className='branch'>
                                    {branch} <span>{dropBranch ? (<FaCaretUp color='rgb(118, 23, 187)' />) : (<FaCaretDown color='rgb(118, 23, 187)' />)}</span>
                                    {dropBranch ? (
                                        <div onClick={onSelect} className="branchList">
                                            <li onClick={() => setBranch("ECE")}>ECE</li>
                                            <li onClick={() => setBranch("CSE")}>CSE</li>
                                            <li onClick={() => setBranch("IT")}>IT</li>
                                            <li onClick={() => setBranch("BT")}>BT</li>
                                            <li onClick={() => setBranch("EEE")}>EEE</li>
                                            <li onClick={() => setBranch("MECH")}>MECH</li>
                                        </div>
                                    ) : (<></>)}
                                </div>

                                <div onClick={() => setDropSem((prev) => !prev)} className='semester'>
                                    {semester}<span>{dropSem ? (<FaCaretUp color='rgb(118, 23, 187)' />) : (<FaCaretDown color='rgb(118, 23, 187)' />)}</span>
                                    {dropSem ? (
                                        <div className="semList">
                                            <li onClick={() => setSem("Sem-1")}>Sem-1</li>
                                            <li onClick={() => setSem("Sem-2")}>Sem-2</li>
                                            <li onClick={() => setSem("Sem-3")}>Sem-3</li>
                                            <li onClick={() => setSem("Sem-4")}>Sem-4</li>
                                        </div>
                                    ) : (<></>)}
                                </div>
                                <div onClick={onSelect} className="goBtn">
                                    GO
                                </div>
                            </p>
                            {display}
                        </div>
                    )}
                    <div className="noticeSec">
                        <div onClick={onNoticeWin} className="backBtn">
                            {noticeWin ? (<IoArrowBack size="25" color='#fff' />) :
                                (<IoArrowForwardOutline size="25" color="#fff" />)}

                        </div>
                        <div className="noticeHead">
                            <p>Notices</p>
                        </div>
                        <div className="noticeArea">
                            <p>Tentative dates of Minor-1 for even semesters is 28 Feb</p>
                            <p>2nd Semester minor dates are yet to be disclosed</p>
                            <p>Reapper students are requested to pay reappear examination fees</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default MainSection