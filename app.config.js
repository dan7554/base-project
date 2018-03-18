export default 
{
    db: {
        url: 'http://localhost:3333',
        headers: []
    },
    users: {
        url: 'http://localhost:3333',
        headers: [
            'Content-Type: application/json',
            'Accept: application/json'
        ],
        login:  {
            path: '/api/Users/login'
        },
        logout:  {
            path: '/api/Users/logout'
        }
    }
}