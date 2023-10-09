/* make image bigger on hover*/

var imageHandle = document.getElementById('flowchart');

imageHandle.addEventListener('mouseover', function() {
    imageHandle.style.width = "175%";
    imageHandle.style.height = "175%";
    imageHandle.style.transform = "translate(-50%, -50%)";
    imageHandle.style.position = "relative";
    imageHandle.style.left = "50%";
    imageHandle.style.top = "300px";
    imageHandle.style.margin = "0 auto"; 
});

imageHandle.addEventListener('mouseout', function() {
    imageHandle.style.width = "100%";
    imageHandle.style.height = "100%";
    imageHandle.style.transform = "none";
    imageHandle.style.position = "static";
    imageHandle.style.left = "0";
    imageHandle.style.top = "0";
});
