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
    var imgContainer = document.getElementById("img01-container");
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
    var img = document.createElement('img');
    img.src = element.src;
    img.id = "img01";
    img.alt = element.alt;
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.width = "74%";
    imgContainer.appendChild(img);
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Funzione per gestire l'evento di passaggio del mouse
function handleMouseOver(event, item) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = item.datum.tooltip;
    tooltip.style.top = event.clientY + 'px';
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.display = 'block';
}

function handleMouseOut() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - sentiment
const graphicsContainerSentiment = document.getElementById('graphics-container-sentiment');
const graphics1BtnSentiment = document.getElementById('graphics1-btn-sentiment');
const graphics2BtnSentiment = document.getElementById('graphics2-btn-sentiment');
const graphics3BtnSentiment = document.getElementById('graphics3-btn-sentiment');

// chartSentimentING_reddit - default
const defaultSentiment = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axis": {"grid": false},
    "legend": {"orient": "top"}
    },
        "data": {"name": "data-800eee6c893eaac0f5534d5c99f91252"},
        "mark": {"type": "line", "opacity": 0.1},
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
            "name": "param_36",
            "select": {"type": "interval", "encodings": ["x", "y"]},
            "bind": "scales"
        }
    ],
        "title": {
        "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
            "subtitle": "Visualizzazione dei valori relativi al dataset di commenti"
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
const defaultEmbedOptionsSentiment = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-sentiment', defaultSentiment, defaultEmbedOptionsSentiment).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

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
                "mark": {"type": "line", "opacity": 0.1},
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
                    "name": "param_36",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di commenti"
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
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics2BtnSentiment.addEventListener('click', function() {
        // chartITsentiment
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axis": {"grid": false},
            "legend": {"orient": "top"}
            },
                "data": {"name": "data-e85009f7c5c557fbd302034b3277b24f"},
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
                "params": [
                {
                    "name": "param_9",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
                    "subtitle": "Visualizzazione dei valori relativi al dataset di tweets italiani"
            },
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-e85009f7c5c557fbd302034b3277b24f": [
                    {"date": "September 2022", "sentiment_complete": "Negativo", "Value": 2},
                    {"date": "October 2022", "sentiment_complete": "Negativo", "Value": 1},
                    {"date": "November 2022", "sentiment_complete": "Negativo", "Value": 6},
                    {"date": "December 2022", "sentiment_complete": "Negativo", "Value": 89},
                    {"date": "January 2023", "sentiment_complete": "Negativo", "Value": 311},
                    {"date": "February 2023", "sentiment_complete": "Negativo", "Value": 198},
                    {"date": "March 2023", "sentiment_complete": "Negativo", "Value": 475},
                    {"date": "April 2023", "sentiment_complete": "Negativo", "Value": 21},
                    {"date": "May 2023", "sentiment_complete": "Negativo", "Value": 32},
                    {"date": "June 2023", "sentiment_complete": "Negativo", "Value": 25},
                    {"date": "September 2022", "sentiment_complete": "Neutrale", "Value": 39},
                    {"date": "October 2022", "sentiment_complete": "Neutrale", "Value": 29},
                    {"date": "November 2022", "sentiment_complete": "Neutrale", "Value": 29},
                    {
                        "date": "December 2022",
                        "sentiment_complete": "Neutrale",
                        "Value": 1049
                    },
                    {"date": "January 2023", "sentiment_complete": "Neutrale", "Value": 5222},
                    {
                        "date": "February 2023",
                        "sentiment_complete": "Neutrale",
                        "Value": 3050
                    },
                    {"date": "March 2023", "sentiment_complete": "Neutrale", "Value": 6207},
                    {"date": "April 2023", "sentiment_complete": "Neutrale", "Value": 437},
                    {"date": "May 2023", "sentiment_complete": "Neutrale", "Value": 450},
                    {"date": "June 2023", "sentiment_complete": "Neutrale", "Value": 387},
                    {"date": "September 2022", "sentiment_complete": "Positivo", "Value": 9},
                    {"date": "October 2022", "sentiment_complete": "Positivo", "Value": 5},
                    {
                        "date": "November 2022",
                        "sentiment_complete": "Positivo",
                        "Value": null
                    },
                    {"date": "December 2022", "sentiment_complete": "Positivo", "Value": 215},
                    {"date": "January 2023", "sentiment_complete": "Positivo", "Value": 891},
                    {"date": "February 2023", "sentiment_complete": "Positivo", "Value": 537},
                    {"date": "March 2023", "sentiment_complete": "Positivo", "Value": 1118},
                    {"date": "April 2023", "sentiment_complete": "Positivo", "Value": 65},
                    {"date": "May 2023", "sentiment_complete": "Positivo", "Value": 75},
                    {"date": "June 2023", "sentiment_complete": "Positivo", "Value": 76}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
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
                "params": [
                {
                    "name": "param_10",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "title": {
                "text": "Evoluzione del sentimento verso ChatGPT nell'arco dei mesi",
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

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsSentiment = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-sentiment', spec, embedOptionsSentiment).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });
});

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - words
const graphicsContainerWords = document.getElementById('graphics-container-words');
const graphics1BtnWords = document.getElementById('graphics1-btn-words');
const graphics2BtnWords = document.getElementById('graphics2-btn-words');
const graphics3BtnWords = document.getElementById('graphics3-btn-words');

// wordsfreq_allmonths - default
const defaultWords = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axisX": {"labelAngle": 45}
    },
        "data": {"name": "data-ac0eefac8118804c69dbd0dd5f2bf7a9"},
        "mark": {"type": "point", "filled": true},
        "encoding": {
        "color": {
            "field": "sentiment_complete",
                "scale": {
                "domain": ["Positivo", "Neutrale", "Negativo"],
                    "range": ["#ADFC92", "#788BFF", "#F44E3F"]
            },
            "title": "Sentimento registrato",
                "type": "nominal"
        },
        "opacity": {"value": 0.7},
        "size": {"field": "Frequenza", "type": "quantitative"},
        "tooltip": [
            {"field": "Parola", "type": "nominal"},
            {"field": "Frequenza", "type": "quantitative"},
            {"field": "Frequenza", "type": "quantitative"}
        ],
            "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
        "y": {
            "axis": {"labels": false},
            "field": "Frequenza",
                "title": "Frequenza",
                "type": "quantitative"
        }
    },
        "height": 600,
        "params": [
        {
            "name": "param_4",
            "select": {"type": "point", "fields": ["sentiment_complete"]},
            "bind": {
                "input": "radio",
                "options": ["Positivo", "Neutrale", "Negativo", null],
                "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                "name": "Selettore sentimento: "
            }
        },
        {
            "name": "param_4",
            "select": {"type": "point", "fields": ["sentiment_complete"]},
            "bind": {
                "input": "radio",
                "options": ["Positivo", "Neutrale", "Negativo", null],
                "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                "name": "Selettore sentimento: "
            }
        },
        {
            "name": "param_5",
            "select": {"type": "interval", "encodings": ["x", "y"]},
            "bind": "scales"
        }
    ],
        "title": "Sentimento sulle 30 parole più frequenti nel periodo aprile-giugno 2023",
        "transform": [{"filter": {"param": "param_4"}}],
        "width": 800,
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-ac0eefac8118804c69dbd0dd5f2bf7a9": [
            {"sentiment_complete": "Negativo", "Parola": "bad", "Frequenza": 627},
            {"sentiment_complete": "Negativo", "Parola": "cant", "Frequenza": 1025},
            {"sentiment_complete": "Negativo", "Parola": "doesnt", "Frequenza": 1069},
            {"sentiment_complete": "Negativo", "Parola": "dont", "Frequenza": 2368},
            {"sentiment_complete": "Negativo", "Parola": "even", "Frequenza": 1549},
            {"sentiment_complete": "Negativo", "Parola": "fucking", "Frequenza": 261},
            {"sentiment_complete": "Negativo", "Parola": "get", "Frequenza": 1770},
            {"sentiment_complete": "Negativo", "Parola": "going", "Frequenza": 937},
            {"sentiment_complete": "Negativo", "Parola": "islam", "Frequenza": 102},
            {"sentiment_complete": "Negativo", "Parola": "know", "Frequenza": 1365},
            {"sentiment_complete": "Negativo", "Parola": "like", "Frequenza": 2228},
            {"sentiment_complete": "Negativo", "Parola": "make", "Frequenza": 1319},
            {"sentiment_complete": "Negativo", "Parola": "need", "Frequenza": 805},
            {"sentiment_complete": "Negativo", "Parola": "one", "Frequenza": 1574},
            {"sentiment_complete": "Negativo", "Parola": "people", "Frequenza": 2876},
            {"sentiment_complete": "Negativo", "Parola": "problem", "Frequenza": 290},
            {"sentiment_complete": "Negativo", "Parola": "really", "Frequenza": 1057},
            {"sentiment_complete": "Negativo", "Parola": "right", "Frequenza": 447},
            {"sentiment_complete": "Negativo", "Parola": "say", "Frequenza": 634},
            {"sentiment_complete": "Negativo", "Parola": "see", "Frequenza": 122},
            {"sentiment_complete": "Negativo", "Parola": "shit", "Frequenza": 1038},
            {
                "sentiment_complete": "Negativo",
                "Parola": "something",
                "Frequenza": 942
            },
            {"sentiment_complete": "Negativo", "Parola": "thats", "Frequenza": 1264},
            {"sentiment_complete": "Negativo", "Parola": "thing", "Frequenza": 366},
            {"sentiment_complete": "Negativo", "Parola": "think", "Frequenza": 1590},
            {"sentiment_complete": "Negativo", "Parola": "time", "Frequenza": 1382},
            {"sentiment_complete": "Negativo", "Parola": "use", "Frequenza": 1550},
            {"sentiment_complete": "Negativo", "Parola": "used", "Frequenza": 507},
            {"sentiment_complete": "Negativo", "Parola": "using", "Frequenza": 1156},
            {"sentiment_complete": "Negativo", "Parola": "want", "Frequenza": 641},
            {"sentiment_complete": "Negativo", "Parola": "way", "Frequenza": 1050},
            {"sentiment_complete": "Negativo", "Parola": "work", "Frequenza": 1204},
            {"sentiment_complete": "Negativo", "Parola": "world", "Frequenza": 105},
            {"sentiment_complete": "Negativo", "Parola": "would", "Frequenza": 1978},
            {"sentiment_complete": "Negativo", "Parola": "write", "Frequenza": 875},
            {"sentiment_complete": "Negativo", "Parola": "wrong", "Frequenza": 981},
            {"sentiment_complete": "Negativo", "Parola": "youre", "Frequenza": 1164},
            {"sentiment_complete": "Neutrale", "Parola": "already", "Frequenza": 74},
            {"sentiment_complete": "Neutrale", "Parola": "ask", "Frequenza": 379},
            {"sentiment_complete": "Neutrale", "Parola": "bot", "Frequenza": 79},
            {"sentiment_complete": "Neutrale", "Parola": "bro", "Frequenza": 72},
            {"sentiment_complete": "Neutrale", "Parola": "cant", "Frequenza": 317},
            {"sentiment_complete": "Neutrale", "Parola": "chat", "Frequenza": 381},
            {"sentiment_complete": "Neutrale", "Parola": "day", "Frequenza": 265},
            {"sentiment_complete": "Neutrale", "Parola": "deleted", "Frequenza": 947},
            {"sentiment_complete": "Neutrale", "Parola": "doesnt", "Frequenza": 180},
            {"sentiment_complete": "Neutrale", "Parola": "dont", "Frequenza": 607},
            {"sentiment_complete": "Neutrale", "Parola": "even", "Frequenza": 335},
            {"sentiment_complete": "Neutrale", "Parola": "get", "Frequenza": 530},
            {"sentiment_complete": "Neutrale", "Parola": "going", "Frequenza": 85},
            {"sentiment_complete": "Neutrale", "Parola": "got", "Frequenza": 364},
            {"sentiment_complete": "Neutrale", "Parola": "internet", "Frequenza": 96},
            {"sentiment_complete": "Neutrale", "Parola": "isnt", "Frequenza": 79},
            {"sentiment_complete": "Neutrale", "Parola": "know", "Frequenza": 487},
            {"sentiment_complete": "Neutrale", "Parola": "make", "Frequenza": 290},
            {"sentiment_complete": "Neutrale", "Parola": "need", "Frequenza": 322},
            {"sentiment_complete": "Neutrale", "Parola": "one", "Frequenza": 573},
            {"sentiment_complete": "Neutrale", "Parola": "people", "Frequenza": 423},
            {"sentiment_complete": "Neutrale", "Parola": "phone", "Frequenza": 37},
            {"sentiment_complete": "Neutrale", "Parola": "read", "Frequenza": 38},
            {
                "sentiment_complete": "Neutrale",
                "Parola": "remindme",
                "Frequenza": 231
            },
            {"sentiment_complete": "Neutrale", "Parola": "removed", "Frequenza": 45},
            {"sentiment_complete": "Neutrale", "Parola": "right", "Frequenza": 151},
            {"sentiment_complete": "Neutrale", "Parola": "say", "Frequenza": 336},
            {"sentiment_complete": "Neutrale", "Parola": "see", "Frequenza": 201},
            {
                "sentiment_complete": "Neutrale",
                "Parola": "something",
                "Frequenza": 42
            },
            {"sentiment_complete": "Neutrale", "Parola": "tell", "Frequenza": 174},
            {"sentiment_complete": "Neutrale", "Parola": "thats", "Frequenza": 479},
            {"sentiment_complete": "Neutrale", "Parola": "thing", "Frequenza": 87},
            {"sentiment_complete": "Neutrale", "Parola": "think", "Frequenza": 497},
            {"sentiment_complete": "Neutrale", "Parola": "time", "Frequenza": 401},
            {"sentiment_complete": "Neutrale", "Parola": "use", "Frequenza": 721},
            {"sentiment_complete": "Neutrale", "Parola": "used", "Frequenza": 195},
            {"sentiment_complete": "Neutrale", "Parola": "using", "Frequenza": 332},
            {"sentiment_complete": "Neutrale", "Parola": "way", "Frequenza": 239},
            {"sentiment_complete": "Neutrale", "Parola": "work", "Frequenza": 434},
            {"sentiment_complete": "Neutrale", "Parola": "would", "Frequenza": 549},
            {"sentiment_complete": "Neutrale", "Parola": "write", "Frequenza": 380},
            {"sentiment_complete": "Neutrale", "Parola": "wrote", "Frequenza": 43},
            {"sentiment_complete": "Neutrale", "Parola": "youre", "Frequenza": 202},
            {"sentiment_complete": "Positivo", "Parola": "better", "Frequenza": 2660},
            {"sentiment_complete": "Positivo", "Parola": "bot", "Frequenza": 709},
            {"sentiment_complete": "Positivo", "Parola": "dont", "Frequenza": 4635},
            {"sentiment_complete": "Positivo", "Parola": "even", "Frequenza": 3380},
            {"sentiment_complete": "Positivo", "Parola": "get", "Frequenza": 3572},
            {"sentiment_complete": "Positivo", "Parola": "going", "Frequenza": 1913},
            {"sentiment_complete": "Positivo", "Parola": "good", "Frequenza": 4156},
            {
                "sentiment_complete": "Positivo",
                "Parola": "internet",
                "Frequenza": 635
            },
            {"sentiment_complete": "Positivo", "Parola": "know", "Frequenza": 3048},
            {"sentiment_complete": "Positivo", "Parola": "like", "Frequenza": 9205},
            {"sentiment_complete": "Positivo", "Parola": "make", "Frequenza": 3132},
            {"sentiment_complete": "Positivo", "Parola": "much", "Frequenza": 2310},
            {"sentiment_complete": "Positivo", "Parola": "need", "Frequenza": 2226},
            {"sentiment_complete": "Positivo", "Parola": "one", "Frequenza": 3544},
            {"sentiment_complete": "Positivo", "Parola": "people", "Frequenza": 5405},
            {"sentiment_complete": "Positivo", "Parola": "really", "Frequenza": 2455},
            {"sentiment_complete": "Positivo", "Parola": "right", "Frequenza": 295},
            {"sentiment_complete": "Positivo", "Parola": "say", "Frequenza": 274},
            {"sentiment_complete": "Positivo", "Parola": "see", "Frequenza": 2244},
            {
                "sentiment_complete": "Positivo",
                "Parola": "something",
                "Frequenza": 2550
            },
            {"sentiment_complete": "Positivo", "Parola": "sure", "Frequenza": 269},
            {"sentiment_complete": "Positivo", "Parola": "thats", "Frequenza": 2893},
            {"sentiment_complete": "Positivo", "Parola": "things", "Frequenza": 2396},
            {"sentiment_complete": "Positivo", "Parola": "think", "Frequenza": 4064},
            {"sentiment_complete": "Positivo", "Parola": "time", "Frequenza": 3180},
            {"sentiment_complete": "Positivo", "Parola": "use", "Frequenza": 4411},
            {"sentiment_complete": "Positivo", "Parola": "used", "Frequenza": 1269},
            {"sentiment_complete": "Positivo", "Parola": "using", "Frequenza": 2590},
            {"sentiment_complete": "Positivo", "Parola": "want", "Frequenza": 1697},
            {"sentiment_complete": "Positivo", "Parola": "way", "Frequenza": 2841},
            {"sentiment_complete": "Positivo", "Parola": "well", "Frequenza": 2741},
            {"sentiment_complete": "Positivo", "Parola": "work", "Frequenza": 3201},
            {"sentiment_complete": "Positivo", "Parola": "would", "Frequenza": 5244},
            {"sentiment_complete": "Positivo", "Parola": "write", "Frequenza": 1696},
            {"sentiment_complete": "Positivo", "Parola": "writing", "Frequenza": 661},
            {"sentiment_complete": "Positivo", "Parola": "youre", "Frequenza": 2247}
        ]
    }
};

const defaultEmbedOptionsWords = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-words', defaultWords, defaultEmbedOptionsWords).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

document.addEventListener('DOMContentLoaded', function() {
    graphics1BtnWords.addEventListener('click', function() {
        // wordsfreq_allmonths
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAngle": 45}
            },
                "data": {"name": "data-ac0eefac8118804c69dbd0dd5f2bf7a9"},
                "mark": {"type": "point", "filled": true},
                "encoding": {
                "color": {
                    "field": "sentiment_complete",
                        "scale": {
                        "domain": ["Positivo", "Neutrale", "Negativo"],
                            "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                    },
                    "title": "Sentimento registrato",
                        "type": "nominal"
                },
                "opacity": {"value": 0.7},
                "size": {"field": "Frequenza", "type": "quantitative"},
                "tooltip": [
                    {"field": "Parola", "type": "nominal"},
                    {"field": "Frequenza", "type": "quantitative"},
                    {"field": "Frequenza", "type": "quantitative"}
                ],
                    "x": {"field": "Parola", "title": "Parola", "type": "nominal"},
                "y": {
                    "axis": {"labels": false},
                    "field": "Frequenza",
                        "title": "Frequenza",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_4",
                    "select": {"type": "point", "fields": ["sentiment_complete"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                },
                {
                    "name": "param_4",
                    "select": {"type": "point", "fields": ["sentiment_complete"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positivo", "Neutrale", "Negativo", null],
                        "labels": ["Positivo ", "Neutrale ", "Negativo ", "Tutto"],
                        "name": "Selettore sentimento: "
                    }
                },
                {
                    "name": "param_5",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "title": "Sentimento sulle 30 parole più frequenti nel periodo aprile-giugno 2023",
                "transform": [{"filter": {"param": "param_4"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-ac0eefac8118804c69dbd0dd5f2bf7a9": [
                    {"sentiment_complete": "Negativo", "Parola": "bad", "Frequenza": 627},
                    {"sentiment_complete": "Negativo", "Parola": "cant", "Frequenza": 1025},
                    {"sentiment_complete": "Negativo", "Parola": "doesnt", "Frequenza": 1069},
                    {"sentiment_complete": "Negativo", "Parola": "dont", "Frequenza": 2368},
                    {"sentiment_complete": "Negativo", "Parola": "even", "Frequenza": 1549},
                    {"sentiment_complete": "Negativo", "Parola": "fucking", "Frequenza": 261},
                    {"sentiment_complete": "Negativo", "Parola": "get", "Frequenza": 1770},
                    {"sentiment_complete": "Negativo", "Parola": "going", "Frequenza": 937},
                    {"sentiment_complete": "Negativo", "Parola": "islam", "Frequenza": 102},
                    {"sentiment_complete": "Negativo", "Parola": "know", "Frequenza": 1365},
                    {"sentiment_complete": "Negativo", "Parola": "like", "Frequenza": 2228},
                    {"sentiment_complete": "Negativo", "Parola": "make", "Frequenza": 1319},
                    {"sentiment_complete": "Negativo", "Parola": "need", "Frequenza": 805},
                    {"sentiment_complete": "Negativo", "Parola": "one", "Frequenza": 1574},
                    {"sentiment_complete": "Negativo", "Parola": "people", "Frequenza": 2876},
                    {"sentiment_complete": "Negativo", "Parola": "problem", "Frequenza": 290},
                    {"sentiment_complete": "Negativo", "Parola": "really", "Frequenza": 1057},
                    {"sentiment_complete": "Negativo", "Parola": "right", "Frequenza": 447},
                    {"sentiment_complete": "Negativo", "Parola": "say", "Frequenza": 634},
                    {"sentiment_complete": "Negativo", "Parola": "see", "Frequenza": 122},
                    {"sentiment_complete": "Negativo", "Parola": "shit", "Frequenza": 1038},
                    {
                        "sentiment_complete": "Negativo",
                        "Parola": "something",
                        "Frequenza": 942
                    },
                    {"sentiment_complete": "Negativo", "Parola": "thats", "Frequenza": 1264},
                    {"sentiment_complete": "Negativo", "Parola": "thing", "Frequenza": 366},
                    {"sentiment_complete": "Negativo", "Parola": "think", "Frequenza": 1590},
                    {"sentiment_complete": "Negativo", "Parola": "time", "Frequenza": 1382},
                    {"sentiment_complete": "Negativo", "Parola": "use", "Frequenza": 1550},
                    {"sentiment_complete": "Negativo", "Parola": "used", "Frequenza": 507},
                    {"sentiment_complete": "Negativo", "Parola": "using", "Frequenza": 1156},
                    {"sentiment_complete": "Negativo", "Parola": "want", "Frequenza": 641},
                    {"sentiment_complete": "Negativo", "Parola": "way", "Frequenza": 1050},
                    {"sentiment_complete": "Negativo", "Parola": "work", "Frequenza": 1204},
                    {"sentiment_complete": "Negativo", "Parola": "world", "Frequenza": 105},
                    {"sentiment_complete": "Negativo", "Parola": "would", "Frequenza": 1978},
                    {"sentiment_complete": "Negativo", "Parola": "write", "Frequenza": 875},
                    {"sentiment_complete": "Negativo", "Parola": "wrong", "Frequenza": 981},
                    {"sentiment_complete": "Negativo", "Parola": "youre", "Frequenza": 1164},
                    {"sentiment_complete": "Neutrale", "Parola": "already", "Frequenza": 74},
                    {"sentiment_complete": "Neutrale", "Parola": "ask", "Frequenza": 379},
                    {"sentiment_complete": "Neutrale", "Parola": "bot", "Frequenza": 79},
                    {"sentiment_complete": "Neutrale", "Parola": "bro", "Frequenza": 72},
                    {"sentiment_complete": "Neutrale", "Parola": "cant", "Frequenza": 317},
                    {"sentiment_complete": "Neutrale", "Parola": "chat", "Frequenza": 381},
                    {"sentiment_complete": "Neutrale", "Parola": "day", "Frequenza": 265},
                    {"sentiment_complete": "Neutrale", "Parola": "deleted", "Frequenza": 947},
                    {"sentiment_complete": "Neutrale", "Parola": "doesnt", "Frequenza": 180},
                    {"sentiment_complete": "Neutrale", "Parola": "dont", "Frequenza": 607},
                    {"sentiment_complete": "Neutrale", "Parola": "even", "Frequenza": 335},
                    {"sentiment_complete": "Neutrale", "Parola": "get", "Frequenza": 530},
                    {"sentiment_complete": "Neutrale", "Parola": "going", "Frequenza": 85},
                    {"sentiment_complete": "Neutrale", "Parola": "got", "Frequenza": 364},
                    {"sentiment_complete": "Neutrale", "Parola": "internet", "Frequenza": 96},
                    {"sentiment_complete": "Neutrale", "Parola": "isnt", "Frequenza": 79},
                    {"sentiment_complete": "Neutrale", "Parola": "know", "Frequenza": 487},
                    {"sentiment_complete": "Neutrale", "Parola": "make", "Frequenza": 290},
                    {"sentiment_complete": "Neutrale", "Parola": "need", "Frequenza": 322},
                    {"sentiment_complete": "Neutrale", "Parola": "one", "Frequenza": 573},
                    {"sentiment_complete": "Neutrale", "Parola": "people", "Frequenza": 423},
                    {"sentiment_complete": "Neutrale", "Parola": "phone", "Frequenza": 37},
                    {"sentiment_complete": "Neutrale", "Parola": "read", "Frequenza": 38},
                    {
                        "sentiment_complete": "Neutrale",
                        "Parola": "remindme",
                        "Frequenza": 231
                    },
                    {"sentiment_complete": "Neutrale", "Parola": "removed", "Frequenza": 45},
                    {"sentiment_complete": "Neutrale", "Parola": "right", "Frequenza": 151},
                    {"sentiment_complete": "Neutrale", "Parola": "say", "Frequenza": 336},
                    {"sentiment_complete": "Neutrale", "Parola": "see", "Frequenza": 201},
                    {
                        "sentiment_complete": "Neutrale",
                        "Parola": "something",
                        "Frequenza": 42
                    },
                    {"sentiment_complete": "Neutrale", "Parola": "tell", "Frequenza": 174},
                    {"sentiment_complete": "Neutrale", "Parola": "thats", "Frequenza": 479},
                    {"sentiment_complete": "Neutrale", "Parola": "thing", "Frequenza": 87},
                    {"sentiment_complete": "Neutrale", "Parola": "think", "Frequenza": 497},
                    {"sentiment_complete": "Neutrale", "Parola": "time", "Frequenza": 401},
                    {"sentiment_complete": "Neutrale", "Parola": "use", "Frequenza": 721},
                    {"sentiment_complete": "Neutrale", "Parola": "used", "Frequenza": 195},
                    {"sentiment_complete": "Neutrale", "Parola": "using", "Frequenza": 332},
                    {"sentiment_complete": "Neutrale", "Parola": "way", "Frequenza": 239},
                    {"sentiment_complete": "Neutrale", "Parola": "work", "Frequenza": 434},
                    {"sentiment_complete": "Neutrale", "Parola": "would", "Frequenza": 549},
                    {"sentiment_complete": "Neutrale", "Parola": "write", "Frequenza": 380},
                    {"sentiment_complete": "Neutrale", "Parola": "wrote", "Frequenza": 43},
                    {"sentiment_complete": "Neutrale", "Parola": "youre", "Frequenza": 202},
                    {"sentiment_complete": "Positivo", "Parola": "better", "Frequenza": 2660},
                    {"sentiment_complete": "Positivo", "Parola": "bot", "Frequenza": 709},
                    {"sentiment_complete": "Positivo", "Parola": "dont", "Frequenza": 4635},
                    {"sentiment_complete": "Positivo", "Parola": "even", "Frequenza": 3380},
                    {"sentiment_complete": "Positivo", "Parola": "get", "Frequenza": 3572},
                    {"sentiment_complete": "Positivo", "Parola": "going", "Frequenza": 1913},
                    {"sentiment_complete": "Positivo", "Parola": "good", "Frequenza": 4156},
                    {
                        "sentiment_complete": "Positivo",
                        "Parola": "internet",
                        "Frequenza": 635
                    },
                    {"sentiment_complete": "Positivo", "Parola": "know", "Frequenza": 3048},
                    {"sentiment_complete": "Positivo", "Parola": "like", "Frequenza": 9205},
                    {"sentiment_complete": "Positivo", "Parola": "make", "Frequenza": 3132},
                    {"sentiment_complete": "Positivo", "Parola": "much", "Frequenza": 2310},
                    {"sentiment_complete": "Positivo", "Parola": "need", "Frequenza": 2226},
                    {"sentiment_complete": "Positivo", "Parola": "one", "Frequenza": 3544},
                    {"sentiment_complete": "Positivo", "Parola": "people", "Frequenza": 5405},
                    {"sentiment_complete": "Positivo", "Parola": "really", "Frequenza": 2455},
                    {"sentiment_complete": "Positivo", "Parola": "right", "Frequenza": 295},
                    {"sentiment_complete": "Positivo", "Parola": "say", "Frequenza": 274},
                    {"sentiment_complete": "Positivo", "Parola": "see", "Frequenza": 2244},
                    {
                        "sentiment_complete": "Positivo",
                        "Parola": "something",
                        "Frequenza": 2550
                    },
                    {"sentiment_complete": "Positivo", "Parola": "sure", "Frequenza": 269},
                    {"sentiment_complete": "Positivo", "Parola": "thats", "Frequenza": 2893},
                    {"sentiment_complete": "Positivo", "Parola": "things", "Frequenza": 2396},
                    {"sentiment_complete": "Positivo", "Parola": "think", "Frequenza": 4064},
                    {"sentiment_complete": "Positivo", "Parola": "time", "Frequenza": 3180},
                    {"sentiment_complete": "Positivo", "Parola": "use", "Frequenza": 4411},
                    {"sentiment_complete": "Positivo", "Parola": "used", "Frequenza": 1269},
                    {"sentiment_complete": "Positivo", "Parola": "using", "Frequenza": 2590},
                    {"sentiment_complete": "Positivo", "Parola": "want", "Frequenza": 1697},
                    {"sentiment_complete": "Positivo", "Parola": "way", "Frequenza": 2841},
                    {"sentiment_complete": "Positivo", "Parola": "well", "Frequenza": 2741},
                    {"sentiment_complete": "Positivo", "Parola": "work", "Frequenza": 3201},
                    {"sentiment_complete": "Positivo", "Parola": "would", "Frequenza": 5244},
                    {"sentiment_complete": "Positivo", "Parola": "write", "Frequenza": 1696},
                    {"sentiment_complete": "Positivo", "Parola": "writing", "Frequenza": 661},
                    {"sentiment_complete": "Positivo", "Parola": "youre", "Frequenza": 2247}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics2BtnWords.addEventListener('click', function() {
        // wordsfreq_2022_2023_ita
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15}
            },
                "hconcat": [
                {
                    "data": {"name": "data-d25f60489a0781a6dabba41ab56836a9"},
                    "mark": {"type": "point", "filled": true},
                    "encoding": {
                        "color": {
                            "field": "Sentiment",
                            "scale": {
                                "domain": ["Positive", "Neutral", "Negative"],
                                "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                            },
                            "title": "Sentimento registrato",
                            "type": "nominal"
                        },
                        "opacity": {"value": 0.7},
                        "size": {"field": "frequency", "type": "quantitative"},
                        "tooltip": [
                            {"field": "word", "type": "nominal"},
                            {"field": "frequency", "type": "quantitative"},
                            {"field": "frequency", "type": "quantitative"}
                        ],
                        "x": {"field": "word", "title": "Parola", "type": "nominal"},
                        "y": {
                            "axis": {"labels": false},
                            "field": "frequency",
                            "title": "Frequenza",
                            "type": "quantitative"
                        }
                    },
                    "height": 400,
                    "name": "view_17",
                    "title": "Sentiment sulle top 30 parole per categoria di sentimento: anno 2022, TWEETS ITALIANI",
                    "transform": [{"filter": {"param": "param_27"}}],
                    "width": 600
                },
                {
                    "data": {"name": "data-55e09901e64d492e12391a51a6af0e07"},
                    "mark": {"type": "point", "filled": true},
                    "encoding": {
                        "color": {
                            "field": "Sentiment",
                            "scale": {
                                "domain": ["Positive", "Neutral", "Negative"],
                                "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                            },
                            "title": "Sentimento registrato",
                            "type": "nominal"
                        },
                        "opacity": {"value": 0.7},
                        "size": {
                            "field": "frequency",
                            "title": "Frequenza assoluta",
                            "type": "quantitative"
                        },
                        "tooltip": [
                            {"field": "word", "title": "parola", "type": "nominal"},
                            {
                                "field": "frequency",
                                "title": "frequenza assoluta",
                                "type": "quantitative"
                            }
                        ],
                        "x": {"field": "word", "title": "Parola", "type": "nominal"},
                        "y": {
                            "axis": {"labels": false},
                            "field": "frequency",
                            "title": "Frequenza",
                            "type": "quantitative"
                        }
                    },
                    "height": 400,
                    "name": "view_18",
                    "title": "Sentiment sulle top 30 parole per categoria di sentimento: anno 2023, TWEETS ITALIANI",
                    "transform": [{"filter": {"param": "param_30"}}],
                    "width": 600
                }
            ],
                "params": [
                {
                    "name": "param_27",
                    "select": {"type": "point", "fields": ["Sentiment"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positive", "Neutral", "Negative", null],
                        "labels": ["Positive ", "Neutral ", "Negative ", "All"],
                        "name": "Selettore sentimento 2022: "
                    },
                    "views": ["view_17"]
                },
                {
                    "name": "param_29",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales",
                    "views": ["view_17"]
                },
                {
                    "name": "param_30",
                    "select": {"type": "point", "fields": ["Sentiment"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positive", "Neutral", "Negative", null],
                        "labels": ["Positive ", "Neutral ", "Negative ", "All"],
                        "name": "Selettore sentimento 2023: "
                    },
                    "views": ["view_18"]
                },
                {
                    "name": "param_32",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales",
                    "views": ["view_18"]
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-d25f60489a0781a6dabba41ab56836a9": [
                    {"Sentiment": "Positive", "word": "google", "frequency": 46},
                    {"Sentiment": "Positive", "word": "fine", "frequency": 40},
                    {"Sentiment": "Positive", "word": "artificiale", "frequency": 39},
                    {"Sentiment": "Positive", "word": "chiesto", "frequency": 29},
                    {"Sentiment": "Positive", "word": "linizio", "frequency": 20},
                    {"Sentiment": "Positive", "word": "intelligenza", "frequency": 18},
                    {"Sentiment": "Positive", "word": "lintelligenza", "frequency": 18},
                    {"Sentiment": "Positive", "word": "fatto", "frequency": 17},
                    {"Sentiment": "Positive", "word": "antidiplomatico", "frequency": 16},
                    {"Sentiment": "Positive", "word": "cosa", "frequency": 15},
                    {"Sentiment": "Positive", "word": "provato", "frequency": 14},
                    {"Sentiment": "Positive", "word": "chat", "frequency": 13},
                    {"Sentiment": "Positive", "word": "risposte", "frequency": 13},
                    {"Sentiment": "Positive", "word": "nuovo", "frequency": 11},
                    {"Sentiment": "Positive", "word": "essere", "frequency": 11},
                    {"Sentiment": "Positive", "word": "articolo", "frequency": 11},
                    {"Sentiment": "Positive", "word": "già", "frequency": 10},
                    {"Sentiment": "Positive", "word": "utenti", "frequency": 10},
                    {"Sentiment": "Positive", "word": "scrivere", "frequency": 10},
                    {"Sentiment": "Positive", "word": "mette", "frequency": 10},
                    {"Sentiment": "Positive", "word": "gratis", "frequency": 10},
                    {"Sentiment": "Positive", "word": "oggi", "frequency": 9},
                    {"Sentiment": "Positive", "word": "futuro", "frequency": 9},
                    {"Sentiment": "Positive", "word": "parte", "frequency": 9},
                    {"Sentiment": "Positive", "word": "chatbot", "frequency": 9},
                    {"Sentiment": "Positive", "word": "domanda", "frequency": 9},
                    {"Sentiment": "Positive", "word": "risposta", "frequency": 9},
                    {"Sentiment": "Positive", "word": "ricerca", "frequency": 9},
                    {"Sentiment": "Positive", "word": "prova", "frequency": 8},
                    {"Sentiment": "Positive", "word": "super", "frequency": 8},
                    {"Sentiment": "Negative", "word": "dire", "frequency": 24},
                    {"Sentiment": "Negative", "word": "cosa", "frequency": 23},
                    {"Sentiment": "Negative", "word": "fare", "frequency": 20},
                    {"Sentiment": "Negative", "word": "cose", "frequency": 13},
                    {"Sentiment": "Negative", "word": "artificiale", "frequency": 13},
                    {"Sentiment": "Negative", "word": "chat", "frequency": 12},
                    {"Sentiment": "Negative", "word": "fatto", "frequency": 11},
                    {"Sentiment": "Negative", "word": "intelligenza", "frequency": 8},
                    {"Sentiment": "Negative", "word": "anni", "frequency": 8},
                    {"Sentiment": "Negative", "word": "straordinarie", "frequency": 6},
                    {"Sentiment": "Negative", "word": "grande", "frequency": 6},
                    {"Sentiment": "Negative", "word": "chatbot", "frequency": 6},
                    {"Sentiment": "Negative", "word": "molto", "frequency": 6},
                    {"Sentiment": "Negative", "word": "breve", "frequency": 6},
                    {"Sentiment": "Negative", "word": "scemenze", "frequency": 6},
                    {"Sentiment": "Negative", "word": "enormi", "frequency": 6},
                    {"Sentiment": "Negative", "word": "articolo", "frequency": 6},
                    {"Sentiment": "Negative", "word": "codex", "frequency": 6},
                    {"Sentiment": "Negative", "word": "gpt3", "frequency": 6},
                    {"Sentiment": "Negative", "word": "pensa", "frequency": 6},
                    {"Sentiment": "Negative", "word": "gay", "frequency": 6},
                    {"Sentiment": "Negative", "word": "visto", "frequency": 6},
                    {"Sentiment": "Negative", "word": "risposta", "frequency": 6},
                    {"Sentiment": "Negative", "word": "newsletter", "frequency": 5},
                    {"Sentiment": "Negative", "word": "gioco", "frequency": 5},
                    {"Sentiment": "Negative", "word": "nuovo", "frequency": 5},
                    {"Sentiment": "Negative", "word": "oltre", "frequency": 5},
                    {"Sentiment": "Negative", "word": "scrivere", "frequency": 5},
                    {"Sentiment": "Negative", "word": "essere", "frequency": 5},
                    {"Sentiment": "Negative", "word": "lintelligenza", "frequency": 5},
                    {"Sentiment": "Neutral", "word": "artificiale", "frequency": 192},
                    {"Sentiment": "Neutral", "word": "intelligenza", "frequency": 133},
                    {"Sentiment": "Neutral", "word": "google", "frequency": 120},
                    {"Sentiment": "Neutral", "word": "cosa", "frequency": 88},
                    {"Sentiment": "Neutral", "word": "chat", "frequency": 77},
                    {"Sentiment": "Neutral", "word": "fare", "frequency": 69},
                    {"Sentiment": "Neutral", "word": "domande", "frequency": 54},
                    {"Sentiment": "Neutral", "word": "ricerca", "frequency": 50},
                    {"Sentiment": "Neutral", "word": "chiesto", "frequency": 50},
                    {"Sentiment": "Neutral", "word": "cos", "frequency": 48},
                    {"Sentiment": "Neutral", "word": "molto", "frequency": 48},
                    {"Sentiment": "Neutral", "word": "nuovo", "frequency": 47},
                    {"Sentiment": "Neutral", "word": "funziona", "frequency": 45},
                    {"Sentiment": "Neutral", "word": "risposte", "frequency": 44},
                    {"Sentiment": "Neutral", "word": "provato", "frequency": 41},
                    {"Sentiment": "Neutral", "word": "ora", "frequency": 40},
                    {"Sentiment": "Neutral", "word": "via", "frequency": 40},
                    {"Sentiment": "Neutral", "word": "ecco", "frequency": 40},
                    {"Sentiment": "Neutral", "word": "lintelligenza", "frequency": 40},
                    {"Sentiment": "Neutral", "word": "usare", "frequency": 38},
                    {"Sentiment": "Neutral", "word": "chatbot", "frequency": 37},
                    {"Sentiment": "Neutral", "word": "solo", "frequency": 34},
                    {"Sentiment": "Neutral", "word": "futuro", "frequency": 33},
                    {"Sentiment": "Neutral", "word": "fatto", "frequency": 31},
                    {"Sentiment": "Neutral", "word": "già", "frequency": 30},
                    {"Sentiment": "Neutral", "word": "sapere", "frequency": 29},
                    {"Sentiment": "Neutral", "word": "lai", "frequency": 29},
                    {"Sentiment": "Neutral", "word": "stato", "frequency": 29},
                    {"Sentiment": "Neutral", "word": "codice", "frequency": 29},
                    {"Sentiment": "Neutral", "word": "creare", "frequency": 28}
                ],
                    "data-55e09901e64d492e12391a51a6af0e07": [
                    {"Sentiment": "Positive", "word": "artificiale", "frequency": 357},
                    {"Sentiment": "Positive", "word": "chat", "frequency": 350},
                    {"Sentiment": "Positive", "word": "cosa", "frequency": 238},
                    {"Sentiment": "Positive", "word": "chiesto", "frequency": 230},
                    {"Sentiment": "Positive", "word": "intelligenza", "frequency": 228},
                    {"Sentiment": "Positive", "word": "fatto", "frequency": 167},
                    {"Sentiment": "Positive", "word": "google", "frequency": 159},
                    {"Sentiment": "Positive", "word": "fine", "frequency": 153},
                    {"Sentiment": "Positive", "word": "microsoft", "frequency": 147},
                    {"Sentiment": "Positive", "word": "ecco", "frequency": 135},
                    {"Sentiment": "Positive", "word": "chatbot", "frequency": 132},
                    {"Sentiment": "Positive", "word": "risposto", "frequency": 131},
                    {"Sentiment": "Positive", "word": "solo", "frequency": 129},
                    {"Sentiment": "Positive", "word": "già", "frequency": 128},
                    {"Sentiment": "Positive", "word": "fare", "frequency": 126},
                    {"Sentiment": "Positive", "word": "scritto", "frequency": 124},
                    {"Sentiment": "Positive", "word": "utenti", "frequency": 123},
                    {"Sentiment": "Positive", "word": "essere", "frequency": 117},
                    {"Sentiment": "Positive", "word": "scrivere", "frequency": 113},
                    {"Sentiment": "Positive", "word": "molto", "frequency": 111},
                    {"Sentiment": "Positive", "word": "ora", "frequency": 109},
                    {"Sentiment": "Positive", "word": "testo", "frequency": 104},
                    {"Sentiment": "Positive", "word": "lavoro", "frequency": 104},
                    {"Sentiment": "Positive", "word": "ricerca", "frequency": 102},
                    {"Sentiment": "Positive", "word": "stato", "frequency": 92},
                    {"Sentiment": "Positive", "word": "versione", "frequency": 90},
                    {"Sentiment": "Positive", "word": "detto", "frequency": 89},
                    {"Sentiment": "Positive", "word": "mondo", "frequency": 89},
                    {"Sentiment": "Positive", "word": "provato", "frequency": 88},
                    {"Sentiment": "Positive", "word": "quando", "frequency": 88},
                    {"Sentiment": "Negative", "word": "dire", "frequency": 196},
                    {"Sentiment": "Negative", "word": "chat", "frequency": 113},
                    {"Sentiment": "Negative", "word": "artificiale", "frequency": 111},
                    {"Sentiment": "Negative", "word": "cosa", "frequency": 88},
                    {"Sentiment": "Negative", "word": "fare", "frequency": 72},
                    {"Sentiment": "Negative", "word": "intelligenza", "frequency": 67},
                    {"Sentiment": "Negative", "word": "lavoro", "frequency": 59},
                    {"Sentiment": "Negative", "word": "molto", "frequency": 57},
                    {"Sentiment": "Negative", "word": "fatto", "frequency": 57},
                    {"Sentiment": "Negative", "word": "fake", "frequency": 54},
                    {"Sentiment": "Negative", "word": "già", "frequency": 53},
                    {"Sentiment": "Negative", "word": "solo", "frequency": 47},
                    {"Sentiment": "Negative", "word": "risposta", "frequency": 46},
                    {"Sentiment": "Negative", "word": "chiesto", "frequency": 46},
                    {"Sentiment": "Negative", "word": "senza", "frequency": 44},
                    {"Sentiment": "Negative", "word": "prima", "frequency": 44},
                    {"Sentiment": "Negative", "word": "quando", "frequency": 44},
                    {"Sentiment": "Negative", "word": "domanda", "frequency": 44},
                    {"Sentiment": "Negative", "word": "ora", "frequency": 40},
                    {"Sentiment": "Negative", "word": "meglio", "frequency": 40},
                    {"Sentiment": "Negative", "word": "cose", "frequency": 39},
                    {"Sentiment": "Negative", "word": "scrivere", "frequency": 39},
                    {"Sentiment": "Negative", "word": "news", "frequency": 37},
                    {"Sentiment": "Negative", "word": "essere", "frequency": 36},
                    {"Sentiment": "Negative", "word": "via", "frequency": 36},
                    {"Sentiment": "Negative", "word": "stop", "frequency": 36},
                    {"Sentiment": "Negative", "word": "musk", "frequency": 34},
                    {"Sentiment": "Negative", "word": "ecco", "frequency": 32},
                    {"Sentiment": "Negative", "word": "domande", "frequency": 31},
                    {"Sentiment": "Negative", "word": "oggi", "frequency": 31},
                    {"Sentiment": "Neutral", "word": "artificiale", "frequency": 2054},
                    {"Sentiment": "Neutral", "word": "chat", "frequency": 1744},
                    {"Sentiment": "Neutral", "word": "intelligenza", "frequency": 1333},
                    {"Sentiment": "Neutral", "word": "cosa", "frequency": 943},
                    {"Sentiment": "Neutral", "word": "google", "frequency": 860},
                    {"Sentiment": "Neutral", "word": "ecco", "frequency": 702},
                    {"Sentiment": "Neutral", "word": "fare", "frequency": 650},
                    {"Sentiment": "Neutral", "word": "microsoft", "frequency": 631},
                    {"Sentiment": "Neutral", "word": "solo", "frequency": 626},
                    {"Sentiment": "Neutral", "word": "via", "frequency": 574},
                    {"Sentiment": "Neutral", "word": "nuovo", "frequency": 541},
                    {"Sentiment": "Neutral", "word": "essere", "frequency": 540},
                    {"Sentiment": "Neutral", "word": "lavoro", "frequency": 470},
                    {"Sentiment": "Neutral", "word": "lintelligenza", "frequency": 460},
                    {"Sentiment": "Neutral", "word": "ricerca", "frequency": 459},
                    {"Sentiment": "Neutral", "word": "già", "frequency": 457},
                    {"Sentiment": "Neutral", "word": "scrivere", "frequency": 453},
                    {"Sentiment": "Neutral", "word": "ora", "frequency": 447},
                    {"Sentiment": "Neutral", "word": "molto", "frequency": 445},
                    {"Sentiment": "Neutral", "word": "mondo", "frequency": 436},
                    {"Sentiment": "Neutral", "word": "oggi", "frequency": 413},
                    {"Sentiment": "Neutral", "word": "chatbot", "frequency": 381},
                    {"Sentiment": "Neutral", "word": "bing", "frequency": 373},
                    {"Sentiment": "Neutral", "word": "risposta", "frequency": 367},
                    {"Sentiment": "Neutral", "word": "risposte", "frequency": 353},
                    {"Sentiment": "Neutral", "word": "nuova", "frequency": 342},
                    {"Sentiment": "Neutral", "word": "chiesto", "frequency": 341},
                    {"Sentiment": "Neutral", "word": "futuro", "frequency": 339},
                    {"Sentiment": "Neutral", "word": "quando", "frequency": 331},
                    {"Sentiment": "Neutral", "word": "altri", "frequency": 328}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics3BtnWords.addEventListener('click', function() {
        // wordsfreq_2022_2023_upd
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15}
            },
                "hconcat": [
                {
                    "data": {"name": "data-311dffb178b517b0b4bfda02d0ada4da"},
                    "mark": {"type": "point", "filled": true},
                    "encoding": {
                        "color": {
                            "field": "Sentiment",
                            "scale": {
                                "domain": ["Positive", "Neutral", "Negative"],
                                "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                            },
                            "title": "Sentimento registrato",
                            "type": "nominal"
                        },
                        "opacity": {"value": 0.7},
                        "size": {"field": "frequency", "type": "quantitative"},
                        "tooltip": [
                            {"field": "word", "type": "nominal"},
                            {"field": "frequency", "type": "quantitative"},
                            {"field": "frequency", "type": "quantitative"}
                        ],
                        "x": {"field": "word", "title": "Parola", "type": "nominal"},
                        "y": {
                            "axis": {"labels": false},
                            "field": "frequency",
                            "title": "Frequenza",
                            "type": "quantitative"
                        }
                    },
                    "height": 400,
                    "name": "view_1",
                    "title": "Sentiment sulle top 30 parole per categoria di sentimento: anno 2022",
                    "transform": [{"filter": {"param": "param_1"}}],
                    "width": 600
                },
                {
                    "data": {"name": "data-610617640abbcb60d3c9b15bc576aea8"},
                    "mark": {"type": "point", "filled": true},
                    "encoding": {
                        "color": {
                            "field": "Sentiment",
                            "scale": {
                                "domain": ["Positive", "Neutral", "Negative"],
                                "range": ["#ADFC92", "#788BFF", "#F44E3F"]
                            },
                            "title": "Sentimento registrato",
                            "type": "nominal"
                        },
                        "opacity": {"value": 0.7},
                        "size": {
                            "field": "frequency",
                            "title": "Frequenza assoluta",
                            "type": "quantitative"
                        },
                        "tooltip": [
                            {"field": "word", "title": "parola", "type": "nominal"},
                            {
                                "field": "frequency",
                                "title": "frequenza assoluta",
                                "type": "quantitative"
                            }
                        ],
                        "x": {"field": "word", "title": "Parola", "type": "nominal"},
                        "y": {
                            "axis": {"labels": false},
                            "field": "frequency",
                            "title": "Frequenza",
                            "type": "quantitative"
                        }
                    },
                    "height": 400,
                    "name": "view_2",
                    "title": "Sentiment sulle top 30 parole per categoria di sentimento: anno 2023",
                    "transform": [{"filter": {"param": "param_3"}}],
                    "width": 600
                }
            ],
                "params": [
                {
                    "name": "param_1",
                    "select": {"type": "point", "fields": ["Sentiment"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positive", "Neutral", "Negative", null],
                        "labels": ["Positive ", "Neutral ", "Negative ", "All"],
                        "name": "Selettore sentimento 2022: "
                    },
                    "views": ["view_1"]
                },
                {
                    "name": "param_2",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales",
                    "views": ["view_1"]
                },
                {
                    "name": "param_3",
                    "select": {"type": "point", "fields": ["Sentiment"]},
                    "bind": {
                        "input": "radio",
                        "options": ["Positive", "Neutral", "Negative", null],
                        "labels": ["Positive ", "Neutral ", "Negative ", "All"],
                        "name": "Selettore sentimento 2023: "
                    },
                    "views": ["view_2"]
                },
                {
                    "name": "param_4",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales",
                    "views": ["view_2"]
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-311dffb178b517b0b4bfda02d0ada4da": [
                    {"Sentiment": "Positive", "word": "like", "frequency": 5812},
                    {"Sentiment": "Positive", "word": "use", "frequency": 3291},
                    {"Sentiment": "Positive", "word": "chat", "frequency": 3043},
                    {"Sentiment": "Positive", "word": "google", "frequency": 2786},
                    {"Sentiment": "Positive", "word": "good", "frequency": 2561},
                    {"Sentiment": "Positive", "word": "using", "frequency": 2547},
                    {"Sentiment": "Positive", "word": "write", "frequency": 2379},
                    {"Sentiment": "Positive", "word": "new", "frequency": 2286},
                    {"Sentiment": "Positive", "word": "would", "frequency": 2070},
                    {"Sentiment": "Positive", "word": "asked", "frequency": 1966},
                    {"Sentiment": "Positive", "word": "one", "frequency": 1903},
                    {"Sentiment": "Positive", "word": "better", "frequency": 1903},
                    {"Sentiment": "Positive", "word": "get", "frequency": 1877},
                    {"Sentiment": "Positive", "word": "think", "frequency": 1826},
                    {"Sentiment": "Positive", "word": "make", "frequency": 1815},
                    {"Sentiment": "Positive", "word": "time", "frequency": 1784},
                    {"Sentiment": "Positive", "word": "code", "frequency": 1775},
                    {"Sentiment": "Positive", "word": "help", "frequency": 1756},
                    {"Sentiment": "Positive", "word": "see", "frequency": 1717},
                    {"Sentiment": "Positive", "word": "people", "frequency": 1640},
                    {"Sentiment": "Positive", "word": "know", "frequency": 1471},
                    {"Sentiment": "Positive", "word": "search", "frequency": 1467},
                    {"Sentiment": "Positive", "word": "way", "frequency": 1454},
                    {"Sentiment": "Positive", "word": "ask", "frequency": 1395},
                    {"Sentiment": "Positive", "word": "create", "frequency": 1382},
                    {"Sentiment": "Positive", "word": "great", "frequency": 1373},
                    {"Sentiment": "Positive", "word": "content", "frequency": 1369},
                    {"Sentiment": "Positive", "word": "used", "frequency": 1351},
                    {"Sentiment": "Positive", "word": "even", "frequency": 1335},
                    {"Sentiment": "Positive", "word": "writing", "frequency": 1231},
                    {"Sentiment": "Negative", "word": "google", "frequency": 1384},
                    {"Sentiment": "Negative", "word": "chat", "frequency": 982},
                    {"Sentiment": "Negative", "word": "like", "frequency": 833},
                    {"Sentiment": "Negative", "word": "use", "frequency": 792},
                    {"Sentiment": "Negative", "word": "write", "frequency": 736},
                    {"Sentiment": "Negative", "word": "people", "frequency": 732},
                    {"Sentiment": "Negative", "word": "would", "frequency": 728},
                    {"Sentiment": "Negative", "word": "using", "frequency": 700},
                    {"Sentiment": "Negative", "word": "asked", "frequency": 652},
                    {"Sentiment": "Negative", "word": "get", "frequency": 645},
                    {"Sentiment": "Negative", "word": "wrong", "frequency": 644},
                    {"Sentiment": "Negative", "word": "one", "frequency": 642},
                    {"Sentiment": "Negative", "word": "search", "frequency": 634},
                    {"Sentiment": "Negative", "word": "time", "frequency": 619},
                    {"Sentiment": "Negative", "word": "think", "frequency": 617},
                    {"Sentiment": "Negative", "word": "code", "frequency": 590},
                    {"Sentiment": "Negative", "word": "even", "frequency": 552},
                    {"Sentiment": "Negative", "word": "make", "frequency": 547},
                    {"Sentiment": "Negative", "word": "know", "frequency": 519},
                    {"Sentiment": "Negative", "word": "new", "frequency": 496},
                    {"Sentiment": "Negative", "word": "answer", "frequency": 478},
                    {"Sentiment": "Negative", "word": "ask", "frequency": 453},
                    {"Sentiment": "Negative", "word": "see", "frequency": 432},
                    {"Sentiment": "Negative", "word": "going", "frequency": 398},
                    {"Sentiment": "Negative", "word": "via", "frequency": 396},
                    {"Sentiment": "Negative", "word": "really", "frequency": 378},
                    {"Sentiment": "Negative", "word": "problem", "frequency": 378},
                    {"Sentiment": "Negative", "word": "answers", "frequency": 374},
                    {"Sentiment": "Negative", "word": "bad", "frequency": 373},
                    {"Sentiment": "Negative", "word": "way", "frequency": 361},
                    {"Sentiment": "Neutral", "word": "chat", "frequency": 3485},
                    {"Sentiment": "Neutral", "word": "google", "frequency": 1441},
                    {"Sentiment": "Neutral", "word": "use", "frequency": 1312},
                    {"Sentiment": "Neutral", "word": "using", "frequency": 1259},
                    {"Sentiment": "Neutral", "word": "write", "frequency": 1138},
                    {"Sentiment": "Neutral", "word": "via", "frequency": 1021},
                    {"Sentiment": "Neutral", "word": "search", "frequency": 950},
                    {"Sentiment": "Neutral", "word": "ask", "frequency": 939},
                    {"Sentiment": "Neutral", "word": "asked", "frequency": 884},
                    {"Sentiment": "Neutral", "word": "new", "frequency": 822},
                    {"Sentiment": "Neutral", "word": "code", "frequency": 783},
                    {"Sentiment": "Neutral", "word": "know", "frequency": 632},
                    {"Sentiment": "Neutral", "word": "make", "frequency": 585},
                    {"Sentiment": "Neutral", "word": "think", "frequency": 579},
                    {"Sentiment": "Neutral", "word": "need", "frequency": 518},
                    {"Sentiment": "Neutral", "word": "used", "frequency": 505},
                    {"Sentiment": "Neutral", "word": "get", "frequency": 491},
                    {"Sentiment": "Neutral", "word": "one", "frequency": 463},
                    {"Sentiment": "Neutral", "word": "future", "frequency": 448},
                    {"Sentiment": "Neutral", "word": "see", "frequency": 409},
                    {"Sentiment": "Neutral", "word": "answer", "frequency": 401},
                    {"Sentiment": "Neutral", "word": "seo", "frequency": 385},
                    {"Sentiment": "Neutral", "word": "time", "frequency": 381},
                    {"Sentiment": "Neutral", "word": "would", "frequency": 376},
                    {"Sentiment": "Neutral", "word": "content", "frequency": 368},
                    {"Sentiment": "Neutral", "word": "replace", "frequency": 368},
                    {"Sentiment": "Neutral", "word": "red", "frequency": 353},
                    {"Sentiment": "Neutral", "word": "going", "frequency": 341},
                    {"Sentiment": "Neutral", "word": "chatbot", "frequency": 337},
                    {"Sentiment": "Neutral", "word": "twitter", "frequency": 335}
                ],
                    "data-610617640abbcb60d3c9b15bc576aea8": [
                    {"Sentiment": "Positive", "word": "chat", "frequency": 21685},
                    {"Sentiment": "Positive", "word": "like", "frequency": 13438},
                    {"Sentiment": "Positive", "word": "use", "frequency": 9243},
                    {"Sentiment": "Positive", "word": "new", "frequency": 6758},
                    {"Sentiment": "Positive", "word": "using", "frequency": 6618},
                    {"Sentiment": "Positive", "word": "help", "frequency": 5553},
                    {"Sentiment": "Positive", "word": "get", "frequency": 5379},
                    {"Sentiment": "Positive", "word": "write", "frequency": 5308},
                    {"Sentiment": "Positive", "word": "good", "frequency": 4886},
                    {"Sentiment": "Positive", "word": "make", "frequency": 4784},
                    {"Sentiment": "Positive", "word": "time", "frequency": 4753},
                    {"Sentiment": "Positive", "word": "one", "frequency": 4675},
                    {"Sentiment": "Positive", "word": "content", "frequency": 4482},
                    {"Sentiment": "Positive", "word": "asked", "frequency": 4396},
                    {"Sentiment": "Positive", "word": "would", "frequency": 4249},
                    {"Sentiment": "Positive", "word": "create", "frequency": 4248},
                    {"Sentiment": "Positive", "word": "intelligence", "frequency": 4161},
                    {"Sentiment": "Positive", "word": "people", "frequency": 4099},
                    {"Sentiment": "Positive", "word": "better", "frequency": 4042},
                    {"Sentiment": "Positive", "word": "see", "frequency": 4037},
                    {"Sentiment": "Positive", "word": "know", "frequency": 3927},
                    {"Sentiment": "Positive", "word": "think", "frequency": 3846},
                    {"Sentiment": "Positive", "word": "tool", "frequency": 3793},
                    {"Sentiment": "Positive", "word": "google", "frequency": 3791},
                    {"Sentiment": "Positive", "word": "great", "frequency": 3736},
                    {"Sentiment": "Positive", "word": "artificial", "frequency": 3580},
                    {"Sentiment": "Positive", "word": "tools", "frequency": 3572},
                    {"Sentiment": "Positive", "word": "free", "frequency": 3529},
                    {"Sentiment": "Positive", "word": "language", "frequency": 3519},
                    {"Sentiment": "Positive", "word": "best", "frequency": 3492},
                    {"Sentiment": "Negative", "word": "chat", "frequency": 9226},
                    {"Sentiment": "Negative", "word": "use", "frequency": 2237},
                    {"Sentiment": "Negative", "word": "using", "frequency": 2026},
                    {"Sentiment": "Negative", "word": "like", "frequency": 1887},
                    {"Sentiment": "Negative", "word": "people", "frequency": 1841},
                    {"Sentiment": "Negative", "word": "google", "frequency": 1840},
                    {"Sentiment": "Negative", "word": "write", "frequency": 1721},
                    {"Sentiment": "Negative", "word": "new", "frequency": 1608},
                    {"Sentiment": "Negative", "word": "asked", "frequency": 1537},
                    {"Sentiment": "Negative", "word": "get", "frequency": 1519},
                    {"Sentiment": "Negative", "word": "one", "frequency": 1485},
                    {"Sentiment": "Negative", "word": "time", "frequency": 1463},
                    {"Sentiment": "Negative", "word": "know", "frequency": 1430},
                    {"Sentiment": "Negative", "word": "would", "frequency": 1423},
                    {"Sentiment": "Negative", "word": "think", "frequency": 1408},
                    {"Sentiment": "Negative", "word": "make", "frequency": 1353},
                    {"Sentiment": "Negative", "word": "banned", "frequency": 1277},
                    {"Sentiment": "Negative", "word": "even", "frequency": 1252},
                    {"Sentiment": "Negative", "word": "wrong", "frequency": 1195},
                    {"Sentiment": "Negative", "word": "going", "frequency": 1096},
                    {"Sentiment": "Negative", "word": "content", "frequency": 1006},
                    {"Sentiment": "Negative", "word": "data", "frequency": 995},
                    {"Sentiment": "Negative", "word": "answer", "frequency": 992},
                    {"Sentiment": "Negative", "word": "human", "frequency": 988},
                    {"Sentiment": "Negative", "word": "need", "frequency": 986},
                    {"Sentiment": "Negative", "word": "used", "frequency": 981},
                    {"Sentiment": "Negative", "word": "see", "frequency": 968},
                    {"Sentiment": "Negative", "word": "many", "frequency": 966},
                    {"Sentiment": "Negative", "word": "work", "frequency": 946},
                    {"Sentiment": "Negative", "word": "via", "frequency": 936},
                    {"Sentiment": "Neutral", "word": "chat", "frequency": 18918},
                    {"Sentiment": "Neutral", "word": "use", "frequency": 3684},
                    {"Sentiment": "Neutral", "word": "using", "frequency": 2845},
                    {"Sentiment": "Neutral", "word": "new", "frequency": 2800},
                    {"Sentiment": "Neutral", "word": "via", "frequency": 2549},
                    {"Sentiment": "Neutral", "word": "google", "frequency": 2373},
                    {"Sentiment": "Neutral", "word": "write", "frequency": 2286},
                    {"Sentiment": "Neutral", "word": "asked", "frequency": 2225},
                    {"Sentiment": "Neutral", "word": "know", "frequency": 1869},
                    {"Sentiment": "Neutral", "word": "ask", "frequency": 1778},
                    {"Sentiment": "Neutral", "word": "get", "frequency": 1647},
                    {"Sentiment": "Neutral", "word": "make", "frequency": 1574},
                    {"Sentiment": "Neutral", "word": "future", "frequency": 1572},
                    {"Sentiment": "Neutral", "word": "think", "frequency": 1566},
                    {"Sentiment": "Neutral", "word": "used", "frequency": 1452},
                    {"Sentiment": "Neutral", "word": "microsoft", "frequency": 1414},
                    {"Sentiment": "Neutral", "word": "one", "frequency": 1402},
                    {"Sentiment": "Neutral", "word": "time", "frequency": 1294},
                    {"Sentiment": "Neutral", "word": "search", "frequency": 1237},
                    {"Sentiment": "Neutral", "word": "world", "frequency": 1208},
                    {"Sentiment": "Neutral", "word": "would", "frequency": 1203},
                    {"Sentiment": "Neutral", "word": "read", "frequency": 1168},
                    {"Sentiment": "Neutral", "word": "text", "frequency": 1161},
                    {"Sentiment": "Neutral", "word": "check", "frequency": 1153},
                    {"Sentiment": "Neutral", "word": "need", "frequency": 1141},
                    {"Sentiment": "Neutral", "word": "work", "frequency": 1134},
                    {"Sentiment": "Neutral", "word": "take", "frequency": 1127},
                    {"Sentiment": "Neutral", "word": "going", "frequency": 1121},
                    {"Sentiment": "Neutral", "word": "tool", "frequency": 1089},
                    {"Sentiment": "Neutral", "word": "replace", "frequency": 1076}
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsWords = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-words', spec, embedOptionsWords).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });
});

// Ottenere i riferimenti ai pulsanti e al contenitore del grafico - trigrams
const graphicsContainerTrigrams = document.getElementById('graphics-container-trigrams');
const graphics1BtnTrigrams = document.getElementById('graphics1-btn-trigrams');
const graphics2BtnTrigrams = document.getElementById('graphics2-btn-trigrams');
const graphics3BtnTrigrams = document.getElementById('graphics3-btn-trigrams');

// trigrammimensilireddit - default
const defaultTrigrams = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
    "legend": {"orient": "top-right"}
    },
        "data": {"name": "data-4c4957fbea79566afd0e7e929d421aca"},
        "mark": {"type": "bar"},
        "encoding": {
        "color": {"field": "Sentimento", "type": "quantitative"},
        "opacity": {"condition": {"param": "param_7", "value": 1}, "value": 0.3},
        "tooltip": [
            {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
            {
                "field": "Frequency",
                "title": "Frequenza assoluta",
                "type": "quantitative"
            }
        ],
            "x": {
            "field": "Trigram",
                "sort": "-y",
                "title": "Trigramma",
                "type": "nominal"
        },
        "y": {
            "field": "Frequency",
                "title": "Frequenza registrata",
                "type": "quantitative"
        }
    },
        "height": 600,
        "params": [
        {
            "name": "param_6",
            "select": {"type": "point", "fields": ["MonthName"]},
            "bind": {
                "input": "select",
                "options": ["Aprile", "Maggio", "Giugno", null],
                "labels": ["Aprile ", "Maggio ", "Giugno ", "Tutto"],
                "name": "Selettore del periodo: "
            }
        },
        {
            "name": "param_7",
            "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
        },
        {
            "name": "param_8",
            "select": {"type": "interval", "encodings": ["x", "y"]},
            "bind": "scales"
        }
    ],
        "resolve": {"scale": {"y": "independent"}},
        "title": {
        "text": "Top Trigrammi sul periodo aprile-giugno 2023",
            "subtitle": "Dati relativi al dataset di Reddit"
    },
        "transform": [{"filter": {"param": "param_6"}}],
        "width": 800,
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-4c4957fbea79566afd0e7e929d421aca": [
            {
                "Month": 4,
                "Trigram": "smart robot response",
                "Frequency": 217,
                "Sentimento": 0.4019,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "automatic tldr shorter",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "robot summary automatic",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "smart robot summary",
                "Frequency": 43,
                "Sentimento": 0.4019,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "good sense humor",
                "Frequency": 47,
                "Sentimento": 0.6124,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "summary automatic tldr",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "think based comments",
                "Frequency": 107,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "heres think based",
                "Frequency": 110,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "robot response automatic",
                "Frequency": 217,
                "Sentimento": 0,
                "MonthName": "Aprile"
            },
            {
                "Month": 4,
                "Trigram": "based comments like",
                "Frequency": 60,
                "Sentimento": 0.3612,
                "MonthName": "Aprile"
            },
            {
                "Month": 6,
                "Trigram": "wrote explanation breakdown",
                "Frequency": 28,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "feel error message",
                "Frequency": 19,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "disagree strongly disagree",
                "Frequency": 20,
                "Sentimento": -0.4767,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "black mirror episode",
                "Frequency": 23,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "error message moderators",
                "Frequency": 25,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "action performed automatically",
                "Frequency": 26,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "bot action performed",
                "Frequency": 26,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "explanation breakdown list",
                "Frequency": 29,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "toolkit feel error",
                "Frequency": 17,
                "Sentimento": -0.4019,
                "MonthName": "Giugno"
            },
            {
                "Month": 6,
                "Trigram": "moderation toolkit feel",
                "Frequency": 17,
                "Sentimento": 0,
                "MonthName": "Giugno"
            },
            {
                "Month": 5,
                "Trigram": "reminded reduce spam",
                "Frequency": 43,
                "Sentimento": -0.3612,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "link send reminded",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "utc remind link",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "mir spanisch vor",
                "Frequency": 57,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "das kommt mir",
                "Frequency": 62,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "verstehe nur bahnhof",
                "Frequency": 63,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "large language model",
                "Frequency": 69,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "ich verstehe nur",
                "Frequency": 74,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "send reminded reduce",
                "Frequency": 43,
                "Sentimento": 0,
                "MonthName": "Maggio"
            },
            {
                "Month": 5,
                "Trigram": "kommt mir spanisch",
                "Frequency": 57,
                "Sentimento": 0,
                "MonthName": "Maggio"
            }
        ]
    }
};

const defaultEmbedOptionsTrigrams = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#graphics-container-trigrams', defaultTrigrams, defaultEmbedOptionsTrigrams).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});

document.addEventListener('DOMContentLoaded', function() {
    graphics1BtnTrigrams.addEventListener('click', function() {
        // trigrammimensilireddit
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
            "legend": {"orient": "top-right"}
            },
                "data": {"name": "data-4c4957fbea79566afd0e7e929d421aca"},
                "mark": {"type": "bar"},
                "encoding": {
                "color": {"field": "Sentimento", "type": "quantitative"},
                "opacity": {"condition": {"param": "param_7", "value": 1}, "value": 0.3},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {
                        "field": "Frequency",
                        "title": "Frequenza assoluta",
                        "type": "quantitative"
                    }
                ],
                    "x": {
                    "field": "Trigram",
                        "sort": "-y",
                        "title": "Trigramma",
                        "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                        "title": "Frequenza registrata",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_6",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": ["Aprile", "Maggio", "Giugno", null],
                        "labels": ["Aprile ", "Maggio ", "Giugno ", "Tutto"],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_7",
                    "select": {"type": "point", "fields": ["Trigram", "Frequency"]}
                },
                {
                    "name": "param_8",
                    "select": {"type": "interval", "encodings": ["x", "y"]},
                    "bind": "scales"
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "title": {
                "text": "Top Trigrammi sul periodo aprile-giugno 2023",
                    "subtitle": "Dati relativi al dataset di Reddit"
            },
                "transform": [{"filter": {"param": "param_6"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-4c4957fbea79566afd0e7e929d421aca": [
                    {
                        "Month": 4,
                        "Trigram": "smart robot response",
                        "Frequency": 217,
                        "Sentimento": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "automatic tldr shorter",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "robot summary automatic",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "smart robot summary",
                        "Frequency": 43,
                        "Sentimento": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "good sense humor",
                        "Frequency": 47,
                        "Sentimento": 0.6124,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "summary automatic tldr",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "think based comments",
                        "Frequency": 107,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "heres think based",
                        "Frequency": 110,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "robot response automatic",
                        "Frequency": 217,
                        "Sentimento": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "based comments like",
                        "Frequency": 60,
                        "Sentimento": 0.3612,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 6,
                        "Trigram": "wrote explanation breakdown",
                        "Frequency": 28,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "feel error message",
                        "Frequency": 19,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "disagree strongly disagree",
                        "Frequency": 20,
                        "Sentimento": -0.4767,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "black mirror episode",
                        "Frequency": 23,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "error message moderators",
                        "Frequency": 25,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "action performed automatically",
                        "Frequency": 26,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "bot action performed",
                        "Frequency": 26,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "explanation breakdown list",
                        "Frequency": 29,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "toolkit feel error",
                        "Frequency": 17,
                        "Sentimento": -0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "moderation toolkit feel",
                        "Frequency": 17,
                        "Sentimento": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "reminded reduce spam",
                        "Frequency": 43,
                        "Sentimento": -0.3612,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "link send reminded",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "utc remind link",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "mir spanisch vor",
                        "Frequency": 57,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "das kommt mir",
                        "Frequency": 62,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "verstehe nur bahnhof",
                        "Frequency": 63,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "large language model",
                        "Frequency": 69,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "ich verstehe nur",
                        "Frequency": 74,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "send reminded reduce",
                        "Frequency": 43,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "kommt mir spanisch",
                        "Frequency": 57,
                        "Sentimento": 0,
                        "MonthName": "Maggio"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics2BtnTrigrams.addEventListener('click', function() {
        // trigrammimensilitwitterIT
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
            "legend": {"orient": "top-right"}
            },
                "data": {"name": "data-3079b0940864c73a429f2debe8879a1e"},
                "mark": {"type": "bar"},
                "encoding": {
                "color": {"field": "Sentiment", "type": "quantitative"},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {
                        "field": "Frequency",
                        "title": "frequenza assoluta",
                        "type": "quantitative"
                    }
                ],
                    "x": {
                    "field": "Trigram",
                        "sort": "-y",
                        "title": "Trigramma",
                        "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                        "title": "Frequenza registrata",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_37",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": [
                            "Settembre",
                            "Ottobre",
                            "Dicembre",
                            "Gennaio",
                            "Febbraio",
                            "Marzo",
                            "Aprile",
                            "Maggio",
                            "Giugno",
                            null
                        ],
                        "labels": [
                            "Settembre ",
                            "Ottobre ",
                            "Dicembre ",
                            "Gennaio ",
                            "Febbraio ",
                            "Marzo ",
                            "Aprile ",
                            "Maggio ",
                            "Giugno ",
                            "All"
                        ],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_38",
                    "select": {"type": "point", "nearest": true, "on": "mouseover"}
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "title": {
                "text": "Top Trigrammi sul periodo 2022/2023 sui Tweets italiani",
                    "subtitle": "Dati relativi al dataset di Tweets in lingua italiana"
            },
                "transform": [{"filter": {"param": "param_37"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-3079b0940864c73a429f2debe8879a1e": [
                    {
                        "Month": 4,
                        "Trigram": "info qui tagga",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 12,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "interessata opinione commenti",
                        "Frequency": 12,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "scrivere prompt efficace",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "prompt efficace programmi",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "efficace programmi intelligenza",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "programmi intelligenza artificiale",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "intelligenza artificiale generativa",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "qui tagga persona",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 12,
                        "Trigram": "sicurezza hacker potrebbero",
                        "Frequency": 10,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "linizio fine google",
                        "Frequency": 20,
                        "Sentiment": 0.2023,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "intelligenza artificiale stupisce",
                        "Frequency": 10,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "google deve preoccuparsi",
                        "Frequency": 10,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "problema sicurezza hacker",
                        "Frequency": 10,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "ora intelligenza artificiale",
                        "Frequency": 11,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "sostituire google uomo",
                        "Frequency": 12,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "artificiale stupisce spaventa",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "grosso problema sicurezza",
                        "Frequency": 16,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "diventare grosso problema",
                        "Frequency": 16,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 2,
                        "Trigram": "info qui tagga",
                        "Frequency": 15,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "leggi larticolo link",
                        "Frequency": 12,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "italia comprendi tecnologia",
                        "Frequency": 13,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "comprendi tecnologia applicazioni",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "interessata opinione commenti",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 14,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 15,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "qui tagga persona",
                        "Frequency": 15,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "parlarne parlarne parlarne",
                        "Frequency": 20,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "ruba credenziali social",
                        "Frequency": 15,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "leggi larticolo link",
                        "Frequency": 36,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "comprendi tecnologia applicazioni",
                        "Frequency": 34,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "italia comprendi tecnologia",
                        "Frequency": 30,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "intelligenza artificiale generativa",
                        "Frequency": 25,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "minaccia monopolio motore",
                        "Frequency": 19,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "monopolio motore ricerca",
                        "Frequency": 19,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "info qui tagga",
                        "Frequency": 18,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "qui tagga persona",
                        "Frequency": 18,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "tagga persona interessata",
                        "Frequency": 18,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "persona interessata opinione",
                        "Frequency": 18,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 6,
                        "Trigram": "bard risposta google",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "ecco bard risposta",
                        "Frequency": 7,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "già lavoro sicuro",
                        "Frequency": 5,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 9,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "100 milioni utenti",
                        "Frequency": 6,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 3,
                        "Trigram": "nuova intelligenza artificiale",
                        "Frequency": 21,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "100 milioni utenti",
                        "Frequency": 21,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "unisciti gruppo facebook",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "esperti unisciti gruppo",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "appassionati esperti unisciti",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "altri appassionati esperti",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "conoscenze altri appassionati",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "idee conoscenze altri",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "scambiare idee conoscenze",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "vuoi scambiare idee",
                        "Frequency": 97,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 11,
                        "Trigram": "modello linguaggio grandi",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "facendogli domanda amiloidosi",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "testo simile umano",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "generazione testo simile",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "addestrato dallintelligenza artificiale",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "dimensioni addestrato dallintelligenza",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "grandi dimensioni addestrato",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "linguaggio grandi dimensioni",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "sviluppo sicuramente bene",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 11,
                        "Trigram": "sogno diventa reale",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Novembre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "gira verso programmatori",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "scuote testa gira",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "artificiale scuote testa",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "immaginando intelligenza artificiale",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "lavorando farla scalare",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "sovraccarico lavorando farla",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "google hitech ansa",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "concorrenza google hitech",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "testa gira verso",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "intelligenza artificiale scuote",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "google risposte argomenti",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "qualche errore confonde",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "ancora qualche errore",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "vedi ancora qualche",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "gioco google anni",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "fuori gioco google",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "scopriamo cos funziona",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "oltre milione utenti",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "concorrenza google risposte",
                        "Frequency": 3,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "mette fuori gioco",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });

    graphics3BtnTrigrams.addEventListener('click', function() {
        // trigrammimensilitwitter
        const spec = {
            "config": {
            "view": {"continuousWidth": 300, "continuousHeight": 300},
            "axisX": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 15},
            "legend": {"orient": "top-right"}
            },
                "data": {"name": "data-27129dce2d692b9d1d41a1e313f98f54"},
                "mark": {"type": "bar"},
                "encoding": {
                "color": {"field": "Sentiment", "type": "quantitative"},
                "tooltip": [
                    {"field": "Trigram", "title": "Trigramma", "type": "nominal"},
                    {
                        "field": "Frequency",
                        "title": "frequenza assoluta",
                        "type": "quantitative"
                    }
                ],
                    "x": {
                    "field": "Trigram",
                        "sort": "-y",
                        "title": "Trigramma",
                        "type": "nominal"
                },
                "y": {
                    "field": "Frequency",
                        "title": "Frequenza registrata",
                        "type": "quantitative"
                }
            },
                "height": 600,
                "params": [
                {
                    "name": "param_7",
                    "select": {"type": "point", "fields": ["MonthName"]},
                    "bind": {
                        "input": "select",
                        "options": [
                            "Settembre",
                            "Ottobre",
                            "Dicembre",
                            "Gennaio",
                            "Febbraio",
                            "Marzo",
                            "Aprile",
                            "Maggio",
                            "Giugno",
                            null
                        ],
                        "labels": [
                            "Settembre ",
                            "Ottobre ",
                            "Dicembre ",
                            "Gennaio ",
                            "Febbraio ",
                            "Marzo ",
                            "Aprile ",
                            "Maggio ",
                            "Giugno ",
                            "All"
                        ],
                        "name": "Selettore del periodo: "
                    }
                },
                {
                    "name": "param_8",
                    "select": {"type": "point", "nearest": true, "on": "mouseover"}
                }
            ],
                "resolve": {"scale": {"y": "independent"}},
                "title": {
                "text": "Top Trigrammi sul periodo 2022/2023",
                    "subtitle": "Dati relativi al dataset di Tweets in lingua inglese"
            },
                "transform": [{"filter": {"param": "param_7"}}],
                "width": 800,
                "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
                "datasets": {
                "data-27129dce2d692b9d1d41a1e313f98f54": [
                    {
                        "Month": 4,
                        "Trigram": "banned italy privacy",
                        "Frequency": 146,
                        "Sentiment": -0.4588,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "spot recommendation ticker",
                        "Frequency": 86,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "recommendation ticker time",
                        "Frequency": 86,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "ticker time interval",
                        "Frequency": 86,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "special edition guide",
                        "Frequency": 84,
                        "Sentiment": 0.4019,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "rsi recommendation ticker",
                        "Frequency": 78,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "time interval 5min",
                        "Frequency": 53,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "interval 5min price",
                        "Frequency": 53,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "predict stock moves",
                        "Frequency": 47,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 4,
                        "Trigram": "italy privacy concerns",
                        "Frequency": 142,
                        "Sentiment": 0,
                        "MonthName": "Aprile"
                    },
                    {
                        "Month": 12,
                        "Trigram": "pros need master",
                        "Frequency": 130,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "2022 review eeat",
                        "Frequency": 200,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "red google search",
                        "Frequency": 134,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "quora launches poe",
                        "Frequency": 145,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "code red amid",
                        "Frequency": 132,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "launches poe way",
                        "Frequency": 148,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "poe way talk",
                        "Frequency": 149,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "issued code red",
                        "Frequency": 196,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "code red google",
                        "Frequency": 197,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 12,
                        "Trigram": "seo 2022 review",
                        "Frequency": 197,
                        "Sentiment": 0,
                        "MonthName": "Dicembre"
                    },
                    {
                        "Month": 2,
                        "Trigram": "monthly active users",
                        "Frequency": 97,
                        "Sentiment": 0.4019,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "access new features",
                        "Frequency": 80,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "faster response times",
                        "Frequency": 86,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "million monthly active",
                        "Frequency": 86,
                        "Sentiment": 0.4019,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "generated based instructions",
                        "Frequency": 87,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "humidity wind speed",
                        "Frequency": 87,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "current temp humidity",
                        "Frequency": 87,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "100 million monthly",
                        "Frequency": 93,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "100 million users",
                        "Frequency": 118,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 2,
                        "Trigram": "temp humidity wind",
                        "Frequency": 87,
                        "Sentiment": 0,
                        "MonthName": "Febbraio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "large language models",
                        "Frequency": 304,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "natural language processing",
                        "Frequency": 254,
                        "Sentiment": 0.3612,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "medical licensing exam",
                        "Frequency": 216,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "generated based instructions",
                        "Frequency": 195,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "current temp humidity",
                        "Frequency": 189,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "temp humidity wind",
                        "Frequency": 189,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "humidity wind speed",
                        "Frequency": 189,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "wharton mba exam",
                        "Frequency": 165,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "multibillion dollar investment",
                        "Frequency": 158,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 1,
                        "Trigram": "trending wikipedia pages",
                        "Frequency": 144,
                        "Sentiment": 0,
                        "MonthName": "Gennaio"
                    },
                    {
                        "Month": 6,
                        "Trigram": "spread malicious code",
                        "Frequency": 34,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "experts fight attacks",
                        "Frequency": 55,
                        "Sentiment": -0.6705,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "fight attacks experts",
                        "Frequency": 54,
                        "Sentiment": -0.6705,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "church service generated",
                        "Frequency": 34,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "attend church service",
                        "Frequency": 34,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "experts exploring application",
                        "Frequency": 54,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "hundreds attend church",
                        "Frequency": 34,
                        "Sentiment": 0,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "cybersecurity experts fight",
                        "Frequency": 55,
                        "Sentiment": -0.3818,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "attacks experts exploring",
                        "Frequency": 54,
                        "Sentiment": -0.4404,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 6,
                        "Trigram": "help cybersecurity experts",
                        "Frequency": 55,
                        "Sentiment": 0.4019,
                        "MonthName": "Giugno"
                    },
                    {
                        "Month": 5,
                        "Trigram": "new york federal",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cases new york",
                        "Frequency": 23,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "bogus cases new",
                        "Frequency": 23,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "federal court filing",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cited bogus cases",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "shopping app temu",
                        "Frequency": 25,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "temu invitation code",
                        "Frequency": 30,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "large language models",
                        "Frequency": 39,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "cited fake cases",
                        "Frequency": 23,
                        "Sentiment": -0.4767,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 5,
                        "Trigram": "york federal court",
                        "Frequency": 24,
                        "Sentiment": 0,
                        "MonthName": "Maggio"
                    },
                    {
                        "Month": 3,
                        "Trigram": "artificial intelligence technology",
                        "Frequency": 34,
                        "Sentiment": 0.4767,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "large language models",
                        "Frequency": 41,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "100 million users",
                        "Frequency": 44,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "temporarily banned italy",
                        "Frequency": 46,
                        "Sentiment": -0.4588,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "italy privacy concerns",
                        "Frequency": 87,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "plugin accessing website",
                        "Frequency": 89,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "browser plugin accessing",
                        "Frequency": 89,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "web browser plugin",
                        "Frequency": 89,
                        "Sentiment": 0,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "banned italy privacy",
                        "Frequency": 108,
                        "Sentiment": -0.4588,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 3,
                        "Trigram": "monthly active users",
                        "Frequency": 34,
                        "Sentiment": 0.4019,
                        "MonthName": "Marzo"
                    },
                    {
                        "Month": 10,
                        "Trigram": "cares watches women",
                        "Frequency": 2,
                        "Sentiment": 0.4588,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "coti years ago",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "watches women soccer",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "looks like fun",
                        "Frequency": 2,
                        "Sentiment": 0.7003,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "close nuclear war",
                        "Frequency": 4,
                        "Sentiment": -0.5994,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "needs deescalate russia",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "great nft project",
                        "Frequency": 2,
                        "Sentiment": 0.6249,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "0xf23a8ca32aabc994d81dfdab0f369e0ca752a3ad testnet test",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "biden deescalate russia",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 10,
                        "Trigram": "tell cost website",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Ottobre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "lehman brothers 2022",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "billions trillions dollars",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "spend billions trillions",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "let spend billions",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "yayyyy let spend",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "100 3000 week",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "home owner charged",
                        "Frequency": 2,
                        "Sentiment": -0.2023,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "flying bussing illegals",
                        "Frequency": 2,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "trillions dollars members",
                        "Frequency": 1,
                        "Sentiment": 0,
                        "MonthName": "Settembre"
                    },
                    {
                        "Month": 9,
                        "Trigram": "stop paying congress",
                        "Frequency": 2,
                        "Sentiment": -0.296,
                        "MonthName": "Settembre"
                    }
                ]
            }
        };

        // Rendi il grafico visibile in un contenitore HTML
        const embedOptionsTrigrams = {
            actions: false,
            tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
        };

        vegaEmbed('#graphics-container-trigrams', spec, embedOptionsTrigrams).then((result) => {
            const view = result.view;

            // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
            view.addEventListener('mouseover', handleMouseOver);
            view.addEventListener('mouseout', handleMouseOut);
        });
    });
});

// comparativeAnalysis_twitter_reddit
const topic = {
    "config": {
    "view": {"continuousWidth": 300, "continuousHeight": 300},
    "facet": {"spacing": 10},
    "header": {"labelAlign": "left", "labelAngle": 45, "labelPadding": 10},
    "legend": {"orient": "right"},
    "title": {"fontSize": 16, "fontWeight": "bold"}
    },
        "data": {"name": "data-d12e49509664dde5ecb1d08bf0dc2fc1"},
        "mark": {"type": "bar", "opacity": 0.7},
        "encoding": {
        "color": {
            "field": "social",
                "scale": {
                "domain": ["Twitter", "Reddit"],
                    "range": ["#1DA1F2", "#F44E3F"]
            },
            "title": "Social di riferimento",
                "type": "nominal"
        },
        "column": {
            "field": "Topic",
                "header": {"orient": "bottom"},
            "sort": {"field": "Topic", "order": "descending"},
            "title": "Argomento",
                "type": "ordinal"
        },
        "tooltip": [
            {"field": "Topic", "type": "nominal"},
            {"field": "Sentiment", "type": "quantitative"},
            {"field": "Source", "type": "nominal"}
        ],
            "x": {
            "axis": {"labels": false},
            "field": "social",
                "title": "",
                "type": "nominal"
        },
        "y": {"field": "Sentiment", "title": "Sentimento", "type": "quantitative"}
    },
        "params": [
        {
            "name": "param_86",
            "select": {"type": "point", "fields": ["Source"]},
            "bind": {
                "input": "radio",
                "options": ["Vader", "TextBlob"],
                "labels": ["Vader", "TextBlob"],
                "name": "Selettore libreria: "
            }
        },
        {
            "name": "param_87",
            "select": {"type": "interval", "encodings": ["x", "y"]},
            "bind": "scales"
        }
    ],
        "title": "Analisi comparativa sui valori registrati nei dataset di Twitter e Reddit",
        "transform": [{"filter": {"param": "param_86"}}],
        "$schema": "https://vega.github.io/schema/vega-lite/v5.8.0.json",
        "datasets": {
        "data-d12e49509664dde5ecb1d08bf0dc2fc1": [
            {
                "Topic": "browser",
                "Sentiment": 0.12513816964285715,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "browser",
                "Sentiment": 0.11306694293709998,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "google",
                "Sentiment": 0.15539044259140472,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "google",
                "Sentiment": 0.11700492095516343,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "church",
                "Sentiment": 0.1497836363636364,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "church",
                "Sentiment": 0.07403188627560638,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "microsoft",
                "Sentiment": 0.1817045393858478,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "microsoft",
                "Sentiment": 0.10643076350477886,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "learning",
                "Sentiment": 0.2918083408720825,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "learning",
                "Sentiment": 0.1548236830886573,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "school",
                "Sentiment": 0.1661807980049875,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "school",
                "Sentiment": 0.11240566313450323,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentiment": 0.07174561128526645,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentiment": 0.09055091361437247,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "ban",
                "Sentiment": -0.05126939411098528,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "ban",
                "Sentiment": 0.0967781465357166,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "italy ban",
                "Sentiment": -0.401575,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "italy ban",
                "Sentiment": 0.16375,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "privacy",
                "Sentiment": -0.10222243958573075,
                "Source": "Vader",
                "social": "Twitter"
            },
            {
                "Topic": "privacy",
                "Sentiment": 0.09206016730178328,
                "Source": "TextBlob",
                "social": "Twitter"
            },
            {
                "Topic": "browser",
                "Sentiment": 0.21027664670658683,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "browser",
                "Sentiment": 0.09446546841898104,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "google",
                "Sentiment": 0.24002482517482515,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "google",
                "Sentiment": 0.08747736593722892,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "church",
                "Sentiment": 0.14810882352941174,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "church",
                "Sentiment": 0.06989789738214161,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "microsoft",
                "Sentiment": 0.03791739130434783,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "microsoft",
                "Sentiment": 0.08387802850930105,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "learning",
                "Sentiment": 0.3745450372208437,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "learning",
                "Sentiment": 0.09229668671780765,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "school",
                "Sentiment": 0.15754870340356564,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "school",
                "Sentiment": 0.0692709223923041,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentiment": 0.6024499999999999,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "cryptocurrencies",
                "Sentiment": 0.1721897546897547,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "ban",
                "Sentiment": 0.0648280701754386,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "ban",
                "Sentiment": 0.06086591154350151,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "italy ban",
                "Sentiment": null,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "italy ban",
                "Sentiment": null,
                "Source": "TextBlob",
                "social": "Reddit"
            },
            {
                "Topic": "privacy",
                "Sentiment": 0.3657619354838709,
                "Source": "Vader",
                "social": "Reddit"
            },
            {
                "Topic": "privacy",
                "Sentiment": 0.09730854053364278,
                "Source": "TextBlob",
                "social": "Reddit"
            }
        ]
    }
};

const defaultEmbedOptionsTopic = {
    actions: false,
    tooltip: { theme: 'custom' } // Utilizza il tema dei tooltip personalizzati
};

vegaEmbed('#topic-container', topic, defaultEmbedOptionsTopic).then((result) => {
    const view = result.view;

    // Aggiungi l'ascoltatore dell'evento di passaggio del mouse
    view.addEventListener('mouseover', handleMouseOver);
    view.addEventListener('mouseout', handleMouseOut);
});
