var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

document.querySelector("button").addEventListener("click", function() {
    img1.classList.add("animate");
    img2.classList.add("animate");

    setTimeout(function() {
        var src1 = img1.src;
        var src2 = img2.src;

        img1.src = src2;
        img2.src = src1;

        img1.classList.remove("animate");
        img2.classList.remove("animate");
    }, 300);
});

