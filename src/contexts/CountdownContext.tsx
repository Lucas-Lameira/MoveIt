import { createContext, ReactNode, useContext, useState, useEffect} from "react";
import { ChallengesContext } from "./ChallengeContext";
let countdownTimeOut;

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  countDown:() => void;
  resetCountdown:() => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider ({children}:CountdownProviderProps) {

  const {startNewChallenge} = useContext(ChallengesContext); //só usa essa funcao se o timer chegar em zero
  
  const [time, setTime] = useState(0.1 * 60); //tempo em segundos
  const [isActive, setIsActive] = useState(false);//armazena se o botao foi clicado ou se o contador esta parado
  const [hasFinished, setHasFinished] = useState(false);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

    
  function countDown () {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(25*60);
    setHasFinished(false);
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
 
  return(
    <CountdownContext.Provider 
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        countDown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}