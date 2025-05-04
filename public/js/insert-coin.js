---
---
(function(){
  const coinSfx = new Audio("{{ '/assets/audio/coin.ogg' | htmlBaseUrl }}");
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("insert-coin").addEventListener("click", () => {
      coinSfx.cloneNode(true).play();
      const credits = document.getElementById("credit-counter");
      credits.textContent = (parseInt(credits.textContent) + 1).toString().padStart(2, '0');
    });
  });
})();