import {useApi} from "./useApi";
import raw from '../../data/data.json';
export type THuman = {
    id: number,
    name: string,
    thumbnail: string,
    age: number,
    weight: number,
    height: number,
    hair_color: string,
    professions: Array<string>,
    friends: Array<string>
}

export type TPeople = {
    Brastlewark: Array<THuman>,
}

export const usePeopleApi = () => {
    const {rawRequest} = useApi();
    // To include server integration - run server and uncomment rawRequests.
    const getPeople = async (): Promise<TPeople> => Promise.resolve(raw); // rawRequest('GET', '/data');
    const getHuman = async (name: string): Promise<THuman | undefined> => {
        const data : TPeople = raw; // await rawRequest('GET', '/data');
        return data.Brastlewark.find(human => human.name === name);
    }

    return {
        getPeople,
        getHuman
    }
}

export default {usePeopleApi};