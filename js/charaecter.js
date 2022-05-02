// A function to roll dice based on the ID of the button clicked will role a spefic button
function rollingDice(clicked_id){
    if(clicked_id == 'd20'){
        let die20 = Math.floor(Math.random() * 20) + 1;
        let txt20Output = document.getElementById('d20Out');
        txt20Output.value = die20;
    }
    else if(clicked_id == 'd12'){
        let txt12Output = document.getElementById('d12Out');
        let die12 = Math.floor(Math.random() * 12) + 1;
        txt12Output.value = die12;
    }
    else if(clicked_id == 'd10'){
        let txt12output = document.getElementById('d10Out');
        let die10 = Math.floor(Math.random() * 10) + 1;
        txt12output.value = die10;
    }
    else if(clicked_id == 'd8'){
        let txt8output = document.getElementById('d8Out');
        let die8 = Math.floor(Math.random() * 8) + 1;
        txt8output.value = die8;
    }
    else if(clicked_id == 'd6'){
        let txt6Output = document.getElementById('d6Out');
        let die6 = Math.floor(Math.random() * 6) + 1;
        txt6Output.value = die6;
    }
    else if(clicked_id == 'd4'){
        let txt4Output = document.getElementById('d4Out');
        let die4 = Math.floor(Math.random() * 4) + 1;
        txt4Output.value = die4;
    }
    else if(clicked_id == 'd3'){   
        let txt3Output = document.getElementById('d3Out');
        let die3 = Math.floor(Math.random() * 3) + 1;
        txt3Output.value = die3;
    }
}
function hideAll(){
    let hide = document.getElementsByClassName("hide_me");
    for (let el of hide) {
        el.value = "";
    }
}
class statInput{
    constructor(initProfecMod, initStrMod, initDexMod, initConMod, initIntMod, initWisMod
        , initChaMod) {
            this.profecMod = initProfecMod;
            this.strMod = initStrMod;
            this.dexMod = initDexMod;
            this.conMod = initConMod;
            this.intMod = initIntMod;
            this.wisMod = initWisMod;
            this.chaMod = initChaMod;


    
    }
    // after you have typed in your information about your character you hit the submit button and it hides the section you can change it later by hitting the edit button
    hideInfo(){
        var article = document.getElementById('characterInfo');
        article.style.display = "none";
        // adding button the article Dice Roller
        let showButton = document.createElement('button');
        let paste = document.getElementById('tab');
        showButton.innerHTML = "edit Info";
        showButton.type = "submit";
        showButton.id = "show";
        paste.appendChild(showButton);
        // fucntion of new button toshow the character info again.
        showButton.onclick = function(event) {
            article.style.display = "";
            showButton.style.display = "none";
        }
    }
    rollSkill(clicked_id){
        // grabs the data needed to make the roles happen for the skills it is taken from the Character section of the webstie.
        this.initProfecMod = document.getElementById("profecMod").value;
        this.initStrMod = document.getElementById("strMod").value;
        this.initDexMod = document.getElementById("dexMod").value;
        this.initConMod = document.getElementById("conMod").value;
        this.initIntMod = document.getElementById("intMod").value;
        this.initWisMod  = document.getElementById("wisMod").value;
        this.initChaMod = document.getElementById("chaMod").value;
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'acroButton'){
            if(document.getElementById("Arcobatics").checked){
                let txt20Output = document.getElementById('arcoOut');
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod); 
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
                
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('arcoOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'AnimalButton'){
            if(document.getElementById("animalHandling").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('animalOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('animalOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'ArcanButton'){
            if(document.getElementById("arcana").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('animalOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('arcanaOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'AthletButton'){
            if(document.getElementById("athletics").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initStrMod);
                let txt20Output = document.getElementById('athletOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initStrMod);
                let txt20Output = document.getElementById('athletOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'decepButton'){
            if(document.getElementById("deception").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('decepOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('decepOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'histButton'){
            if(document.getElementById("history").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('historyOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('historyOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'insightButton'){
            if(document.getElementById("insight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('insightOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('insightOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'intimButton'){
            if(document.getElementById("intimidation").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('intimidOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('intimidOut');
                if(die20 < 1){
                die20 = 1;
                txt20Output.value = die20;
            }
            else{
                txt20Output.value = die20;
            }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'investButton'){
            if(document.getElementById("investigation").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('investOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('investOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'medicButton'){
            if(document.getElementById("medicine").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('medicineOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('medicineOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'naturButton'){
            if(document.getElementById("nature").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('natureOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('natureOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'percepButton'){
            if(document.getElementById("percep").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('percepOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('percepOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'peformButton'){
            if(document.getElementById("performance").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('performOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('performOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'persuaButton'){
            if(document.getElementById("persuade").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('persuadeOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initChaMod);
                let txt20Output = document.getElementById('persuadeOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'religionButton'){
            if(document.getElementById("religion").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('religionOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initIntMod);
                let txt20Output = document.getElementById('religionOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'sleightButton'){
            if(document.getElementById("sleight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('sleightOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('sleightOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'stealthButton'){
            if(document.getElementById("sleight").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('stealthOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initDexMod);
                let txt20Output = document.getElementById('stealthOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
        //button that roll a specfic skill it rolls a random number from 1 to 20 then adds or subtracts the stat modeifer for that potecualr skill then check to see if the player 
        // was profeienct in that skill and add that bonus if it was true.
        // also checked if the role would be below 1 it changes it to one bacause you canot roll less than a one
        if(clicked_id == 'survivalButton'){
            if(document.getElementById("survival").checked){
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initProfecMod) + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('survialOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            else{
                let die20 = Math.floor(Math.random() * 20) + 1;
                die20 = die20 + parseInt(this.initWisMod);
                let txt20Output = document.getElementById('survialOut');
                if(die20 < 1){
                    die20 = 1;
                    txt20Output.value = die20;
                }
                else{
                    txt20Output.value = die20;
                }
            }
            
        }
    }
    //Code fot the clear button that clears all the skill input boxes that had pervious rolls the rolling does this already but if it there for the user just in case that had to many numbers 
    // the screen
    hideSkills(){
        let hide = document.getElementsByClassName("hide_skills");
        for (let el of hide) {
            el.value = "";
        }
    }
}
//This initlizes the class for rolling the skill portion of the website
let In = new statInput(0, 0, 0, 0, 0, 0)
function formdata() 
        {
        let rollReq= document.getElementById("request").value;

            let [numRolls, numSides, modifier] = rollReq.split(/[dD+-]{1}/);
            //let mod = rollReq.match(/([+-]{1})([0-9]{1,})/);
            console.log(numRolls, numSides, modifier);
            rollDie(numRolls, numSides, modifier);
        }    


function rollDie(numRolls, numSides, modifier) {
    //this function is a for loop that will roll a (numSides) die (numRoll) times
    if (modifier == undefined){
        modifier = 0;
    }
    if (numRolls && numSides)
        var result = 0
        
        for(let step = 0; step < numRolls; step++){

            result += (1 + Math.floor(Math.random()*numSides))
        }
        //+ + will turn the variable from a string into a number
        let total = result + + modifier
    console.log(total);
    document.getElementById("outRequest").value = total;
 }
 //function make the input change based on what is type into for the equation of mutiple dice rolling
 function adaptiveInput(){
    var input = document.getElementById("request"); // get the input element
    input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    resizeInput.call(input); // immediately call the function
 }

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
//function to run the tabs of the webiste to change when you click on the button of a particular section of the page
function changeSection(evt, section) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active";
  }
adaptiveInput();




