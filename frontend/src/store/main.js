import {create} from "zustand";

const useStore = create((set) => ({
    error: null,
    posts: [],

    setPosts:(posts)=>set({posts}),

    createPost: (newImageUrl, newTitle) => {
        set((state => {
            const newPost = {
                imageUrl: newImageUrl,
                title: newTitle,
                id: Date.now().toString(),
            };
            return {
                posts: [...state.posts, newPost],
            }
        }))
    },


    deleteOwnPost: (newPostId) => {
        set((state) => {
            return {posts: state.posts.filter(post => post.id !== newPostId)};
        });
    },


    setError: (newError) => set({error: newError}),
}));

export default useStore;