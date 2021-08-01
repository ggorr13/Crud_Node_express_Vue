const App = {

    data () {
        return {
            servers:[],
            name: '',
            isHidden:true,
            update:'',
            serverId: '',
        }
    },

    methods: {
        async createServer() {

            const data = {
                name : this.name,
            }

            fetch('/api/server/',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })

            this.name = '';
            this.componentDidUpdate()
        },

        async updateServer() {

            fetch(`/api/server/${this.serverId}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({update: this.update})
            })

            this.componentDidUpdate()
        },

        async remove(id) {
            fetch(`/api/server/${id}`,{method: 'DELETE'})
            this.componentDidUpdate()
        },

        edit (id,val) {
            this.isHidden = false;
            this.update = val;
            this.serverId = id
        },

        async componentDidUpdate() {
            const res = await fetch('/api/server')
            this.servers = await res.json()
        }
    },

    async mounted () {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    }
}

Vue.createApp(App).mount("#app")