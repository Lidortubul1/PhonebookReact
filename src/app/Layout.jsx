import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Outlet, Navigate } from "react-router-dom";
import classes from "./Layout.module.css";

export default function Layout({ links, onLogout, user }) {
  // 🛡️ הגנה: אם אין משתמש – הפניה ל-login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={classes.layout}>
      <Header />
      <NavBar links={links} onLogout={onLogout} />
      <main className={classes.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
