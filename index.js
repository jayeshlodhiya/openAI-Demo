const express = require("express")
const openAI = require("openai") 
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const fs = require('fs');

var cors = require('cors');
dotenv.config();

const app=express()
app.use(cors());
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // Parse request body 

const openApiKey = process.env.API_KEY;
console.log("Api key="+openApiKey);
const openai = new openAI({
	apiKey:openApiKey
})


 app.post('/getResponseFromOpenAi', async (req, res) => {

    console.log("in getResponseFromOpenAi"+JSON.stringify(req.body));
    var prompt =req.body.message;
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role": "user", "content": prompt}],
            max_tokens:100
        });

        console.log(response);
        const choices = response.choices;
        var respFromOpenAi;
        choices.forEach((choice, index) => {
        console.log(`Choice ${index}:`, choice);
        console.log("Message Content:", choice.message.content);
        respFromOpenAi = choice.message.content;
        console.log("Finish Reason:", choice.finish_reason);
    });
        res.send(respFromOpenAi); // Send the response data
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.log('Rate limit reached:', error.response.data);
            res.status(429).send('Rate limit reached. Please try again later.');
        } else {
            console.error('An error occurred:', error);
            res.status(200).send(error.message);
        }
    }
});


var server = app.listen(process.env.PORT || 3002, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

});
