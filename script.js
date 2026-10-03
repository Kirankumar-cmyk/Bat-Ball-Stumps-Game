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

function generateResult(userChoice,computerChoice){
    if(userChoice=='Bat'){
        if(computerChoice=='Ball'){
        return 'User chosen Bat <br>,'+ `Computer  chosen ${computerChoice}<br>`+' User has won 😊';
    }else if(computerChoice=='Stump'){
        return 'User chosen Bat,<br> '+ `Computer  chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
    }else{
        return 'User chosen Bat,<br> '+ `Computer  chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
    }
    }

    if(userChoice=='Ball'){
        if(computerChoice=='Stump'){
        return 'User chosen Ball <br>,'+ `Computer chosen ${computerChoice}<br>`+' User has won 😊';
    }else if(computerChoice=='Bat'){
        return 'User chosen Ball,<br> '+ `Computer  chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
    }else{
        return 'User chosen Ball,<br> '+ `Computer chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
    }
    
    }

    if(userChoice=='Stumps'){
        if(computerChoice=='Bat'){
        return 'User chosen Stumps <br>,'+ `Computer chosen ${computerChoice}<br>`+' User has won 😊';
    }else if(computerChoice=='Ball'){
        return 'User chosen Stumps,<br> '+ `Computer chosen ${computerChoice},<br>`+' Computer  has won 🖥️';
    }else{
        return 'User chosen Stumps,<br> '+ `Computer chosen ${computerChoice},<br>`+` I'ts tie 🤝` ;
    }
    }
}


function displayResult(result){
    document.querySelector('.id').innerHTML=result;
}