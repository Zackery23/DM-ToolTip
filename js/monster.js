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

async function findIndexMonster(){
  const response = await fetch("data/monsters.json");
  const data = await response.json();
  const makeMonsterVal = document.getElementById("makeMonster");
  
  
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
    }
    i++
  }

  
  
}


// Grabing info on a specific monster 
async function makeMonster(index){
  console.log(index);
  // get the JSon data fro each monster loaded to be displayed when searched for creation
  const response = await fetch("data/monsters.json");
  const data = await response.json();
  var monsterSkills = "";

  // grabing the ids for where the data shall be place into
  let monsterName = document.getElementById("monsterName")
  let monsterStats_Immunites = document.getElementById("monsterStats_Immunites");
  let monsterSpcialAblites = document.getElementById("monsterAblites");
  let actions = document.getElementById("actions");
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
  if (data.monsters[index]["nature"] >= 0){
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
  if (data.monsters[index]["stealth"] >= 0){
    monsterSkills += "Stealth +" + data.monsters[index]["stealth"] + " ";
  }
  if (data.monsters[index]["survival"] >= 0){
    monsterSkills += "Survival +" + data.monsters[index]["survival"] + " ";
  }
  

  //adding monsters name, size ,type and alignment  to the div of what was searched
  monsterName.innerHTML = data.monsters[index]["name"] + "<br />" 
      + " Size: " + data.monsters[index]["size"] + " Type: " + data.monsters[index]["type"] 
      + " Alignment: " + data.monsters[index]["alignment"];
  //console.log(monsterName);
 /* for (const key1 in data.monsters[10]) {
      console.log(data.monsters[10][key1])
  }
  */
  monsterStats_Immunites.innerHTML = "Armor Class: " + data.monsters[index]["armor_class"] + "<br />" 
      + " Health: " + data.monsters[index]["hit_points"]  
      + " (" + data.monsters[index]["hit_dice"] + ") " + "<br />" 
      + " Speed: " + data.monsters[index]["speed"] + "<br />" 
      + " STR DEX CON INT WIS CHA" + "<br />" + "<br />" 
      + data.monsters[index]["strength"] + " "
      + data.monsters[index]["dexterity"] + " "
      + data.monsters[index]["constitution"] + " "
      + data.monsters[index]["intelligence"] + " "
      + data.monsters[index]["wisdom"] + " "
      + data.monsters[index]["charisma"] + " " + "<br />"
      + " Saving Throws: " 
      + " STR + " 
      +  data.monsters[index]["strength_save"]
      + ", DEX  + "
      +  data.monsters[index]["dexterity_save"]
      + ", CON + "
      +  data.monsters[index]["constitution_save"]
      + ", INT + "
      +  data.monsters[index]["intelligence_save"]
      + ", Wis + "
      +  data.monsters[index]["wisdom_save"]
      + ", CHA  + "
      +  data.monsters[index]["charisma_save"] + "<br />" 

      // checking to see if the creature has that skill
      //console.log(monsterSkills);
      + "Skills: " + monsterSkills + "<br />" 
      + "Damage Vulnerabilities: " + data.monsters[index]["damage_vulnerabilities"] + "<br />" 
      + "Damage Resistances: " + data.monsters[index]["damage_resistances"] + "<br />" 
      + "Damage Immunities: " + data.monsters[index]["damage_immunities"] + "<br />" 
      + "Condtion_immunities: " + data.monsters[index]["condition_immunities"] + "<br />"
      + "Senses: " + data.monsters[index]["senses"] + "<br />"
      + "Languages: " + data.monsters[index]["languages"] + "<br />"
      + "Challenge Rating: " + data.monsters[index]["challenge_rating"];
  
      //loop trhough all actions and if the creature has lair actions
      actions.innerHTML = "";
      for (var key in data.monsters[index]["actions"]){
        for (var key1 in data.monsters[index]["actions"][key]){
          let dataP3 = document.createElement("div");
          let pulled = data.monsters[index]["actions"][key][key1];
          // check if the keys are the information that we want from the api          
          if (key1 == "name" || key1 == "desc"){
            // check for if the key1 is a lair action 
            if(data.monsters[index]["actions"][key]["name"] == "Lair Actions"){

              console.log(data.monsters[index]["actions"][key][key1]);
              // we need to alter \n to <br />
              var str = pulled;
              str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');

              console.log(str);

              dataP3.innerHTML = str;
              actions.appendChild(dataP3);
            }
            else{
              dataP3.innerHTML = pulled;
              actions.appendChild(dataP3);
            }
          }
        
        }

      }
      // implements through if the the creatue has legendary actions
      for (var key in data.monsters[index]["legendary_actions"]){
        for (var key1 in data.monsters[index]["legendary_actions"][key]) {
          if (key1 == "name" || key1 == "desc"){
            let dataP4 = document.createElement("div");
            dataP4.innerHTML = data.monsters[index]["legendary_actions"][key][key1] + "<br />"
            actions.appendChild(dataP4);
          }
        }
      }
      monsterSpcialAblites.innerHTML = "";
      // for monster Spcieal Abilites
      for (var key in data.monsters[index]["special_abilities"]){
        for (var key1 in data.monsters[index]["special_abilities"][key]) {
          if (key1 == "name" || key1 == "desc"){
            let dataP5 = document.createElement("div");
            dataP5.innerHTML = data.monsters[index]["special_abilities"][key][key1] + "<br />"
            monsterSpcialAblites.appendChild(dataP5);
          }
        }
      }
}
// open nav menu
function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
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
  }
  navMovLink = document.getElementsByClassName("navMovLink");
  for (i = 0; i < navMovLink.length; i++) {
    navMovLink[i].className = navMovLink[i].className.replace(" active", "");
  }
  document.getElementById(section).style.display = "block";
  evt.currentTarget.className += " active";
}