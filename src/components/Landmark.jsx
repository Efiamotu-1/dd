import React, { useState } from 'react'

function Landmark({landmark}) {
    const [completed, setCompleted] = useState(false)
  return (
    <>
    <div>
    <div className='flex gap-2 mt-5 items-center'>
            <input type="checkbox" className='self-start mt-1' name="" id="" onChange={() => {setCompleted(!completed)}}/>
            <p className={completed ? 'line-through text-slate-500/75' : ''}>{landmark}</p>
    </div>
    </div>
    </>
  )
}

export default Landmark