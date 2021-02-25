import { createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  experienceToNextLevel:number;
  challengesCompleted:number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps{
  children: ReactNode; //Quando os filhos de um component sao components usa o reactnode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(60)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null);


  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    return setLevel(level + 1);
  }

  function startNewChallenge () {
   const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
   const challenge = challenges[randomChallengeIndex];
   setActiveChallenge(challenge)

   //tudo em public é "enxergado" pela aplicação inteira

   new Audio('/notification.mp3').play()
   
   if(Notification.permission === 'granted'){
     new Notification('New Challenge ', {
       body: `Valendo ${challenge.amount}`,
       
     })
   }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) return;

    const {amount} = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider 
      value={{
        level, 
        levelUp,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
