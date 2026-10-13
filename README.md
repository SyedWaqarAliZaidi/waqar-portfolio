<div align="center">

# Syed Waqar Ali Zaidi

### AI Automation Engineer & AI Full-Stack Developer

Building multi-agent systems, workflow automations and AI-powered products. Based in Karachi, Pakistan.

[![Live site](https://img.shields.io/badge/Live_site-syed--waqar--portfolio.vercel.app-34e0a1?style=for-the-badge&logo=vercel&logoColor=black)](https://syed-waqar-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/syed-waqar-ali-zaidi-295b7339a/)
[![GitHub](https://img.shields.io/badge/GitHub-SyedWaqarAliZaidi-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SyedWaqarAliZaidi)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zaidialiwaqarsyed2006@gmail.com)

</div>

This repository is the source code of my interactive 3D portfolio. You travel through space: an asteroid hits a planet, you fly through the debris, and each world you reach opens a section of the portfolio. The journey loops endlessly.

**Open it here: https://syed-waqar-portfolio.vercel.app/**

---

| 👤 ABOUT ME |
| :--- |
| I'm an AI automation engineer and full-stack developer from Karachi, Pakistan. I'm studying **BS Artificial Intelligence at the University of Karachi** (since January 2025) and build practical AI systems alongside my degree.<br><br>From **October 2025 to March 2026** I worked as an AI Automation Engineer & Business Executive at **Radiant Solutions RS (Pvt) Ltd** in Karachi. Since then I have been working as a **freelancer**, delivering AI automation and full-stack projects for clients.<br><br>My work covers n8n and Zapier automation, API and webhook integration, multi-agent systems, a B2B lead-generation pipeline, deployment on Oracle Cloud VPS with Docker and Linux, Cloudflare tunnels, and running local LLMs with Ollama. I also take part in hackathons, where I ship AI products quickly.<br><br>**Certifications:** Google introductory Generative AI, LLMs and AI Agents course, and a NED University data-science course (both May 2026). |

| 🛠️ SKILLS | |
| :--- | :--- |
| **Languages** | Python, JavaScript, TypeScript |
| **Frameworks** | React, Next.js, Flask |
| **Automation & AI** | n8n, Zapier, API & webhook integration, multi-agent orchestration, LLM integration, MCP, Ollama |
| **Data & ML** | Pandas, scikit-learn, XGBoost |
| **Infrastructure** | Docker, Git, Linux, cloud deployment (Oracle Cloud VPS), Cloudflare tunnels |

| 🚀 PROJECTS | | |
| :--- | :--- | :--- |
| **[Chronicles of Eldervale](https://github.com/SyedWaqarAliZaidi/chronicles-eldervale-)** | Multi-agent fantasy RPG for the Microsoft Agents League hackathon: a Game Master coordinates five character agents with memory, dice and retrieval. | Python, Flask, Groq Llama 3.3, Azure AI Search |
| **[The Warden's Labyrinth](https://github.com/SyedWaqarAliZaidi/AI-Warden-Run-Google-AI-Hackathon)** | Adaptive cyberpunk game with Strategy, Narrative and Referee roles, built by a team of three for Google AISeekho. | React, TypeScript, TanStack Start, Cloudflare Workers |
| **[ScholarFind](https://github.com/SyedWaqarAliZaidi/buildbyte-byteforge)** | Solo-built scholarship matcher that ranks programs for a student profile and explains each match in plain English (BuildByte / IEEE SB NED). Suggestions are not guarantees. | Next.js, TypeScript, Gemini |
| **B2B Lead Generation Automation** | Professional work: discovery, AI scoring, outreach drafts and CRM sync in one pipeline. | n8n, LLM tools, MCP, Google Sheets |

| 💼 CLIENT WORK | | |
| :--- | :--- | :--- |
| **Podcast Editing & Automation MVP** | AI full-stack development | “I enjoyed working with you Waqar and I appreciate your flexibility around the project scope and budget.” (Josh) |
| **AI Lead Generation Automation** | AI automation | “I am very happy with the automation and described choosing waqar as one of my best decisions. keen to work together again.” (Timara, Netherlands) |
| **Dental Clinic Automation System** | AI automation: appointment booking and scheduling, appointment management, inbound/outbound calls, blog posting and calendar reminders | “I'm satisfied with the delivered system, which matched the outcome I had envisioned for my clinic.” (John Kincaid, dentist) |

---

## The portfolio website

| Stop | What opens |
| --- | --- |
| Opening impact | Name, role and a short introduction |
| Earth | About, background and skills |
| Mars | Projects |
| Saturn | Client work and reviews |
| Asteroid belt | LinkedIn, GitHub and Email |

- Real NASA-based planet textures, a smooth cratered asteroid field, atmosphere glow and a scroll-driven camera flight
- Click a planet to zoom inside it and read the section; close it to zoom back out
- Click sounds are generated in the browser with the Web Audio API (no audio files)
- Starts from the beginning on every visit

### Tech stack

- **Three.js r128** (WebGL), custom GLSL shaders for the halo and rings, instanced meshes for the asteroid field
- Vanilla JavaScript, HTML and CSS with no build step
- Planet textures are loaded from public GitHub-hosted image files (see Credits)

### Project structure

```text
index.html   page structure
styles.css   styling
ui.js        content, panels and click sounds
scene.js     3D scene: planets, asteroids and camera flight
```

### Accessibility and performance

- Respects the `prefers-reduced-motion` setting and has a Motion on/off button
- Sound can be muted at any time
- Planet and asteroid labels are real buttons and work with the keyboard
- Pixel ratio is capped and lowered automatically on slower devices
- Rendering pauses when the tab is hidden
- A recent device with a GPU is recommended for the 3D experience

### Run locally

Open `index.html` in a browser (an internet connection is needed for the 3D library, fonts and textures), or serve the folder:

```bash
npx serve .
```

### Edit the content

Open `ui.js`. The arrays `P` (projects) and `CL` (client work and reviews) are near the top. The About text is inside the `fill` function.

### Deploy to Vercel

1. Import this repository in Vercel (**Add New, then Project**).
2. Framework preset: **Other**. Leave build and output settings empty.
3. Click **Deploy**.

## Credits

- [three.js](https://threejs.org) (MIT License)
- Earth, Moon and Mars textures: public NASA imagery as used in the three.js examples
- Saturn and ring textures: [threex.planets](https://github.com/jeromeetienne/threex.planets) by Jerome Etienne
- Fonts: Cormorant Garamond and Jost (Google Fonts, SIL Open Font License)

## License

Code and written content: MIT (see `LICENSE`). Third-party assets keep their own licenses.

## Contact

- Email: zaidialiwaqarsyed2006@gmail.com
- Phone: +92 331 3851758
- LinkedIn: https://www.linkedin.com/in/syed-waqar-ali-zaidi-295b7339a/
- GitHub: https://github.com/SyedWaqarAliZaidi
