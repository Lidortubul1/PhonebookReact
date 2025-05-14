import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

export default function Home({ links }) {
  return (
    <div className={classes.page}>

      <h2>Home</h2>
      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
          impedit.
        </p>
        {/* Link replaces a tag <a href="/about">About</a> and has to be styled by a */}
        <p>
          Go to
          <Link to="/about">About</Link>
        </p>
      </main>
     
    </div>
  );
}
