function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.toggle-button');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '화이트모드 전환';
    } else {
        button.textContent = '다크모드 전환';
    }
}