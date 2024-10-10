alert("welcome Arun sir");
let fix=prompt("please enter password");
if(fix==4129){
    alert("welcome again");
}
else{
    alert("get out");
}
const imagecount = document.querySelector(".imagecount");
const upload = document.querySelector(".upload");
const user = document.querySelector('.user-logo');
const user1=document.querySelector('.image-sidebar');
const user3=document.querySelector('.user3');
const login=document.querySelector('.login-form');
const signup=document.querySelector('.signin-form');
const sidebar=document.querySelectorAll('.sidebar');
const body2 =document.querySelector('.body2');
const container=document.querySelector('.container');
const username=document.querySelector('.user_name');
const logout=document.querySelector('#logout');
const submitSignup=document.querySelector('submit_signup');
const submitLogin=document.querySelector('submit_login');
const btn2=document.querySelectorAll(".btn2");
const setting=document.getElementById('setting');
const backsetting=document.querySelector(".back_setting");
const humbarger=document.querySelector("#first_4");
const settingbox=document.querySelector(".setting_box");
const body=document.querySelector("body");
const profileImage=document.querySelector(".profile_image1");
const backprofile=document.querySelector('.profile_back');
const profilebox=document.querySelector('.profile_box');
const profile=document.querySelector("#profile");
const middle_image=document.querySelector('.userimage_middle');
const midimage =document.querySelector(".middle_image");
const navbar=document.querySelector(".navbar");


document.querySelector('.sidebar').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const menu = document.getElementById('first_4');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
document.addEventListener('click', function(event) {
    const menu = document.getElementById('first_4');

    if (menu.style.display === 'block' && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
user3.addEventListener('click', function() {
    upload.click();
});
//take user image from file for all dp and image(44-59 line )
upload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            user.src = e.target.result;
            user1.src= e.target.result;
            profileImage.src=e.target.result;
            midimage.src = e.target.result;
            profileImage.src = e.target.result;

        };
        reader.readAsDataURL(file);
    }
});

function sign_up(){
    login.style.display = "none";
    signup.style.display = "block";
    
   
}
function login_up(){
    login.style.display = "block";
    signup.style.display = "none";
   
}
function handleLogin(event) {
    event.preventDefault(); 
    applyBackgroundBlur();
}
function handleSignup(event) {
    body2.style.display='none';
    event.preventDefault(); 
    applyBackgroundBlur();
}
function applyBackgroundBlur() {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.container').classList.add('blur'); 
            body2.style.display = 'block';       
}
function displaymassage(username1){
    username.textContent= username;
    submitSignup.style.display='none';
    submitLogin.style.display='none';
    body2.style.display='block';
}
signup.addEventListener('submit',function(event){
    event.preventDefault();
    const username1= document.querySelector(".enter_username");value;
    displaymassage(username1)
});
logout.addEventListener('click',function(){
   body2.style.display='none';
   location.reload(); 

});
setting.addEventListener('click', function(){
   
    humbarger.style.display='none';
    body2.style.display='none';
    settingbox.style.display='block';
    console.log("click setting");
})
backsetting.addEventListener('click', function(){
    body2.style.display='block';
    humbarger.style.display = 'block'; 
    settingbox.style.display='none';
    console.log("click");
});
var data=0;
user.addEventListener('click', function(event) { 
   middle_image.style.position = 'absolute';
   middle_image.style.height = '400px';
  middle_image.style.width = '400px';
    midimage.style.height = '400px';
    midimage.style.width = '400px';
    midimage.style.boxShadow = '10px 10px 10px red'; 
    middle_image.style.top = '400%';
    middle_image.style.left = '50%';
    middle_image.style.transform = 'translate(-50%, -50%)';
    if (middle_image.style.height === '400px' && middle_image.style.width === '400px') {
        middle_image.classList.add('active');
    }
});
// show body after login and signup hahah
//container is login and signup div
if(container==='display'){
    body2.style.display='block';
}else{
    container.style.top='400px'
    body2.style.display='none';
}
// body2.addEventListener('click', function() {
//     user.removeEventListener('click',user.addEventListener());
//     console.log('User event listener removed');
// });
// body.addEventListener('click', function() {
//     user.removeEventListener('click',user.addEventListener());
//     console.log('User event listener removed');
// });
backprofile.addEventListener('click', function(){
    body2.style.display='block';
    humbarger.style.display = 'block'; 
   profilebox.style.display='none';
    console.log("click");
});
profile.addEventListener('click',function(){
    body2.style.display='none';
    profilebox.style.display='block';
  
});
 var data_2=0;
var tet=1;
 navbar.addEventListener("click",()=>{
    if(tet==1){
        middle_image.style.display="none";
        tet=0;
    }
    else if(tet==0){
        middle_image.style.display="block";
        tet=1;
    }

   }
 );
//  function show(){
//     data_2++;
//     if(data_2%2!=0){
//    document.querySelector(".userimage_middle").style.display="block";
//     }
//     else{
//    document.querySelector(".userimage_middle").style.display="none";

//     }
//  }
// body2.addEventListener('click', function(){
//     middle_image.style.display='none';
//  console.log("click body");
// });
// function body(){
//     middle_image.style.display='none';
// }
// if(body2()){
//     middle_image.style.display='none';
// }