import Card from "./components/Card"

const data = [
  {
  id: 1,
  desc: 'When you get to the bus-stop you will enter a korope going to maryland, you can choose to stop in leventis which is in front of the military barracks or you stop at maryland, whichever you choose is fine but i would suggest leventis because it will be the same route you would stop when going back home so you can get familiar with it already.',
  landmarks: [
    'A bet9ja shop opposite where you would enter korope just after the bridge and crossing the railway line in shogunle bus-stop',
    'En-route you would see bond fm, radio nigeria on the right just at the ladipo bus stop on adekunle fajuyi way GRA',

  ]
},
 {
  id: 2,
  desc:'At leventis or maryland you would wait to enter a bus going to yaba, you would most likely hear buses saying sabo/yaba, yaba/palmgrove/onipan. whichever you hear enter it, and the fee should be #400',
  landmarks: {}
 }
 
]

function App() {

  return (
<>
    <header className="text-center tracking-widest uppercase font-bold text-[1rem] bg-[#18212f] p-3 border-b border-solid border-[#1f2937]">Detailed Description</header>
    <p className="mx-2 mt-5 text-green-600">Kindly tick the checkbox once each step is complete till you reach your destination.</p>
     <p className="mx-2 text-red-600">Only click the checkbox for a step once all landmarks have been ticked</p>
    {data.map((info, index) => <Card details={info} index={index}/>)}

</>
  )
}

export default App
