document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const okButton = document.getElementById('ok-button');

    // Delay popup display
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000); // Adjust delay as needed (1000 milliseconds = 1 second)

    okButton.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    });
});