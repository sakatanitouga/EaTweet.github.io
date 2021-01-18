var Contents = new Vue({
  el: '#app',
  data: {
    Contents_js: []
  }
});
for(let i = 0;i<10;i++){
    var content = {title: 'うんこ',message: 'トイレいきたいです！！！！'};
    Contents.$set(Contents.Contents_js, i, content);
}
console.log(Contents.Contents_js);