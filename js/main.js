
document.getElementById("submit").addEventListener("mouseup", function () {

    var w = parseInt(document.getElementById("weight").value);
    var h = parseInt(document.getElementById("height").value) / 100;

    if (isNaN(w) || isNaN(h)) {
        return;
    }

    var r = w / (h * h);

    document.getElementById("result").innerText = "您的結果為:" + r;
    document.getElementById("result-p").style.display = "block"
});

document.getElementById("reset").addEventListener("mouseup", function () {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result-p").style.display = "none";

});