import React from 'react'
import AngelOne from './pages/AngelOne'
import FivePaisa from './pages/FivePaisa'
import Campaign from './pages/Campaign'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CampaignData from './pages/CampaignData'
import Contact from './pages/Contact'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TideBusiness from './pages/TideBusiness'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/angelone' element={<AngelOne/>}/>
      <Route path='/campaign' element={<Campaign/>}/>
      <Route path='/fivepaisa' element={<FivePaisa/>}/>
      <Route path='/tidebusiness' element={<TideBusiness/>}/>
      <Route path="/campaign/angelone" element={<CampaignData campaign="Angel One" />} />
      <Route path="/campaign/fivepaisa" element={<CampaignData campaign="Five Paisa" />} />
      <Route path="/campaign/campaign" element={<CampaignData campaign="Campaign" />} />
      <Route path="/campaign/tide" element={<CampaignData campaign="Tide Business" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;