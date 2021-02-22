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

  var image_src;
  //イベント登録
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('レシピ作成').addEventListener('click',function(){recipe_creation();},false);
    document.getElementById('Close').addEventListener('click',function(){make_recipe_close();},false);
    document.getElementById('投稿').addEventListener('click',function(){make_recipe_post();},false);
  },false);  

  //メイン関数
  function main(){
    home_visible();
  }

  //ホーム画面にレシピを表示
  function home_visible(){
    conpornent = ajax('home');
    //conpornent_js = JSON.parse(conpornent);
    //console.log(conpornent_js);
    //Contents.Contents_js = conpornent_js;
    
    console.log(conpornent);
    for(let i = 0;i<10;i++){
      var content = {title: 'パスタ',url: 'トイレいきたいです！！！！'};
      Contents.$set(Contents.Contents_js, i, content);
    }
    
  }
  
  //レシピ作成ボタンが押された時
  function recipe_creation(){
    Contents.dm ='block';
    (()=>{
      //選択した画像をプレビューさせる関数
      function previewFile(file) {
        
        const preview = document.getElementById('preview');
      
        const reader = new FileReader();
      
        reader.onload = function (e) {
          const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
          
          const img = document.createElement("img"); // img要素を作成
          img.src = imageUrl; //画像のURLをimg要素にセット
          preview.appendChild(img); //#previewの中に追加
        }
        // いざファイルを読み込む
        reader.readAsDataURL(file);
      }
      //ファイルインプットされた時のイベント登録
      var inputFiles = document.getElementById('up_image');

      //実際のイベントが起きた時の処理
      inputFiles.addEventListener("change", function(e) {
        image_src = e.target.files;
        const files = inputFiles.files;
        for (let i = 0; i < files.length; i++) {
          previewFile(files[i]);
          image_src = files[i].name;
          console.log(files[i].name);
        }
      },false);
    })();  
  }
  //レシピ作成ボタンが非表示になった時
  function make_recipe_close(){
    console.log(Contents.make_recipe_visible);
    Contents.dm ='none';
  }

  //レシピ投稿ボタンが押された時の処理
  function make_recipe_post(){    
    Contents.dm ='none';    
  }
  //Ajax通信
  function ajax(post_data){
    ret = "";
    //サーバへの接続
    $.ajax({
      type: 'GET',
      url: 'https://studyblog.icurus.jp/eatweet/server.php',
      dataType: "text",
      data : {
          no : post_data
      }
    }).done(function(data){
        /* 通信成功時 */
        ret = data;
    }).fail(function(data){
        /* 通信失敗時 */
        console.log('通信失敗！');
    });
    return ret;
  } 

  main();

})();

