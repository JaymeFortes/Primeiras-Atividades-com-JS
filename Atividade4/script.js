
function carregar() {
    const msg = window.document.getElementById('msg');
    const img = window.document.getElementById('imagem');
    const data = new Date();
    //const hora = data.getHours();
    const hora = 12
    
    
    msg.innerHTML = "Agora são: " + hora +":00 " + " horas."
    if (hora >= 6 && hora <= 12) {
        img.src = "photos/manha.png"
        document.body.style.background = "#e2cd9f"
    }else if (hora > 12 && hora <= 18) {
        img.src = "photos/tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        img.src = "photos/noite.png"
        document.body.style.background = "#515154";
    }
}