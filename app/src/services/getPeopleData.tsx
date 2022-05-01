import axios from 'axios';
import type { PersonData } from 'src/types';
import getToken from './getTokens';

export default async function getPeopleData(): Promise<Array<PersonData>> {
    const token = await getToken();
    const res = await axios.get('http://localhost:8081/api/members', {
        headers: { Authorization: token }
    });
    return res.data;
}
