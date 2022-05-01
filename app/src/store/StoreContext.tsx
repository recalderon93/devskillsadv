/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import type { PersonData } from 'src/types';
import { getPeopleData } from '../services';

interface StoreInterface {
    peopleData: Array<PersonData>;
    selectedPerson: string;
}
interface StoreActions {
    addPerson: (input: PersonData) => void;
    selectPerson: (input: string) => void;
    getPeople: () => void;
    refreshPeople: () => void;
}
type StoreActionsType =
    | { type: 'SELECT_PERSON'; payload: string }
    | { type: 'GET_PEOPLE_DATA'; payload: PersonData[] }
    | { type: 'REFRESH_PEOPLE_DATA'; payload: PersonData[] }
    | { type: 'ADD_PERSON'; payload: PersonData };
interface StoreContextInterface {
    state: StoreInterface;
    actions: StoreActions;
}
const Context = createContext<StoreContextInterface>({} as StoreContextInterface);
const initialState: StoreInterface = {
    peopleData: [],
    selectedPerson: ''
};

function reducer(state: StoreInterface, action: StoreActionsType): StoreInterface {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                selectedPerson: state.selectedPerson,
                peopleData: [...state.peopleData, action.payload]
            };
        case 'GET_PEOPLE_DATA':
            return { peopleData: action.payload, selectedPerson: state.selectedPerson };
        case 'REFRESH_PEOPLE_DATA':
            return { peopleData: action.payload, selectedPerson: state.selectedPerson };
        case 'SELECT_PERSON':
            return { selectedPerson: action.payload, peopleData: state.peopleData };
        default:
            return state;
    }
}
export default function StoreContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions: StoreActions = {
        async addPerson(input) {
            dispatch({ type: 'ADD_PERSON', payload: input });
        },
        async getPeople() {
            const payload = await getPeopleData();
            dispatch({ type: 'GET_PEOPLE_DATA', payload });
        },
        async refreshPeople() {
            const payload = await getPeopleData();
            dispatch({ type: 'REFRESH_PEOPLE_DATA', payload });
        },
        selectPerson(input) {
            dispatch({ type: 'SELECT_PERSON', payload: input });
        }
    };
    useEffect(() => {
        actions.getPeople();
    }, []);

    /** INTERVAL */
    useEffect(() => {
        const interval = setInterval(() => {
            actions.refreshPeople();
        }, 120000);
        return () => clearInterval(interval);
    }, []);

    return <Context.Provider value={{ actions, state }}>{children}</Context.Provider>;
}

export function useStoreContext() {
    return useContext(Context);
}
