
function monsterSearch(){
    var e = document.getElementById("monsterSelect");
    var table = document.createElement("table");
    var row = document.createElement("row");
    document.getElementById("submit1").appendChild(table);
    console.log(e.value);
    $.getJSON('https://www.dnd5eapi.co/api/monsters/', function(data){
            var searchField = "name";
            var searchVal = e.value;
            for (var i = 0; i <= data.results.length; i++){
                var str = data.results[i][searchField]
                if ( str.charAt(0) == searchVal){
                    console.log(data.results[i][searchField]);
                }
                
            }
    });
}