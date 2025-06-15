# 📦 Projeto Angular - Instruções de Instalação e Execução

## ✅ Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados na sua máquina:

- **Node.js**: Versão exata **16.14.2**
- **NPM**: Compatível com a versão acima (recomendado usar o que vem com o Node 16.14.2)

---

## 🚀 Passo a passo para rodar o projeto

### 1. Garanta que você está usando a versão correta do Node

Se você utiliza **nvm** (Node Version Manager), execute:

```bash
nvm install 16.14.2
nvm use 16.14.2
```

Se não estiver usando nvm, baixe e instale manualmente a versão 16.14.2 do Node.js:  
👉 https://nodejs.org/dist/v16.14.2/

---

### 2. Instalação das dependências

O projeto é composto por múltiplos workspaces / micro frontends.  
Para instalar todas as dependências de uma vez, rode o script:

```bash
node install-all.js
```

Esse comando vai navegar por cada workspace do projeto e rodar `npm install` em cada um.

---

### 3. Rodando o projeto

Após a instalação, execute o projeto com:

```bash
node start-projects.js
```

Esse script vai iniciar todas as aplicações necessárias (como o **Shell** e os **MFEs**).

---

## ✅ Resumo rápido dos comandos:

```bash
nvm install 16.14.2
nvm use 16.14.2
node install-all.js
node start-projects.js
```

---


## 💬 Observações importantes:

- Caso encontre erros de Node ou dependências, **confira novamente a versão do Node.js**.
- Verifique se todas as portas necessárias (ex: `4200`, `4201`, `4202`, etc.) estão livres antes de rodar o projeto.
- Caso queira rodar apenas um projeto isolado, navegue manualmente até a pasta e use o comando `npm start` nela.


Diagrama de Fluxo da Aplicação:


![diagram-mfe](https://github.com/user-attachments/assets/a8adddf1-c3fe-4779-9f8b-b020b4e50a79)

## Arquitetura utilizada:
- Micro frontends (com Module Federation)
- Feature-based Modular Architecture

Um projeto Micro Frontends com Module Federation + Feature-based Modular Architecture é uma aplicação onde:

Cada feature grande (ex: Cadastro, Sucesso, Dashboard) vira um micro frontend separado (projeto Angular independente, com seu próprio build e deploy).

Cada micro frontend organiza seu código internamente por feature modules, com pastas separadas por componentes, serviços, modelos, etc.

A comunicação entre os MFEs é feita via Module Federation (Webpack), permitindo que o Shell (Host) carregue os MFEs de forma remota e dinâmica, como se fossem partes locais da aplicação.

##  Estrutura de repositórios:

- mfe-shell (host)
- mfe-cadastro (remote)
- mfe-sucesso (remote)


