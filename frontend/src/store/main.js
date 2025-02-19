import {create} from "zustand";

const useStore = create((set) => ({
    users: [],
    error: null,
    currentUser: null,

    setUsers: (newUsers) => set({users: newUsers}),
    setError: (newError) => set({error: newError}),
    setCurrentUser: (newCurrentUser) => set({currentUser: newCurrentUser}),
}));

export default useStore;