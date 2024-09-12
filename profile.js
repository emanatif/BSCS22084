
const profile = {
    name: "Eman Atif",
    about: "I am currently in the 5th semester of my Bachelor's in Computer Science from ITU.",
    skills: {
        hardSkills: ["C++", "Python", "JavaScript", "HTML", "CSS", "MySQL", "MongoDB"],
        softSkills: ["Communication", "Teamwork", "Problem Solving"]
    },
    projects: [
        { name: "Chess Game", date: "nov 2022" },
        { name: "Snake Game", date: "Feb 2023" },
        { name: "Career Counseling Seminar", date: "March 2024" }
    ],
    education: {
        degree: "Bachelor's in Computer Science",
        institution: "ITU",
        semester: "5th"
    },
    contact: {
        email: "bscs22084@itu.edu.pk",
        github: "emanatif"
    }
};


function populateAbout() {
    document.getElementById("about").innerHTML = `<h1>About me</h1><p>${profile.about}</p>`;
}


function populateSkills() {
    document.getElementById("skills").innerHTML = `
        <h2>Skills</h2>
        <h3>Hard Skills</h3>
        <ul>${profile.skills.hardSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h3>Soft Skills</h3>
        <ul>${profile.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    `;
}


function populateProjects() {
    document.getElementById("projects").innerHTML = `
        <h2>Projects</h2>
        <ul>${profile.projects.map(project => `<li>${project.name} - ${project.date}</li>`).join('')}</ul>
    `;
}


function populateEducation() {
    document.getElementById("education").innerHTML = `
        <h2>Education</h2>
        <ul>
            <li>${profile.education.degree}, ${profile.education.semester} semester, ${profile.education.institution}</li>
        </ul>
    `;
}


function populateContact() {
    document.getElementById("contact").innerHTML = `
        <h2>Contact</h2>
        <p>Email: ${profile.contact.email}</p>
        <p>GitHub: ${profile.contact.github}</p>
    `;
}
  

window.onload = function() {
    populateAbout();
    populateSkills();
    populateProjects();
    populateEducation();
    populateContact();
};



  