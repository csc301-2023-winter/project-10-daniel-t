import {createContext} from "react";

export const APIContext = createContext({
    access: '',
    setAccess: () => {},
    refresh: 0,
    setRefresh: () => {}
})