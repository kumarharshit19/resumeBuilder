function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const summary = document.getElementById("summary").value;

    // NOW USING SEMICOLONS (;)  
    const skills = document.getElementById("skills").value.split(";");

    // Experience + Projects will also use semicolon if you want  
    const experience = document.getElementById("experience").value.split(";");
    const projects = document.getElementById("projects").value.split(";");

    const education = document.getElementById("education").value;

    const resumeContainer = document.getElementById("resume");

    resumeContainer.innerHTML = `
        <div class="resume-header">
            <h1>${name}</h1>
            <p class="contact-info">
                ${email} | ${phone}<br>
                ${linkedin ? "LinkedIn: " + linkedin : ""} 
                ${github ? " | GitHub: " + github : ""}
            </p>
        </div>

        <div class="section-title">Summary</div>
        <p>${summary}</p>

        <div class="section-title">Skills</div>
        <ul>
            ${skills.filter(s => s.trim()).map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>

        <div class="section-title">Experience</div>
        <ul>
            ${experience.filter(e => e.trim()).map(exp => `<li>${exp.trim()}</li>`).join("")}
        </ul>

        <div class="section-title">Projects</div>
        <ul>
            ${projects.filter(p => p.trim()).map(prj => `<li>${prj.trim()}</li>`).join("")}
        </ul>

        <div class="section-title">Education</div>
        <p>${education}</p>
    `;
}
