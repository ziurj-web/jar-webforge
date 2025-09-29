function toggleResponsiveNav() {
    var targetID = "navBar";
    var targetClass = "navigation__links-container";

    var nav = document.getElementById(targetID);

    if (nav.className === targetClass) {
        nav.className += " responsive-nav";
    } else {
        nav.classList = targetClass;
    }
}