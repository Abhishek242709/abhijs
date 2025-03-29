document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
});

document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});
