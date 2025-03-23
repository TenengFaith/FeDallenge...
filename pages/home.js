
const getStarted=document.getElementById("getstartedbtn")
const popup=document.getElementById("popupContainer")
const closeBtn=document.getElementById("close")
const form=document.getElementById("form-container")
// events in js are the things that happen when you carry a particular action
getStarted.addEventListener('click', function(){
    popup.style.display="flex"
})
closeBtn.addEventListener('click', function(){
    popup.style.display="none"
})
form.addEventListener('submit', function(){
    // password and confirm password values
    const password=document.getElementById("password").value
    const confirm=document.getElementById("confirm-password").value
    // value validity
    if(password!==confirm){
        alert("password does not match")
        return;
    }

})