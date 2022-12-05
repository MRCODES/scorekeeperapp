
import './App.css';
import { useState } from 'react';




function App() {


/* #1 */

/* Setting useState */
const [dotClick, setDotClick] = useState(0);

/* plus counting function to run inside button  */
function plusClick() {
  setDotClick(dotClick + 1);
}

/* minus function to run inside button  */
function minusClick() {
  setDotClick(dotClick - 1);
}






/* #2 */

/* Setting useState */
const [dotClick2, setDotClick2] = useState(0);

/* counting function to run inside button  */
function plusClick2() {
  setDotClick2(dotClick2 + 1);
}

/* minus function to run inside button  */
function minusClick2() {
  setDotClick2(dotClick2 - 1);
}



/* reset function to run inside button  */
function buttonReset() {
  setDotClick(0);
  setDotClick2(0);
}





/*
setInterval(() => {

  setDotClick(dotClick + 1);
  
}, 1000);
*/

/* calling all the functions  */

return (

<div id="counter-container">

<h1 id="score-keeper">Score Keeper</h1>

<div id="players">
<p id="player-1">Player 1</p>
<p id="player-2">Player 2</p>
</div>

<div id="counter-display">
<p id="counter-display1">{dotClick}</p>
<p id="counter-display2">{dotClick2}</p>
</div>


<div id="player-buttons">
<div id='player-1-buttons'>
<button onClick={plusClick}>+</button>
<button onClick={minusClick}>-</button>
</div>

<div id='player-2-buttons'>
<button onClick={plusClick2}>+</button>
<button onClick={minusClick2}>-</button>
</div>
</div>

<button id="reset" onClick={buttonReset}></button>



</div> /* main container  */
  );
}

export default App;
