import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown () {
  const [time, setTime] = useState(20 * 60); //tempo em segundos
  const [isActive, setIsActive] = useState(false);//armazena se o botao foi clicado ou se o contador esta parado

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  let [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  let [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');
  
  function countDown () {
    setIsActive(true);
  }

  /* useEffect - quando algo acontecer o efeito colateral vem XD */
  /* Toda vez que o valor passado em [] mudar, a funcao dentro do useEffect é disparada */
  useEffect(()=>{
    if(isActive && time>0){
      setTimeout(()=> {
        setTime(time -1);
      }, 1000);
    }
  }, [isActive, time])

 
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
      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={countDown} 
      >
        Iniciar um ciclo        
      </button>      
    </div>
  );
}