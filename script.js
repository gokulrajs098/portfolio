// Terminal functionality
const terminalInput = document.querySelector('.terminal-input');
const terminalOutput = document.querySelector('.terminal-output');
const commands = {
    'help': 'Available commands: help, about, skills, projects, contact, clear',
    'about': 'Hi! I\'m Gokul Raj, a Cyber Security enthusiast with a passion for protecting digital assets.',
    'skills': 'My key skills include: Penetration Testing, Network Security, Web Development, and Blockchain Security.',
    'projects': 'Check out my GitHub profile for my latest projects!',
    'contact': 'You can reach me through the contact form below or via email.',
    'clear': 'clear'
};

terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.toLowerCase().trim();
        terminalInput.value = '';
        
        const output = document.createElement('div');
        output.innerHTML = `<span class="terminal-prompt">$ </span>${command}`;
        
        if (command in commands) {
            if (command === 'clear') {
                terminalOutput.innerHTML = '';
                return;
            }
            output.innerHTML += `\n${commands[command]}`;
        } else {
            output.innerHTML += '\nCommand not found. Type "help" for available commands.';
        }
        
        terminalOutput.appendChild(output);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
});

// Particle animation
particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        color: { value: '#00ff00' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 2,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            }
        }
    }
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});