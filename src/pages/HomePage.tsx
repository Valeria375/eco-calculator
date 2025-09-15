import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      {/* Герой секция с большим заголовком и иллюстрацией */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Давай спасать планету вместе!</h1>
          <p>Узнай, как твои привычки влияют на природу и стань супергероем Земли!</p>
          <div className={styles.heroImage}>
            <div className={styles.earth}></div>
            <div className={styles.superhero}></div>
          </div>
        </div>
      </div>

      {/* Что такое углеродный след - просто и понятно */}
      <div className={styles.section}>
        <h2>Что такое углеродный след?</h2>
        <div className={styles.carbonExplanation}>
          <div className={styles.explanationCard}>
            <div className={styles.icon}>👣</div>
            <h3>Это как следы на песке</h3>
            <p>Только вместо песка - наша планета! Каждый раз, когда мы пользуемся электричеством, едем на машине или покупаем новую игрушку, мы оставляем "след" из углекислого газа.</p>
          </div>
          <div className={styles.explanationCard}>
            <div className={styles.icon}>🌡️</div>
            <h3>Слишком много следов - планете жарко</h3>
            <p>Когда следов становится слишком много, Земле становится жарко, как в парнике! Ледники тают, а животные теряют свои дома.</p>
          </div>
          <div className={styles.explanationCard}>
            <div className={styles.icon}>🦸</div>
            <h3>Ты можешь стать супергероем!</h3>
            <p>Узнай свой углеродный след и получи суперсилы для защиты планеты! Маленькие шаги могут привести к большим изменениям.</p>
          </div>
        </div>
      </div>

      {/* Откуда берется углеродный след - с картинками */}
      <div className={`${styles.section} ${styles.darkSection}`}>
        <h2>Откуда берутся углеродные следы?</h2>
        <div className={styles.sourcesGrid}>
          <div className={styles.sourceItem}>
            <div className={styles.sourceIcon}>🚗</div>
            <h4>Машинки-дымлянки</h4>
            <p>Машины выпускают дым, который нагревает планету</p>
          </div>
          <div className={styles.sourceItem}>
            <div className={styles.sourceIcon}>💡</div>
            <h4>Лампочки-обжорки</h4>
            <p>Электричество часто делают из угля и газа</p>
          </div>
          <div className={styles.sourceItem}>
            <div className={styles.sourceIcon}>🏭</div>
            <h4>Заводы-пускатели</h4>
            <p>Заводы делают игрушки, но тоже оставляют следы</p>
          </div>
          <div className={styles.sourceItem}>
            <div className={styles.sourceIcon}>🍔</div>
            <h4>Еда-следооставитель</h4>
            <p>Некоторые продукты оставляют больше следов</p>
          </div>
        </div>
      </div>

      {/* Как помочь планете - интерактивные элементы */}
      <div className={styles.section}>
        <h2>Стань защитником планеты!</h2>
        <div className={styles.actionsGrid}>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>🚲</div>
            <h4>Катайся на велосипеде</h4>
            <p>Вместо машины - велосипед или самокат!</p>
            <button className={styles.smallBtn}>+10 очков</button>
          </div>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>💡</div>
            <h4>Выключай свет</h4>
            <p>Когда уходишь из комнаты - гаси свет!</p>
            <button className={styles.smallBtn}>+5 очков</button>
          </div>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>♻️</div>
            <h4>Сортируй мусор</h4>
            <p>Бумага, пластик и стекло - в разные контейнеры!</p>
            <button className={styles.smallBtn}>+15 очков</button>
          </div>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>🌳</div>
            <h4>Сажай растения</h4>
            <p>Растения очищают воздух и дают кислород!</p>
            <button className={styles.smallBtn}>+20 очков</button>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.ctaContent}>
          <h2>Готов стать супергероем?</h2>
          <p>Узнай свой углеродный след и начни спасать планету прямо сейчас!</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Рассчитать след</button>
            <button className={styles.secondaryBtn}>Узнать больше</button>
          </div>
        </div>
        <div className={styles.ctaImage}>
          <div className={styles.heroAnimals}></div>
        </div>
      </div>

      {/* Интерактивная игра */}
      <div className={styles.section}>
        <h2>Игра: Собери эко-команду!</h2>
        <div className={styles.gameContainer}>
          <div className={styles.ecoCard}>
            <div className={styles.ecoIcon}>🌞</div>
            <span>Солнечный воин</span>
          </div>
          <div className={styles.ecoCard}>
            <div className={styles.ecoIcon}>💧</div>
            <span>Водный защитник</span>
          </div>
          <div className={styles.ecoCard}>
            <div className={styles.ecoIcon}>🌳</div>
            <span>Лесной хранитель</span>
          </div>
          <div className={styles.ecoCard}>
            <div className={styles.ecoIcon}>♻️</div>
            <span>Мастер переработки</span>
          </div>
          <div className={styles.ecoCard}>
            <div className={styles.ecoIcon}>🚲</div>
            <span>Скоростной эколог</span>
          </div>
        </div>
        <p className={styles.gameText}>Выполняй задания и собирай всю команду эко-героев!</p>
      </div>
    </div>
  );
};

export default HomePage;