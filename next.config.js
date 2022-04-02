module.exports = {
    env: {
        appName: 'Kopaskode',
        urlApi: 'http://localhost:8000/api',
    },

    async rewrites(){
        return [
            {
                source: '/login',
                destination: '/auth/login',
            },
            {
                source: '/register',
                destination: '/auth/register',
            },
        ]
    }
}