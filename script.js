/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");


var pattern = [];
var started_date = 0;
var user_response=0;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;
var date_now=null
var myInterval=null


var mistakeCounter=3;

var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function patternGenerator()
{
  var numberofPatterns= getRndInteger(5,10);
   console.log("Hi: "+ numberofPatterns)
  for(let start=0; start<=numberofPatterns; start++)
    {
      var numb= getRndInteger(1,8)
     
      pattern.push(numb)
    }
  console.log(pattern);
  
  
}
function startGame(){
    //initialize game variables
  

console.log("Inside startGamee"+ myInterval)

    progress = 0;
    mistakeCounter=3;
    gamePlaying = true;
   patternGenerator()
  
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence()

}

function stopGame(){
  console.log("Inside stopGame"+ myInterval)
  clearInterval(myInterval)
    //initialize game variables
    gamePlaying = false;
    pattern=[]
    
    document.getElementById("clock").innerHTML = "Clock"  
  
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
      for (let j= 1; j<=length_of_freqMap;j++)
      {
        document.getElementById("button"+j).getElementsByTagName('img')[0].style.display="none"
        
      }

}




// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 299.6,
  3: 342,
  4: 366.2,
  5:443,
  6: 490,
  7:530,
  8:590
  
}
  
const length_of_freqMap= Object.keys(freqMap).length;
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
  
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){

  if(gamePlaying){
    for (let j= 1; j<=length_of_freqMap;j++)
      {
        document.getElementById("button"+j).getElementsByTagName('img')[0].style.display="none"
        
      }
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);

   
  }
  
}
function playClueSequence(){
  guessCounter = 0

  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){
        clearInterval(myInterval)
 
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    
    

    if (clueHoldTime>10)
      {
        clueHoldTime+=-10;
        
      }
    
  

   
    
  }
 var acc= progress*2000
  
  start_count(acc)

  


  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  clearInterval(myInterval)
}
function winGame(){
  stopGame();
  alert("Game Over. You Win.");
}
function guess(btn){
  
  let guess_id= "button"+btn
 
  
  console.log("user guessed: " + btn);
 
  if(!gamePlaying){
    return;
  }
  
  
  if(pattern[guessCounter] == btn){
    document.getElementById("button"+btn).getElementsByTagName('img')[0].style.display="block"
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        console.log(guess_id)
        //Pattern correct. Add next segment
        progress++;
         document.getElementById("button"+btn).classList.remove("lit")
   
        playClueSequence();
       
  
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    
    //Guess was incorrect
    //GAME OVER: LOSE!
     mistakeCounter+=-1
  
    if (mistakeCounter<=0)
      {
          loseGame();
         clearInterval(myInterval)
      }
    else{
      if (mistakeCounter==1)
        {
          alert("Try again. You have "+ mistakeCounter+ " chance left");
          clearInterval(myInterval)
          start_count(2000)
           console.log("Try Again")
          
        }
      else if (mistakeCounter>1)
        {
           alert("Try again. You have "+ mistakeCounter+ " chances left");
           console.log("Try Again")
             clearInterval(myInterval)
          start_count(2000)
         
          
        }
       
      
      
    }
    
  }
}

var countDownDate= new Date().getTime()





var now = null
var diff= null
var seconds=null

function start_count(acc)
{
  setTimeout(function()
            {
    date_now= new Date().getTime()
  myInterval=setInterval('updateTimer(date_now)', 1000);

  },acc)
}

function updateTimer(start_date) {
 now = new Date().getTime();
 diff = now-start_date;
seconds= Math.floor((diff%(1000*60))/1000)
document.getElementById("clock").innerHTML= seconds
if (seconds%10==0)
  {
    
    console.log("Hello 5")
     clearInterval(myInterval)
     mistakeCounter+=-1;
    if (mistakeCounter <=0)
    {
      loseGame()
      
    }
    else{
      alert("Try again. You have "+ mistakeCounter+ " chances left");
    }
     
    
    
  
    
  }

}

