import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CseSem1() {

    const nav = useNavigate()

    const onQuantEvent = ()=>{
        nav('/contentPg/quantum-physics')
    }
    return (
        <>
            <div className="listSec">
                <div onClick={onQuantEvent} className="card">
                    <p className='cardName'>Quantum Phy</p>
                    <p className='cardYear'>CSE Sem 1 <span>2022</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Calculus</p>
                    <p className='cardYear'>CSE Sem 1 <span>2022</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Programming Funda.</p>
                    <p className='cardYear'>CSE Sem 1 <span>2022</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Professional Comm</p>
                    <p className='cardYear'>CSE Sem 1 <span>2022</span></p>
                </div>
            </div>
        </>
    );
}

export default CseSem1