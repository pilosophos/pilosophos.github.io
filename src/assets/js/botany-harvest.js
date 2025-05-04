(function() {
  function showHarvests(json) {
    const harvestContainer = document.getElementById("harvested");

  }
  fetch("/special/town/pilosophos_harvest_file.json")
    .then(res => res.json)
    .then(showHarvests);

  class BotanyHarvests extends HTMLElement {
    DEFAULT_ART_BASE_URL = "https://raw.githubusercontent.com/jifunks/botany/master/art/"

    constructor() {
      super();

      this.fetchHarvests()
        .then(json => this.renderAllHarvests(json));
    }

    async fetchHarvests() {
      const jsonUrl = this.getAttribute("harvest-file");
      const res = await fetch(jsonUrl);
      return await res.json();
    }

    renderAllHarvests(harvestFile) {
      this.innerHTML = "";

      for (let [id, harvest] of Object.entries(harvestFile)) {
        this.renderSingleHarvest(
          id,
          harvest.description,
          harvest.age.replaceAll(":", " "),
          Math.round(harvest.score)
        );
      }
    }

    renderSingleHarvest(id, description, age, score) {
      const template = document.getElementById(this.getAttribute("template"));
      const harvestContainer = document.importNode(template.content, true);

      this.setDisplayIfExists(harvestContainer, `[data-show='id']`, id);
      this.setDisplayIfExists(harvestContainer, `[data-show='description']`, description);
      this.setDisplayIfExists(harvestContainer, `[data-show='age']`, age);
      this.setDisplayIfExists(harvestContainer, `[data-show='score']`, score);

      this.append(harvestContainer);
    }

    setDisplayIfExists(container, querySelector, textContent) {
      const displays = container.querySelectorAll(querySelector);
      displays.forEach(display => display.textContent = textContent);
    }
  }

  customElements.define("tilde-botany-harvests", BotanyHarvests);
})();