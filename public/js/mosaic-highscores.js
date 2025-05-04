(function(){
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    const template = document.getElementById("mosiac-highscore-template");

    const ol = document.getElementById("mosaic-highscores-list");
    ol.innerHTML = "Loading scores...";
    
    const res = await fetch(ol.dataset.json, {cache: "no-cache"});
    const json = await res.json();
    const highscores = json.highscores;

    ol.innerHTML = "";
    
    let lastScore = -1;
    let rank = 0;
    for (let i=0; i < highscores.length; i++) {
      const scoreData = highscores[i];

      if (scoreData["Score"] != lastScore) {
        rank = i + 1;
      }
      lastScore = scoreData["Score"];

      const templateContent = document.importNode(template.content, true);
      const li = templateContent.querySelector(".mosaic-highscore-listitem");
      
      li.querySelector(".mosaic-highscore-rank").textContent = rank;
      li.querySelector(".mosaic-highscore-name").textContent = scoreData["Name"];
      li.querySelector(".mosaic-highscore-score").textContent = scoreData["Score"];
      li.querySelector(".mosaic-highscore-lines").textContent = scoreData["Lines"]

      ol.append(templateContent);
    }
  }
})();