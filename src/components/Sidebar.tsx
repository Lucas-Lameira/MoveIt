import styles from '../styles/components/Sidebar.module.css';

export default function Sidebar() { 
  return(
    <div className={styles.sidebarContainer}>
        <div>
          <img src="/icons/mini-logo.png" alt=""/>
        </div>

        <div className={styles.imgGroup}>
          <img src="/icons/home.svg" alt=""/>
          <img src="/icons/award.svg" alt=""/>
        </div>

        <div></div>
    </div>
  )
}