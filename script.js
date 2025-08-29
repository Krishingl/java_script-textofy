function changeBgColor(color){
    document.getElementById('area').style.backgroundColor = color
}

function changeTextColor(color){
    document.getElementById('area').style.color = color
}

function changeFont(font){
    document.getElementById('area').style.fontFamily = font
}

function downloadImage(){
    const image = document.getElementById('area')

    html2canvas(image)
        .then(canvas =>{
            const link = document.createElement('a')
            link.download = "textofy.png"
            link.href = canvas.toDataURL("image/png")
            link.click()
        })
        .catch()
}