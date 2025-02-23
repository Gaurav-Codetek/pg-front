import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CseSem2() {

    const nav = useNavigate()

    const onQuantEvent = ()=>{
        nav('/contentPg/quantum-physics')
    }
    return (
        <>
            <div className="listSec">
                <div onClick={onQuantEvent} className="card">
                    <p className='cardName'>OOP</p>
                    <p className='cardYear'>Sem 2<span>CSE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>BEEE</p>
                    <p className='cardYear'>Sem 2<span>CSE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Diff. Eq. & Tr.</p>
                    <p className='cardYear'>Sem 2<span>CSE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Applied Chem</p>
                    <p className='cardYear'>Sem 2<span>CSE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Eng. Graphics</p>
                    <p className='cardYear'>Sem 2<span>CSE</span></p>
                </div>
            </div>
        </>
    );
}

export default CseSem2