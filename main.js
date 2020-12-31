const express = require('express');
const writtenNumber = require('written-number');

const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to Number to letter api  ")
})

let langaugeArray =["en","fr","es","az","pt","ar","eo","vi","uk","id",]

app.get('/api', function (req, res) {
    let lang=req.query.lang;
    let number=req.query.number;
     console.log(number);
     console.log(lang);
    if(number==undefined || isNaN(number)){
        res.json({error_Code:205,error:"Wrong number format"})
        return;
    }

    if(!langaugeArray.includes(lang) && lang !=undefined){
        res.json({error_Code:206,error:"Wrong language format"})
        return;
    }

    if(lang==undefined){
      res.json({value:writtenNumber(number),lang:"en"})
    }else{
        res.json({value:writtenNumber(number,{lang: lang}),lang})
    }
    
  
});


var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});