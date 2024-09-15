var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume content
    var resumeHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Education:</strong> ").concat(education, "</p>\n    <p><strong>Work Experience:</strong> ").concat(experience, "</p>\n    <p><strong>Skills:</strong> ").concat(skills, "</p>\n  ");
    // Inject resume content into the div
    resumeContent.innerHTML = resumeHTML;
});
