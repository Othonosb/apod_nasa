$("#data").datepicker({
    onSelect: function(dateText) {
    arr=document.getElementById('data').value.split("/");
    data=`${arr[2]}-${arr[0]}-${arr[1]}`;
    pegar()
    }
});

$("#data").datepicker("setDate", new Date());

arr=document.getElementById('data').value.split("/");
data=`${arr[2]}-${arr[0]}-${arr[1]}`;

function expan(){
    imagem=document.getElementById("imagem")
    if(window.matchMedia("(min-width:800px)").matches){
    if(imagem.classList.contains("peq")){
        imagem.style.cssText="width:100%; margin-bottom:3%"
        imagem.classList.remove("peq")
    } else {
        imagem.style.cssText="width:50%; margin-bottom:0%"
        imagem.classList.add("peq")}}
}

window.onload = pegar()
function pegar(){
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai&date=${data}`,
        success: function(par) {
        var img=par.url
            $('#imagem').attr('src', img);
            $('#background').attr('src', img);
            $('#nome').text(par.title);
            $('#explanation').text(par.explanation);
            $('#copyName').text(par.copyright);
            
        if (par.media_type==="video"){
            document.getElementById('imagem').style.cssText="display:none"
            document.getElementById('video').style.cssText="display:block"
            document.getElementById('video').src=par.url;
            document.getElementById('background').src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
        }

        if (par.media_type==="image"){
            document.getElementById('imagem').style.cssText="display:block"
            document.getElementById('video').style.cssText="display:none"
        }}})}