var app = new Vue({
   el:"#app",
   data:{
           name_input:'',
           pass_input:'',
           result_textbox:''
   }
});

const sock = new WebSocket("ws://127.0.0.1:3000");

sock.addEventListener("open", e => {
    console.log("接続が開かれたときに呼び出されるイベント");
});

sock.addEventListener("message", e => {
    a =e.data;
    console.log(a);
    if(a == "exit_account"){
        HTML_Load("../index/index.html")        
    }else if(a == "メールアドレスの登録完了"){

    }
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
   app.result_textbox ='押された'
   sock.send(data);
}

function HTML_Load(_html,replace){
    window.location.href = _html;
}
