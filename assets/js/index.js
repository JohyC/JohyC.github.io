
var loading = document.getElementsByClassName('loading')[0],
    avatar = document.getElementsByClassName('avatar')[0];

function load(){
  var ajax = new XMLHttpRequest(),url;
  ajax.open("get","https://johy.cf/assets/images/avatar.png")
  ajax.responseType = 'blob';
  ajax.onload = function(){
    if(this.status == 200){
      url = ajax.response;
      url = URL.createObjectURL(url); 
      avatar.src = `${url}`;
      avatar.style.display = 'block';
      loading.style.display = 'none';
    }
  }
  ajax.send();
}load();

console.log("感谢您的浏览，期待加入贵公司");