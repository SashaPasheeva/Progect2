
const express = require('express');

let app = express();

let port = 3000;

 //---public - имя папки где храниться статистика 
app.use(express.static('public'));
//задаем шаблонизатор
//прописываем путь до папки
app.set('views','./views');
app.set('view engine','pug');




app.get('/',function(request,response){
    //response.end('<h1>Main page</h1> express');
    //response.render('main.pug');
})

app.get('/cat',function(request,response){
    //response.end('<h1>Category </h1> <p>Any product</p>'); 
})
app.listen(port,function(){
    console.log('node express work on 3000');
});