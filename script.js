




const app = new Vue({

    el: "#app",
    data: {
        image: null,
        return: {
            myStyle: {
                backgroundColor: "#16a085"
            }

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