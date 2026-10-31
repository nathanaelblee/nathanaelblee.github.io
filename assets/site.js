// Click any case-study figure to view it full size.
(function lightbox() {
  const imgs = document.querySelectorAll(".prose figure img");
  if (!imgs.length) return;
  const dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.innerHTML = "<img alt=''>";
  document.body.appendChild(dlg);
  const big = dlg.querySelector("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      dlg.showModal();
    })
  );
  dlg.addEventListener("click", () => dlg.close());
})();
