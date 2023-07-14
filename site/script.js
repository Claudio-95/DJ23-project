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

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico
const graphicsContainer = document.getElementById('graphics-container');
const graphics1Btn = document.getElementById('graphics1-btn');
const graphics2Btn = document.getElementById('graphics2-btn');
const graphics3Btn = document.getElementById('graphics3-btn');

document.addEventListener('DOMContentLoaded', function() {
    // Funzioni di gestione degli eventi per i pulsanti
    graphics1Btn.addEventListener('click', function() {
        fetch('twitter_altair_charts/chartSentimentING.json')
            .then(response => response.text())
            .then(data => {
                graphicsContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Errore durante il caricamento del grafico 1:', error);
            });
    });

    graphics2Btn.addEventListener('click', function() {
        fetch('reddit_altair_charts/chartSentimentING_reddit.json')
            .then(response => response.text())
            .then(data => {
                graphicsContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Errore durante il caricamento del grafico 2:', error);
            });
    });

    graphics3Btn.addEventListener('click', function() {
        fetch('comparativeAnalysis_twitter_reddit.json')
            .then(response => response.text())
            .then(data => {
                graphicsContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Errore durante il caricamento del grafico 3:', error);
            });
    });
});


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
