/* Own JS code */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.paddingRight = "15px";
    document.getElementById("mySidenav").style.borderStyle = "solid";
    document.getElementById("mySidenav").style.borderRight = "thick double #545454";
    document.getElementById("mySidenav").style.borderTop = "thick double #545454";
    document.getElementById("mySidenav").style.borderBottom = "thick double #545454";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.paddingRight = "0";
    document.getElementById("mySidenav").style.borderStyle = "none";

}