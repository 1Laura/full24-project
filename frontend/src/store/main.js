import {create} from "zustand";

const useStore = create((set) => ({
    error: null,
    users: [],
    currentUser: null,

    setUsers: (users) => set({users}),
    setError: (newError) => set({error: newError}),
    setCurrentUser: (newCurrentUser) => set({currentUser: newCurrentUser}),
}));

export default useStore;