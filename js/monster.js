$.getJSON('https://www.dnd5eapi.co/api/monsters/adult-black-dragon/', function(data){
        var text = `Name: ${data.name}<br>
                    Health: ${data.hit_points}<br>`
        $(".mypanel").html(text);
        for(var i = data.actions.length; i <= 0; i--) {
            var text2 = `Actions:${data.actions[i].desc}<br>`
            $(".actions").html(text2);
        }
});