import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaCaretUp } from "react-icons/fa";
import BT1 from './ArrayFile/sem1/btSyllabus.js';
import MECH1 from './ArrayFile/sem1/mechsyllabus.js';
import ECE1 from './ArrayFile/sem1/ecesyllbus.js';
import CSE1 from './ArrayFile/sem1/csesyllabus.js';
import EEE1 from './ArrayFile/sem1/eeeSyllabus.js';
import IT1 from './ArrayFile/sem1/itsyllabus.js';
import ECE2 from './ArrayFile/sem2/ECE2syllabus.js';
import CSE2 from './ArrayFile/sem2/CSE2syllabus.js';
import IT2 from './ArrayFile/sem2/IT2syllabus.js';
import ECE4 from './ArrayFile/sem4/EC4syllabus.js';
import SyllabusLayout from './SyllabusLayout.js'
import EEE2 from './ArrayFile/sem2/EEE2syllabus.js';
import CSE4 from './ArrayFile/sem4/CSE4syllabus.js';
import IT4 from './ArrayFile/sem4/IT4syllabus.js';
export default function Syllabus() {
    const [DropSem, setDropSem] = useState(false);
    const [dropBranch, setDropBranch] = useState(false);
    const [branch, setBranch] = useState("Select Branch")
    const [sem, setSem] = useState("Select Sem")
    const [Syllabus, setSyllabus] = useState('')
    const onSelect = () => {
        if (branch !== 'Select branch' && sem !== 'Select sem') {
            let selectedSyllabus;
    
            switch (branch + sem) {
                case 'ITSEM-1':
                    selectedSyllabus = IT1;
                    break;
                case 'ECESEM-1':
                    selectedSyllabus = ECE1;
                    break;
                case 'BTSEM-1':
                    selectedSyllabus = BT1;
                    break;
                case 'CSESEM-1':
                    selectedSyllabus = CSE1;
                    break;
                case 'EEESEM-1':
                    selectedSyllabus = EEE1;
                    break;
                case 'MECHSEM-1':
                    selectedSyllabus = MECH1;
                    break;
                case 'ECESEM-2' :
                    selectedSyllabus = ECE2;
                    break;   
                case 'CSESEM-2' :
                    selectedSyllabus = CSE2;
                    break;   
                case 'ITSEM-2' :
                    selectedSyllabus = IT2;
                    break;   
                case 'EEESEM-2' :
                    selectedSyllabus = EEE2;
                    break;   
                case 'ECESEM-4':
                    selectedSyllabus = ECE4;
                    break;
                case 'CSESEM-4':
                    selectedSyllabus = CSE4;
                    break;
                case 'ITSEM-4':
                    selectedSyllabus = IT4;
                    break;
                   
                default:
                  
                    return;
            }
    
            setSyllabus(<SyllabusLayout Syllabus={selectedSyllabus} />);
        } else {
            alert("Please select both branch and semester.");
        }
    };
    

    return (
        <>
            <div className="listArea">
                <p><b>Syllabus Section</b> <span className='partySymb'><LuPartyPopper color='rgb(118, 23, 187)' /></span>
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
                        {sem}<span>{DropSem ? (<FaCaretUp color='rgb(118, 23, 187)' />) : (<FaCaretDown color='rgb(118, 23, 187)' />)}</span>
                        {DropSem ? (
                            <div className="semList">
                                <li onClick={() => setSem("SEM-1")}>Sem-1</li>
                                <li onClick={() => setSem("SEM-2")}>Sem-2</li>
                                <li onClick={() => setSem("SEM-3")}>Sem-3</li>
                                <li onClick={() => setSem("SEM-4")}>Sem-4</li>
                                <li onClick={() => setSem("SEM-5")}>Sem-5</li>
                            </div>
                        ) : (<></>)}
                    </div>
                    <div onClick={onSelect} className="goBtn">
                        GO
                    </div>
                </p>
                <div className='listSec'>
                    {Syllabus ? (
                        Syllabus
                    ) : (
                        <div className="listSec">
                            <div className="card">
                                <p className='cardName'>Please select Branch and Sem </p>
                                <p className='cardYear'>For Syllabus<span>Pageroll</span></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
