import React, { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown () {
  const {minutes, seconds, hasFinished, countDown, isActive, resetCountdown} = useContext(CountdownContext)

  let [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  let [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished? (
        <button 
          disabled
          className={styles.countdownButton}          
        >
          Ciclo encerrado   
          <img src="icons/check_circle.svg" alt="green check circle"/>    
        </button>  
      ) : (
        <React.Fragment>
          {isActive? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown} 
            >
              Abandonar ciclo      
              <img src="icons/close.svg" alt="a icon in shape of an X" />              
            </button>        
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={countDown} 
            >
              Iniciar um ciclo     
              <img src="icons/play_arrow.svg" alt="play arrow icon"/>   
            </button>        
          )}                       
        </React.Fragment>
      )}
    </div>
  );
}