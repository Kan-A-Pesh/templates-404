feather.replace({
    "stroke-width": 2,
    stroke: "#fff",
    width: 32,
    height: 32,
});

const images = document.querySelectorAll(".pictures > img");
let imageIndex = -1;

setInterval(() => {
    imageIndex = (imageIndex + 1) % images.length;
    images[imageIndex].scrollIntoView({ behavior: "smooth" });
}, 3000);
