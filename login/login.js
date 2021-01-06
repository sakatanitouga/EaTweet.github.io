var app = new Vue({
   el:"#app",
   data:{
           name_input:'',
           pass_input:''
   }
});

const sock = new WebSocket("ws://127.0.0.1:3000");

sock.addEventListener("open", e => {
    console.log("接続が開かれたときに呼び出されるイベント");
});
sock.addEventListener("message", e => {
    a =e.data;
    console.log(a);
});
sock.addEventListener("close", e => {
    console.log("接続が閉じられたときに呼び出されるイベント");
});
sock.addEventListener("error", e => {
    console.log("エラーが発生したときに呼び出されるイベント");
});


function handleClick(){
   let data = [app.name_input,app.pass_input]
   console.log(app.name_input);
   console.log(app.pass_input);
   sock.send(data);
}

