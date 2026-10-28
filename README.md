# Nate Lee portfolio

Personal portfolio site. Plain HTML/CSS/JS, hosted free on GitHub Pages. No build step.

## Structure

```
index.html                 Home: hero, project cards, experience, about, contact
about.html                 Bio, education, skills, music
resume.html                Embedded resume (Google Doc)
projects/*.html            One page per project
experience/akrf.html       AKRF internship write-up
assets/style.css           All styling (light + dark mode)
assets/main.js             Hero waveform + image lightbox
images/<page>/NN.webp      Images, one folder per page
```

## Editing

- Text: edit the HTML file directly.
- New image: drop a `.webp`/`.jpg` into the page's `images/` folder and add
  `<figure><img src="../images/<page>/NN.webp" alt="..."><figcaption>...</figcaption></figure>`.
- New project: copy an existing file in `projects/`, then add a card to the grid in `index.html`.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploy

Push to the `main` branch of the `<username>.github.io` repo. GitHub Pages publishes it in about a minute.
