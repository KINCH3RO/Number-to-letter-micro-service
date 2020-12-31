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
     
    if(number==undefined || isNaN(number)){

        res.json({error_Code:205,error:"Wrong number format"})
        return;
    }

    if(!langaugeArray.includes(lang) && lang !=undefined){

        res.json({error_Code:206,error:"Wrong language format"})
        return;
    }

    if(lang==undefined){
      if(number.toString().includes(".")){
         let numbers = number.split(".");
         let trueNumber = numbers[0];
         let decimal =  numbers[1];
         console.log(numbers)
         console.log(trueNumber)
         console.log(decimal)
         res.json({value:writtenNumber(trueNumber),decimal:writtenNumber(decimal),lang:"en"})

      }else{
        res.json({value:writtenNumber(number),decimal:writtenNumber(0),lang:"en"})
      }
     
    }else{
        if(number.toString().includes(".")){
            let numbers = number.split(".");
            let trueNumber = numbers[0];
            let decimal =  numbers[1];
            res.json({value:writtenNumber(trueNumber,{lang: lang}),decimal:writtenNumber(decimal,{lang: lang}),lang:"en"})
   
         }else{
           res.json({value:writtenNumber(number,{lang: lang}),decimal:writtenNumber(0,{lang: lang}),lang:"en"})
         }
     
    }
    
  
});


var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});