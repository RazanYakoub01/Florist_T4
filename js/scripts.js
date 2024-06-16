// Scripts// 

//Removes the standard NO js html
document.getElementById('mainNav').style.visibility = 'visible';
document.getElementById('mainNav').classList.remove('noJs');

//Landscape scrolle
const mastheadContainer = document.getElementById('mastheadContainer');
function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
if (mobileCheck()) {
    mastheadContainer.scrollIntoView();
}

//Display for the user when it's open
function liveOpeningHours(date) {
    const openHoursKiruna = [
        [0, 0], //Sun
        [10, 16], //Mon
        [10, 16], //Tue
        [10, 16], //Wed
        [10, 16], //Thu
        [10, 16], //Fri
        [12, 15], //Sat
        [0,0] //Sun
    ]
    const openHoursLulea = [
        [0, 0], //Sun
        [10, 17], //Mon
        [10, 16], //Tue
        [10, 15], //Wed
        [10, 16], //Tuu
        [10, 16], //Fri
        [12, 15], //Sat
        [0, 0] //Sun
    ]   
    let url = window.location.href;
    url = url.split('/');
    const page = url[url.length - 2];
    if (page == 'kiruna') {
        document.getElementById('liveOpeningHours').innerHTML = getTimeMsg(openHoursKiruna, date);
    } else if (page == 'lulea') {
        document.getElementById('liveOpeningHours').innerHTML = getTimeMsg(openHoursLulea, date);
    }
    
}

//From time in timearray get msg
function getTimeMsg(businessDays, date) {
    const day = date.getDay();
    const hours = date.getHours();
    const min = date.getMinutes();
    const today = businessDays[day];
    const openMsg = {
        closeSoon:`Stänger snart`,
        open:`Öppet just nu`,
        openSoon:`Öppnar snart`,
        openToday:`Öppnar idag kl. ${today[0]}`,
        closedUntilMonday:`Öppnar på måndag kl. ${businessDays[1][0]}`,
        openTomorrow:`Öppnar imorgon kl. ${businessDays[day + 1][0]}` //businessDays[(day + 1)][0] next day open
    }
    if (today[0] == 0 && today[1] == 0) { //Closed Days ex sunday in this case
        return openMsg.openTomorrow;
    }
    if (hours >= today[1] && businessDays[day + 1] == '0,0') { //Checks if closed today, and if tomorrow is closed. In this case if its saturday
        return openMsg.closedUntilMonday;
    }
    if ((hours == today[0] - 1) && (min >= 30)) { //If it's 30 min before opening
        return openMsg.openSoon;
    }
    if (((hours == today[0] - 1) && (min < 30)) || (hours < today[0])) { // If it's more then 30 min before opening
        return openMsg.openToday;
    }
    if (hours >= today[1]) { // If it's closed and its open tomorrow
        return openMsg.openTomorrow;
    }
    if (hours == today[1] - 1) {
        return openMsg.closeSoon;
    }
    return openMsg.open;
}
// Checks if you are in the right timezone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// Checks if you are on the right subpage

if (timeZone == 'Europe/Stockholm') {
    liveOpeningHours(new Date())
}



//Changes menu on scroll
window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarCollapse = document.getElementById('navbarResponsive');
    navbarMenu.onclick = function(){
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.classList.remove('focus');
            navbarCollapse.classList.remove('show');
            return
        }
        navbarToggler.classList.add('focus');
        navbarCollapse.classList.add('show');
    }
})