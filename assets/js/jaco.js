/* make image bigger on hover*/

var flowchartButton = document.getElementsByClassName('flowchart_button')[0];
var flowchartImage = document.getElementById('flowchart');

flowchartButton.addEventListener('click', function() {
    
    if(flowchartButton.textContent == "Make smaller") {
        flowchartButton.textContent = "Make bigger";
        flowchartImage.style.position = "static";
        flowchartImage.style.width = "100%";
        flowchartImage.style.height = "100%";
        flowchartImage.style.left= "0";
        flowchartImage.style.top = "0";
        flowchartImage.style.transform = "translate(0, 0)";        
        flowchartImage.style.margin = "0 auto"; 
    } else if(flowchartButton.textContent == "Make bigger") {
        flowchartButton.textContent = "Make smaller";  
        flowchartImage.style.width = "150%";
        flowchartImage.style.height = "150%";
        flowchartImage.style.transform = "translate(-50%, -50%)";
        flowchartImage.style.position = "relative";
        flowchartImage.style.left = "50%";
        flowchartImage.style.top = "300px";
        flowchartImage.style.margin = "0 auto"; 
    }
});