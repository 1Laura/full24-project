import {create} from "zustand";

const useStore = create((set) => ({
    error: null,
    users: [],

    setUsers:(users)=>set({users}),
    setError: (newError) => set({error: newError}),
}));

export default useStore;