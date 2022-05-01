import axios from 'axios';

export default async function getToken() {
    const res = await axios.post('http://localhost:8081/auth ', {
        username: 'sarah',
        password: 'connor'
    });
    return `Bearer ${res.data.token}`;
}
