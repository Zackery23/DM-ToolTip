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
    loadMonsterTable("database/monsters.json", document.querySelector("table"), searchValue.value)
}
function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}
  
function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

// Changes between the navigation oif the website
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
// Grabing info on a specific monster 
async function makeMonster(){
  // get the JSon data fro each monster loaded to be displayed when searched for creation
  const response = await fetch("database/monsters.json");
  const data = await response.json();
  //console.log(data.monsters[10]);

  // grabing the ids for where the data shall be place into
  let monsterName = document.getElementById("monsterName")
  let monsterStats_Immunites = document.getElementById("monsterStats_Immunites");
  let monsterAblites = document.getElementById("monsterAblites");
  let actions = document.getElementById("actions");
  
  //data paragraph's to place data into the divs.
  let dataP1 = document.createElement("p");
  let dataP2 = document.createElement("p");
  
  let dataP4 = document.createElement("p");
  //adding monsters name, size ,type and alignment  to the div of what was searched
  dataP1.innerHTML = data.monsters[10]["name"] + "<br />" 
      + " Size: " + data.monsters[10]["size"] + " Type: " + data.monsters[10]["type"] 
      + " Alignment: " + data.monsters[10]["alignment"];
  monsterName.appendChild(dataP1);
  //console.log(monsterName);
 /* for (const key1 in data.monsters[10]) {
      console.log(data.monsters[10][key1])
  }
  */
  dataP2.innerHTML = "Armor Class: " + data.monsters[10]["armor_class"] + "<br />" 
      + " Health: " + data.monsters[10]["hit_points"] + 
      + " (" + data.monsters[10]["hit_dice"] + ") " + "<br />" 
      + " Speed: " + data.monsters[10]["speed"] + "<br />" 
      + " STR DEX CON INT WIS CHA" + "<br />" + "<br />" 
      + data.monsters[10]["strength"] + " "
      + data.monsters[10]["dexterity"] + " "
      + data.monsters[10]["constitution"] + " "
      + data.monsters[10]["intelligence"] + " "
      + data.monsters[10]["wisdom"] + " "
      + data.monsters[10]["charisma"] + " " + "<br />"
      + " Saving Throws: " 
      + " STR + " 
      +  data.monsters[10]["strength_save"]
      + ", DEX  + "
      +  data.monsters[10]["dexterity_save"]
      + ", CON + "
      +  data.monsters[10]["constitution_save"]
      + ", INT + "
      +  data.monsters[10]["intelligence_save"]
      + ", Wis + "
      +  data.monsters[10]["wisdom_save"]
      + ", CHA  + "
      +  data.monsters[10]["charisma_save"] + "<br />" 
      + "Skills: " + "<br />" 
      + "Damage Vulnerabilities " + data.monsters[10]["damage_vulnerabilities"] + "<br />" 
      + "Damage Resistances: " + data.monsters[10]["damage_resistances"] + "<br />" 
      + "Damage Immunities: " + data.monsters[10]["damage_immunities"] + "<br />" 
      + "Condtion_immunities: " + data.monsters[10]["condition_immunities"] + "<br />"
      + "Senses: " + data.monsters[10]["senses"] + "<br />"
      + "Languages: " + data.monsters[10]["languages"] + "<br />"
      + "Challenge Rating: " + data.monsters[10]["challenge_rating"];
  
      monsterStats_Immunites.appendChild(dataP2);
      
      for (var key in data.monsters[10]["actions"]){
        for (var key1 in data.monsters[10]["actions"][key]){
          let dataP3 = document.createElement("div");
          let pulled = data.monsters[10]["actions"][key][key1];

          // check if the keys are the information that we want from the api          
          if (key1 == "name" || key1 == "desc"){
            // check for if the key1 is a lair action 
            if(key1 == "Lair Actions" && key1 == "desc"){

              console.log(data.monsters[10]["actions"]["Lair Actions"]["desc"]);
              // we need to alter \n to <br />
              let str = pulled;
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
}
  