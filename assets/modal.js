// The amount of slides we have for each game
let slideCounts = {
    real: 2,
    toxic: 1,
}

// slideshow shit
for (const game in slideCounts) {
    slideCounts[game]--;
}
function doPreload(game) {
    if (document.getElementById("preload").children.length > 0) {
        const arr = Array.from(document.getElementById("preload").children);
        arr.forEach(el => el.remove());        
    }
    for (let i = 0; i < slideCounts[game] + 1; i++) {
        let imel = document.createElement("img");
        imel.setAttribute("src", `../images/${game}_slides/${i + 1}.png`);
        imel.setAttribute("height", "1");
        imel.setAttribute("width", "1");
        imel.setAttribute("id", "prld");
        imel.style.position = "absolute"
        imel.style.display = "none"
        document.getElementById("preload").appendChild(imel);
    }
}

let currentIndex = 1;
let currentGame = ""
let maxIndex = 0

function updateSlide(val) {
    document.getElementById("slide").src = `../images/${currentGame}_slides/${val}.png`;
};


document.getElementById("back").onclick = function () {
    if (currentIndex == 1) {
        currentIndex = maxIndex;
        updateSlide(currentIndex);
    } else if (currentIndex > 1) {
        currentIndex = currentIndex - 1;
        updateSlide(currentIndex);
    }
};
document.getElementById("forward").onclick = function () {
    if (currentIndex == maxIndex) {
        currentIndex = 1;
        updateSlide(currentIndex);
    } else if (currentIndex < maxIndex) {
        currentIndex = currentIndex + 1;
        updateSlide(currentIndex);
    }
};

// modal related shit
let modal = document.getElementById("featureModal");

function openModal(modalType) {
    currentIndex = 1
    maxIndex = slideCounts[modalType] + 1
    currentGame = modalType
    doPreload(modalType)
    updateSlide(1)
    $("#featureModal").fadeIn();
}
window.onclick = function(event) {
    if (event.target == modal) {
        $("#featureModal").fadeOut();
    } else if (event.target == document.getElementsByClassName("modalimg")[0]) {
        $("#featureModal").fadeOut();    
    }
}