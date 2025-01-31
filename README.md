# Open AI Chat Front

Bem-vindo ao **Open AI Chat Front**! Este projeto é um frontend que utiliza a [OpenAI API](https://platform.openai.com/docs/introduction) para simular um concierge de passagens aéreas. A aplicação analisa as necessidades do usuário e, em seguida, integra-se às APIs de passagens do Google para apresentar sugestões de voos e preços atualizados.

## Visão Geral

O **Open AI Chat Front** foi desenvolvido para fornecer uma interface simples e intuitiva onde o usuário pode interagir com um “concierge virtual” de viagens aéreas. A aplicação utiliza:

1. **OpenAI API** para entender o contexto e as necessidades do usuário;
2. **APIs de passagens aéreas** (no exemplo, as APIs de tickets do Google) para retornar sugestões de voos;
3. **React e Styled Components** para construção de uma UI responsiva e moderna.

A ideia é que, em uma única tela de conversa, o usuário possa descrever a sua necessidade (por exemplo, uma viagem de negócios para Paris no mês de outubro) e receber recomendações de voos e preços, de forma personalizada.

## Tecnologias Utilizadas

- **[React](https://react.dev/)** - Biblioteca para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build e desenvolvimento rápido.
- **[Axios](https://axios-http.com/)** - Cliente HTTP para realizar requisições às APIs.
- **[Styled Components](https://styled-components.com/)** - Estilização de componentes utilizando CSS-in-JS.
- **[React Hot Toast](https://react-hot-toast.com/)** - Notificações elegantes e simples de usar.
- **[React HTML Parser](https://www.npmjs.com/package/react-html-parser)** - Conversão de strings HTML para elementos React.
- **ESLint** e **@typescript-eslint** - Ferramentas para padronização e qualidade de código.

## Pré-requisitos

Para executar este projeto em sua máquina local, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) para gerenciamento de pacotes

> Observação: Este projeto usa `npm` por padrão. Sinta-se livre para usar `yarn` caso prefira.

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/open-ai-chat-front.git
Entre na pasta do projeto:

cd open-ai-chat-front
Instale as dependências:

npm install
ou
yarn

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto (se já não existir) e defina as variáveis necessárias para a comunicação com a OpenAI e as APIs de passagens do Google. Por exemplo:

VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GOOGLE_API_KEY=your_google_api_key
Ajuste de acordo com as chaves que você possuir.

---

## Scripts Disponíveis

No arquivo `package.json`, temos os seguintes scripts:

- **`dev`**: Roda a aplicação em modo de desenvolvimento.

npm run dev
Acesse http://localhost:5173 (porta padrão do Vite) para visualizar no navegador.

build: Faz o build de produção, gerando os arquivos otimizados na pasta dist.
npm run build

lint: Verifica possíveis problemas de lint no código usando ESLint.
npm run lint

preview: Serve os arquivos do build de produção localmente, para teste.
npm run preview
