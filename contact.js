document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const queryRelated = document.getElementById("queryRelated").value;
      const message = document.getElementById("message").value;

      
      if (fullName && email && queryRelated && message) {
        try {
          
          const response = await fetch('http://localhost:3000/api/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fullName: fullName,
              email: email,
              queryRelated: queryRelated,
              message: message,
            }),
          });

          const result = await response.json();

          if (response.ok) {
           
            const modalMessage = document.getElementById("modalMessage");
            modalMessage.textContent = `Thank you, ${fullName}! Your message has been sent.`;
            document.getElementById("popupModal").style.display = "flex";

            
            document.getElementById("contactForm").reset();
          } else {
            alert("Error: " + result.message);
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("There was a problem submitting the form. Please try again.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    });
});


function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}
