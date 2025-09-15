import React from 'react';
import styles from './TipsPage.module.css';

const TipsPage: React.FC = () => {
  return (
    <div className={styles.tipsPage}>
      {/* Герой секция */}
      <div className={styles.hero}>
        <h1>Стань супергероем планеты! 🌍</h1>
        <p>Узнай простые лайфхаки, которые помогут спасти Землю от углеродных следов!</p>
        <div className={styles.heroImage}>
          <div className={styles.planet}></div>
          <div className={styles.superhero}></div>
        </div>
      </div>

      {/* Раздел с суперсилами */}
      <div className={styles.section}>
        <h2>Твои суперсилы против углеродного следа! 💪</h2>
        <div className={styles.superPowers}>
          <div className={styles.powerCard}>
            <div className={styles.powerIcon}>🚲</div>
            <h3>Супер-скорость</h3>
            <p>Велосипед вместо машины = чистый воздух!</p>
            <span className={styles.powerScore}>+10 эко-очков</span>
          </div>
          <div className={styles.powerCard}>
            <div className={styles.powerIcon}>💡</div>
            <h3>Луч энергии</h3>
            <p>Выключи свет - сэкономь энергию!</p>
            <span className={styles.powerScore}>+5 эко-очков</span>
          </div>
          <div className={styles.powerCard}>
            <div className={styles.powerIcon}>♻️</div>
            <h3>Сила переработки</h3>
            <p>Сортируй мусор - дай вещам вторую жизнь!</p>
            <span className={styles.powerScore}>+15 эко-очков</span>
          </div>
        </div>
      </div>

      {/* Лайфхаки для каждого дня */}
      <div className={`${styles.section} ${styles.darkSection}`}>
        <h2>Эко-лайфхаки на каждый день! 🌟</h2>
        <div className={styles.lifehacksGrid}>
          <div className={styles.lifehackCard}>
            <div className={styles.lifehackImage} style={{background: '#FFD700'}}>
              <div className={styles.lifehackIcon}>🚰</div>
            </div>
            <div className={styles.lifehackContent}>
              <h3>Закрывай воду</h3>
              <p>Когда чистишь зубы, выключай кран! Экономия воды = защита рек и озер!</p>
              <div className={styles.ecoBadge}>💧 Экономия воды</div>
            </div>
          </div>

          <div className={styles.lifehackCard}>
            <div className={styles.lifehackImage} style={{background: '#4CAF50'}}>
              <div className={styles.lifehackIcon}>🛍️</div>
            </div>
            <div className={styles.lifehackContent}>
              <h3>Своя сумка</h3>
              <p>Бери многоразовую сумку в магазин. Пластиковые пакеты вредят океану!</p>
              <div className={styles.ecoBadge}>🐢 Защита океана</div>
            </div>
          </div>

          <div className={styles.lifehackCard}>
            <div className={styles.lifehackImage} style={{background: '#2196F3'}}>
              <div className={styles.lifehackIcon}>📱</div>
            </div>
            <div className={styles.lifehackContent}>
              <h3>Вынимай зарядку</h3>
              <p>Зарядка в розетке тратит энергию даже когда не заряжает!</p>
              <div className={styles.ecoBadge}>⚡ Экономия энергии</div>
            </div>
          </div>

          <div className={styles.lifehackCard}>
            <div className={styles.lifehackImage} style={{background: '#FF9800'}}>
              <div className={styles.lifehackIcon}>🍎</div>
            </div>
            <div className={styles.lifehackContent}>
              <h3>Локальные продукты</h3>
              <p>Покупай фрукты и овощи которые растут рядом. Меньше перевозок = меньше выхлопов!</p>
              <div className={styles.ecoBadge}>🚚 Меньше перевозок</div>
            </div>
          </div>
        </div>
      </div>

      {/* Игровой раздел - квесты */}
      <div className={styles.section}>
        <h2>Эко-квесты на неделю! 🏆</h2>
        <div className={styles.questsContainer}>
          <div className={styles.quest}>
            <div className={styles.questIcon}>🌱</div>
            <div className={styles.questContent}>
              <h3>Понедельник: День без пластика</h3>
              <p>Не используй одноразовый пластик целый день!</p>
              <div className={styles.questProgress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: '75%'}}></div>
                </div>
                <span>75% выполнено</span>
              </div>
            </div>
          </div>

          <div className={styles.quest}>
            <div className={styles.questIcon}>🚶</div>
            <div className={styles.questContent}>
              <h3>Вторник: 10 000 шагов</h3>
              <p>Пройди пешком вместо поездки на машине!</p>
              <div className={styles.questProgress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: '40%'}}></div>
                </div>
                <span>40% выполнено</span>
              </div>
            </div>
          </div>

          <div className={styles.quest}>
            <div className={styles.questIcon}>💡</div>
            <div className={styles.questContent}>
              <h3>Среда: Энергосбережение</h3>
              <p>Выключай все приборы из розеток на ночь!</p>
              <div className={styles.questProgress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{width: '90%'}}></div>
                </div>
                <span>90% выполнено</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Интерактивная игра */}
      <div className={`${styles.section} ${styles.gameSection}`}>
        <h2>Собери эко-робота! 🤖</h2>
        <p>Выполняй задания и собирай детали для своего эко-робота!</p>
        <div className={styles.robotBuilder}>
          <div className={styles.robot}>
            <div className={styles.robotPart}>🤖</div>
            <div className={styles.robotStats}>
              <div className={styles.stat}>
                <span>Собран на: 60%</span>
                <div className={styles.statBar}>
                  <div className={styles.statFill} style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.robotParts}>
            <div className={styles.part}>🔋</div>
            <div className={styles.part}>⚡</div>
            <div className={styles.part}>🌿</div>
            <div className={styles.part}>💧</div>
          </div>
        </div>
      </div>

      {/* Мотивационный раздел */}
      <div className={`${styles.section} ${styles.motivationSection}`}>
        <h2>Ты уже делаешь планету лучше! ✨</h2>
        <div className={styles.motivationCards}>
          <div className={styles.motivationCard}>
            <div className={styles.motivationIcon}>🌳</div>
            <h3>Твои действия имеют значение!</h3>
            <p>Каждый раз, когда ты выбираешь экологичный вариант, ты помогаешь природе!</p>
          </div>
          <div className={styles.motivationCard}>
            <div className={styles.motivationIcon}>👫</div>
            <h3>Расскажи друзьям!</h3>
            <p>Поделись этими лайфхаками с друзьями - вместе мы сможем больше!</p>
          </div>
          <div className={styles.motivationCard}>
            <div className={styles.motivationIcon}>🏆</div>
            <h3>Стань чемпионом экологии!</h3>
            <p>Собирай эко-очки и получай звания защитника природы!</p>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Готов начать менять мир? 🚀</h2>
          <p>Выбери один лайфхак и начни применять его уже сегодня!</p>
          <button className={styles.ctaButton}>Начать эко-приключение!</button>
        </div>
      </div>
    </div>
  );
};

export default TipsPage;