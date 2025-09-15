import React from 'react';
import styles from './TipsPage.module.css';

const TipsPage: React.FC = () => {
  return (
    <div>
      <div className="hero">
        <h2>Советы по уменьшению углеродного следа</h2>
        <p>Небольшие изменения в повседневной жизни могут значительно снизить ваш углеродный след и помочь сохранить планету для будущих поколений.</p>
      </div>
      
      <div className={styles.tips}>
        <h3>Практические советы для детей и взрослых:</h3>
        <ul className={styles.tipsList}>
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-bus"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Экологичный транспорт</h4>
              <p>Ходите пешком, используйте велосипед или общественный транспорт вместо автомобиля. Если используете авто — делитесь поездками с другими.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Энергосбережение</h4>
              <p>Выключайте свет и электроприборы, когда они не используются. Используйте энергосберегающие лампы и умные розетки.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-recycle"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Переработка отходов</h4>
              <p>Сортируйте и перерабатывайте мусор. Сдавайте пластиковые бутылки, бумагу, стекло и металл в пункты приема.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Устойчивые покупки</h4>
              <p>Используйте многоразовые сумки вместо пластиковых пакетов. Покупайте продукты с минимальной упаковкой.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-utensils"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Растительное питание</h4>
              <p>Сократите потребление мяса, особенно говядины. Один безмясной день в неделю может значительно снизить ваш углеродный след.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-tint"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Экономия воды</h4>
              <p>Экономьте воду: выключайте кран, когда чистите зубы, принимайте короткий душ вместо ванны, используйте водосберегающие насадки.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-seedling"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Озеленение</h4>
              <p>Сажайте деревья и растения. Комнатные растения улучшают качество воздуха, а деревья поглощают CO₂.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-leaf"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Локальные продукты</h4>
              <p>Покупайте местные сезонные продукты. Это снижает выбросы от транспортировки товаров.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-laptop"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Энергоэффективные устройства</h4>
              <p>Не оставляйте гаджеты в режиме standby. Используйте режимы энергосбережения на устройствах.</p>
            </div>
          </li>
          
          <li>
            <div className={styles.tipIcon}>
              <i className="fas fa-wind"></i>
            </div>
            <div className={styles.tipContent}>
              <h4>Естественное охлаждение</h4>
              <p>Используйте естественную вентиляцию вместо кондиционера. Утеплите дом чтобы减少отопления зимой.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="card" style={{marginTop: '2rem'}}>
        <i className="fas fa-hands"></i>
        <h3>Присоединяйтесь к экологическим инициативам!</h3>
        <p>Участвуйте в местных экологических проектах, субботниках и образовательных программах. Рассказывайте друзьям и семье о важности уменьшения углеродного следа. Вместе мы можем сделать планету чище и здоровее!</p>
      </div>
    </div>
  );
};

export default TipsPage;