import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChatContainer, ChatFooter, ChatInput, ResponseArea, SendButton } from './styles';

const ChatComponent: React.FC = () => {
    const [message, setMessage] = useState('');
    const [conversationHistory, setConversationHistory] = useState<Array<{ role: string; content: string }>>(
        [
            {
                "role": "user",
                "content": "olá eu me chamo henrry"
            },
            {
                "role": "assistant",
                "content": "Olá Henrry, prazer em conhecê-lo. Como posso ajudá-lo hoje?"
            },
            {
                "role": "user",
                "content": "quero saber se você sabe como eu me chamo"
            },
            {
                "role": "assistant",
                "content": "Desculpe pela confusão anterior, Henrry. Você acabou de me dizer como se chama, então sim, eu sei que você se chama Henrry. Como posso ajudá-lo hoje?"
            },
            {
                "role": "user",
                "content": "eu tenho 28 anos"
            },
            {
                "role": "assistant",
                "content": "Entendi, Henrry. Se precisar de alguma informação ou assistência, estou à disposição para ajudá-lo. Como posso ajudá-lo hoje?"
            },
            {
                "role": "user",
                "content": "gosto bastante de joga videogame e voce?"
            },
            {
                "role": "assistant",
                "content": "Como sou uma inteligência artificial, não tenho a capacidade de jogar videogames. Mas posso ajudá-lo com informações sobre jogos, dicas e recomendações, se precisar. Qual jogo você costuma jogar?"
            }
        ]
    );
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
            const result = await axios.post('http://localhost:5005/chat', {
                message,
                conversationHistory: conversationHistory
            });

            const newResponse = { role: 'assistant', content: result.data.response };
            setConversationHistory(prev => [...prev, newResponse]);
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

            {conversationHistory.map((entry, index) => (
                <ResponseArea key={index} role={entry.role}>
                    {entry.role === 'user' ? '' : 'Assistente: '}
                    {entry.content}
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
