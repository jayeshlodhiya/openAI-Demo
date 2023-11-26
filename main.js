const express = require("express")
const openAI = require("openai") 
const app=express()
app.use(express.static('public'))

const openai = new openAI({
	apiKey:"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"
})

app.get('/getResponse', async (req, res) => {
    try {
       
        res.send('ok'); // Send the response data
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.log('Rate limit reached:', error.response.data);
            res.status(429).send('Rate limit reached. Please try again later.');
        } else {
            console.error('An error occurred:', error);
            res.status(500).send(error.message);
        }
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});