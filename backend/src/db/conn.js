const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ciem:ciem@cluster0.os4z6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Error:', err.message);
});