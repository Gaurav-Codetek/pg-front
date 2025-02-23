import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ITSem1 from './Cat/ITSem1'
// import EceSem1years from './Years/EceSem1years';
// import { useLocation } from 'react-router-dom';
// import AppChe22 from './Subjects/AppChe22';
// import Cal22 from './Subjects/Cal22';
// import ProgFun22 from './Subjects/ProgFun22';
// import Beee22 from './Subjects/Beee22';
// import EngGra22 from './Subjects/EngGra22';
import EceSem1 from './Cat/EceSem1';
// import MainSection from './MainSection';
import BTSem1 from './Cat/BTSem1';
import EeeSem1 from './Cat/EeeSem1';
import MechSem1 from './Cat/MechSem1';
import CseSem1 from './Cat/CseSem1'

function Pyq() {

    const [display, setDisplay] = useState(<EceSem1 />)
    const [data, setData] = useState('')
    const Nav = useNavigate();
    const callAboutPage = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()

            setData(data)
            if (!res.status === 200) {
                console.log("Error On status Code")
                Nav("/home");
            }
        } catch (err) {
            console.log("Auth Error at pySec");
            Nav("/home");
        }
    }

    const check = async()=>{
        const timeInterval = 14 * 60000;
        setInterval( async()=>{
            const Checker = await fetch(`${process.env.REACT_APP_BASE_URL}check`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const res = await Checker.json();
            console.log(res.data.msg)
        }, timeInterval)
    }



    const location = useLocation()
    useEffect(() => {
        callAboutPage();
        check();

    },[])


    const [sem1, setSem] = useState('')
    const [branch1, setBranch] = useState('ECE')

    const onClick = async () => {
        var e = document.querySelector('#sem')
        var f = document.querySelector('#branch')
        const sem = e.value;
        const branch = f.value;



        if (branch === "IT" && sem === "SEM-1") {
            setDisplay(<ITSem1 />)
        }

        if (branch === "ECE" && sem === "SEM-1") {
            setDisplay(<EceSem1 />)
        }

        if (branch === "BT" && sem === "SEM-1") {
            setDisplay(<BTSem1 />)
        }

        if (branch === "CSE" && sem === "SEM-1") {
            setDisplay(<CseSem1 />)
        }

        if (branch === "EEE" && sem === "SEM-1") {
            setDisplay(<EeeSem1 />)
        }

        if (branch === "MECH" && sem === "SEM-1") {
            setDisplay(<MechSem1 />)
        }
    }





    return (
        <>
            <div className="pyqBody">
                <div className="pyqTopbar">
                    <div className="TbarCont">
                        <div className="subject">SUBJECTS</div>
                        <div className="MinMaj">
                            <button className='minor'>Minor</button>
                            <button className='major'>Major</button>
                        </div>
                        <div className="choice">
                            <select name="branch" id="branch">
                                {/* <option value={data.branch}>{data.branch}</option> */}
                                <option className='ECE' value="ECE" >ECE</option>
                                <option className='IT' value="IT" >IT</option>
                                <option className='CSE' value="CSE" >CSE</option>
                                <option className='EEE' value="EEE" >EEE</option>
                                <option className='BT' value="BT" >BT</option>
                                <option className='MECH' value="MECH">MECH</option>
                            </select>
                            <select name="semester" id="sem">
                                <option value="SEM-1" >SEM-1</option>
                                <option value="SEM-2" >SEM-2</option>
                                <option value="SEM-3" >SEM-3</option>
                                <option value="SEM-4" >SEM-4</option>
                                <option value="SEM-5" >SEM-5</option>
                                <option value="SEM-6" >SEM-6</option>
                                <option value="SEM-7" >SEM-7</option>
                                <option value="SEM-8" >SEM-8</option>
                            </select>
                            <button onClick={onClick}>GO</button>
                        </div>
                        <div className="year">YEAR</div>
                    </div>
                </div>
                <hr />
                {display}
                
            </div>
        </>
    );
}

export default Pyq