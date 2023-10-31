import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "../src/Component/LoginForm/index"
import Dashboard from "../src/Component/Dashboard/index"

const App = () => {
  return (
    <div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <PrivateRoute
              path="/dashboard"
              element={<Dashboard />}
              authenticated={isAuthenticated}
            /> */}
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App
