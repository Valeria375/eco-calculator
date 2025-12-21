import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.earth}>🌍</div>
          <h3>Eco-Calculator</h3>
          <p>Персональный Ассистент по Углеродному Следу</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Наши друзья планеты:</h4>
          <div className={styles.ecoIcons}>
            <span className={styles.ecoIcon}>🌱</span>
            <span className={styles.ecoIcon}>🌿</span>
            <span className={styles.ecoIcon}>🍃</span>
            <span className={styles.ecoIcon}>🌳</span>
            <span className={styles.ecoIcon}>🌲</span>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Присоединяйся к команде защитников природы!</h4>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-vk"></i>
            </a>
            <a href="https://t.me/Fyrai24" className={styles.socialLink}>
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.competitionInfo}>
          <div className={styles.trophy}>🏆</div>
          <p>Этот проект создан для школьного конкурса экологических проектов "Спаси планету - начни с себя!"</p>
        </div>
        
        <div className={styles.copyright}>
          <p>© 2025 Сделано с 💚 заботой о планете</p>
          <p>Учеником лицея №67 г.Иваново Калинкиным Александром для будущего Земли!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;