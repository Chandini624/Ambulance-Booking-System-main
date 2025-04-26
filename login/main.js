// Ensure the DOM is fully loaded before running the script
    document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Add event listener for the signUp button to add the active class
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    // Add event listener for the signIn button to remove the active class
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
});
