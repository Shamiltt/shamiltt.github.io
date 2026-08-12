/* skill detail page renderer */

/* WATER TOUCH RIPPLE */
$(document).on("pointerdown", ".ripple-zone", function (e) {
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = $('<span class="ripple"></span>').css({
        width: size + "px",
        height: size + "px",
        left: (e.clientX - rect.left - size / 2) + "px",
        top: (e.clientY - rect.top - size / 2) + "px"
    });
    $(this).append(ripple);
    setTimeout(() => ripple.remove(), 850);
});

const processSteps = [
  { title: "Empathize", icon: "fa-heart", desc: "Understand the user's needs, habits and context so every design decision is grounded in real insight." },
  { title: "Define", icon: "fa-bullseye", desc: "Frame the core problem and shape a clear design brief from everything learned in research." },
  { title: "Ideate", icon: "fa-lightbulb", desc: "Sketch, build moodboards and explore multiple concepts before narrowing down to a direction." },
  { title: "Prototype", icon: "fa-cubes", desc: "Build tangible models and samples to test proportion, form, fit and construction." },
  { title: "Test", icon: "fa-check-double", desc: "Evaluate usability and appeal, gather feedback and refine the design through iterations." }
];

async function loadSkill() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    const [detailsRes, skillsRes] = await Promise.all([
        fetch("/skills-details.json"),
        fetch("/skills.json")
    ]);
    const details = await detailsRes.json();
    const skills = await skillsRes.json();

    const skill = skills.find(s => s.name === name);
    const detail = details.find(d => d.name === name);
    const skillName = (detail || skill || {}).name || "Skill";

    document.title = `${skillName} | Portfolio Muhammed Shamil TT`;

    const container = document.getElementById("skillContent");
    if (!detail) {
        container.innerHTML = `<h2 class="heading">Skill <span>Not Found</span></h2>`;
        return;
    }

    const workHTML = detail.work && detail.work.length
        ? detail.work.map(w => `
            <div class="work-item ripple-zone">
              ${w.image ? `<img src="${w.image}" alt="${w.title}"/>` : ""}
              <h3>${w.title}</h3>
              <p>${w.desc}</p>
            </div>`).join("")
        : `<p class="coming-soon">Work samples coming soon.</p>`;

    container.innerHTML = `
        <div class="skill-head">
            <img src="${detail.icon}" alt="${detail.name}"/>
            <div>
                <span class="eyebrow">Skill</span>
                <h2 class="heading">${detail.name}</h2>
                <p class="tagline">${detail.tagline}</p>
            </div>
        </div>

        <div class="skill-about">
            <h3>About this skill</h3>
            <p>${detail.about}</p>
            ${detail.pdf ? `<a class="btn" href="${detail.pdf}" target="_blank"><span>View Portfolio PDF</span><i class="fas fa-file-pdf"></i></a>` : ""}
        </div>

        <div class="process">
            <h2 class="heading">Design <span>Thinking</span> Process</h2>
            <p class="qoute">A human-centred way to turn problems into thoughtful products.</p>
            <div class="process-grid">
                ${processSteps.map((step, i) => `
                    <div class="process-card ripple-zone">
                        <span class="step-no">${String(i + 1).padStart(2, "0")}</span>
                        <i class="fas ${step.icon}"></i>
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                    </div>`).join("")}
            </div>
        </div>

        <div class="skill-work">
            <h2 class="heading">Work in <span>${detail.name}</span></h2>
            <div class="work-grid">
                ${workHTML}
            </div>
        </div>

        <div class="morebtn">
            <a href="/#skills" class="btn">
                <i class="fas fa-arrow-left"></i>
                <span>Back to Skills</span>
            </a>
        </div>`;
}

loadSkill();
