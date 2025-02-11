import {create} from "zustand";

const useUserStore = create((set) => ({
    users: [],
    currentUser: null,
    error: null,
    logUser: false,
    posts: [],
    chats: [],

    registerUser: (newUsername, newPassword) => {
        set((state) => {
            // JavaScript metodas .some(), kuris naudojamas patikrinti, ar bent vienas elementas masyve atitinka nurodytą sąlygą
            if (state.users.some(user => user.username === newUsername)) {
                return {error: "Username is already in use."}
            }
            const newUser = {
                username: newUsername,
                password: newPassword,
                avatar: "https://fastly.picsum.photos/id/991/200/300.jpg?hmac=BdTxfK2wHhsGppraQzb5puxPKb5mPVzDaZPz8IiC44Q",
            };
            return {
                users: [...state.users, newUser],
                error: null,
                currentUser: newUser,
            }
        });
    },

    loginUser: (newUsername, newPassword, newNavigate) => {
        set((state) => {
            const loggedUser = state.users.find(user => user.username === newUsername && user.password === newPassword);
            if (loggedUser) {
                newNavigate("/profile");
                return {currentUser: loggedUser, error: null, logUser: true};
            } else {
                return {error: "Invalid username or password."};
            }
        })
    },

    logoutUser: (newNavigate) => {
        set(() => {
            newNavigate("/");
            return {logUser: false, currentUser: null};
        });
    },

    updateAvatar: (newAvatarUrl) => {
        set((state => {
            if (state.currentUser) {
                const updateUserAvatar = {...state.currentUser, avatar: newAvatarUrl};
                return {currentUser: updateUserAvatar};
            } else {
                return {};
            }
        }))
    },

    createPost: (newImageUrl, newTitle, newDescription) => {
        set((state => {
            const newPost = {
                imageUrl: newImageUrl,
                description: newDescription,
                title: newTitle,
                id: Date.now().toString(),
                comments: [],
                likes: 0,
                likedBy: [],
            };
            return {
                posts: [...state.posts, newPost],
            }
        }))
    },

    addComment: (newPostId, newUsername, newCommentText) => {
        set((state => {
            const updatePosts = state.posts.map(post => {
                if (post.id === newPostId) {
                    return {
                        ...post,
                        comments: [...post.comments, {user: newUsername, text: newCommentText}]
                    };
                }
                return {post}
            })
            return {posts: updatePosts}
        }))
    },

    likePost: (postId, username) => {
        set((state) => {
            const updatePosts = state.posts.map(post => {
                if (post.id === postId && !post.likedBy.includes(username)) {
                    return {
                        ...post,
                        likes: post.likes + 1,
                        likedBy: [...post.likedBy, username]
                    };
                }
                return {post}
            })
            return {posts: updatePosts}
        })
    },

    deleteOwnComment: (newPostId, newUsername, newCommentIndex) => {
        set((state) => {
            const updatePosts = state.posts.map(post => {
                if (post.id === newPostId) {
                    return {
                        ...post,
                        comments: post.comments.filter((comment, index) => {
                            return !(index === newCommentIndex && comment.user === newUsername);
                        })
                    };
                }
                return {post}
            })
            return {posts: updatePosts}
        })
    },

    deleteOwnPost: (newPostId, newUsername) => {
        set((state) => {
            return {posts: state.posts.filter(post => post.id !== newPostId || post.author !== newUsername)};
        });
    },

    deleteProfile: (newPassword, newNavigate) => {
        set((state) => {
            const user = state.currentUser;

            if (!user || user.password !== newPassword) {
                return {error: "Incorrect password. Profile not deleted."};
            }

            // Remove user's posts, comments, and likes
            const filteredPosts = state.posts
                .filter(post => post.author !== user.username)
                .map(post => ({
                    ...post,
                    comments: post.comments.filter(comment => comment.user !== user.username),
                    likedBy: post.likedBy.filter(liker => liker !== user.username),
                    likes: post.likedBy.includes(user.username) ? post.likes - 1 : post.likes,
                }));

            // Remove user from the list
            return {
                users: state.users.filter(u => u.username !== user.username),
                posts: filteredPosts,
                currentUser: null,
                logUser: false,
            };
        });
        newNavigate("/");
    },

    sendMessage: (recipientUsername, messageText) => {
        set((state) => {
            if (!state.currentUser) {
                return {error: "You must be logged in to send a message."};
            }

            const senderUsername = state.currentUser.username;

            const updatedConversations = state.chats.map(conv =>
                conv.participants.includes(senderUsername) && conv.participants.includes(recipientUsername)
                    ? {...conv, messages: [...conv.messages, {sender: senderUsername, text: messageText, timestamp: new Date().toISOString()}]}
                    : conv
            );

            const conversationExists = state.chats.some(conv => conv.participants.includes(senderUsername) && conv.participants.includes(recipientUsername));

            return {
                chats: conversationExists
                    ? updatedConversations
                    : [
                        ...state.chats,
                        {
                            participants: [senderUsername, recipientUsername],
                            messages: [{sender: senderUsername, text: messageText, timestamp: new Date().toISOString()}],
                        },
                    ],
            };
        });
    },

    setError: (newError) => set({error: newError}),
}));

export default useUserStore;