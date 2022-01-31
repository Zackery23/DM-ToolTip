
function monsterSearch(){
    $.getJSON('https://www.dnd5eapi.co/api/monsters/', function(data){
            var searchField = "name";
            var searchVal = "";
            for (var i = 0; i <= data.results.length; i++){
                var str = data.results[i][searchField]
                if ( str.charAt(0) == searchVal){
                    console.log(data.results[i][searchField]);
                }
            }
            
    });
}