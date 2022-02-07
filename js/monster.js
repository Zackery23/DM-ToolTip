
function monsterSearch(){
    if (document.getElementById('monsterInput').innerHTML == ''){
        createTable();

        var mTable = document.getElementById("monsterTable");
        var header = mTable.createTHead();
        var row = header.insertRow();

        var hCell1 = row.insertCell();
        hCell1.innerHTML = "Name";

        var hCell2 = row.insertCell();
        hCell2 = row.innerHTML = "HitPoints";
    }
    else{
        document.getElementById("monsterTable").remove();
        
    }

    var mTable = document.getElementById("monsterTable");
    var mBody  = document.getElementById("mBody")
    var e = document.getElementById("searchMonster");

    console.log(e.value);
    $.getJSON('https://www.dnd5eapi.co/api/monsters/', function(data){
            var searchField = "name";
            var searchVal = e.value;

            for (var i = 0; i <= data.results.length; i++){
                var str = data.results[i][searchField]
                if ( str.includes(searchVal)){
                    console.log(data.results[i][searchField]);
                    row = mBody.insertRow();

                    var cell = row.insertCell();
                    cell.innerHTML = data.results[i][searchField];
                    
                    var cell2 = row.insertCell()
                    cell2.innerHTML = "test";

                }
                
            }
    });
}
function createTable(){
    let table = document.createElement('table');
    table.setAttribute("id", "monsterTable" );
    
    let tbody = document.createElement('tbody');
    tbody.setAttribute("id", "mBody");
    
    table.appendChild(tbody);
    
    // Adding the entire table to the div tag
    document.getElementById('monsterInput').appendChild(table);

}