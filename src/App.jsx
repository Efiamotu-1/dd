import Card from "./components/Card"

const data = [
 {
  id: 1,
  desc:'At ikeja underbridge wait to enter a bus going to yaba, you would most likely hear buses saying sabo/yaba, yaba/palmgrove/onipan. whichever you hear, enter it and the fee should be #500',
  landmarks: [
    'When the bus moves it would start on its way through to the next underbridge just opposite Lagos state teaching hospital LASUTH',
    'The bus would take the u-turn and head on down to maryland',
    'You will pass a couple of places such as the police barracks to your right, EKO hospital to your left',
    'You will meet the first bus-stop abule',
    'You will as well see sheraton hotel to the left and the driver heads on to leventis after which you get to maryland',
    'You will pass Maryland mall which would be at the other side of the road on your left',
    'Idi-Iroko bus-stop which would be a little distance from maryland mall',
    'Anthony would be the next bus stop you would get to, before anthony bus-stop under the bridge you would notice a garden called shodex gardens to your right.',
    'The driver would keep going down this straight road and pass through a few bus-stops such as obanikoro, palmgrove, Onipan, Fadeyi. Along the road there are always signboards notifying you of these bus stops and some conductors always call them out.',
    'Once you get to fadeyi/total then you are very close by to yaba, take note there is only one bus-stop separating you from yaba which is jibowu-underbridge.',
    'Jibowu underbridge is literally under a bridge, after driving past jibowu your bus would most likely climb a bridge, very short climb, this should signify to you that you are already very very close.',
    'Passengers might now call out yaba owa, if no one does please do so, so that the driver is aware you want to drop down.',
 ]
 },
 {
  id: 2,
  desc: 'Once you have dropped down you would need to enter KEKE which you would find towards your left it should take you to unilag junction and it is #150, the keke would call any of these busstop sabo, oyingbo, waec or yabatech just tell him you want to drop at unilag junction',
  landmarks: [
    'You will get to waec bus stop first',
    'Next bus stop is yabatech bus stop',
    'You will arrive unilag junction',
    'You will cross the road to the other side, please take note it is a two way so cars move on both sides of the lane from your left and right, please take your time before crossing for safety',
    'Walk straight after crossing, you will see lots of keke keep walking straight, you can call me at this point or just continue following the directions',
    'walk past the first turning to your right, after that you should see an ace lounge, keep walking to the seci=ond turning to your right',
    'this is my street moore road, once you get here definitely call me or walk in the street my gate is to the left',
    'you will see houses with black gates to your left, one has the number 32 moore and another has 30 on it, after that the next house is mine with a red gate',
    'I will be outside waiting to receive and welcome you'
  ]
    
 }
 
]

function App() {

  return (
<>
    <header className="text-center tracking-widest uppercase font-bold text-[1rem] bg-[#18212f] p-3 border-b border-solid border-[#1f2937]">Detailed Description</header>
    <img src="mmm.png" alt="" />
    <p className="text-center uppercase mt-2">ikeja underbridge to Yaba</p>
    <p className="mx-2 mt-5 text-green-600">Kindly tick the checkbox once each step is complete till you reach your destination.</p>
     <p className="mx-2 text-red-600">Only click the checkbox for a step once all landmarks have been ticked</p>
    {data.map((info, index) => <Card details={info} index={index} key={index}/>)}

</>
  )
}

export default App
