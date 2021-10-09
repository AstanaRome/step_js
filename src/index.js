const axios = require('axios');
const cat = document.getElementById('cat_img');


axios.get('https://aws.random.cat/meow')

.then(response => {
const data = response.data.file;
console.log(data);
cat.src = data;
})
