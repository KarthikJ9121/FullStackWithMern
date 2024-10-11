import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter.jsx';
import LikeButton from './likeButton.jsx';
import Lottery from './Lottery Game/lottery.jsx';

function App() {
 
  return(
    <>
        {/* <p>States in React</p> */}
        {/* <Counter /> */}

        {/* <LikeButton /> */}


        <Lottery />
    </>
  );

}

export default App
