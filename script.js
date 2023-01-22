// Job listings data
const listingsData = [
    {
      title: 'Full-Stack Developer',
      description: 'We are seeking a full-stack developer to work on our new web application.',
      url: '/apply'
    },
    {
      title: 'Graphic Designer',
      description: 'We are looking for a skilled graphic designer to create marketing materials for our company.',
      url: '/apply'
    },
    {
      title: 'Front-End Developer',
      description: 'We are looking for a front-end developer to build the user interface of our web application.',
      url: '/apply'
    },
    {
      title: 'Back-End Developer',
      description: 'We are seeking a back-end developer to work on the server-side of our web application.',
      url: '/apply'
    },
    {
      title: 'Mobile Developer',
      description: 'We are looking for a mobile developer to create a native app for our platform.',
      url: '/apply'
    }
  ];

  const freelancersData = [
    {
      name: "Full-Stack Developer",
      skills: "I am a full-stack developer with experience building web applications. I am available for hire for your project.",
      contact: "/contact"
    },
    {
      name: "Graphic Designer",
      skills: "I am a graphic designer with experience creating marketing materials and branding for companies. I am available for hire for your project.",
      contact: "/contact"
    }
  ];

  //end of data placeholders
  
  //update list of data
function addFreelancer(name, skills, contact) {
    freelancersData.push({ name, skills, contact });
    updateFreelancersHTML();
}

// Generate the HTML for the freelancers and add it to the freelancers-list element
function updateFreelancersHTML() {
    const freelancersList = document.getElementById("freelancers-list");
    const freelancersHTML = freelancersData
      .map((freelancer) => {
        return `
          <li class="freelancer-card">
            <h3>${freelancer.name}</h3>
            <p>${freelancer.skills}</p>
            <a href="mailto:${freelancer.contact}">Contact Me</a>
          </li>
        `;
      })
      .join("");
    freelancersList.innerHTML = freelancersHTML;
  }

// Get a reference to the "Apply" button and the popup
const applyButton = document.getElementById("apply-button");
const applyPopup = document.getElementById("apply-popup");
const closeButton = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");

// Add an event listener to the submit button in the popup
submitButton.addEventListener("click", () => {
  // Get the user input from the form
  const nameInput = document.getElementById("name-input");
  const skillsInput = document.getElementById("skills-input");
  const contactInput = document.getElementById("contact-input");
  const name = nameInput.value;
  const skills = skillsInput.value;
  const contact = contactInput.value;

    // Check if any of the fields are empty
    if (!name || !contact || !skills) {
        // At least one field is empty, so show an error message
        event.preventDefault(); // Prevent the form from submitting to a server
        alert("All fields are required!");
        return;
      }

  // Add the new freelancer to the freelancersData array and update the HTML
  applyPopup.style.display = "none";
  addFreelancer(name, skills, contact);

  // Hide the popup
  popup.style.display = "none";
});

// Add an event listener to the "Apply" button to show the popup when clicked
applyButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the button from following the link
  applyPopup.style.display = "block"; // Show the popup
});

// Add an event listener to the close button to hide the popup when clicked
closeButton.addEventListener("click", function(event) {
  applyPopup.style.display = "none"; // Hide the popup
});

// Add an event listener to the window to close the popup when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target == applyPopup) {
    applyPopup.style.display = "none"; // Hide the popup
  }
});
  
const freelancersList = document.getElementById("freelancers-list");
  

  
for (const freelancer of freelancersData) {
// Create the HTML for a freelancer card
const cardHTML = `
    <li class="freelancer-card">
    <h3>${freelancer.name}</h3>
    <p>${freelancer.skills}</p>
    <a href="${freelancer.contact}">Contact Me</a>
    </li>
`;

freelancersList.insertAdjacentHTML("beforeend", cardHTML);
}
  
  
  // Get the job listings container element
  const listingsContainer = document.getElementById('job-listings');
  
  // Create an HTML string for each job listing
  const listingsHTML = listingsData.map(listing => `
    <li class="job-listing">
      <h3>${listing.title}</h3>
      <p>${listing.description}</p>
      <a href="${listing.url}" class="button">Apply Now</a>
    </li>
  `).join('');

  
  
  // Add the job listings HTML to the page
  listingsContainer.innerHTML = listingsHTML;

  const applyForm = document.getElementById("apply-form");
applyForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting to a server

  // Get the form data
  const name = applyForm.elements.name.value;
  const email = applyForm.elements.email.value;
  const age = applyForm.elements.age.value;
  const skills = applyForm.elements.skills.value;

  // Add the freelancer's information to the freelancersData array
  freelancersData.push({
    name: name,
    skills: skills,
    contact: email
  });

  // Generate the HTML for the freelancer card and add it to the freelancers-list element
  const cardHTML = `
    <li class="freelancer-card">
      <h3>${name}</h3>
      <p>${skills}</p>
      <a href="mailto:${email}">Contact Me</a>
    </li>
  `;
  freelancersList.innerHTML += cardHTML;

  // Reset the form
  applyForm.reset();
  freelancersList.insertAdjacentHTML("beforeend", cardHTML);
});


// Get a reference to the search form and input field
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");