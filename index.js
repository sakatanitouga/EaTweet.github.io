(()=>{
  var Contents = new Vue({
    el: '#app',
    data: {
      dm:'none',
      Contents_js: [],
      input_title:'',
      input_comment:'',
      user_id:'2dfa'
    }
  });
  
  //サーバと接続
  const sock = new WebSocket("ws://127.0.0.1:2000");
  sock.addEventListener("open", e => {
    console.log("サーバと接続に成功");
  });
    
  var Customer_inf = {
    id:'2',
    user_name:'',
    mylist: [],
    make_recipe:[] 
  }
  
  var image_src;
  for(let i = 0;i<10;i++){
      var content = {title: 'うんこ',message: 'トイレいきたいです！！！！'};
      Contents.$set(Contents.Contents_js, i, content);
  }
  console.log(Contents.Contents_js);  
  function recipe_creation(){
    console.log("作るよ");
    Contents.dm ='block';
  }
  function make_recipe_close(){
    console.log(Contents.make_recipe_visible);
    Contents.dm ='none';
  }
  function make_recipe_post(){    
    var post_method = {title:Contents.input_title,comment:Contents.input_comment,image:image_src}
    Customer_inf.make_recipe[0] = post_method;
    console.log(Customer_inf);
    sock.send(JSON.stringify(Customer_inf));
    Contents.dm ='none';    
  }
  (()=>{
    function previewFile(file) {
      // プレビュー画像を追加する要素
      const preview = document.getElementById('preview');
    
      // FileReaderオブジェクトを作成
      const reader = new FileReader();
    
      // ファイルが読み込まれたときに実行する
      reader.onload = function (e) {
        const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
        
        const img = document.createElement("img"); // img要素を作成
        img.src = imageUrl; //画像のURLをimg要素にセット
        preview.appendChild(img); //#previewの中に追加
        image_src = img.src;
        console.log(image_src);
      }
    
      // いざファイルを読み込む
      reader.readAsDataURL(file);
    }
    
    
    // <input>でファイルが選択されたときの処理
    var inputFiles = document.getElementById('up_image');
    inputFiles.addEventListener("change", function(e) {
      console.log(e.target.files);
      image_src = e.target.files;
      const files = inputFiles.files;
      for (let i = 0; i < files.length; i++) {
        previewFile(files[i]);
      }
    },false);
  })();

  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('レシピ作成').addEventListener('click',function(){recipe_creation();},false);
    document.getElementById('Close').addEventListener('click',function(){make_recipe_close();},false);
    document.getElementById('投稿').addEventListener('click',function(){make_recipe_post();},false);
  },false);  
})();

