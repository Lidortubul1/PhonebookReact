import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Group from "../pages/group";
import Welcome from "../pages/Welcome";
import Contact from "../pages/Contact";
import Layout from "./Layout";

import classes from "./app.module.css";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Group", path: "/group" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Router>
      <section className={classes.app}>
        <Routes>
          {/* אם המשתמש לא מחובר */}
          {!user ? (
            <>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
          
              <Route element={<Layout links={links} onLogout={handleLogout} user={user} />}>
                
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/group" element={<Group />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          )}
        </Routes>
      </section>
    </Router>
  );
}
