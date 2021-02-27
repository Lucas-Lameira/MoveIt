import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

  const {level,closeLevelUpModal } = useContext(ChallengesContext)
  return(

    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal" title="close"/>
        </button>

        <footer>
          <strong>Compartillhar no Twitter </strong>
          <img src="/icons/twitter.svg" alt="Twitter icon"/>
        </footer>
      </div>
    </div>
  );
}