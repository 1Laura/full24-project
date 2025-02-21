import {create} from "zustand";

const useStore = create((set) => ({
    users: [],
    error: null,
    currentUser: null,
    notifications: [],

    setUsers: (newUsers) => set({users: newUsers}),
    setError: (newError) => set({error: newError}),
    setCurrentUser: (newCurrentUser) => set({currentUser: newCurrentUser}),
    setNotifications: (notifs) => set({notifications: notifs}),
}));

export default useStore;