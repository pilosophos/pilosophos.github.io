/**
 * ~pilosophos' modular botany plant rendering script
 * http://tilde.town/~pilosophos/town/botany.html
 */

(function(){
  DEFAULT_ART_BASE_URL = "https://raw.githubusercontent.com/jifunks/botany/master/art/"
  SECONDS_PER_DAY = 86400;

  class Botany extends HTMLElement {
    constructor() {
      super();

      this.fetchPlant()
        .then(json => this.renderPlant(json));
    }

    async fetchPlant() {
      const jsonUrl = this.getAttribute("plant");
      const res = await fetch(jsonUrl, {cache: "no-cache"})
      return await res.json();
    }

    async fetchPlantArt(species, stage, isDead) {
      const baseUrl = this.getAttribute("art-base-url") ?? DEFAULT_ART_BASE_URL;

      let fileName;
      if (isDead) {
        fileName = "rip.txt";
      } else if (stage == "seed") {
        fileName = "seed.txt";
      } else if (stage == "seedling") {
        fileName = "seedling.txt";
      } else {
        const artStages = {
          "young": "1.txt",
          "mature": "2.txt",
          "flowering": "3.txt",
          "seed-bearing": "2.txt",
        };
        const specialNames = {
          "venus flytrap": "flytrap",
          "jade plant": "jadeplant"
        }
        fileName = (specialNames[species] ?? species) + artStages[stage];
      }

      const res = await fetch(baseUrl + fileName);
      return await res.text();
    }

    async renderPlant(plant) {
      this.innerHTML = "";

      plant.score = Math.round(plant.score);
      plant.age = plant.age.replaceAll(":", " ");

      const art = await this.fetchPlantArt(plant.species, plant.stage, plant.is_dead);

      const template = document.getElementById(this.getAttribute("template"));
      this.append(document.importNode(template.content, true));

      this.setDisplayIfExists("[data-show='art']", art)
      for (const [key, value] of Object.entries(plant)) {
        this.setDisplayIfExists(`[data-show='${key}']`, value);
      }

      let waterPercentage = Math.round((1 - ((Date.now()/1000) - plant.last_watered) / SECONDS_PER_DAY)*100);
      waterPercentage = Math.max(0, waterPercentage);
      this.setDisplayIfExists(`[data-show='water']`, waterPercentage);
      
      const fullBars = Math.round(waterPercentage/10);
      const waterMeter = "█".repeat(fullBars) + "░".repeat(10-fullBars);
      this.setDisplayIfExists(`[data-show='water-meter']`, waterMeter);
    }

    setDisplayIfExists(querySelector, textContent) {
      const displays = this.querySelectorAll(querySelector);
      displays.forEach(display => display.textContent = textContent);
    }
  }

  customElements.define("tilde-botany", Botany);
})();