import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthPage.module.css';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации/регистрации
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>{isLogin ? 'Вход в аккаунт' : 'Регистрация'}</h2>
        
        <form onSubmit={handleSubmit} className={styles.authForm}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          {!isLogin && (
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Подтвердите пароль</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
        
        <div className={styles.authSwitch}>
          <p>
            {isLogin ? 'Еще нет аккаунта? ' : 'Уже есть аккаунт? '}
            <button 
              type="button" 
              className={styles.switchBtn}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
        
        <div className={styles.authBenefits}>
          <h4>Преимущества аккаунта:</h4>
          <ul>
            <li>📊 Сохранение истории расчетов</li>
            <li>📈 Отслеживание прогресса</li>
            <li>🎯 Персональные рекомендации</li>
            <li>🏆 Достижения и награды</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;