import axios from 'axios';
import type { PersonData } from 'src/types';
import getToken from './getTokens';

export default async function postPersonData(data: PersonData) {
    const token = await getToken();
    const res = await axios({
        baseURL: 'http://localhost:8081/api/members',
        method: 'post',
        headers: { Authorization: token },
        data: {
            address: data.address,
            firstName: data.firstName,
            lastName: data.lastName,
            ssn: data.ssn
        }
    });
    return {
        data,
        error: res.status !== 200
    };
}
