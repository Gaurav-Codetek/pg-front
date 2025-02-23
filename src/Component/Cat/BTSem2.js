import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function BTSem2() {

    const nav = useNavigate();

    const onPCEvent = ()=>{
        nav('/contentPg/professional-communication')
    }

    return (
        <>
            <div className="listSec">
                <div className="card">
                    <p className='cardName'>Applied Chem</p>
                    <p className='cardYear'>Sem 2<span>BioTech</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>differential Eq & Tr.</p>
                    <p className='cardYear'>Sem 2<span>BioTech</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Prog. Fundamentals</p>
                    <p className='cardYear'>Sem 2<span>BioTech</span></p>
                </div>
                <div onClick={onPCEvent} className="card">
                    <p className='cardName'>Eng. Graphics</p>
                    <p className='cardYear'>Sem 2<span>BioTech</span></p>
                </div>
                <div onClick={onPCEvent} className="card">
                    <p className='cardName'>Fundamentals of BioEngineering</p>
                    <p className='cardYear'>Sem 2<span>BioTech</span></p>
                </div>
            </div>
        </>
    );
}

export default BTSem2