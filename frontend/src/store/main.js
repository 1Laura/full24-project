import {create} from "zustand";

const useStore = create((set) => ({
    posts: [],
    error: null,

    setError: (newError) => set({error: newError}),
}));

export default useStore;