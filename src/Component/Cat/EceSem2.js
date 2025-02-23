import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EceSem2() {

    const nav = useNavigate();

    const DDEvent = async() => {
        nav('/contentPg/digital-design')
    }

    const DiffEqEvent = () => {
        nav('/contentPg/differential-equation')

    }

    const ProfComEvent = () => {
        nav('/contentPg/professional-communication')
    }

    const BeeeEvent = () => {
        nav('/contentPg/beee')
    }

    const EngGraEvent = () => {
        // setDisplay(<EngGra22 />)
        alert('No previous papers')
    }

    return (
        <>
            <div className="listSec">
                <div onClick={DDEvent} className="card">
                    <p className='cardName'>Digital Design</p>
                    <p className='cardYear'>Sem 1<span>ECE</span></p>
                </div>
                <div onClick={ProfComEvent} className="card">
                    <p className='cardName'>Professional Comm</p>
                    <p className='cardYear'>Sem 1<span>ECE</span></p>
                </div>
                <div onClick={DiffEqEvent} className="card">
                    <p className='cardName'>Diff. Eq & Tr.</p>
                    <p className='cardYear'>Sem 1<span>ECE</span></p>
                </div>
                <div onClick={EngGraEvent} className="card">
                    <p className='cardName'>Applied Physics</p>
                    <p className='cardYear'>Sem 1 <span>ECE</span></p>
                </div>
            </div>
        </>
    );
}

export default EceSem2