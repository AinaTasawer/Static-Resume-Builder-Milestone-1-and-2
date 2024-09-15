const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Generate resume content
  const resumeHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Work Experience:</strong> ${experience}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  // Inject resume content into the div
  resumeContent.innerHTML = resumeHTML;
});



  
