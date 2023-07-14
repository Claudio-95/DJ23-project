// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

//bottone per visualizzazione dei grafici
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('visualization-btn');
    const visualizations = document.getElementsByClassName('visualization');
  
    button.addEventListener('click', function() {
      // Loop through all visualizations and toggle their active state
      for (let i = 0; i < visualizations.length; i++) {
        visualizations[i].classList.toggle('active');
      }
    });
  });
  
