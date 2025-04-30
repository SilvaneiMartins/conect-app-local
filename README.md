## 🖥️ Conect App Local

O **Conect App Local** é uma aplicação desktop criada com [Tauri](https://tauri.app), [React](https://react.dev), [TypeScript](https://www.typescriptlang.org/) e [Tailwind CSS](https://tailwindcss.com/). O objetivo do app é facilitar o espelhamento ou controle remoto de outro notebook conectado na mesma rede local, evitando deslocamentos físicos desnecessários em ambientes como escritórios.

---

## 📌 Descrição do Projeto

Imagine um ambiente de trabalho onde dois notebooks estão conectados na mesma rede, mas você precisa se mover entre eles constantemente. O **Conect App Local** busca resolver esse incômodo, permitindo que você visualize ou acesse rapidamente a tela do segundo notebook diretamente da interface do primeiro.

A primeira versão está focada em preparar essa estrutura inicial, com uma interface moderna e responsiva, pronta para ser expandida com funcionalidades de rede, acesso remoto, RDP ou VNC.

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

