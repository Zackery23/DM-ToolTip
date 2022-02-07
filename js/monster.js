
function monsterSearch(){
    if (document.getElementById('monsterInput').innerHTML == ''){
        createTable();
    }
    else{
        let myTable = document.getElementById("monsterTable");
        myTable.innerHTML = "";
    }
    var mTable = document.getElementById("monsterTable");

    var e = document.getElementById("monsterSelect");
    console.log(e.value);
    $.getJSON('https://www.dnd5eapi.co/api/monsters/', function(data){
            var searchField = "name";
            var searchVal = e.value;
            
            for (var i = 0; i <= data.results.length; i++){
                var str = data.results[i][searchField]
                if ( str.charAt(0) == searchVal){
                    console.log(data.results[i][searchField]);
                    var row = mTable.insertRow();
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = data.results[i][searchField];
                }
                
            }
    });
}
function deleteRows(){
    var new_tbody = document.createElement('tbody');
    populate_with_new_rows(new_tbody);
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

}
function createTable(){
    let table = document.createElement('table');
    table.setAttribute("id", "monsterTable" );
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the div tag
    document.getElementById('monsterInput').appendChild(table);

}