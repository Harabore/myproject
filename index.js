const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
const bodyParser= require('body-parser');
const { response } = require('express');
const urlEncodedParser =bodyParser.urlencoded({extended:false})


app.set('views', 'views');
app.set('view engine','hbs');
app.use(express.static('public'));

// app.get('/', function(request ,response){
//     response.render('home',{name:'Chelsea Kerubo'});
//  });

// app.get('/', function(request ,response){
//     response.render('contact_us');
// });

// app.post('/process-contacts', urlEncodedParser, function (request, response){
//     response.end('Thank you ' + request.body.first_name + ' '+ request.body.last_name);
    
    
// });
// 

app.get('/', function(request ,response){
        response.render('bmi');
     });

app.post('/bmi-calculate', urlEncodedParser, function (request, response){
    weigh=parseFloat( request.body.weight)
    bmi = weigh/ parseFloat(request.body.height * request.body.height);

    if (bmi < 19) {
        response.end("Hey!"+ " " + "your BMI is around: " + bmi + "  " + " You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        response.end("Hey!" +" " +"your BMI is around: " + bmi + "  " +" You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        response.end("Hey!" +" " + "your BMI is around: " + bmi+ "  " + " You are Overweight!");
    } else {
        response.end("Hey!"+ " " +"your BMI is around: " + bmi + "  " +" You are Obese!");
    }

    

});

app.listen(port);
console.log('server is listening at port ${port}');




// var http =require('http');
// var port =3000;

// var requestHandler =function(request, response){
//     console.log(request.url);
//     response.end('Hello from Node Server');
// }

// var server =http.createServer(requestHandler);
// server.listen(port);

// console.log('Node server started on port 3000');
