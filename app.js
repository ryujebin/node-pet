const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

let comments = [];

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/index.html', (req, res) => {
  res.render('index.html')
})

app.get('/reserve.html', (req, res) => {
  res.render('reserve.html')
})

app.get('/sitter.html', (req, res) => {
  res.render('sitter.html')
})

app.get('/place.html', (req, res) => {
  res.render('place.html')
})

app.get('/comments.html', (req, res) => {
  res.render('comments.ejs', {comments : comments})
})

app.get('/n-join.html', (req, res) => {
  res.render('n-join.html')
})

app.get('/s-join.html', (req, res) => {
  res.render('s-join.html')
})

app.get('/n-login.html', (req, res) => {
  res.render('n-login.html')
})

app.get('/s-login.html', (req, res) => {
  res.render('s-login.html')
})

app.get('/s-place.html', (req, res) => {
  res.render('s-place.html')
})

app.get('/y-place.html', (req, res) => {
  res.render('y-place.html')
})

app.get('/g-place.html', (req, res) => {
  res.render('g-place.html')
})


app.post('/create', async function(req, res) {
  console.log(req.body)

  const {content} = req.body

  comments.push(content)

  console.log(comments);

  res.redirect('/comments.html')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})