document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const okButton = document.getElementById('ok-button');

    // Show popup with delay
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 500); // 500ms delay

    // Hide popup when "OK" button is clicked
    okButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});