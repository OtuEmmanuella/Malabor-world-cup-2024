// document.addEventListener("DOMContentLoaded", function() {
//     const navItems = document.querySelectorAll('.navbar li');
    
//     // Function to add 'active' class to the current page's navigation item
//     function setActiveNavItem() {
//         const currentPageUrl = window.location.href;
        
//         navItems.forEach(item => {
//             // Get the URL from the anchor tag inside the navigation item
//             const itemUrl = item.querySelector('a').href;
            
//             // Check if the current page URL matches the URL of the navigation item
//             if (currentPageUrl === itemUrl) {
//                 item.classList.add('active');
//             } else {
//                 item.classList.remove('active');
//             }
//         });
//     }

//     // Call the setActiveNavItem function initially
//     setActiveNavItem();

//     // Add click event listener to navigation items to update the active class
//     navItems.forEach(item => {
//         item.addEventListener('click', function() {
//             // Remove 'active' class from all nav items
//             navItems.forEach(item => {
//                 item.classList.remove('active');
//             });

//             // Add 'active' class to the clicked nav item
//             this.classList.add('active');
//         });
//     });
// });







document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.navbar li');

    function setActiveNavItem() {
        const currentPageUrl = window.location.href;
        
        navItems.forEach(item => {
            const itemUrl = item.querySelector('a').href;
            if (currentPageUrl === itemUrl) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    setActiveNavItem();

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked nav item and its text span
            this.classList.add('active');
            const textSpan = this.querySelector('span');
            if (textSpan) {
                textSpan.classList.add('active');
            }
        });
    });
});











