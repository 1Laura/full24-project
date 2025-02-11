import React, { useState } from "react";
import useUserStore from "../store/main";

const AllUsersPage = () => {
    const { users, currentUser, sendMessage } = useUserStore();
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);

    function openChat(user) {
        setSelectedUser(user);
        setIsChatOpen(true);
    }

    function closeChat() {
        setSelectedUser(null);
        setIsChatOpen(false);
        setMessage("");
    }

    function handleSendMessage() {
        if (message.trim() !== "" && selectedUser) {
            sendMessage(selectedUser.username, message);
            setMessage("");
        }
    }

    return (
        <div className="container d-flex flex-wrap">
            {users
                .filter(user => user.username !== currentUser?.username)
                .map((user, index) => (
                    <div className="user-card" key={index} style={{ margin: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
                        <img src={user.avatar} alt="Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                        <p>{user.username}</p>
                        <button onClick={() => openChat(user)} style={{ padding: "5px 10px", cursor: "pointer" }}>
                            Chat
                        </button>
                    </div>
                ))}

            {/* Chat Modal */}
            {isChatOpen && selectedUser && (
                <div className="chat-modal" style={{ position: "fixed", top: "20%", left: "50%", transform: "translate(-50%, -20%)", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
                    <h3>Chat with {selectedUser.username}</h3>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        style={{ width: "100%", height: "80px", marginBottom: "10px" }}
                    />
                    <div>
                        <button onClick={handleSendMessage} style={{ marginRight: "10px" }}>Send</button>
                        <button onClick={closeChat} style={{ background: "red", color: "white" }}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllUsersPage;
