import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Component/login"

import Box from './Component/box';
import Contact from './Component/Contact'
import Settings from './Component/Settings'
import Charts from './Component/Charts'
import Viewcard from "./Component/Viewcard"
const App = () => {
  return (
    <div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            {/* <Route path="/login" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/box" element={<Box />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/back" element={<Box />} />

            <Route path="/viewcard/:viewcardId" element={<Viewcard/>} />
            {/* <PrivateRoute
              path="/dashboard"
              element={<Dashboard />}
              authenticated={isAuthenticated}
            /> */}
          </Routes>
        </div>
      </Router>
    </div>
    // <div>
    //   <Router>
    //     <div>
    //       <Routes>
    //         <Route path="/" element={<LoginForm />} />
    //         <Route path="/login" element={<Dashboard />} />
    //         <Route path="/dashboard" element={<Box />} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </div>
  )
}
export default App
