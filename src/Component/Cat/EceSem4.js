import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EceSem4() {
    const nav = useNavigate()
    const onPress = ()=>{
        nav('/contentPg/communication-eng')
    }

    return (
        <>
            <div className="listSec">
                <div className="card" onClick={onPress}>
                    <p className='cardName'>Communication Eng.</p>
                    <p className='cardYear'>Sem 4<span>ECE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>Diff. Eq & Tr.</p>
                    <p className='cardYear'>Sem 2<span>ECE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>PFPS</p>
                    <p className='cardYear'>Sem 1<span>ECE</span></p>
                </div>
                <div className="card">
                    <p className='cardName'>BEE</p>
                    <p className='cardYear'>Sem 1<span>ECE</span></p>
                </div>
            </div>
        </>
    );
}

export default EceSem4