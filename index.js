document.querySelector("i.bi-chevron-left").addEventListener("click", () => {
    let backgroundImage = document.querySelector(".carousel").style.backgroundImage.split("-")[1][0];
    backgroundImage==1 ? backgroundImage=6 : backgroundImage--;
    document.querySelector(".carousel").style.backgroundImage = `url(./images/background-${backgroundImage}.jpg`;
    clearInterval(timer);
    timer = setInterval(bg, 10000);
});

document.querySelector("i.bi-chevron-right").addEventListener("click", () => {
    let backgroundImage = document.querySelector(".carousel").style.backgroundImage.split("-")[1][0];
    backgroundImage==6 ? backgroundImage=1 : backgroundImage++;
    document.querySelector(".carousel").style.backgroundImage = `url(./images/background-${backgroundImage}.jpg`;
    clearInterval(timer);
    timer = setInterval(bg, 10000);
});

const bg = () => {
    document.querySelector("i.bi-chevron-right").click();
}

let timer = setInterval(bg, 10000);