import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Components/login"
import Dashboard from "./Components/Dashboard"
import Box from './Components/box';
import Contact from './Components/Contact'
import Settings from './Components/Settings'
import Charts from './Components/Charts'
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
            <Route path="/back" element={<Dashboard />} />
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
