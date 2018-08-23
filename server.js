const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 9000;

app.use(express.static('./client/build')); // deployment

// Routing
app.get('/api/user', (req, res) => {

    res.json({
        username: 'accimeesterlin'
    });
});


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
    console.log('App is starting at port ', PORT);
});