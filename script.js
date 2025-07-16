// Initialize GSAP and Draggable
gsap.registerPlugin(Draggable);

// Make elements draggable
Draggable.create('.bucket', {
    bounds: '.playground',
    onDragStart: function() {
        gsap.to('.bucket', {scale: 1.1});
    },
    onDragEnd: function() {
        gsap.to('.bucket', {scale: 1});
    }
});

Draggable.create('.shovel', {
    bounds: '.playground',
    onDragStart: function() {
        gsap.to('.shovel', {rotation: 0});
    },
    onDragEnd: function() {
        gsap.to('.shovel', {rotation: -30});
    }
});

Draggable.create('.ball', {
    bounds: '.playground',
    onDragStart: function() {
        gsap.to('.ball', {scale: 1.2});
    },
    onDragEnd: function() {
        gsap.to('.ball', {scale: 1});
    }
});

Draggable.create('.swing-seat', {
    type: 'y',
    bounds: {minY: -50, maxY: 0},
    onDrag: function() {
        let rotation = this.y / 2;
        gsap.to('.swing-seat', {rotation: rotation});
    }
});

// Interactive elements
document.querySelector('.sand').addEventListener('click', function() {
    gsap.to('.sand', {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1
    });
    
    // Create sand particles
    for (let i = 0; i < 5; i++) {
        let particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.background = '#F4A460';
        particle.style.borderRadius = '50%';
        particle.style.left = (Math.random() * 200) + 'px';
        particle.style.bottom = '60px';
        document.querySelector('.sandbox').appendChild(particle);
        
        gsap.to(particle, {
            y: -50,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: 1,
            onComplete: () => particle.remove()
        });
    }
});

document.querySelector('.slide-bottom').addEventListener('click', function() {
    gsap.to('.slide-bottom', {
        scale: 1.05,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
});

// Character animation
gsap.to('.character', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Make character follow mouse clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cloud') || e.target.classList.contains('sky')) return;
    
    let character = document.querySelector('.character');
    let rect = character.getBoundingClientRect();
    let targetX = e.clientX - rect.width / 2;
    let targetY = e.clientY - rect.height;
    
    gsap.to('.character', {
        x: targetX - rect.left,
        y: targetY - rect.top,
        duration: 1,
        ease: "power2.out"
    });
});

// Sun rays animation
gsap.to('.sun', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
});

// Add some sound effects (visual feedback)
document.querySelector('.seesaw-left').addEventListener('click', function() {
    gsap.to('.seesaw-left', {y: -10, duration: 0.3});
    gsap.to('.seesaw-right', {y: 10, duration: 0.3});
    setTimeout(() => {
        gsap.to('.seesaw-left', {y: 0, duration: 0.3});
        gsap.to('.seesaw-right', {y: 0, duration: 0.3});
    }, 300);
});

document.querySelector('.seesaw-right').addEventListener('click', function() {
    gsap.to('.seesaw-right', {y: -10, duration: 0.3});
    gsap.to('.seesaw-left', {y: 10, duration: 0.3});
    setTimeout(() => {
        gsap.to('.seesaw-right', {y: 0, duration: 0.3});
        gsap.to('.seesaw-left', {y: 0, duration: 0.3});
    }, 300);
});

// Welcome message
setTimeout(() => {
    let welcome = document.createElement('div');
    welcome.textContent = 'Welcome to WebsimKids! Click anywhere to move, drag items to play!';
    welcome.style.position = 'fixed';
    welcome.style.top = '20px';
    welcome.style.left = '50%';
    welcome.style.transform = 'translateX(-50%)';
    welcome.style.padding = '10px 20px';
    welcome.style.background = 'rgba(255, 255, 255, 0.9)';
    welcome.style.borderRadius = '20px';
    welcome.style.fontSize = '16px';
    welcome.style.color = '#333';
    welcome.style.zIndex = '1000';
    welcome.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    document.body.appendChild(welcome);
    
    gsap.to(welcome, {
        opacity: 0,
        duration: 1,
        delay: 3,
        onComplete: () => welcome.remove()
    });
}, 500);

