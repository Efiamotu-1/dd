import Card from "./components/Card"

const data = [
  {
  id: 1,
  desc: 'When you get to the bus-stop you will enter a korope going to maryland, you can choose to stop in leventis which is in front of the military barracks or you stop at maryland, whichever you choose is fine but i would suggest leventis because it will be the same route you would stop when going back home so you can get familiar with it already.',
  landmarks: [
    'A bet9ja shop opposite where you would enter korope just after the bridge and after crossing the railway line in shogunle bus-stop.',
    'En-route you would see a radio station to your right bond fm, radio nigeria just at ladipo bus stop on adekunle fajuyi way GRA.',
    'the bus would move straight down the long road and the end of that road is basically leventis where you would be required to drop.',
    'if you are not dropped along the express, please walk down to the express where you would see the army barracks to your right from where you would wait to enter a bus going to yaba.',
    'if you are dropped on the express, right where you would be dropped you would wait there to enter a bus going to yaba.',
    'if you decide to drop at maryland, you might need to cross to the other side of the road to enter a yaba bus, when in doubt just ask and you would be pointed to where to enter bus.'

  ]
},
 {
  id: 2,
  desc:'At leventis or maryland you would wait to enter a bus going to yaba, you would most likely hear buses saying sabo/yaba, yaba/palmgrove/onipan. whichever you hear, enter it and the fee should be #400',
  landmarks: [
    'Maryland mall which would be at the other side of the road on your left',
    'Idi-Iroko bus-stop which would be a little distance from maryland mall',
    'Anthony would be the next bus stop you would get to, before anthony bus-stop under the ridge you would notice a garden called shodex gardens to your right.',
    'The driver would keep going down this straight road and pass through a few bus-stops such as obanikoro, palmgrove, Onipan, Fadeyi. Along the road there are always signboards notifying you of these bus stops and some conductors always call them out.',
    'Once you get to fadeyi/total then you are very close by to yaba, take note there is only one bus-stop separating you from yaba which is jibowu-underbridge.',
    'Jibowu underbridge is literally under a bridge, after driving past jibowu your bus would most likely climb a bridge, very short climb, this should signify to you that you are already very very close.',
    'Passengers might now call out yaba owa, if no one does please do so, so that the driver is aware you want to drop down.',
 ]
 },
 {
  id: 3,
  desc: 'Once you have dropped down you would need to enter KEKE which you would find towards your left it should take you to unilag junction and it is #150, the keke would call any of these busstop sabo, oyingbo, waec or yabatech just tell him you want to drop at unilag junction',
  landmarks: [
    'You will get to waec bus stop first',
    'Next bus stop is yabatech bus stop',
    'You will arrive unilag junction',
    'You will cross the road to the other side, please take note it is a one way so cars move on both sides take your time before crossing for safety',
    'Walk straight after crossing, you will see lots of keke keep walking straight, you can call me at this point or just continue following the directions',
    'walk past the first turning to your right, after that you should see an ace lounge, keep walking to the seci=ond turning to your right',
    'this is my street moore road, once you get here defiitely call me or walk in the street my gate is to the left',
    'you will see houses with black gates to your left, one has the number 30 on it, after that the next house is mine with a red gate',
    'I will be outside waiting to receive you'
  ]
    
 }
 
]

function App() {

  return (
<>
    <header className="text-center tracking-widest uppercase font-bold text-[1rem] bg-[#18212f] p-3 border-b border-solid border-[#1f2937]">Detailed Description</header>
    <p className="text-center uppercase mt-2">shogunle to Yaba</p>
    <p className="mx-2 mt-5 text-green-600">Kindly tick the checkbox once each step is complete till you reach your destination.</p>
     <p className="mx-2 text-red-600">Only click the checkbox for a step once all landmarks have been ticked</p>
    {data.map((info, index) => <Card details={info} index={index} key={index}/>)}

</>
  )
}

export default App
