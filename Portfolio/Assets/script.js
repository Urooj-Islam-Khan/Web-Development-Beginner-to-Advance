// Toggle Theme 

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('themeToggle');

    // Function to toggle the theme
    function toggleTheme() {
        document.documentElement.classList.toggle('dark-theme');
        updateIcon();
        saveThemePreference();
    }

    // Function to update the icon based on the theme
    function updateIcon() {
        if (document.documentElement.classList.contains('dark-theme')) {
            themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Use moon icon for dark theme
        } else {
            themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Use sun icon for light theme
        }
    }

    // Function to save the theme preference in localStorage
    function saveThemePreference() {
        const isDarkTheme = document.documentElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }

    // Function to load the theme preference from localStorage
    function loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        }
        updateIcon();
    }

    // Initialize the theme based on localStorage
    loadThemePreference();

    // Attach event listener to the toggle button
    themeToggleButton.addEventListener('click', toggleTheme);
});

// about hover 
document.addEventListener("DOMContentLoaded", () => {
    const tooltip_buttons = document.querySelectorAll(".about-btn"),
        about_form = document.getElementById("Quick-Connect"),
        about_close = document.getElementById("close");

    if (tooltip_buttons && about_form && about_close) {
        // Hide the form initially
        about_form.style.display = "none";

        // Add event listener to each 'About Me' button
        tooltip_buttons.forEach(button => {
            button.addEventListener("click", () => {
                about_form.style.display = "flex";
            });
        });

        // Hide the form on close button click
        about_close.addEventListener("click", () => {
            about_form.style.display = "none";
        });
    } else {
        console.error("Element not found: Check the IDs in your HTML and JavaScript.");
    }
});


// jquery for project show 
$(document).ready(function () {
    $('.filter-btn').click(function () {
        var filter = $(this).data('filter');

        if (filter === 'all') {
            $('.project-item').show();
        } else {
            $('.project-item').each(function () {
                if ($(this).data('category') === filter) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});



// experience 
$(window).on('scroll', function () {
    $('.experience-card').each(function () {
        if ($(this).isInViewport()) {
            $(this).addClass('animate');
        }
    });
});

// preview project 

const preview_btn = document.getElementById("preview-btn"),
    preview_close_btn = document.getElementById("preview-close-btn"),
    preview_video = document.getElementById("preview-video");

preview_btn.addEventListener("click", () => {
    preview_video.style.display = "block";
}
)
preview_close_btn.addEventListener("click", () => {
    preview_video.style.display = "none";
}
)


