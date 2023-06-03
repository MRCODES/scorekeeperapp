
import './App.css';
import { useState } from 'react';
import mark from './underscore.png';



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

<body>


<div id="inner-container">

<h1 id="score-keeper-logo"></h1>


<div id="players">
<p id="player-1">PLAYER 1</p>
<p id="player-2">PLAYER 2</p>
</div>


<div id="marks">
<p id="mark-1"><img src={mark}/></p>
<p id="mark-2"><img src={mark}/></p>
</div>



<div id="counter-display">
<p id="counter-display1">{dotClick}</p>
<p id="counter-display2">{dotClick2}</p>
</div>


<div id="player-buttons">
<div id='player-1-buttons'>
<button onClick={plusClick} id="plus"><p></p></button>
<button onClick={minusClick} id="minus"><p></p></button>
</div>

<div id='player-2-buttons'>
<button onClick={plusClick2} id="plus"><p></p></button>
<button onClick={minusClick2} id="minus"><p></p></button>
</div>
</div>


<button id="reset" onClick={buttonReset}></button>


<div id="copyright">Copyright® Michael Robinson</div>
</div> {/* inner container  */}

</body>  
  );
}

export default App;
