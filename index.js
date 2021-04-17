const main = require('./main')
const mongoose = require('mongoose')

const port = process.env.PORT || 5000
mongoose.connect('mongodb://localhost:27017/users', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB подключена'))
    .catch(error => console.log(error))
main.listen(port, () => console.log(`Сервер запущен на порту ${port}`))

