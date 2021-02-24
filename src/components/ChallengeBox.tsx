import { useState, useContext } from 'react';
import { ChallengesContext} from  '../contexts/ChallengeContext';

import styles from '../styles/components/ChallengeBox.module.css';


export default function ChallengeBox () {  
  const {activeChallenge, resetChallenge} = useContext(ChallengesContext);  

  return (
    <div className={styles.challengeBoxContainer}>

      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeCompletedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up icon"/>
            Avance de level completando os desafios.
          </p>
        </div>
      )}
   


    </div>
  )
}