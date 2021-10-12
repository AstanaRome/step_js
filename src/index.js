import '../assets/style.scss';
let change_image = require('../src/refresh.js');



const axios = require('axios');
const cat = document.getElementById('cat_img');
axios.get('https://aws.random.cat/meow')

    .then(response => {
        const data = response.data.file;
        console.log(data);
        cat.src = data;
    })


const btn_change = document.getElementById('btn1');

btn_change.addEventListener('click', () => { change_image(); }, false);












