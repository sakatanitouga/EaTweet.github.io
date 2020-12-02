(()=>{
 const $doc = document;
 const $tab = $doc.getElementById('js-type');
 const $nav = $tab.querySelectorAll('[data-nav]')
 const $contens = $tab.querySelectorAll('[data-contens]')
 console.log('$contens',$contens)

 //初期化
 const init = ()=>{
    $contens[0].style.display = 'block';
 };
 init();

 //クリックしたら起こるイベント
 const handleClick = (e) =>{
    e.preventDefault();
    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const $targetval = $this.dataset.nav;
    //対象外のコンテンツを非アクティブ化
    let index = 0;
    while(index < $nav.length){
        console.log('index',index );

        $contens[index].style.display = 'none';
        $nav[index].classList.remove('is-active');
        index++;
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-contens="'+$targetval+'"]')[0].style.display = 'block';
    $nav[$targetval].classList.add('is-active');
 };

 //全nav要素に対して関数を適応・発火
 let index = 0
 while(index < $nav.length){
     $nav[index].addEventListener('click',(e) =>handleClick(e));
     index++
 }
})();