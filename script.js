/*url: https://picsum.photos*/

function generarURL() {
    
    var id=Math.round(Math.random() *500);

    //Math.random() -> 0 y 1
    return `https://picsum.photos/id/${id}/info`;
}

function getpic() {
    $.ajax({
        type : 'GET',
        url : generarURL(),
        dataType : "json",
        async : true,
        success : function(data){renderpic(data)}
    })
}

function renderpic(data) {
    //creo un div
    let div = $("<div></div>");
    // agregando clases al div
    div.addClass("pic card");


    // creo una etiqueta imagen
    let img= $("<img></img>");
    // agrego el atributo "src" y le indico que parte de la data tiene la imagen
    img.attr("src",data.download_url);
    // agrego clase al img
    img.addClass("card-img");
    //agrega img y todos sus agregados al div
    div.append(img);

    // <div class=" pic card">
    // <img src=data.download_url class="card-img">
    //</div>
    // creando un autor con etiqueta <h3>
    let author=$("<h3></h3>");
    // agrego la clase card-tittle
    author.addClass("card-title");
    //agrego la informacion del autor de la data
    author.append(data.author);
    //<h3 class="card-title"> data.author</h3>
    div.append(author);
     // <div class=" pic card">
    // <img src=data.download_url class="card-img">
     //<h3 class="card-title"> data.author</h3>
    //</div>
    $('#contenedor').append(div);   
}

$(document).ready(
    function() {
        for (let index = 0; index < 9; index++) {
            getpic();  
        }
        
    }
)