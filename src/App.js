
import './App.css';
import { useState } from 'react';
import mark from './underscore.png';



function App() {


/* Player #1 */

/* Setting useState */
const [dotClick, setDotClick] = useState(0);

/* the "plus" counting function to run inside the button  */
function plusClick() {
  setDotClick(dotClick + 1);
}

/* the "minus" function to run inside the button  */
function minusClick() {
  setDotClick(dotClick - 1);
}






/* Player #2 */

/* Setting useState */
const [dotClick2, setDotClick2] = useState(0);

/* the counting function to run inside button  */
function plusClick2() {
  setDotClick2(dotClick2 + 1);
}

/* minus function to run inside button  */

function minusClick2() {
  setDotClick2(dotClick2 - 1);
}


  /* RESET */
  

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


<div id="container">

{/* LOGO */}
<p id="score-keeper-logo" alt="A circular chalk-drawn logo with plus and minus signs."></p>

      
      
      <div id="feature">
        
              
        {/* PLAYERS  */}
                         
          <div className='block'>
          <p id="player-1">PLAYER 1</p>
            <p id="mark-1"><img src={mark} alt="underline mark under player #1 title" /></p>
            <p id="counter-display1">{dotClick}</p>

            <div id='player-1-buttons'>
              
              <button onClick={plusClick} id="plus1"><p></p></button>

              <button onClick={minusClick} id="minus1"><p></p></button>

            </div>

          </div>
          

          <div className='block'>
            
            <p id="player-2">PLAYER 2</p>
            <p id="mark-2"><img src={mark} alt="underline mark under player #2 title" /></p>
            <p id="counter-display2">{dotClick2}</p>


            <div id='player-2-buttons'>
  
              <button onClick={plusClick2} id="plus2"><p></p></button>
              <button onClick={minusClick2} id="minus2"><p></p></button>
              
            </div>
            
          
          </div>
                
        
        
        
      </div>
      

      
      {/* PLUS and MINUS BUTTONS  */}
      
      <div id="player-buttons">
      </div>
      

      
      {/* RESET BUTTON */}
      
      <button id="reset" onClick={buttonReset}></button>
      

      
      {/* COPYRIGHT */}
      
      <div id="copyright">Copyright® Michael Robinson</div>
      

    
    
    </div> {/* inner container  */}

</body>  
  );
}

export default App;
