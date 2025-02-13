import {create} from "zustand";

const useStore = create((set) => ({
    error: null,
    posts: [],

    setPosts:(posts)=>set({posts}),

    setError: (newError) => set({error: newError}),
}));

export default useStore;