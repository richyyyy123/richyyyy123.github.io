document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-button');
    const gift = document.getElementById('gift');

    // Función para revelar u ocultar el regalo
    revealButton.addEventListener('click', () => {
        gift.classList.toggle('hidden');
        if (!gift.classList.contains('hidden')) {
            gift.style.animation = 'fadeIn 1s ease-in-out';
            revealButton.textContent = 'Ocultar Regalo';
        } else {
            revealButton.textContent = '¡Haz clic aquí!';
        }
    });

    // Animación de entrada para las imágenes de la galería
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transform = 'scale(0.8)';
        setTimeout(() => {
            img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, index * 300);
    });

    // Efecto "zoom in/out" al pasar el ratón sobre las imágenes
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transition = 'transform 0.3s ease';
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Animación de color para los enlaces del menú
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            link.style.backgroundColor = '#ff69b4';
            link.style.color = '#fff';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });

    // Efecto de escritura para el título
    const headerTitle = document.querySelector('.logo h1');
    const text = headerTitle.textContent;
    headerTitle.textContent = '';
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            headerTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();

    // Animación de "latido" para el botón del regalo
    setInterval(() => {
        revealButton.classList.add('pulse');
        setTimeout(() => {
            revealButton.classList.remove('pulse');
        }, 1000);
    }, 3000);

    // Efecto de desvanecimiento al desplazarse por la página
    const fadeInElements = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
            }
        });
    }, { threshold: 0.3 });

    fadeInElements.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // Efecto de rotación en las imágenes del regalo al mostrarse
    const giftImage = gift.querySelector('img');
    giftImage.addEventListener('mouseover', () => {
        giftImage.style.transition = 'transform 0.5s ease';
        giftImage.style.transform = 'rotate(10deg)';
    });
    giftImage.addEventListener('mouseout', () => {
        giftImage.style.transform = 'rotate(0)';
    });

    // Animación de "rebote" para el botón del menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            link.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                link.style.animation = '';
            }, 500);
        });
    });
});
