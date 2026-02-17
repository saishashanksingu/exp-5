import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

function delayedImport(factory, ms = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      factory().then(resolve, reject);
    }, ms);
  });
}

const Profile = lazy(() => delayedImport(() => import("./components/components.jsx").then(m => ({ default: m.Profile })), 2000));
const DashBoard = lazy(() => delayedImport(() => import("./components/components.jsx").then(m => ({ default: m.DashBoard })), 2000));
const ContactUS = lazy(() => delayedImport(() => import("./components/components.jsx").then(m => ({ default: m.Contact })), 2000));

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