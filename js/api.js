$(document).ready(function() {
    $('#btnMostrarRopa').click(function(){
        $.get("http://fakestoreapi.com/products",
            function(data) {
                debugger
                $.each(data, 
                    function(i, item) {
                        var td1 = `<td>${item.title}</td>`;
                        var td2 = `<td><img class="ropa" src="${item.image}"></td>`;
                        var tr = `<tr>${td1}${td2}</tr>`;
                        $('#tblCategorias').append(tr);
                    });
            });
    });
});