document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');

    // Function to check if the username is available
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

    // Event listener for username input
    usernameField.addEventListener('input', checkUsernameAvailability);
});