// 使用了express框架
const express = require('express')
const app = express()

app.use(require('cors')())   // 允许任意域名访问，解决跨域问题
app.use(express.json())   //让express识别json数据

// 连接mongodb数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vue-project', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})
// 建立数据模型
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    content: { type: String },
}))

// 请求展示数据
app.get('/', async (req, res) => {
    res.send('hello!')
})

// 新增文章接口
app.post('/api/articles', async (req, res) => {
    res.send(await Article.create(req.content))
})

// 展示文章列表接口
// 虽然请求地址和上面一样，但是请求方法不同，对应的是不同的接口
// find()方法查找数据
app.get('/api/articles', async (req, res) => {
    res.send(await Article.find())
})

// 删除文章接口
app.delete('/api/articles/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

// 文章详情接口
app.get('/api/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

// 修改文章接口
app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.content)
    res.send(article)
})

app.listen(3001, () => {
    console.log('http://localhost:3001/')
})