## 🖥️ Conect App Local

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/seu-usuario/conect-app-local/actions)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-blue)](https://tauri.app/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Enabled-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178c6)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Interface de linha de comando (CLI) para gerar aplicações desktop modernas com **Tauri**, usando **React**, **Vite**, **TypeScript** e **TailwindCSS**. Ideal para criar aplicações híbridas rápidas, seguras e multiplataforma, com foco em produtividade e controle total da interface.

---

## 📌 Descrição do Projeto

Imagine um ambiente de trabalho onde dois notebooks estão conectados na mesma rede, mas você precisa se mover entre eles constantemente. O **Conect App Local** busca resolver esse incômodo, permitindo que você visualize ou acesse rapidamente a tela do segundo notebook diretamente da interface do primeiro.

A primeira versão está focada em preparar essa estrutura inicial, com uma interface moderna e responsiva, pronta para ser expandida com funcionalidades de rede, acesso remoto, RDP ou VNC.

## 🔧 Estrutura do projeto

```PlainText
    /conect-app-local
    │
    ├── /src
    │   ├── /tauri                  # Lógica do Tauri
    │   │   ├── main.rs             # Arquivo principal do Tauri
    │   │   └── tauri.conf.json     # Configuração do Tauri
    │   ├── /assets                 # Imagens, ícones e recursos estáticos
    │   ├── /frontend               # Lógica do React + TailwindCSS
    │   │   ├── /components         # Componentes React
    │   │   ├── /styles             # Estilos do Tailwind
    │   │   ├── App.tsx             # Componente principal
    │   │   └── index.tsx           # Ponto de entrada do React
    ├── /dist                       # Arquivo gerado pelo build (Vite)
    ├── /icons                      # Ícones do aplicativo
    ├── /node_modules               # Dependências do Node.js
    ├── /package.json               # Gerenciador de pacotes
    ├── /yarn.lock                  # Bloqueio de dependências
    └── /README.md                  # Documentação do projeto
```

---

## 🚀 Como executar o projeto

### 🔧 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Rust](https://rustup.rs)
- [Node.js](https://nodejs.org)
- [Yarn](https://classic.yarnpkg.com/)
- [Tauri CLI](https://tauri.app):

Instale com:
```bash
cargo install create-tauri-app
```

---

## ▶️ Rodando em modo desenvolvimento

# Instale as dependências
```bash
    yarn
```

# Rode a aplicação
```bash
    yarn tauri dev
```

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta       | Descrição                                       |
|------------------|-------------------------------------------------|
| **Tauri**        | Framework para apps desktop com Rust + Web      |
| **React**        | Biblioteca para construção de interfaces        |
| **Vite**         | Bundler leve e rápido                           |
| **Tailwind CSS** | Estilização baseada em utilitários              |
| **TypeScript**   | Superset do JavaScript com tipagem estática     |

---

## 🤝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
```bash
    git checkout -b minha-nova-feature
```
3. Faça suas alterações e commit:
```bash
    git commit -m 'feat: adiciona nova funcionalidade'
```
4. Envie para sua branch remota:
```bash
    git push origin minha-nova-feature
```
5. Abra um Pull Request explicando suas alterações

---

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para utilizá-lo, modificá-lo e distribuí-lo.

---

## 👤 Desenvolvedor

Desenvolvido por **Silvanei Martins**

-   💼 [LinkedIn](https://www.linkedin.com/in/silvanei-martins-a5412436)
-   🌐 [Site Pessoal](https://silvaneimartins.com.br/)
-   🐱 [GitHub](https://github.com/Store-Sam-Martins)
-   📧 silvaneimartins_rcc@hotmail.com
-   🎥 [YouTube](https://www.youtube.com/@silvaneimartins2487/featured)
-   🐦 [X (Twitter)](https://x.com/SilvaneiMartins)

---

🚀 Sinta-se à vontade para usar este projeto como base para os seus próprios apps.
