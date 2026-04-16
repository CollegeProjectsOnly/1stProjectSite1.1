//console.log('This will be left unfinished until I figure out how to use javascript to save the background animation and prevent it from resetting');
//setCookie("bganimation", "", "")
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


document.addEventListener("DOMContentLoaded", () => {
    const duration = 150000;
    let startTime = sessionStorage.getItem("bgAnimStart");
    if (!startTime) {
        startTime = Date.now();
        sessionStorage.setItem("bgAnimStart", startTime);
    } else {
        startTime = Number(startTime);
    }
    const offset = ((Date.now() - startTime) % duration) / duration;
    const delay = '-${offset * 150}s';
    document.querySelectorAll("main, section, article, aside").forEach(el => {
        el.style.animationDelay = delay;
    });
});
// I didn't get this to work even after I finally gave up and went to ask ChatGPT