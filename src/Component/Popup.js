// import React, { useState } from 'react';
// import './Popup.css';
// import Navbar from './Navbar'
// import axios from 'axios'
// import Typewriter from 'typewriter-effect'
// // import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { RiLoader3Line } from 'react-icons/ri'
// // import Pyq from './Pyq';
// // import Navbar from '../components/Navbar';
// // import Navbar from '../components/Navbar';

// function Popup() {

//   const Nav = useNavigate();

//   const [loader, setLoader] = useState()
//   const [rollNo, setRoll] = useState('')
//   const [Name1, setName1] = useState('')

//   const popupDisplay = document.querySelector(".popup")
//   // console.log(process.env)
//   async function onSubmit(e) {
//     e.preventDefault()
//     setLoader(
//       <div className="loader">
//         <div className="loadIcon">
//           <RiLoader3Line className='icon' size="75" />
//         </div>
//       </div>
//     )

//     try {
//       const roll = rollNo.toUpperCase()
//       const response = await fetch(`http://localhost:4400/Oauth`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ roll, Name1 }),
//         credentials: 'include',
//       });

//       if (response.ok) {
//         const data = await response.json();
//         if (data.auth === "exist") {
//           Nav(
//             "/auth1", { state: { username: data.username, branch: data.branch } }
//           );

//           // The rest of your code here
//         } else if (data.auth === "notexist") {
//           setLoader()
//           alert("Password is incorrect (Password is your DOB)");
//           Nav.push("/home");
//         }
//         else if (data.auth === "notexist2") {
//           setLoader()
//           alert("For now! this platform is only For 1st year UIET students. We will later update it for other students as well!")
//         }
//       } else {
//         setLoader()
//         throw new Error(`Request failed with status ${response.status}`);
//       }
//     } catch (e) {
//       console.log("fetch ERROR");
//     }


//   }

//   return (

//     <>
//       {loader}
//       <div className="container">

//         <div className="form">
//           <h3 className='error'>Roll No. or Password may be wrong!</h3>
//           <form onSubmit={onSubmit} method="post">
//             {/* <div className="label">
//               <label htmlFor="UserName">Username</label>
//             </div>
//             <div className="inputFlex">
//               <input type="text" id='Name' onChange={(e) => { setUsername(e.target.value) }} placeholder='Full Name' required />
//             </div> */}
//             {/* <br /> */}
//             <div className="label">
//               <label htmlFor="roll">Roll No</label>
//             </div>
//             <div className="inputFlex">
//               <input type="text" id='rollNo' onChange={(e) => { setRoll(e.target.value) }} placeholder='UIET Roll NO' required />
//             </div>
//             <div className="label">
//               <label htmlFor="Password">Password</label>
//             </div>
//             <div className="inputFlex">
//               <input type="password" id='password' onChange={(e) => { setName1(e.target.value) }} placeholder='Enter the Password' required />
//             </div>
//             {/* <br /> */}
//             <br />
//             <div className="subBtn">
//               <input type="submit" value="LOG IN" />
//             </div>
//             <br />
//             <br />
//             <hr />
//             <br />
//             <br />
//             <div className="footer">
//               CodersTek Community
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* <div className="App ">
//       <div className="container">
//                 <div className="form">
//                     <form onSubmit={onSubmit} method="POST">
//                         <div className="label">
//                             <label htmlFor="roll">Roll No</label>
//                         </div>
//                         <div className="inputFlex">
//                             <input type="text" id='rollNo' onChange={(e)=> {setRoll(e.target.value)}} placeholder='UExxxxxx' required />
//                         </div>
//                         <div className="label">
//                             <label htmlFor="Password">Password</label>
//                         </div>
//                         <div className="inputFlex">
//                             <input type="password" id='password' onChange={(e)=> {setName1(e.target.value)}} placeholder='DDMMYYYY' required />
//                         </div>
//                         <br />
//                         <br />
//                         <div className="subBtn">
//                             <input type="submit" value="LOG IN" />
//                         </div>
//                         <br />
//                         <br />
//                         <hr />
//                         <br />
//                         <br />
//                         <div className="footer">
//                             CodersTek Community
//                         </div>
//                     </form>
//                 </div>
//             </div>
//       </div> */}
//     </>
//   );

// }

// export default Popup

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function OAuth1() {
    const nav = useNavigate()
    const [roll, setRoll] = useState("");
    const [rollName, setRollName] = useState("")
    const [loader, setLoader] = useState(false)


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
            // setData(data);
            if (res.status === 200) {
                console.log("status code match")
                // setLoader(false)
                nav('/');
            }
        }
        catch (err) {
            setLoader(false)
            console.log(err)
        }
    }

    const onCont = async (e) => {

        let a = document.querySelector(".loader")
        a.style.width = "96%"

        e.preventDefault()
        try {

            const res = await fetch(`${process.env.REACT_APP_BASE_URL}Oauth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roll }),
                credentials: "include"
            })
            if (res.ok) {
                const data = await res.json();
                // var username = data.username;


                if (data.auth === "exist-with-no-passChange") {
                    // setLoader(true)
                    nav('/email-verification', { state: { username: data.username, rollNo: roll, email: data.Email } })
                }

                else if (data.auth === "exist-with-passChange") {
                    // setLoader(true)
                    nav('/auth1', { state: { username: data.username, rollNo: roll, email: data.Email } })
                }
                else if(data.auth === "not-exist"){
                    alert("Roll Number doesn't exist")
                    a.style.width = "0%"
                }
            }
            else {
                console.log("response not ok")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        onLoad()
        setLoader(true)
    }, [])

    return (
        <>
        {loader ? (<Loader/>):(<></>)}
        <div className="loader"></div>
            <header className='_Project-Name'>
                PageRoll
            </header>
            <main>
                <h1 className='welBack'>Welcome back</h1>
                <div className="emailInp">
                    <input onChange={(text) => setRoll(text.target.value)} type="text" id='Email' required />
                    <br />
                    <label className='emailLabel' htmlFor="Email">Roll number (UIET)</label>
                </div>
                <div className="contBtn">
                    <button onClick={onCont}>Continue</button>

                </div>
                <p className='registerLine'>Use your UIET <span className='register'>Roll Number</span></p>
                <div className="orSec">
                    <div></div>
                    <p>by CodersTek</p>
                    <div></div>
                </div>
            </main>
        </>
    );
}

export default OAuth1