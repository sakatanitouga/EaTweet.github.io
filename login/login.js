var app = new Vue({
   el:"#app",
   data:{
           name_input:'',
           pass_input:''
   }
});
function handleClick(){
   console.log(app.name_input);
   console.log(app.pass_input);
}

