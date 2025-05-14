import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export default function NavBar({ links = [], onLogout }) {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.linkList}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <button onClick={onLogout} className={classes.logoutButton}>
            התנתק
          </button>
        </li>
      </ul>
    </nav>
  );
}
