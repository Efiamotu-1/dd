import React, { useState } from 'react'
import Landmark from './Landmark'

function Card({details, index}) {
    const [completed, setCompleted] = useState(false)
  return (
    <>
    {completed ? 
    <p className='mx-2 mt-2 font-bold text-stone-600 tracking-wide uppercase' onClick={() => setCompleted(!completed)}>STEP {index + 1} Completed ✅</p>
    :
    <div className='bg-[#17212f] p-3 m-2 rounded-lg'>
              <div className='flex gap-2 mt-5 items-center'>
            <input type="checkbox" className='self-start mt-1' name="" id="" onChange={() => {setCompleted(!completed)}}/>
            <p className={completed ? 'line-through text-slate-500/75' : ''}> <span className='font-bold text-stone-600 tracking-wide'>STEP {index + 1}: </span>{details.desc}</p>
        </div>
        {details.landmarks.length >= 1 && 
        <>
        <h3 className={`${completed ? 'line-through text-slate-500/75' : ''} font-bold tracking-widest uppercase text-stone-600 mt-5`}>Landmarks</h3>
        <p className="mx-2 mt-2 text-green-600">Kindly tick the checkbox once you notice a landmark till the step is complete</p>
        {details.landmarks.map(landmark => <Landmark landmark={landmark} completed={completed}/>) }
        </>
        }
    </div>
}
    </>
)
}

export default Card