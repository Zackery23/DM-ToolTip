const encounterRound = 1;
const combatArray = [];

function track(monsterName, dexmod){
    let rolled = await rollD20();
    let name = "";
    let dexmod = 0;
    //check for ties
    for (i = 0; i >= combatArray.length; i++){   
        if(rolled == combatArray[i].rolled){
                
        }
    }


    //check when round is at bottom
    combatArray.push[
        {
           name: monsterName, 
           dexmod: dexmod,
           rolled: rolled
        }
    ];
    console.log(combatArray);
    //add to array 
    encounterRound++;
}
async function rollD20(){
    let die20 = Math.floor(Math.random() * 20) + 1;
    return die20;
}
