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
  
  /*
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
  */
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
    //サーバへの接続
    /*
    xhr.abort();
    var xhr = new XMLHttpRequest();
	  xhr.open("GET", '//studyblog.icurus.jp/eatweet/server.php', true);
	  xhr.onreadystatechange = function () {
	  	if (xhr.readyState == 4 && xhr.status == 200) {
	  		var response = JSON.parse(this.responseText);
		    	console.log(response);
	  	}
	  }
	  xhr.send(null);
    xhr.abort();
    */

    $.ajax({
      type: 'GET',
      url: 'http://studyblog.icurus.jp/eatweet/server.php',
      dataType: 'text',
      data : {
          no : 3
      }
    }).done(function(data){
        /* 通信成功時 */
        console.log(data); //取得したHTMLを.resultに反映

    }).fail(function(data){
        /* 通信失敗時 */
        console.log('通信失敗！');

    });
    for(let i = 0;i<10;i++){
      var content = {title: 'うんこ',message: 'トイレいきたいです！！！！'};
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
  /*
    var post_method = {title:Contents.input_title,howto:Contents.input_comment,image:image_src};
    makelecipe_length = Customer_inf.make_recipe.length;

    Customer_inf.make_recipe[makelecipe_length-1] = post_method;
    console.log(Customer_inf);
    sock.send(JSON.stringify(Customer_inf));
  */
    Contents.dm ='none';    
  }
  
  main();
})();

