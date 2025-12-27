import React from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate('/calculator');
  };

  const handleLearnMoreClick = () => {
    navigate('/tips');
  };
  return (
    <div className={styles.homePage}>
      {/* Герой секция с фоном неба */}
      <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
          <h1>Углеродный след: Невидимая угроза нашей планете</h1>
          <p>Узнайте, как ваши ежедневные привычки влияют на климат Земли</p>
          <button className={styles.ctaButton} onClick={handleCalculateClick}>Начать расчет</button>
        </div>
        <div className={styles.co2Molecule}>
          <div className={styles.molecule}></div>
        </div>
      </header>

      {/* Что такое углеродный след */}
      <section className={`${styles.section} ${styles.carbonDefinition}`}>
        <div className={styles.sectionContent}>
          <h2>Что такое углеродный след?</h2>
          <div className={styles.definitionGrid}>
            <div className={styles.definitionText}>
              <p>Углеродный след — это общее количество парниковых газов (в основном углекислого газа CO₂), которые выделяются в атмосферу в результате деятельности человека.</p>
              <p>Представьте, что каждый раз, когда вы едете на машине, включаете свет или покупаете новую вещь, вы оставляете невидимый "след" из CO₂ в атмосфере.</p>
              <p>Эти следы накапливаются и создают "одеяло" вокруг Земли, которое задерживает тепло и приводит к изменению климата.</p>
            </div>
            <div className={styles.definitionImage}>
              <img src="/images/footprint.png" alt="Визуализация углеродного следа" />
              <div className={styles.imageCaption}>Накопление CO₂ в атмосфере</div>
            </div>
          </div>
        </div>
        <div className={styles.footprint}></div>
      </section>

      {/* Основные источники углеродного следа */}
      <section className={`${styles.section} ${styles.sourcesSection}`}>
        <div className={styles.sectionContent}>
          <h2>Откуда берется углеродный след?</h2>
          <div className={styles.sourcesGrid}>
            <div className={styles.sourceItem}>
              <div className={styles.sourceIcon}>🚗</div>
              <h3>Транспорт</h3>
              <p>Автомобили, самолеты и другие виды транспорта, работающие на ископаемом топливе</p>
              <img src="/api/placeholder/300/200" alt="Транспорт как источник CO2" />
            </div>
            <div className={styles.sourceItem}>
              <div className={styles.sourceIcon}>🏭</div>
              <h3>Производство энергии</h3>
              <p>Электростанции, работающие на угле и газе, для производства электричества</p>
              <img src="/api/placeholder/300/200" alt="Производство энергии" />
            </div>
            <div className={styles.sourceItem}>
              <div className={styles.sourceIcon}>🏠</div>
              <h3>Домашнее хозяйство</h3>
              <p>Отопление, охлаждение и электричество в наших домах и офисах</p>
              <img src="/api/placeholder/300/200" alt="Домашнее хозяйство" />
            </div>
            <div className={styles.sourceItem}>
              <div className={styles.sourceIcon}>🛒</div>
              <h3>Потребление товаров</h3>
              <p>Производство и транспортировка продуктов, одежды и других товаров</p>
              <img src="/api/placeholder/300/200" alt="Потребление товаров" />
            </div>
          </div>
        </div>
        <div className={styles.footprint}></div>
      </section>

      {/* Почему это важно */}
      <section className={`${styles.section} ${styles.importanceSection}`}>
        <div className={styles.sectionContent}>
          <h2>Почему углеродный след — это важно?</h2>
          <div className={styles.importanceGrid}>
            <div className={styles.importanceItem}>
              <img src="/images/i.webp" alt="Изменение климата" />
              <h3>Изменение климата</h3>
              <p>Повышение температуры приводит к экстремальным погодным условиям</p>
            </div>
            <div className={styles.importanceItem}>
              <img src="/images/2ca3633e85829de4614a97117a1a1047.jpg" alt="Таяние ледников" />
              <h3>Таяние ледников</h3>
              <p>Повышение уровня моря угрожает прибрежным регионам</p>
            </div>
            <div className={styles.importanceItem}>
              <img src="/images/i.jpg" alt="Потеря биоразнообразия" />
              <h3>Потеря биоразнообразия</h3>
              <p>Многие виды животных и растений не могут адаптироваться к изменениям</p>
            </div>
          </div>
        </div>
        <div className={styles.footprint}></div>
      </section>

      {/* Как уменьшить углеродный след */}
      <section className={`${styles.section} ${styles.solutionsSection}`}>
        <div className={styles.sectionContent}>
          <h2>Как уменьшить свой углеродный след?</h2>
          <div className={styles.solutionsFlex}>
            <div className={styles.solutionText}>
              <h3>Простые шаги для каждого</h3>
              <ul>
                <li>🚌 Используйте общественный транспорт вместо автомобиля</li>
                <li>💡 Выключайте свет и электроприборы когда не используете</li>
                <li>♻️ Сортируйте и перерабатывайте мусор</li>
                <li>🛒 Покупайте местные продукты и меньше упакованных товаров</li>
                <li>🌱 Уменьшите потребление мяса, особенно говядины</li>
                <li>🌳 Сажайте деревья и поддерживайте зеленые зоны</li>
              </ul>
            </div>
            <div className={styles.solutionImage}>
              <img src="/images/ip.webp" alt="Способы уменьшения углеродного следа" />
            </div>
          </div>
        </div>
        <div className={styles.footprint}></div>
      </section>

      {/* Призыв к действию */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.sectionContent}>
          <h2>Начните меняться сегодня!</h2>
          <p>Узнайте свой углеродный след и получите персональные рекомендации по его уменьшению</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton} onClick={handleCalculateClick}>Рассчитать мой след</button>
            <button className={styles.secondaryButton}  onClick={handleLearnMoreClick}>Узнать больше</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;