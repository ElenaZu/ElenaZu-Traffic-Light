import React, {useState} from 'react'

const Semaforo = () => {
  const [isDangerLightGlowing, setDangerLightGlow]=useState(false);
  const [isWarningLightGlowing, setWarningLightGlow]=useState(false);
  const [isSuccessLightGlowing, setSuccessLightGlow]=useState(false);

  return (
    <div className='container'>
        <div className='bg-dark cable mt-3'></div>
        <div className='bg-dark traffic-light-bg rounded'>
        <div className={`rounded-circle light bg-danger pb-2 ${isDangerLightGlowing ? "glow-Effect" : ""}`} onClick={()=>{setDangerLightGlow(true); setWarningLightGlow(false); setSuccessLightGlow(false)}}></div>
        <div className={`rounded-circle light bg-warning pb-2 ${isWarningLightGlowing ? "glow-Effect" : ""}`} onClick={()=>{setWarningLightGlow(true); setDangerLightGlow(false); setSuccessLightGlow(false)}}></div>
        <div className={`rounded-circle light bg-success ${isSuccessLightGlowing ? "glow-Effect" : ""}`} onClick={()=>{setSuccessLightGlow(true); setDangerLightGlow(false); setWarningLightGlow(false)}}></div>
        </div>
    </div>
  )
}

export default Semaforo