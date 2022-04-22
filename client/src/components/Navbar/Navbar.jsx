import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <h3>SOCCER APP</h3>
      <Link className={s.home} to="/">
        <p>Home</p>
      </Link>
      <Link className={s.home} to="/create">
        <p>Create</p>
      </Link>
    </div>
  );
}
