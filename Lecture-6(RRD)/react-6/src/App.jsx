import React, { Suspense } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home'
// import Dashboard from './components/Dashboard'
// import About from './components/About'
const Dashboard = React.lazy(()=>import("./components/Dashboard"))  //  lazy loading
const About = React.lazy(()=>import("./components/About"))  //  lazy loading

function App() {
  let navigate = useNavigate();  // useNavigate is a hook which returns a function that lets you navigate programmatically, that means you can do multiple tasks while navigating
  function handlebtn(){
    navigate("/");
  }
  return(
    <div>
      {/* <a href="/">Home</a><br /> */}
      <Link to="/">Home</Link>   {/* when we use Link it prevents the page from reloading and it's only use to do single task that is to change the URL */}
      <button onClick={handlebtn}>Home</button>
      {/* <a href="/dashboard">Dashboard</a><br /> */}
      <Link to="/dashboard"></Link>
      {/* <a href="/about">About</a> */}
      <Link to="/about">About</Link>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Suspense fallback = "loading dashboard..."><Dashboard/> </Suspense>} path="/dashboard" />
        {/* <Route element={<About />} path="/about" /> */}
        <Route element={<Suspense fallback = "loading about..."><About/> </Suspense>} path="/dashboard" />

      </Routes>
    </div>
  )
}

export default App;
