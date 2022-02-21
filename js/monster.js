const searchValue = document.getElementById("searchMonster");

async function loadMonsterTable(url, table, searchValue){
    const tableBody = table.querySelector("tbody");

    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    console.log(searchValue);
    //clear table body
    tableBody.innerHTML = "";

    // change first charecter to upper case and add it back to the string
    let sliceUp = searchValue.slice(1);
    console.log(sliceUp);
    let searchValueUp = searchValue.charAt(0).toUpperCase() + sliceUp;
    console.log(searchValueUp);

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
    loadMonsterTable("./monsters.json", document.querySelector("table"), searchValue.value)
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
  