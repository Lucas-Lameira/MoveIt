import React, { useState, useEffect, useContext } from 'react';

import {ChallengesContext} from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeOut;

export default function Countdown () {



  const {startNewChallenge} = useContext(ChallengesContext); //só usa essa funcao se o timer chegar em zero


  const [time, setTime] = useState(0.1 * 60); //tempo em segundos
  const [isActive, setIsActive] = useState(false);//armazena se o botao foi clicado ou se o contador esta parado
  const [hasFinished, setHasFinished] = useState(false);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  let [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  let [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');
  
  function countDown () {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(25*60);
  }

  /* useEffect - quando algo acontecer o efeito colateral vem XD */
  /* Toda vez que o valor passado em [] mudar, a funcao dentro do useEffect é disparada */
  useEffect(()=>{
    if(isActive && time>0){
      countdownTimeOut = setTimeout(()=> {
        setTime(time -1);
      }, 1000);
    }else if(isActive && time===0){ 
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

 
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