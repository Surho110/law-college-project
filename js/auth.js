document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signupEmail").value;
      const policyCheck = document.getElementById("policyCheck").checked;

      if (!policyCheck) {
        alert("You must affirm the Principles of Policy to register.");
        return;
      }

      alert(`Verification code sent to ${email}. Please check your inbox.`);
      // In real deployment: backend sends verification email
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful (simulation). Backend validation required.");
    });
  }
});
