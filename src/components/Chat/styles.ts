import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f8;
  min-height: 400px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: hidden ;

  color: #5e5e5e;
`;

export const ResponseArea = styled.div<{ role: string }>`
  /* width: 80%; */
  padding: 10px;
  background-color: ${props => props.role === 'user' ? '#d1ecf1' : '#f8f9fa'};
  border: 1px solid ${props => props.role === 'user' ? '#bee5eb' : '#dee2e6'};
  border-radius: 5px;
  margin-top: 40px;
  align-self: ${props => props.role === 'user' ? 'flex-end' : 'flex-start'};
  text-align: ${props => props.role === 'user' ? 'right' : 'left'};
  color: ${props => props.role === 'user' ? '#0c5460' : '#495057'};
`;

export const ChatFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  background-color: #a5d1ff;
  border-radius: 5px;
`;

export const ChatInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
`;

export const SendButton = styled.button`
  height: 54px;
  padding: 10px;
  border: 2px solid #ddd;
  color: white;
  background-color: #007BFF;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
