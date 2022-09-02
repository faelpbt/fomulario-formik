const express = require('express');
const { resolve } = require('path');

const app = express();

app.use(
  '/', 
  resolve(
    __dirname,
    './dist'
  )
)

app.listen(process.env.PORT || 3000, (err) => {
  if(err) {
    return cosole.log(err)
  }
  console.log('Tudo certo por aqui')
})