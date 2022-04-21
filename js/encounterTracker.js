
var sectionCounter = 1;
var tabCounter = 1;
async function makeTab(){
    const response = await fetch("data/monsters.json");
    const data = await response.json();

    let index = await findIndexMonster2();

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
    var search = document.getElementById("numberMonsters");
    const makeMonsterVal = document.getElementById("monsterSearch2");
    let mon = makeMonsterVal.value;
    let sliceUp = mon.slice(1);
    let searchValueUp = mon.charAt(0).toUpperCase() + sliceUp;
    var num = search.value;

    console.log(num);

    var tabBut = document.getElementById("tabSection");
    var tabcontent = document.getElementById("monsterSheets");

    for(let i = 1; i <= num; i++){


      var tab = document.createElement("button");
  
      tab.id = "tab" + tabCounter;
      tab.innerHTML = searchValueUp + " " +  i;
      
      tab.className = "tablinks";
      console.log(sectionCounter);
      tab.onclick = function(event){
        openTabs(event, "" + searchValueUp + i)
      }
      console.log(tab.onclick);
      tabBut.appendChild(tab);
      tabCounter++;
      //section for where the stat card will go.
      var section = document.createElement("div");
      section.className = "sectionBorder";
      //Main div where stat card shall be
      var monsterMain = document.createElement("div");
      monsterMain.className = "monsterTop";

      var monName = document.createElement("div");
      monName.className = "monsterName";

      var alignInfo = document.createElement("div");
      alignInfo.className = "alignmentInfo";

      var acInfo = document.createElement("div");
      acInfo.className = "acInfo";

      var hpInfo = document.createElement("div");
      hpInfo.className = "hpInfo";

      var speed = document.createElement("div");
      speed.className = "speed";

      var monsterStatsInfo = document.createElement("div");
      monsterStatsInfo.className = "monsterStatsInfo";

      var savThrowsInfo = document.createElement("div");
      savThrowsInfo.className = "savThrowsInfo";

      var skillsInfo = document.createElement("div");
      skillsInfo.className = "skillsInfo";

      var dmgVulInfo = document.createElement("div");
      dmgVulInfo.className = "damgeVulInfo";

      var dmgResInfo = document.createElement("div");
      dmgResInfo.className = "damgeResInfo";

      var dmgImmInfo = document.createElement("div");
      dmgImmInfo.className = "damgeImmInfo";

      var conImmInfo = document.createElement("div");
      conImmInfo.className = "contImmInfo";

      var sensesInfo = document.createElement("div");
      sensesInfo.className = "sensesInfo";

      var langInfo = document.createElement("div");
      langInfo.className = "langInfo";

      var challRatingInfo  = document.createElement("div");
      challRatingInfo.className = "challRatingInfo";

      var monsterSpecialAbilites = document.createElement("div");
      monsterSpecialAbilites.className = "monsterSpecialAbilitesInfo";

      var monsterActions = document.createElement("div");
      monsterActions.className = "monsterActionsInfo";

      var actionInfo = document.createElement("div"); 
      actionInfo.className = "actionsInfo";

      var legendaryActions = document.createElement("div");
      legendaryActions.className = "legendaryActionsInfo";

      var legendaryActionsInfo = document.createElement("div");
      legendaryActionsInfo.className = "legendaryActInfo";


      monName.innerHTML = data.monsters[index]["name"];
      alignInfo.innerHTML = data.monsters[index]["size"] +" "+ data.monsters[index]["type"] + " " + data.monsters[index]["alignment"] 
      acInfo.innerHTML = "Armor Class: " + data.monsters[index]["armor_class"];
      hpInfo.innerHTML = "Hit Points: " + data.monsters[index]["hit_points"] + " (" + data.monsters[index]["hit_dice"] + ") ";
      speed.innerHTML = "Speed: " + data.monsters[index]["speed"];
      monsterStatsInfo.innerHTML = " STR \xa0\xa0 DEX \xa0\xa0 CON \xa0\xa0 INT \xa0\xa0 WIS \xa0\xa0 CHA" + "<br />" 
      + "\xa0\xa0" + data.monsters[index]["strength"] + "\xa0\xa0\xa0\xa0\xa0  "
      + "\xa0\xa0\xa0" + data.monsters[index]["dexterity"] + "\xa0\xa0\xa0\xa0\xa0\xa0"
      + "\xa0\xa0\xa0" + data.monsters[index]["constitution"] + "\xa0\xa0\xa0\xa0\xa0"
      + "\xa0\xa0" + data.monsters[index]["intelligence"] + "\xa0\xa0\xa0\xa0\xa0"
      + "\xa0\xa0" + data.monsters[index]["wisdom"] + "\xa0\xa0\xa0\xa0\xa0"
      + "\xa0\xa0" + data.monsters[index]["charisma"] + "\xa0\xa0\xa0\xa0\xa0" + "<br />";
      savThrowsInfo.innerHTML =  "Saving Throws: " + monsterSavingThrows;
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
              if (key1 == "name"){
                dataP5.style.color = "DarkRed";
                dataP5.style.fontWeight = "bold";
              }
              let pulled = data.monsters[index]["special_abilities"][key][key1];
              var str = pulled;
              str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
              dataP5.innerHTML = str;
              monsterSpecialAbilites.appendChild(dataP5);
            }
            else{
              if (key1 == "name"){
                dataP5.style.color = "DarkRed";
                dataP5.style.fontWeight = "bold";
              }
              dataP5.innerHTML = data.monsters[index]["special_abilities"][key][key1] + "<br />"
              monsterSpecialAbilites.appendChild(dataP5);
            }
          }
        }
      }
      //Grabbign info for actions
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
              if (key1 == "name"){
                dataP3.style.color = "DarkRed";
                dataP3.style.fontWeight = "bold";
              }
              monsterActions.innerHTML = "Actions";

              dataP3.innerHTML = pulled;
              actionInfo.appendChild(dataP3);
            }
          }
        
        }
      }

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

      section.id = searchValueUp + i;
      section.className = "tabcontent";
      
      
      tabcontent.appendChild(section);

      section.appendChild(monsterMain);

      monsterMain.appendChild(monName);

      monsterMain.appendChild(alignInfo);
      monsterMain.appendChild(acInfo);
      monsterMain.appendChild(hpInfo);
      monsterMain.appendChild(speed);

      monsterMain.appendChild(monsterStatsInfo);
      monsterMain.appendChild(savThrowsInfo);

      monsterMain.appendChild(skillsInfo);

      monsterMain.appendChild(dmgVulInfo);
      monsterMain.appendChild(dmgResInfo);
      monsterMain.appendChild(dmgImmInfo);
      monsterMain.appendChild(conImmInfo);

      monsterMain.appendChild(sensesInfo);
      monsterMain.appendChild(langInfo);
      monsterMain.appendChild(challRatingInfo);

      monsterMain.appendChild(monsterSpecialAbilites);

      monsterMain.appendChild(monsterActions);
      monsterMain.appendChild(actionInfo);

      monsterMain.appendChild(legendaryActions);
      monsterMain.appendChild(legendaryActionsInfo);

      //sectionCounter++;
    }
  }
  
//Getting the index for the monster look up 
  async function findIndexMonster2(){
    const response = await fetch("data/monsters.json");
    const data = await response.json();
    const makeMonsterVal = document.getElementById("monsterSearch2");
    
    
    // gets search value from user
    let mon = makeMonsterVal.value;
    
  
    console.log(mon);
    let sliceUp = mon.slice(1);
    //console.log(sliceUp);
    let searchValueUp = mon.charAt(0).toUpperCase() + sliceUp;
  
    let i = 0;
    let len = data.monsters.length;
    console.log(len);
    while (i <= len){
      if(data.monsters[i]["name"] == searchValueUp){
        return i;
      }
      i++
    } 
  }

  function openTabs(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "inline";
    evt.currentTarget.className += " active";
  }
