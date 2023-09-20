document.querySelector("video").visibility = "hidden";

document.querySelector("button").addEventListener("click", function(){
    document.querySelector("button").style.visibility = 'hidden';
    document.querySelector("video").style.visibility = 'visible';
})