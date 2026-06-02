# 📱 Documentação - Lista de Compras App

## 1. Objetivo do Projeto

O aplicativo Lista de Compras tem como objetivo facilitar o gerenciamento de compras do dia a dia. O usuário pode criar, organizar e acompanhar seus itens de compras de forma simples e intuitiva, podendo adicionar produtos, definir categorias, quantidades e preços estimados.

---

## 2. Funcionalidades Principais

- Adicionar itens à lista de compras
- Marcar itens como comprados
- Remover itens da lista
- Adicionar detalhes do item como quantidade, preço e categoria
- Editar informações de um item
- Login e criação de conta
- Configurações do aplicativo

---

## 3. Tipos de Usuário

| Tipo              | Descrição                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Usuário Comum** | Pode criar conta, fazer login, gerenciar sua lista de compras e alterar configurações do app |

---

## 4. Telas do Aplicativo

### 🛒 Tela Principal (Lista)

Tela inicial do app onde o usuário visualiza todos os itens da lista. É possível adicionar novos itens pelo campo de texto, marcar itens como comprados clicando neles e remover itens pelo ícone de lixeira. Utiliza o componente FlatList para renderizar a lista.

**Navegação:** acessa as demais telas pela barra de abas na parte inferior.

---

### ➕ Tela de Adicionar Item

Permite ao usuário adicionar um item com informações detalhadas: nome do produto, quantidade, preço estimado e categoria. As categorias disponíveis são Alimentos, Bebidas, Limpeza, Higiene e Outros.

**Navegação:** acessada pela aba "Adicionar" na barra inferior.

---

### 🔍 Tela de Detalhes

Exibe as informações completas de um item. O usuário pode marcar o item como comprado ou pendente e editar todas as informações clicando no botão "Editar".

**Navegação:** acessada pela aba "Detalhes" na barra inferior.

---

### 👤 Tela de Perfil (Login)

Permite ao usuário fazer login com email e senha ou criar uma nova conta. O app valida os campos e exibe mensagens de erro ou sucesso conforme a ação.

**Navegação:** acessada pela aba "Perfil" na barra inferior.

---

### ⚙️ Tela de Configurações

Permite ao usuário personalizar o app com opções como ativar notificações, modo escuro e ordenação de itens comprados. Também exibe informações sobre o app como versão e desenvolvedor.

**Navegação:** acessada pela aba "Config" na barra inferior.

---

## 5. Fluxo de Utilização

---

## 6. Planejamento de Expansão

### 🔔 Notificações Push

Enviar lembretes para o usuário quando tiver itens pendentes na lista, integrando com o sistema de notificações do celular.

### ☁️ Sincronização na Nuvem

Integrar com Firebase para salvar a lista na nuvem, permitindo acesso de qualquer dispositivo e compartilhamento entre usuários.

### 👥 Lista Compartilhada

Permitir que múltiplos usuários colaborem na mesma lista em tempo real, útil para famílias ou grupos.

### 📊 Histórico de Compras

Registrar as compras realizadas ao longo do tempo, mostrando gastos por categoria e período.

### 🏷️ Leitor de Código de Barras

Usar a câmera do celular para escanear produtos e adicioná-los automaticamente à lista com nome e informações.

---

## 7. Banco de Dados e Backend

### Tabelas

**usuarios**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT (PK) | Identificador único |
| nome | VARCHAR | Nome do usuário |
| email | VARCHAR | Email do usuário |
| senha | VARCHAR | Senha criptografada |
| criado_em | DATETIME | Data de criação |

**itens**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT (PK) | Identificador único |
| usuario_id | INT (FK) | Referência ao usuário |
| nome | VARCHAR | Nome do produto |
| quantidade | INT | Quantidade do item |
| preco | DECIMAL | Preço estimado |
| categoria | VARCHAR | Categoria do item |
| comprado | BOOLEAN | Se foi comprado ou não |
| criado_em | DATETIME | Data de criação |

### Relacionamentos

- Um **usuário** pode ter muitos **itens** (1 para N)

### Rotas de API

| Método | Rota           | Descrição             |
| ------ | -------------- | --------------------- |
| POST   | /auth/registro | Criar nova conta      |
| POST   | /auth/login    | Fazer login           |
| GET    | /itens         | Listar todos os itens |
| POST   | /itens         | Adicionar novo item   |
| PUT    | /itens/:id     | Editar um item        |
| DELETE | /itens/:id     | Remover um item       |
