import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile () {

  const {level} = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucas-lameira.png" alt="Lucas lameira "/>
      <div>
        <strong>Lucas lameira</strong>
        <p>
          <img src="icons/level.svg" alt="uma seta verde para cima"/>
          level {level}
        </p>
      </div>
    </div>
  )
}