var bouttonJouer=document.querySelector("#bouttonJouer");

bouttonJouer.addEventListener('click',function(e)
{   
    let difficultyMultiplier;
    let validDifficulty=true;
    if(document.querySelector("#facile").checked)
        {
            difficultyMultiplier=10;
        }
        else if(document.querySelector("#intermediaire").checked){
            difficultyMultiplier=100;
        
        }
        else if(document.querySelector("#difficile").checked)
        {
            difficultyMultiplier=1000;
        }
        else{
            alert("veuillez choisir une difficultée");
            validDifficulty=false;
        }
        if(validDifficulty){
            let n=Math.floor(Math.random()*difficultyMultiplier);
            console.log(n);
            let userInput=prompt("Are you smart enough to find the number ?");
            if(userInput==n)
            {
                alert("YOU WIIIIN");
            }
            else {
                alert("try again");
            }

        }
});
