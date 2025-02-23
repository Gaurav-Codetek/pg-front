import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function BTSem1() {

    const nav = useNavigate();

    const onPCEvent = ()=>{
        nav('/contentPg/professional-communication')
    }

    return (
        <>
            <div className="listSec">
                <div className="card">
                    <p className='cardName'>Applied Phy</p>
                    <p className='cardYear'>BT Sem 1 <span>2022</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>BEEE</p>
                    <p className='cardYear'>BT Sem 1 <span>2022</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Calculus</p>
                    <p className='cardYear'>BT Sem 1 <span>2022</span></p>
                </div>
                <div onClick={onPCEvent} className="card">
                    <p className='cardName'>Professional Comm</p>
                    <p className='cardYear'>BT Sem 1 <span>2022</span></p>
                </div>
            </div>
        </>
    );
}

export default BTSem1