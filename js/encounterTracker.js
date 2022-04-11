
var sectionCounter = 1;
var tabCounter = 1;
async function makeTab(){
    const response = await fetch("data/monsters.json");
    const data = await response.json();

    let index = await findIndexMonster2();
    console.log(index);

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

      var section = document.createElement("div");
      var monTest = document.createElement("div");

      monTest.innerHTML = data.monsters[index]["name"];

      section.id = searchValueUp + i;
      section.className = "tabcontent";
      
      
      tabcontent.appendChild(section);
      section.appendChild(monTest);
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
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
