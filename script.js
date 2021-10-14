




const app = new Vue({

    el: "#app",
    data: {
        image: null,
        styleObject: {
            color: 'blue',
            fontSize: '20px'
          }
     
    },
    methods: {
        getImage() {

            axios.get('https://aws.random.cat/meow')
                .then(response => {
                    const data = response.data.file;
                    this.image = data;
                })
        }
    }






})