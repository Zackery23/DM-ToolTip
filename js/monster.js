const searchValue = document.getElementById("searchMonster");
async function loadMonsterTable(url, table, searchValue){
    const tableBody = table.querySelector("tbody");

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    //console.log(searchValue);
    //clear table body
    tableBody.innerHTML = "";

    // change first charecter to upper case and add it back to the string
    let sliceUp = searchValue.slice(1);
    //console.log(sliceUp);
    let searchValueUp = searchValue.charAt(0).toUpperCase() + sliceUp;
    //console.log(searchValueUp);

        // add monsters that fit the search value
        for (let i = 0; i <= data.monsters.length; i++){
            let str = data.monsters[i]["name"];

            if (str.includes(searchValueUp)){
                const rowElement = document.createElement("tr");

                var cellElement1 = rowElement.appendChild(document.createElement("td"));
                var cellElement2 = rowElement.appendChild(document.createElement("td"));
                var cellElement3 = rowElement.appendChild(document.createElement("td"));
                var cellElement4 = rowElement.appendChild(document.createElement("td"));

                cellElement1.innerHTML = data.monsters[i]["name"];
                cellElement2.innerHTML = data.monsters[i]["hit_points"];
                cellElement3.innerHTML = data.monsters[i]["challenge_rating"];
                cellElement4.innerHTML = data.monsters[i].actions[0]["name"];
                tableBody.appendChild(rowElement);
            }   
    }
}
function runSearch(){
    loadMonsterTable("data/monsters.json", document.querySelector("table"), searchValue.value)
}

async function findIndexMonster1(){
  const response = await fetch("data/monsters.json");
  const data = await response.json();
  const makeMonsterVal = document.getElementById("monsterSearch");
  
  
  // gets search value from user
  let mon = makeMonsterVal.value;
  

  //console.log(data.monsters[makeMonsterVal]);
  let sliceUp = mon.slice(1);
  //console.log(sliceUp);
  let searchValueUp = mon.charAt(0).toUpperCase() + sliceUp;

  //var index = data.monsters.indexOf(searchValueUp);
  let i = 0;
  let len = data.monsters.length;
  console.log(len);
  while (i <= len){
    if(data.monsters[i]["name"] == searchValueUp){
      makeMonster(i);
      return;
    }
    i++
  }

  
  
}
async function findIndexMonster2(){
  const response = await fetch("data/monsters.json");
  const data = await response.json();
  const makeMonsterVal = document.getElementById("monsterSearch");
  
  
  // gets search value from user
  let mon = makeMonsterVal.value;
  

  //console.log(data.monsters[makeMonsterVal]);
  let sliceUp = mon.slice(1);
  //console.log(sliceUp);
  let searchValueUp = mon.charAt(0).toUpperCase() + sliceUp;

  //var index = data.monsters.indexOf(searchValueUp);
  let i = 0;
  let len = data.monsters.length;
  console.log(len);
  while (i <= len){
    if(data.monsters[i]["name"] == searchValueUp){
      monster(i);
      return;
    }
    i++
  }

  
  
}


// Grabing info on a specific monster 
async function makeMonster(index){
  const response = await fetch("data/monsters.json");
  const data = await response.json();
  var monsterSkills = "";
  var monsterSavingThrows = "";
  //check for skills
  if (data.monsters[index]["acrobatics"] >= 0){
    monsterSkills += "Acrobatics +" + data.monsters[index]["acrobatics"] + " ";
  }
  if (data.monsters[index]["arcana"] >= 0){
    monsterSkills += "Arcana +" + data.monsters[index]["arcana"] + " ";
  }
  if (data.monsters[index]["athletics"] >= 0){
    monsterSkills += "Athletics +" + data.monsters[index]["athletics"] + " ";
  }
  if (data.monsters[index]["deception"] >= 0){
    monsterSkills += "Deception +" + data.monsters[index]["deception"] + " ";
  }
  if (data.monsters[index]["history"] >= 0){
    monsterSkills += "History +" + data.monsters[index]["history"] + " ";
  }
  if (data.monsters[index]["insight"] >= 0){
    monsterSkills += "Insight +" + data.monsters[index]["insight"] + " ";
  }
  if (data.monsters[index]["intimidation"] >= 0){
    monsterSkills += "Intimidation +" + data.monsters[index]["intimidation"] + " ";
  }
  if (data.monsters[index]["investigation"] >= 0){
    monsterSkills += "Investigation +" + data.monsters[index]["investigation"] + " ";
  }
  if (data.monsters[index]["medicine"] >= 0){
    monsterSkills += "Medicine +" + data.monsters[index]["medicine"] + " ";
  }
  if (data.monsters[index]["nature"] >=0){
    monsterSkills += "Nature +" + data.monsters[index]["nature"] + " ";
  }
  if (data.monsters[index]["perception"] >= 0){
    monsterSkills += "Perception +" + data.monsters[index]["perception"] + " ";
  }
  if (data.monsters[index]["performance"] >= 0){
    monsterSkills += "Performance +" + data.monsters[index]["performance"] + " ";
  }
  if (data.monsters[index]["persuasion"] >= 0){
    monsterSkills += "Persuasion +" + data.monsters[index]["persuasion"] + " ";
  }
  if (data.monsters[index]["religion"] >= 0){
    monsterSkills += "Religion +" + data.monsters[index]["religion"] + " ";
  }
  if (data.monsters[index]["stealth"] >=0){
    monsterSkills += "Stealth +" + data.monsters[index]["stealth"] + " ";
  }
  if (data.monsters[index]["survival"] >= 0){
    monsterSkills += "Survival +" + data.monsters[index]["survival"] + " ";
  }

  //check for Saving throw modiferies
  if (data.monsters[index]["strength_save"] > 0){
    monsterSavingThrows += "STR: +" + data.monsters[index]["strength_save"] + " ";
  }
  if (data.monsters[index]["dexterity_save"] > 0){
    monsterSavingThrows += "DEX: +" + data.monsters[index]["dexterity_save"] + " ";
  }
  if (data.monsters[index]["constitution_save"] > 0){
    monsterSavingThrows += "CON: +" + data.monsters[index]["constitution_save"] + " ";
  }
  if (data.monsters[index]["intelligence_save"] > 0){
    monsterSavingThrows += "INT: +" + data.monsters[index]["intelligence_save"] + " ";
  }
  if (data.monsters[index]["wisdom_save"] > 0){
    monsterSavingThrows += "WIS: +" + data.monsters[index]["wisdom_save"] + " ";
  }
  if (data.monsters[index]["charisma_save"] > 0){
    monsterSavingThrows += "CHA: +" + data.monsters[index]["charisma_save"] + " ";
  } 
  // grabbing divs id so the information can be put into them when make monster button is called.
  let template = document.getElementById("template");

  let monsterStart = document.getElementById("monsterStart");
  let align = document.getElementById("align");
  let ac = document.getElementById("ac");
  let hp = document.getElementById("hp");
  let sp = document.getElementById("sp");
  let monsterStats = document.getElementById("monsterStats");
  let savingThrowsInfo = document.getElementById("savingThrowsInfo");
  let skillsInfo = document.getElementById("skillsInfo");
  let dmgVulInfo = document.getElementById("dmgVulInfo");
  let dmgResInfo = document.getElementById("dmgResInfo");
  let dmgImmInfo = document.getElementById("dmgImmInfo");
  let conImmInfo = document.getElementById("conImmInfo");
  let sensesInfo = document.getElementById("sensesInfo");
  let langInfo = document.getElementById("langInfo");
  let challRatingInfo = document.getElementById("challRatingInfo");

  let monsterSpecialAbilites = document.getElementById("monsterSpecialAbilites");
  let monsterActions = document.getElementById("monsterActions");
  let actionInfo = document.getElementById("actionInfo");
  let legendaryActions = document.getElementById("legendaryActions");
  let legendaryActionsInfo = document.getElementById("legendaryActionsInfo");
  
  template.style.visibility = "visible";

  monsterStart.innerHTML = data.monsters[index]["name"];
  align.innerHTML = data.monsters[index]["size"] +" "+ data.monsters[index]["type"] + " " + data.monsters[index]["alignment"]  
  ac.innerHTML = "Armor Class: " + data.monsters[index]["armor_class"];
  hp.innerHTML = "Hit Points: " + data.monsters[index]["hit_points"] + " (" + data.monsters[index]["hit_dice"] + ") ";
  sp.innerHTML = "Speed: " + data.monsters[index]["speed"]

  monsterStats.innerHTML = 
  " STR \xa0\xa0 DEX \xa0\xa0 CON \xa0\xa0 INT \xa0\xa0 WIS \xa0\xa0 CHA" + "<br />" 
  + "\xa0\xa0" + data.monsters[index]["strength"] + "\xa0\xa0\xa0\xa0\xa0  "
  + "\xa0\xa0\xa0" + data.monsters[index]["dexterity"] + "\xa0\xa0\xa0\xa0\xa0\xa0"
  + "\xa0\xa0\xa0" + data.monsters[index]["constitution"] + "\xa0\xa0\xa0\xa0\xa0"
  + "\xa0\xa0" + data.monsters[index]["intelligence"] + "\xa0\xa0\xa0\xa0\xa0"
  + "\xa0\xa0" + data.monsters[index]["wisdom"] + "\xa0\xa0\xa0\xa0\xa0"
  + "\xa0\xa0" + data.monsters[index]["charisma"] + "\xa0\xa0\xa0\xa0\xa0" + "<br />";
  savingThrowsInfo.innerHTML =  "Saving Throws: " + monsterSavingThrows;
  skillsInfo.innerHTML =  "Skills: " + monsterSkills;
  dmgVulInfo.innerHTML = "Damage Vulnerabilities: " + data.monsters[index]["damage_vulnerabilities"];
  dmgResInfo.innerHTML = "Damage Resistances: " + data.monsters[index]["damage_resistances"];
  dmgImmInfo.innerHTML = "Damage Immunities: " + data.monsters[index]["damage_immunities"];
  conImmInfo.innerHTML = "Condtion Immunities: " + data.monsters[index]["condition_immunities"];
  sensesInfo.innerHTML = "Senses: " + data.monsters[index]["senses"];
  langInfo.innerHTML = "Langauges: " + data.monsters[index]["languages"];
  challRatingInfo.innerHTML = "Challenge Rating: " + data.monsters[index]["challenge_rating"];
  //Grabbing Monster Special Abilites
  monsterSpecialAbilites.innerHTML = "";
      // for monster Spcieal Abilites
      for (var key in data.monsters[index]["special_abilities"]){
        for (var key1 in data.monsters[index]["special_abilities"][key]) {
          if (key1 == "name" || key1 == "desc"){
            let dataP5 = document.createElement("div");
            if(data.monsters[index]["special_abilities"][key]["name"] == "Spellcasting" || data.monsters[index]["special_abilities"][key]["name"] == " Innate Spellcasting"){
              let pulled = data.monsters[index]["special_abilities"][key][key1];
              var str = pulled;
              str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
              dataP5.innerHTML = str;
              monsterSpecialAbilites.appendChild(dataP5);
            }
            else{
              dataP5.innerHTML = data.monsters[index]["special_abilities"][key][key1] + "<br />"
              monsterSpecialAbilites.appendChild(dataP5);
            }
          }
        }
      }
  actionInfo.innerHTML = "";
  monsterActions.innerHTML = "";
      for (var key in data.monsters[index]["actions"]){
        for (var key1 in data.monsters[index]["actions"][key]){
          let dataP3 = document.createElement("div");
          let pulled = data.monsters[index]["actions"][key][key1];
          // check if the keys are the information that we want from the api          
          if (key1 == "name" || key1 == "desc"){
            // check for if the key1 is a lair action 
            if(data.monsters[index]["actions"][key]["name"] != "Lair Actions"){
              monsterActions.innerHTML = "Actions";

              dataP3.innerHTML = pulled;
              actionInfo.appendChild(dataP3);
            }
          }
        
        }
      }
      // implements through if the the creatue has legendary actions
      legendaryActions.innerHTML = "";
      legendaryActionsInfo.innerHTML = "";
      for (var key in data.monsters[index]["legendary_actions"]){
        for (var key1 in data.monsters[index]["legendary_actions"][key]) {
          if (key1 == "name" || key1 == "desc"){
            legendaryActions.innerHTML = "Legendary Actions";
            legendaryActions.style.borderBottom = "3px darkred solid";
            let dataP4 = document.createElement("div");
            dataP4.innerHTML = data.monsters[index]["legendary_actions"][key][key1] + "<br />"
            legendaryActionsInfo.appendChild(dataP4);
          }
        }
      }
}
// open nav menu
function openNav() {
  document.getElementById("mySideNav").style.width = "280px";
}
// close nav menu
function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}
// Changes between the navigation of the website
function changeSection(evt, section) {
  var i, navMove, navMovLink;
  navMove = document.getElementsByClassName("navMove");
  for (i = 0; i < navMove.length; i++) {
    navMove[i].style.display = "none";
    closeNav();
  }
  navMovLink = document.getElementsByClassName("navMovLink");
  for (i = 0; i < navMovLink.length; i++) {
    navMovLink[i].className = navMovLink[i].className.replace(" active", "");
    closeNav();
  }
  document.getElementById(section).style.display = "inline";
  evt.currentTarget.className += " active";
}
