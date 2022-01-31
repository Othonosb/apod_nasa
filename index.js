let botao = $("procurar");

botao.click(function(e){
    e.preventDefault();
    searchApod();
});


function searchApod(){
    let diaF = $("#data").val();
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=hKC5FBa659C49B6uarPtxtyXqGwIbOnwHHdncU9L=${diaF}`,
        type:'GET',
        contentType:'application/json',
success:function(executar){
    $
}

    })

}