document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on links
    var links = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    }

    // Smooth Scrolling
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < anchors.length; j++) {
        anchors[j].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Testimonials Slider
    var testimonials = [
        { 
            text: "Best gym experience ever! The trainers are professional and supportive.", 
            author: "Sarah Johnson" 
        },
        { 
            text: "Amazing facilities and great community. Highly recommend!", 
            author: "Mike Chen" 
        },
        { 
            text: "Transformed my fitness journey. The programs are excellent.", 
            author: "Emily Davis" 
        }
    ];

    var currentTestimonial = 0;

    function changeTestimonial(index) {
        currentTestimonial = index;
        document.getElementById('testimonialText').textContent = '"' + testimonials[index].text + '"';
        document.getElementById('testimonialAuthor').textContent = '- ' + testimonials[index].author;
        
        var dots = document.querySelectorAll('.dot');
        for (var k = 0; k < dots.length; k++) {
            if (k === index) {
                dots[k].classList.add('active');
            } else {
                dots[k].classList.remove('active');
            }
        }
    }

    // Testimonial dots click event
    var dots = document.querySelectorAll('.dot');
    for (var m = 0; m < dots.length; m++) {
        dots[m].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            changeTestimonial(index);
        });
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        changeTestimonial(currentTestimonial);
    }, 5000);

    // Contact Form Submission
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        var name = document.getElementById('contactName').value;
        var email = document.getElementById('contactEmail').value;
        var message = document.getElementById('contactMessage').value;

        if (name && email && message) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMessage').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

})