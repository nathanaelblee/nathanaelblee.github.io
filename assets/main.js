// Impulse-response trace in the hero: a decaying, noisy oscillation drawn as an SVG path.
(function drawTrace() {
  const svg = document.querySelector(".trace");
  if (!svg) return;
  const W = 1000, H = 120, mid = H / 2, N = 900;
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
  let d = `M0 ${mid}`;
  for (let i = 1; i <= N; i++) {
    const t = i / N;
    const onset = t < 0.04 ? 0 : 1;
    const env = Math.exp(-(t - 0.04) * 7.5);
    const early = [0.06, 0.09, 0.13, 0.18].reduce((a, r) => a + Math.exp(-Math.pow((t - r) * 160, 2)) * 0.7, 0);
    const y = onset * (env * (rand() * 0.55 + Math.sin(i * 0.9) * 0.25) + early * (i % 2 ? 1 : -1));
    d += ` L${(t * W).toFixed(1)} ${(mid - y * mid * 0.92).toFixed(1)}`;
  }
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.innerHTML = `<line class="axis" x1="0" y1="${mid}" x2="${W}" y2="${mid}"/><path class="ir" d="${d}"/>`;
  const path = svg.querySelector(".ir");
  path.style.setProperty("--len", Math.ceil(path.getTotalLength()));
})();

// Click any figure image to view it full size.
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
