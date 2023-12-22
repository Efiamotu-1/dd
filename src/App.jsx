import Card from "./components/Card"

const data = [] // Add data containing info on the proposed directions.

function App() {

  return (
<>
    <header className="text-center tracking-widest uppercase font-bold text-[1rem] bg-[#18212f] p-3 border-b border-solid border-[#1f2937]">Detailed Description</header>
    <p className="mx-2 mt-5 text-green-600">Kindly tick the checkbox once each step is complete till you reach your destination.</p>
     <p className="mx-2 text-red-600">Only click the checkbox for a step once all landmarks have been ticked</p>
    {data.map((info, index) => <Card details={info} index={index} key={index}/>)}

</>
  )
}

export default App
