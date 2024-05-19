// window.addEventListener('load', function() {
//     let audio = document.getElementById('background-music');
//     audio.play().catch(error => {
//         console.error('Audio playback failed:', error);
//     });
// });




window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');

    // Function to play audio on the first user interaction
    function playAudio() {
        audio.volume = 0.5; // Set volume to 50%
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
        // Remove the event listener after the audio starts playing
        document.removeEventListener('click', playAudio);
        document.removeEventListener('touchstart', playAudio);
    }

    // Add event listeners for click and touchstart
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
});




// document.addEventListener('DOMContentLoaded', () => {
//     let menu = document.querySelector('.nav_menu');
//     let menu_toggle = document.querySelector('.mobile-menu-icon');
//     let menu_toggle_icon = document.querySelector('.mobile-menu-icon ion-icon');
//     menu_toggle.addEventListener('click', () => {
//         menu.classList.toggle('active');
//         menu.classList.contains('active') ?
//             menu_toggle_icon.setAttribute('name', 'close-outline') :
//             menu_toggle_icon.setAttribute('name', 'menu-outline');     
//     });
  
    // // count-down-start
    // let days = document.querySelector('.days');
    // let hours = document.querySelector('.hours');
    // let minutes = document.querySelector('.minutes');
    // let seconds = document.querySelector('.seconds');
    // const start = new Date('2022-11-20 16:00:00Z').getTime();

    // function time() {
    //     requestAnimationFrame(time);
    //     const current = new Date().getTime();
    //     const remaining = start - current;
    //     let totalDay = Math.floor(remaining / 1000 / 60 / 60 / 24);
    //     let totalHour = Math.floor((remaining / 1000 / 60 / 60) % 24);
    //     let totalMin = Math.floor((remaining / 1000 / 60) % 60);
    //     let totalSec = Math.floor((remaining / 1000) % 60);
    //     days.innerText = `${totalDay < 10 ? '0' + totalDay : totalDay}`;
    //     hours.innerText = `${totalHour < 10 ? '0' + totalHour : totalHour}`;
    //     minutes.innerText = `${totalMin < 10 ? '0' + totalMin : totalMin}`;
    //     seconds.innerText = `${totalSec < 10 ? '0' + totalSec : totalSec}`;
    //     if (remaining < 0) {
    //         document.querySelector('.worldcup-count-down').innerHTML = `
    //      <h3 class="running">World Cup Running</h3>   
    //      `;
    //         cancelAnimationFrame(time);
    //     }
    // }
    // time();
    // count-down-end
// });







// async function fetchPoints() {
//     let points_wrapper = document.querySelector('.points-container');
//     let loader = document.querySelector('.loader');
//     let url = 'https://world-cup.codsfli.com/points.php';
//     let data = await fetch(url);
//     if (data.ok) {
//         setTimeout(async() => {
//                     loader.remove();
//                     let response = await data.json();
//                     response.map((groups) => {
//                                 let sor = groups.teams.sort((a, b) => {
//                                     return a.position - b.position;
//                                 });
//                                 points_wrapper.innerHTML += `
//                 <div class="points-table">
//   <h1 class="group-heading">${groups.group}</h1>
//   <table>
//     <thead>
//       <tr>
//         <th>Team</th>
//         <th>MP</th>
//         <th>L</th>
//         <th>D</th>
//         <th>W</th>
//         <th>Pts</th>
//       </tr>
//     </thead>
//     <tbody>
//       ${sor
//         .map(
//           (team) => `
//       <tr>
//         <td>
//           <div class="d-a">
//             <img
//               src="${team.flag}"
//               alt="${team.Team}"
//               class="team-flag"
//             />
//             <span>${team.flag
//               .split('https://world-cup.codsfli.com/flag/')
//               .join('')
//               .split('.png')
//               .join('')}</span>
//           </div>
//         </td>
//         <td>${team.match_play}</td>
//         <td>${team.loss}</td>
//         <td>${team.draw}</td>
//         <td>${team.win}</td>
//         <td>${team.points}</td>
//       </tr>
//       `
//         )
//         .join('')}
//     </tbody>
//   </table>
// </div>
//                 `;
//       });
//     }, 1000);
//   }
// }
// fetchPoints();


// let loader = document.querySelector(".loader")
// window.addEventListener("load", vanish)

function vanish(){
    loader.classList.add("disppear")
}

document.addEventListener("DOMContentLoaded", function () {
    // Simulate preloader animation completion after 3 seconds
    setTimeout(function () {
        document.querySelector(".loader").classList.add("loaded");
    }); // Adjust time according to your preloader animation duration
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Delay the execution of preloader animation by 2 seconds
//     setTimeout(function () {
//         loader.classList.add("loaded");
//     }, 2000); // Adjust delay according to your preference
// });



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
