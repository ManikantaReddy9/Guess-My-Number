const again=document.querySelector("#again");
const check=document.querySelector("#check");
const hideNum=document.querySelector("#question");
const outputMessage=document.querySelector("#start");
const inputNum=document.querySelector("#phd");
const scoreEl=document.querySelector("#score");
const highScoreEl=document.querySelector("#highscore");


//generate random number
let secretNum= Math.trunc(Math.random()*20)+1;
console.log(secretNum)

let score= 20;
let highscore= 0;

//event to check the hide number
check.addEventListener('click',()=>{
    const guessNum= Number(inputNum.value);           

    if(guessNum){

        //not match with hide Number
        if(guessNum!= secretNum){
            if(score > 1){
                score--;
                scoreEl.textContent= score;
                outputMessage.textContent= guessNum > secretNum ? "Too High" : "Too Low";

            }
            else{
                outputMessage.innerHTML = "You Lost the Game Don't Worry, <br> Try Again Buddy :)";
                document.getElementById("container1").style.backgroundColor="red";
                document.getElementById("container3").style.backgroundColor="red";
                document.getElementById("start").style.fontSize="20px "
                scoreEl.textContent= 0;
                hideNum.textContent= secretNum;
                inputNum.disabled=true;
                check.disabled=true;
                function shakeEffect() {
                    const container1 = document.getElementById("container1");
                    const container3 = document.getElementById("container3");
                    container1.classList.add("shake");
                    container3.classList.add("shake");

                    setTimeout(() => {
                        container1.classList.remove("shake");
                        container3.classList.remove("shake");

                    }, 500);
                };
                shakeEffect()

                //Automatically Game Start
                startCountdown(10);

                

            }
            
        }
        else{
            hideNum.textContent= secretNum;
            document.getElementById("container1").style.backgroundColor="green";
            document.getElementById("container3").style.backgroundColor="green";
            outputMessage.innerHTML="Congratulations...:) <br> you won the Game\u{1F973}\uD83D\uDC4D\uD83D\uDE0A"
            document.getElementById("phd").style.backgroundColor="green";
            inputNum.disabled=true;
            check.disabled=true;
            if (score > highscore) {
                highscore = score;
                highScoreEl.textContent = highscore;   
            }
            function celebrateWin() {
                confetti({
                    particleCount: 300,
                    spread: 70,
                    origin: { x: 0.5, y: 0.5 },
                });
            }
            celebrateWin();

            //Automatically Game Start
            startCountdown(10);
            
        }
        if(guessNum>20){
            outputMessage.textContent="Enter Number Between (1 to 20)"
        }  
    }
    else{
        outputMessage.textContent="Please enter the Number.."
    }
});

// Function to restart the game
function restartGame() {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    scoreEl.textContent = score;
    inputNum.value = "";
    document.getElementById("container1").style.backgroundColor = "black";
    document.getElementById("container3").style.backgroundColor = "black";
    document.getElementById("phd").style.backgroundColor = "black";
    outputMessage.textContent = "Start Guessing...";
    hideNum.textContent = "?";
    inputNum.disabled = false;
    check.disabled = false;
    document.getElementById("countdown").textContent = "";
};

// Function to start countdown before restarting the game
function startCountdown(seconds) {
    let countdown = seconds;
    const countdownDisplay = document.getElementById("countdown");

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = ` Game was restarting in ${countdown} seconds...`;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);  // Stop the interval
            restartGame();  // Restart the game
        }
    }, 1000);
}
again.addEventListener('click',()=>{
    score= 20;
    secretNum= Math.floor(Math.random()*20)+1;
    scoreEl.textContent= score;
    inputNum.value= "";
    document.getElementById("container1").style.backgroundColor="black";
    document.getElementById("container3").style.backgroundColor="black";
    document.getElementById("phd").style.backgroundColor="black";
    outputMessage.textContent="Start Guessing...";
    hideNum.textContent="?";
    inputNum.disabled=false;
    check.disabled=false;
});


