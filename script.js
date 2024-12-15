


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // منع الرابط من التوجه مباشرة

        const targetId = this.getAttribute('href').substring(1);  // 
        const targetElement = document.getElementById(targetId); // 

        // التمرير إلى العنصر باستخدام scrollIntoView
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // يمكنك تغيير هذا الخيار إذا أردت التمرير إلى أسفل أو أعلى العنصر
        });
    });
});