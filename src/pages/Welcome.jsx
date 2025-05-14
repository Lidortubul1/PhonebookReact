import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Welcome.module.css';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className={classes.welcome}>
      <h1>ברוכים הבאים</h1>
      <p>אנא התחברו כדי להמשיך</p>
      <button onClick={() => navigate('/login')} className={classes.loginButton}>
        התחברות
      </button>
    </div>
  );
}
