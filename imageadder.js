const images = ["images/me1.png", "images/me2.png", "images/me3.png", "images/me4.png"]

let i = 0

function placeImage(x,y) {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute ("src", nextImage)
    img.style.left = x + "px"
    img.style.left = y + "px"

    document.body.appendChild(img)

    i = i + 1

    if (i>= images.length) {
        i=0
    }
}

document.addEventListener("click", function (event){
    event.preventDefault()
    placeImage (event.pageX, event.pageY)
 })