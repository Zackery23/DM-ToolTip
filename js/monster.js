const searchValue = document.getElementById("searchMonster");

async function loadMonsterTable(url, table, searchValue){
    const tableBody = table.querySelector("tbody");

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //clear table body
    tableBody.innerHTML = "";

    // add monsters that fit the search value
    for (let i = 0; i <= data.monsters.length; i++){
        let str = data.monsters[i]["name"];

        if (str.includes(searchValue)){
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