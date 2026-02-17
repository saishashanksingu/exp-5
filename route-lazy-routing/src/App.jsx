import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';


const Profile = lazy(() => import("./components/components.jsx").then(m => ({ default: m.Profile })));
const DashBoard = lazy(() => import("./components/components.jsx").then(m => ({ default: m.DashBoard })));
const ContactUS = lazy(() => import("./components/components.jsx").then(m => ({ default: m.Contact })));

function App(){
  return(
    <BrowserRouter>
      <nav>
        <Link to="/">Profile</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Suspense fallback={<div><h1>Loading....</h1></div>}>
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/contact" element={<ContactUS/>}/>
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App;