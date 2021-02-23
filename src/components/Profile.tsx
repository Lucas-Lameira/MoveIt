import styles from '../styles/components/Profile.module.css';

export default function Profile () {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucas-lameira.png" alt="Lucas lameira "/>
      <div>
        <strong>Lucas lameira</strong>
        <p>
          <img src="icons/level.svg" alt="uma seta verde para cima"/>
          level 1
        </p>
      </div>
    </div>
  )
}