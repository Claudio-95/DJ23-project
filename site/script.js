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
const graphicsContainerSentiment = document.getElementById('graphics-container-sentiment');
const graphics1BtnSentiment = document.getElementById('graphics1-btn-sentiment');
const graphics2BtnSentiment = document.getElementById('graphics2-btn-sentiment');
const graphics3BtnSentiment = document.getElementById('graphics3-btn-sentiment');

document.addEventListener('DOMContentLoaded', function() {
    // Funzioni di gestione degli eventi per i pulsanti
    graphics1BtnSentiment.addEventListener('click', function() {
        // Crea il grafico Vega-Lite direttamente nel tuo script JavaScript
        // chartSentimentING_reddit
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axis": {"grid": false},
            "legend": {"orient": "top"}
            },
                "data": {"name": "data-800eee6c893eaac0f5534d5c99f91252"},
                "mark": {"type": "area", "opacity": 0.1},
                "encoding": {
                "color": {
                    "field": "sentiment_complete",
                        "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Negativo", "Neutrale"],
                            "range": ["#ADFC92", "#F44E3F", "#788BFF"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "tooltip": {"field": "sentiment_complete", "type": "nominal"},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "Comment date",
                        "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di commenti"},
                    "field": "Value",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_28",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "title": {
                "text": "Evoluzione del sentimento verso Chat-GPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di Commenti"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-800eee6c893eaac0f5534d5c99f91252": [
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 4717
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 9471
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 2339
                    },
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 5138
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 10454
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 3002
                    },
                    {
                        "Comment date": "April 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 9626
                    },
                    {
                        "Comment date": "May 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 18334
                    },
                    {
                        "Comment date": "June 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 4897
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        vegaEmbed('#graphics-container-sentiment', spec);
    });

    graphics2BtnSentiment.addEventListener('click', function() {
        // chartITsentiment
        const spec = {
            "config": {"view": {"continuousWidth": 300, "continuousHeight": 300}},
            "data": {"name": "data-f5aa40d221b8f095fd9ec2a8cf953d4d"},
            "mark": {"type": "line", "opacity": 0.1},
            "encoding": {
                "color": {
                    "field": "sentiment_complete",
                        "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "date",
                        "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di tweets"},
                    "field": "Value",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "title": {
                "text": "Evoluzione del sentimento verso Chat GPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di Tweets"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-f5aa40d221b8f095fd9ec2a8cf953d4d": [
                    {"date": "September 2022", "sentiment_complete": "Negativo", "Value": 64},
                    {"date": "October 2022", "sentiment_complete": "Negativo", "Value": 103},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Negativo",
                        "Value": 12890
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 21900
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 6205
                    },
                    {"date": "March 2023", "sentiment_complete": "Negativo", "Value": 3109},
                    {"date": "April 2023", "sentiment_complete": "Negativo", "Value": 2138},
                    {"date": "May 2023", "sentiment_complete": "Negativo", "Value": 1901},
                    {"date": "June 2023", "sentiment_complete": "Negativo", "Value": 999},
                    {
                        "date": "September 2022",
                        "sentiment_complete": "Neutrale",
                        "Value": 101
                    },
                    {"date": "October 2022", "sentiment_complete": "Neutrale", "Value": 75},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Neutrale",
                        "Value": 26609
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 44188
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 11888
                    },
                    {"date": "March 2023", "sentiment_complete": "Neutrale", "Value": 4615},
                    {"date": "April 2023", "sentiment_complete": "Neutrale", "Value": 3418},
                    {"date": "May 2023", "sentiment_complete": "Neutrale", "Value": 3131},
                    {"date": "June 2023", "sentiment_complete": "Neutrale", "Value": 1545},
                    {
                        "date": "September 2022",
                        "sentiment_complete": "Positivo",
                        "Value": 114
                    },
                    {"date": "October 2022", "sentiment_complete": "Positivo", "Value": 104},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Positivo",
                        "Value": 37278
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 67973
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 17068
                    },
                    {"date": "March 2023", "sentiment_complete": "Positivo", "Value": 7458},
                    {"date": "April 2023", "sentiment_complete": "Positivo", "Value": 5070},
                    {"date": "May 2023", "sentiment_complete": "Positivo", "Value": 4859},
                    {"date": "June 2023", "sentiment_complete": "Positivo", "Value": 2506}
                ]
            }
        };

        vegaEmbed('#graphics-container-sentiment', spec);
    });

    graphics3BtnSentiment.addEventListener('click', function() {
        // chartSentimentING
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axis": {"grid": false},
            "legend": {"orient": "top"}
            },
                "data": {"name": "data-f5aa40d221b8f095fd9ec2a8cf953d4d"},
                "mark": {"type": "line", "opacity": 0.1},
                "encoding": {
                "color": {
                    "field": "sentiment_complete",
                        "legend": {"orient": "right"},
                    "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.9},
                "x": {
                    "axis": {"format": "%B %Y", "tickCount": 12, "title": "Periodo"},
                    "field": "date",
                        "type": "temporal"
                },
                "y": {
                    "axis": {"title": "Numero di tweets"},
                    "field": "Value",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "title": {
                "text": "Evoluzione del sentimento verso Chat GPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di Tweets"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-f5aa40d221b8f095fd9ec2a8cf953d4d": [
                    {"date": "September 2022", "sentiment_complete": "Negativo", "Value": 64},
                    {"date": "October 2022", "sentiment_complete": "Negativo", "Value": 103},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Negativo",
                        "Value": 12890
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 21900
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Negativo",
                        "Value": 6205
                    },
                    {"date": "March 2023", "sentiment_complete": "Negativo", "Value": 3109},
                    {"date": "April 2023", "sentiment_complete": "Negativo", "Value": 2138},
                    {"date": "May 2023", "sentiment_complete": "Negativo", "Value": 1901},
                    {"date": "June 2023", "sentiment_complete": "Negativo", "Value": 999},
                    {
                        "date": "September 2022",
                        "sentiment_complete": "Neutrale",
                        "Value": 101
                    },
                    {"date": "October 2022", "sentiment_complete": "Neutrale", "Value": 75},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Neutrale",
                        "Value": 26609
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 44188
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 11888
                    },
                    {"date": "March 2023", "sentiment_complete": "Neutrale", "Value": 4615},
                    {"date": "April 2023", "sentiment_complete": "Neutrale", "Value": 3418},
                    {"date": "May 2023", "sentiment_complete": "Neutrale", "Value": 3131},
                    {"date": "June 2023", "sentiment_complete": "Neutrale", "Value": 1545},
                    {
                        "date": "September 2022",
                        "sentiment_complete": "Positivo",
                        "Value": 114
                    },
                    {"date": "October 2022", "sentiment_complete": "Positivo", "Value": 104},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Positivo",
                        "Value": 37278
                    },
                    {
                        "date": "January 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 67973
                    },
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Positivo",
                        "Value": 17068
                    },
                    {"date": "March 2023", "sentiment_complete": "Positivo", "Value": 7458},
                    {"date": "April 2023", "sentiment_complete": "Positivo", "Value": 5070},
                    {"date": "May 2023", "sentiment_complete": "Positivo", "Value": 4859},
                    {"date": "June 2023", "sentiment_complete": "Positivo", "Value": 2506}
                ]
            }
        };

        vegaEmbed('#graphics-container-sentiment', spec);
    });
});
