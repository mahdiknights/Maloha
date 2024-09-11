document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');

    const checkUsernameAvailability = async () => {
        const username = usernameField.value;
        if (username.length === 0) {
            usernameField.classList.remove('valid', 'invalid');
            return;
        }

        try {
            const response = await fetch(`/check-username?username=${encodeURIComponent(username)}`);
            const data = await response.json();

            if (data.available) {
                usernameField.classList.remove('invalid');
                usernameField.classList.add('valid');
            } else {
                usernameField.classList.remove('valid');
                usernameField.classList.add('invalid');
            }
        } catch (error) {
            console.error('Error checking username:', error);
        }
    };

    usernameField.addEventListener('input', checkUsernameAvailability);

    document.getElementById('registration-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate form submission and redirect to main page
        window.location.href = 'airdrop-main.html';
    });
});