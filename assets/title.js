let titleInterval;
let title = ["reallytoxic.com", "r", "re", "rea", "real", "raell", "really", "reallyt", "reallyto", "reallytox", "reallytoxi", "reallytoxic", "reallytoxic.", "reallytoxic.c", "reallytoxic.co", "reallytoxic.com"];

let iter = 0;
setInterval(() => {
    document.title = title[iter++ % title.length]
    if (iter >= title.length + 1) { iter = 0; }
}, 350)