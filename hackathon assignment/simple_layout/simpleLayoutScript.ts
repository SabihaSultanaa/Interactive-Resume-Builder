let myName = document.getElementById('name');

window.addEventListener('load', () => {
    const resumeData = JSON.parse(localStorage.getItem('resumeData') ?? '{}');
    console.log("TahAhmed",resumeData);
  
    if (resumeData) {
      // Populate the resume preview
      myName!.textContent = `${resumeData.firstName} ${resumeData.lastName}`;
      document.getElementById('email')!.textContent = resumeData.email;
      document.getElementById('phone')!.textContent = resumeData.phone;
  
      // Education section
      const educationRow = document.createElement('tr');
      educationRow.innerHTML = `<td>${resumeData.institution}</td><td>${resumeData.degree}</td><td>${resumeData.graduationYear}</td>`;
      document.getElementById('education')!.appendChild(educationRow);
  
      // Skills section
      resumeData.skills.forEach((skill: string | null) => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        document.getElementById('skills')!.appendChild(skillItem);
      });
  
      // Work experience section
      const experienceItem = document.createElement('li');
      experienceItem.innerHTML = `<strong>${resumeData.jobTitle}</strong> at ${resumeData.company} (${resumeData.startDate} - ${resumeData.endDate || 'Present'}): ${resumeData.description}`;
      document.getElementById('experience')!.appendChild(experienceItem);
  
      // Handle profile picture
      const profilePic = document.getElementById('profile-pic-preview') as HTMLImageElement;
      if (resumeData.image) {
        profilePic.src = resumeData.image;
        profilePic.style.display = 'block';  // Show the image
      }
    }
    
      const username = myName?.textContent ? (myName.textContent as string).toLowerCase().replace(/\s+/g, '-') : 'user';
      console.log("username: ", username);
      
      //  Generate username from the name
      const baseUrl = 'https://interactive-resume-builder-l9os.vercel.app/simple_layout/simpleLayout.html'; // Your Vercel deployment URL
      const uniqueResumeUrl = `${baseUrl}?/${username}`; // Create unique URL

      // // Set the resume link in the DOM
      const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
      resumeLink.setAttribute('href', uniqueResumeUrl);
      resumeLink!.textContent = uniqueResumeUrl;
      
      
      //  Copy link to clipboard functionality
       document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
         navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
           alert('Resume link copied to clipboard!');
         });
       });
  });


document.getElementById('editBtn')!.addEventListener('click', () => {
  window.history.back();
});

document.getElementById('printBtn')!.addEventListener('click', () => {
  window.print(); // Simply trigger the print action
})





