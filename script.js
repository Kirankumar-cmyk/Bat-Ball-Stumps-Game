function generateRandomOpt(){
    let randomNumber=Math.random()*3;
    let computerChoice;

    if(randomNumber>0&&randomNumber<=1){
        computerChoice='Bat';
    }else if(randomNumber>1&&randomNumber<=2){
        computerChoice='Ball';
               
    }else{
        computerChoice='Stump';
               
    }
    return computerChoice;
}
let score={
    Win:0,
    Loss:0,
    Tie:0,
};

function generateResult(userChoice,computerChoice){
    if(userChoice=='Bat'){
        if(computerChoice=='Ball'){
        score.Win++;
        return 'User chosen Bat <br>,'+ `Computer  chosen ${computerChoice}<br>`+' User has won 😊';
        
    }else if(computerChoice=='Stump'){
        score.Loss++;
        return 'User chosen Bat,<br> '+ `Computer  chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
        
    }else{
        score.Tie++
        return 'User chosen Bat,<br> '+ `Computer  chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
        
    }
    }

    if(userChoice=='Ball'){
        if(computerChoice=='Stump'){
             score.Win++;
        return 'User chosen Ball <br>,'+ `Computer chosen ${computerChoice}<br>`+' User has won 😊';
       
    }else if(computerChoice=='Bat'){
         score.Loss++;
        return 'User chosen Ball,<br> '+ `Computer  chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
        
    }else{
        score.Tie++;
        return 'User chosen Ball,<br> '+ `Computer chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
       
    }
    
    }

    if(userChoice=='Stumps'){
        if(computerChoice=='Bat'){
        score.Win++;
        return 'User chosen Stumps <br>,'+ `Computer chosen ${computerChoice}<br>`+' User has won 😊';
        
    }else if(computerChoice=='Ball'){
         score.Loss++;
        return 'User chosen Stumps,<br> '+ `Computer chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
       
    }else{
        score.Tie++;
        return 'User chosen Stumps,<br> '+ `Computer chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
         
    }
    }
}


function displayResult(result){
    document.querySelector('.id').innerHTML=result;
    document.querySelector('.win-dsp').innerHTML=score.Win;
    document.querySelector('.Loss-dsp').innerHTML=score.Loss;
    document.querySelector('.Tie-dsp').innerHTML=score.Tie;

}
