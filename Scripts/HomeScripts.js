
function resetBackground() {
    document.body.style.backgroundImage = "url('../Images/Onepunch.jpg')";
    document.body.style.backgroundPosition = "top left";
    document.body.style.backgroundSize = "100% auto";
}




function switchBackground(bottomImg) {

    switch (bottomImg.id) {
        case "tatsumakiPic":
            document.body.style.backgroundImage = "url('../Images/TatsumakiBackground.jpg')";
            document.body.style.backgroundPosition = "top left";
            document.body.style.backgroundSize = "100% auto";
            break;
        case "genosPic":
            document.body.style.backgroundImage = "url('../Images/GenosBackground.jpg')";
            document.body.style.backgroundPosition = "top left";
            document.body.style.backgroundSize = "100% auto";
            break;
        case "saitamaPic":
            document.body.style.backgroundImage = "url('../Images/SaitamaBackground.png')";
            document.body.style.backgroundPosition = "top left";
            document.body.style.backgroundSize = "100% auto";
            break;
        case "riderPic":
            document.body.style.backgroundImage = "url('../Images/RiderBackground.jpg')";
            document.body.style.backgroundPosition = "top left";
            document.body.style.backgroundSize = "100% auto";
            break;
        case "sonicPic":
            document.body.style.backgroundImage = "url('../Images/SonicBackground.png')";
            document.body.style.backgroundPosition = "top left";
            document.body.style.backgroundSize = "100% auto";
            break;
    }

}
