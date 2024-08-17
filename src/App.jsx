import Card from "./components/Card"

const data = [
 {
  id: 1,
  desc:'At Emerald gate enter a keke going to unilag junction and stop at moore road, it is #100',
  landmarks: [
    'once you drop cross over to the other side',
    'this is my street moore road, once you get here definitely call me while you walk in the street my gate is to the left',
    'you will see houses with black gates to your left, one has the number 32 moore and another has 30 on it, after that the next house is mine with a red gate',
    'I will be outside waiting to receive and welcome you'
 ]
 },
 
 
]

function App() {

  return (
<>
    <header className="text-center tracking-widest uppercase font-bold text-[1rem] bg-[#18212f] p-3 border-b border-solid border-[#1f2937]">Detailed Description</header>
    <p className="text-center uppercase mt-2">Emerald to Moore road</p>
    <p className="mx-2 mt-5 text-green-600">Kindly tick the checkbox once each step is complete till you reach your destination.</p>
     <p className="mx-2 text-red-600">Only click the checkbox for a step once all landmarks have been ticked</p>
    {data.map((info, index) => <Card details={info} index={index} key={index}/>)}

</>
  )
}

export default App
