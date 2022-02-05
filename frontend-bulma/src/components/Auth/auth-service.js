import axios from "axios";

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        });
        this.service = service;
    }

    signup = ( username, password, isSeller, description, email, whatsAppNumber) => {
        return this.service.post('/signup', { username, password, isSeller, description, email, whatsAppNumber })
            .then(response => console.log(response.data))
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data);
    };

    login = (email, password) => {
        return this.service.post('/login', { email, password })
            .then(response => response.data);
    };

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data);
    };
}

export default AuthService;