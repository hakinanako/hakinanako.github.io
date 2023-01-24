var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        document.title = '不要离开我好吗😭';
        clearTimeout(titleTime);
    }else {
        this.document.title = 'or';
        titleTime = setTimeout(function(){
            document.title = OriginTitle;
    },2000);
}
});

// 修改title和原始title