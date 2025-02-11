import React from "react";
import useUserStore from "../store/main";

const ChatsPage = () => {
    const { conversations, currentUser } = useUserStore();

    if (!currentUser) return <p>You must be logged in to see conversations.</p>;

    const userConversations = conversations.filter(conv => conv.participants.includes(currentUser.username));

    return (
        <div className="container">
            <h2>Conversations</h2>
            {userConversations.length === 0 ? (
                <p>No conversations yet.</p>
            ) : (
                userConversations.map((conv, index) => {
                    const recipient = conv.participants.find(p => p !== currentUser.username);
                    return (
                        <div key={index} className="conversation">
                            <h3>Chat with {recipient}</h3>
                            <div className="messages">
                                {conv.messages.map((msg, i) => (
                                    <p key={i} style={{ color: msg.sender === currentUser.username ? "blue" : "black" }}>
                                        <strong>{msg.sender}:</strong> {msg.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default ChatsPage;
