console.log('This will be left unfinished until I figure out how to use javascript to save the background animation and prevent it from resetting');
setCookie("bganimation", "", "")
//function setCookie(name, value, daysToLive){
  //  const date = new Date();
    //date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    //let expires = "expires=" + date.toUTCString();
    //document.cookie = '${name}=${value}; ${expires}; path=/'}
//function deleteCookie(name){
//    setCookie(name, null, null);}
//function getCookie(name){
  //  const cDecoded = decodeURIComponent(document.cookie);
    //console.log(cDecoded)}


document.addEventListener("DOMContentLoaded"), () => {
    const duration = 60000;
let startTime = sessionStorage.getItem("bgAnimStart");
if (!startTime) {
    startTime = Date.now();
    sessionStorage.setItem("bgAnimStart", startTime);
} else {
    startTime = parseInt(startTime);
}
const elapsed = (Date.now() - startTime) % duration;
const delay = -elapsed + "ms";
document.querySelectorAll("*").forEach(el => {
    const style = getComputedStyle(el);
    if (style.animationName !== "none") {
        el.style.animationDelay = delay;
    }
});
}
