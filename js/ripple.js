export const createRipple = (event, targetElement) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = targetElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    targetElement.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}
