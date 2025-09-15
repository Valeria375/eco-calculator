import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarBrand}>
          <i className="fas fa-leaf"></i>
          Eco-Calculator
        </Link>
        
        <div className={styles.navbarNav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/calculator" 
            className={`${styles.navLink} ${location.pathname === '/calculator' ? styles.active : ''}`}
          >
            Калькулятор
          </Link>
          <Link 
            to="/tips" 
            className={`${styles.navLink} ${location.pathname === '/tips' ? styles.active : ''}`}
          >
            Советы
          </Link>
          <Link 
            to="/auth" 
            className={`${styles.navLink} ${location.pathname === '/auth' ? styles.active : ''}`}
          >
            Войти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;