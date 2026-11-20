# 🎬 Prime Flix

Aplicação web para acompanhar os filmes em cartaz, ver detalhes e trailers e salvar seus filmes favoritos. Desenvolvida com React.

🔗 **[link-do-deploy](https://prime-flix-theta.vercel.app/)**

<img width="1920" height="1026" alt="Captura de tela 2026-05-10 193742" src="https://github.com/user-attachments/assets/4212b468-a4d4-4ce0-b63c-d53c056872ff" />

## ✨ Funcionalidades
- Listagem dos filmes em cartaz, com dados em português
- Página de detalhes de cada filme
- Botão de **trailer**, que abre o trailer do filme no YouTube em uma nova aba
- Lista **"Meus filmes"** para salvar e consultar seus favoritos
- Notificações com React Toastify

## 🛠️ Tecnologias
- React 19
- React Router DOM
- Axios
- React Toastify
- CSS

## 🔌 API utilizada
Os dados dos filmes vêm da API da [TMDB (The Movie Database)](https://developer.themoviedb.org/docs), usando o endpoint de filmes em cartaz (`/movie/now_playing`).

Para rodar o projeto localmente, você precisa de uma chave gratuita da TMDB:

1. Crie uma conta e gere sua chave no site da TMDB (Configurações → API)
2. Crie um arquivo `.env` na raiz do projeto com:
   ```
   REACT_APP_API_KEY=sua_chave_aqui
   ```

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone [link-do-repositorio]

# Entre na pasta do projeto
cd [nome-da-pasta]

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

O projeto abrirá em `http://localhost:3000`.

## 📚 Aprendizados
Neste projeto pratiquei consumo de API com Axios, rotas dinâmicas com React Router, uso de variáveis de ambiente para proteger a chave da API e deploy na Vercel. [Ajuste conforme o que você aprendeu de verdade.]

## 📫 Contato
[LinkedIn](https://www.linkedin.com/in/alejandro-oliveira/) · [E-mail](mailto:alejandro-oliveira@live.com)
