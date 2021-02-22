const form=document.querySelector(".js-form"),
  input=form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CM = "showing";


function saveName(text){
  localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
  //event의 preventDefault 라는것을 할거임 이건 보통 event발생시  root에서 일어나고 from에서 일어남 즉 event의 거품같은것 이게 올라가면서 다른 모든것들이 event에 반응하므로 form을 제출하는 event발생시 event가 계속 위로올라감 document까지 그 document는 다른곳으로 갈거임 엔터지면 프로그램이 새로고침되고  프로그램된 다른곳으로감 이 event의 기본동작을 막고싶음 
  event.preventDefault();//d이것을 하면 이름에 입력해도 새로고침안되고 enter가 동작안됨 우리가원하는것은 이제 입력한걸 전달해줘야함
  const currentValue=input.value;//input에있는 값을 넣어줌
  //console.log(currentValue);//여기까지하면 콘솔에 입력값이 나옴  엔터치면 그럼 currentValue값을 우린 이제 옮길수있으므로 paintGreeting함수의 text에 넣어주자
  paintGreeting(currentValue); //짠 이제 이름을 입력한 값이 잘 전달됨!!!!!! 나이스  그러나 얘를 저장한게 아니라 name을 불러오도록 프로그램이 되었으므로 이제 이름을 저장하는 함수를만들자 localStorage.setItem이용해서
  saveName(currentValue);//이에저장되었으므로 새로고침을해도 이름이 남아있습닏ㅇ !!!!!!!!!!!!!!!!!!!! USER_LS에 값을 넣어줬으므로 

}
function askForName(){
  form.classList.add(SHOWING_CM);
  form.addEventListener("submit",handleSubmit);//이름을 치고 입력하였을때 그 값을 set해주고 싶음 ,= form에 submit 해주고싶음
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CM);
  greeting.classList.add(SHOWING_CM);
  greeting.innerText=`hello ${text}`

}


function loadName(){
  const currentUser = localStorage.getItem(USER_LS);//저장된것을 부름 
  if(currentUser ===null){
 //she is not
    askForName();
  }else{
 // she is 
  paintGreeting(currentUser);
  }
}


function init(){
loadName();
}

init();