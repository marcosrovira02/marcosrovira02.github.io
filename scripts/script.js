document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');

    yesBtn.addEventListener('click', () => {
        response.textContent = "Muak";
    });

    noBtn.addEventListener('click', () => {
        response.textContent = "You broke my heart :(";
    });
});