function openNav(){
    document.getElementById("overplay").style.width = '100%';
    document.getElementById("buttom").style.display = 'none';
    document.getElementById("buttom2").style.display = 'block'
}
function closeNav(){
    document.getElementById("overplay").style.width = '0';
    document.getElementById("buttom2").style.display = 'none'
    document.getElementById("buttom").style.display = 'block';
}
function mudouTamanho(){
    if(window.innerWidth >= 768){
        document.getElementById("buttom").style.display = 'none';
    } else{
        document.getElementById("buttom").style.display = 'block';
    }
}