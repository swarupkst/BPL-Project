import './App.css'
import Navbar from "./component/navbar/Navbar";
import Banner from './component/banner/Banner';
import Players from './component/players/Players';
import { Suspense } from 'react';

const fetchPlayers = async () => {
  const res = await fetch ("/data.json")
  return res.json();
}

function App() {
const playersPromise = fetchPlayers();

  return (
    <div className=' w-10/12 items-center mx-auto'>
      <Navbar/>
      <Banner/>
      <Suspense fallback = {<span className="loading loading-bars loading-xl"></span>}>
      <Players playersPromise = {playersPromise}/>
      </Suspense>
      </div>
  )
}

export default App
