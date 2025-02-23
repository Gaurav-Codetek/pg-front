import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EceSem1() {

    const nav = useNavigate();

    const AppCheEvent = async() => {
        await nav('/contentPg/AppliedChem')
    }

    const CalEvent = () => {
        nav('/contentPg/calculus')

    }

    const ProgFunEvent = () => {
        nav('/contentPg/programming-fundamentals')
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
                <div onClick={AppCheEvent} className="card">
                    <p className='cardName'>Applied Chem</p>
                    <p className='cardYear'>ECE Sem 1 <span>2022</span></p>
                </div>
                <div onClick={BeeeEvent} className="card">
                    <p className='cardName'>BEEE</p>
                    <p className='cardYear'>ECE Sem 1 <span>2022</span></p>
                </div>
                <div onClick={CalEvent} className="card">
                    <p className='cardName'>Calculus</p>
                    <p className='cardYear'>ECE Sem 1 <span>2022</span></p>
                </div>
                <div onClick={ProgFunEvent} className="card">
                    <p className='cardName'>Programming Funda</p>
                    <p className='cardYear'>ECE Sem 1 <span>2022</span></p>
                </div>
                <div onClick={EngGraEvent} className="card">
                    <p className='cardName'>Eng. Graphics</p>
                    <p className='cardYear'>ECE Sem 1 <span>2022</span></p>
                </div>
            </div>
        </>
    );
}

export default EceSem1