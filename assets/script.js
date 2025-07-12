document.addEventListener("DOMContentLoaded", function () {
    // Mobile Sidebar Toggle
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile');

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        // Change icon based on stats
        const icon = menuToggle.querySelector("i");
        if (sidebar.classList.contains("active")) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');

        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close sidebar when clicking on overlay
    mobileOverlay.addEventListener("click", () => {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');

        // Change icon back to bars 

        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars')
    });

    // Theme toggle funtionlity 

    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
 


    

    // Close sidebar when clicking outside on mobile 
    document.addEventListener('click', (e) => {
        const isClickedInsideSidebar = sidebar.contains(e.target);
        const isClickedToggle = menuToggle.contains(e.target);

        if (sidebar.classList.contains('active') && !isClickedInsideSidebar && !isClickedToggle) {
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');

            // Changed the icon to bars 
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }


    });

    // Load saved theme preference 

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == "dark") {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('.theme-toggle i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Add hover effect to task bar 
    document.querySelectorAll('.task-bar').forEach(task => {
        task.addEventListener('mouseenter', () => {
            task.style.zIndex = '10';

        });
        task.addEventListener('mouseleave', () => {
            task.style.zIndex = '1';
        });


    });
    // Animate Progress rimgs

    document.querySelectorAll('.progress-ring .progress-fill').forEach(ring => {
        const circumference = 283; // 2*pi*r 
        const progressRing = ring.closest('.progress-ring');
        const progressText = progressRing.querySelector('.progress-text').textContent;
        const percentage = parseInt(progressText) || 0;
        const offset = circumference - (percentage * circumference / 100);
        ring.style.strokeDashoffset = offset;

    })


});
