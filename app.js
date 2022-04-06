const app = Vue.createApp ({
    data() {
        return {
            title: 'Lord',
            firstName: 'Waterton',
            lastName: 'Yoghurtshire',
            gender: 'male',
            email: 'yoghurt@shire.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            password: 'royalcrane'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.password = results[0].login.password
        },
    },
})

app.mount('#app')
