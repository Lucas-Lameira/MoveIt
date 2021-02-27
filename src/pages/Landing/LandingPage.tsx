import styles from '../../styles/components/LandingPage.module.css';
import {useRouter} from 'next/router';

export default function  LandingPage() {
  const router = useRouter();

  function handleSubmit() {
    router.push('/')
  }

  return (
    <div className={styles.containerLanding}>
      <main>
        <header>
          <img src="/icons/logo.png" alt="Logo da moveit"/>
        </header>

        <strong>Bem-vindo</strong>

        <p>
          <img src="/icons/github.svg" alt="github logo"/>
          Faça login com seu Github para começar
        </p>

        <div className={styles.loginInput}>
          <input 
            type="text" 
            placeholder="Digite seu user name"
            required
          />
          
          <button type="button" onClick={handleSubmit}>
            <img src="/icons/arrowright.svg" alt=""/>
          </button>          
        </div>
      </main>
    </div>  
  )
}