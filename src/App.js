
import React, { useState } from 'react'
// import axios from 'axios'

import Popup from './Component/Popup'
import Pyq from './Component/Pyq'

// import PopupCmd from './Component/PopupCmd';
import "./App.css"
import "./AppMob.css"
import './Component/Navbar.css'
import MainSection from './Component/MainSection'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentWindow from './Component/Window/ContentWindow'
import CalWindow from './Component/Window/CalWindow'
import PfWindow from './Component/Window/PfWindow'
import QuantWindow from './Component/Window/QuantWindow'
import BeeeWindow from './Component/Window/BeeeWindow'
import OAuth1 from './Component/OAuth1'
import DDWindow from './Component/Window/DDWindow'
import PcWindow from './Component/Window/PcWindow'
import DiffEqWindow from './Component/Window/DiffEqWindow'
import EmailVer from './Component/EmailVer'
import PassChange from './Component/PassChange'
import Comms19 from './Component/Subjects/Sem4/Comms19'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainSection/>}/>
          <Route path='/home' element={<Popup />} />
          <Route path='/auth1' element={<OAuth1/>}/>
          <Route path='/pyq' element={<Pyq />} />
          <Route path='/contentPg/AppliedChem' element={<ContentWindow/>}/>
          <Route path='/contentPg/beee' element={<BeeeWindow/>}/>
          <Route path='/contentPg/programming-fundamentals' element={<PfWindow/>}/>
          <Route path='/contentPg/calculus' element={<CalWindow/>}/>
          <Route path='/contentPg/quantum-physics' element={<QuantWindow/>} />
          <Route path='/contentPg/professional-communication' element={<PcWindow/>}/>
          <Route path='/contentPg/digital-design' element={<DDWindow/>}/>
          <Route path="/contentPg/differential-equation" element={<DiffEqWindow/>}/>
          <Route path='/email-verification' element={<EmailVer/>}/>
          <Route path='/contentPg/communication-eng' element={<Comms19/>}/>
          <Route path='/pass-change' element={<PassChange/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
