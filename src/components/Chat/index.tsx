import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChatContainer, ChatFooter, ChatInput, ResponseArea, SendButton } from './styles';
import { ConversationItem } from './interfaces';
import ReactHtmlParser from 'react-html-parser';

const ChatComponent: React.FC = () => {
    const [message, setMessage] = useState('');
    const [conversationHistory, setConversationHistory] = useState<Array<ConversationItem>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom()
    }, [conversationHistory]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        setIsLoading(true);

        const newMessage = { role: 'user', content: message };
        setConversationHistory(prev => [...prev, newMessage]);

        try {
            const result = await axios.post(`${import.meta.env.VITE_BACK_URL}/chat`, {
                message,
                conversationHistory: conversationHistory
            });

            setConversationHistory(result.data.response);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setConversationHistory(prev => [...prev, { role: 'assistant', content: 'Ocorreu um erro ao processar a mensagem' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <ChatContainer>
            <h1>Precisa de ajuda com passagens aéreas?</h1>

            {conversationHistory.filter(entry => (entry.role === 'assistant' && !entry.tool_calls) || entry.role === 'user').map((entry, index) => (
                <ResponseArea key={index} role={entry.role}>
                    {entry.role === 'user' ? '' : 'Assistente: '}
                    {ReactHtmlParser(entry.content as string)}
                </ResponseArea>
            ))}

            {isLoading && (
                <div style={{ alignSelf: 'center', margin: '10px' }}>
                    <p>Carregando...</p>
                </div>
            )}

            <div ref={messagesEndRef} />

            <ChatFooter>
                <ChatInput
                    type="text"
                    value={isLoading ? 'Enviando...' : message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos te ajudar? ..."
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                />

                <SendButton onClick={sendMessage}>Enviar</SendButton>
            </ChatFooter>
        </ChatContainer>
    );
};

export default ChatComponent;
