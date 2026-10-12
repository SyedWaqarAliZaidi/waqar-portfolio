# Syed Waqar Ali Zaidi: 3D Portfolio

An interactive 3D portfolio for **Syed Waqar Ali Zaidi**, AI Automation Engineer & AI Full-Stack Developer based in Karachi, Pakistan.

You travel through space: an asteroid hits a planet, you fly through the debris, and each world you reach opens a section of the portfolio. The journey loops endlessly.

**Live site:** _add your Vercel URL here_

## Experience

| Stop | What opens |
| --- | --- |
| Opening impact | Name, role and a short introduction |
| Earth | About, background and skills |
| Mars | Projects |
| Saturn | Client work and reviews |
| Asteroid belt | LinkedIn, GitHub and Email |

- Real NASA-based planet textures, a smooth cratered asteroid field, atmosphere glow and a scroll-driven camera flight.
- Click a planet to zoom inside it and read the section. Close it to zoom back out.
- Click sounds are generated in the browser with the Web Audio API (no audio files).
- Starts from the beginning on every visit.

## Tech stack

- **Three.js r128** (WebGL), custom GLSL shaders for the halo and rings, instanced meshes for the asteroid field
- Vanilla JavaScript, HTML and CSS in a single `index.html` (no build step)
- Planet textures are loaded from public GitHub-hosted image files (see Credits)

## Accessibility and performance

- Respects the `prefers-reduced-motion` setting and has a Motion on/off button
- Sound can be muted at any time
- Planet and asteroid labels are real buttons and work with the keyboard
- Pixel ratio is capped and lowered automatically on slower devices
- Rendering pauses when the tab is hidden
- A recent device with a GPU is recommended for the 3D experience

## Run locally

Open `index.html` in a browser (an internet connection is needed for the 3D library, fonts and textures), or serve the folder:

```bash
npx serve .
```

## Deploy to Vercel

1. Import this repository in Vercel (**Add New, then Project**).
2. Framework preset: **Other**. Leave build and output settings empty.
3. Click **Deploy**.

## Edit the content

Open `index.html` and search for these arrays near the top of the script:

- `P` : projects
- `CL` : client work and reviews

The About text is inside the `fill` function (`k=='a'`).

## Credits

- [three.js](https://threejs.org) (MIT License)
- Earth, Moon and Mars textures: public NASA imagery as used in the three.js examples
- Saturn and ring textures: [threex.planets](https://github.com/jeromeetienne/threex.planets) by Jerome Etienne
- Fonts: Cormorant Garamond and Jost (Google Fonts, SIL Open Font License)

## License

Code and written content: MIT (see `LICENSE`). Third-party assets keep their own licenses.

## Contact

- Email: zaidialiwaqarsyed2006@gmail.com
- LinkedIn: https://www.linkedin.com/in/syed-waqar-ali-zaidi-295b7339a/
- GitHub: https://github.com/SyedWaqarAliZaidi
