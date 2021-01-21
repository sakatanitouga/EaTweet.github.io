var Contents = new Vue({
  el: '#app',
  data: {
    dm:'none',
    Contents_js: [],

    input_title:'',
    input_comment:''
  }
});

var Customer_inf = {
  user_name:'',
  mylist: [],
  make_recipe:[] 
}

//const sock = new WebSocket("ws://127.0.0.1:3000");
/*
sock.addEventListener("open", e => {
  console.log("接続が開かれたときに呼び出されるイベント");
});
*/
for(let i = 0;i<10;i++){
    var content = {title: 'うんこ',message: 'トイレいきたいです！！！！'};
    Contents.$set(Contents.Contents_js, i, content);
}
function recipe_creation(){
  console.log("作るよ");
  Contents.dm ='block';
}
function make_recipe_close(){
  console.log(Contents.make_recipe_visible);
  Contents.dm ='none';
}
function make_recipe_post(){
  var post_method = {title:Contents.input_title,comment:Contents.input_comment}
  Customer_inf.make_recipe[0] = post_method;
  console.log(Customer_inf);
//  sock.send(Customer_inf);
  Contents.dm ='none';  
}
console.log(Contents.Contents_js);
