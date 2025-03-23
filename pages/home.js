
const getStarted=document.getElementById("getstartedbtn")
const popup=document.getElementById("popupContainer")
const closeBtn=document.getElementById("close")
console.log(getStarted)
// events in js are the things that happen when you carry a particular action
getStarted.addEventListener('click', function(){
    popup.style.display="flex"
})