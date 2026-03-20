# Plano de Desenvolvimento — hidden-questions

## Etapa 1 — Configuração do Projeto

- [x] Criar projeto Angular (`ng new hidden-questions`)
- [x] Instalar Bootstrap (`npm install bootstrap`)
- [x] Importar Bootstrap no `angular.json` (styles e scripts)
- [x] Configurar tema escuro global (`data-bs-theme="dark"` no `<html>`)
- [x] Definir estrutura de pastas do projeto:
  ```
  hidden-questions/
  ├── db.json                        # Base de dados do JSON Server
  └── src/
      └── app/
          ├── core/
          │   ├── guards/            # Guard de autenticação do admin
          │   └── services/          # Serviços HTTP (admins, temas, perguntas)
          ├── pages/
          │   ├── login/             # Página /login
          │   ├── admin/             # Página /admin (painel)
          │   └── tema-publico/      # Página /t/:slug (pública)
          └── shared/
              └── components/        # Componentes reutilizáveis
  ```
- [x] Configurar roteamento inicial:
  ```ts
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 't/:slug', component: TemaPublicoComponent },
  { path: '**', redirectTo: 'login' }
  ```

---

## Etapa 2 — Backend Simples (JSON Server)

- [x] Instalar JSON Server (`npm install json-server --save-dev`)
- [x] Criar arquivo `db.json` com a estrutura inicial (admins, temas, perguntas) e admin padrão (`admin` / `admin123`)
- [x] Configurar e rodar o JSON Server (script `npm run api` na porta 3000)
- [ ] Endpoints disponíveis automaticamente:
  - `GET /admins` — listar admins
  - `POST /admins` — cadastrar admin
  - `GET /temas` — listar temas
  - `POST /temas` — criar tema
  - `PATCH /temas/:id` — ativar/desativar tema
  - `GET /perguntas?temaId=:id` — listar perguntas do tema
  - `POST /perguntas` — enviar pergunta anônima

---

## Etapa 3 — Autenticação do Admin

- [x] Criar página de login (`/login`):
  ```
  ┌─────────────────────────┐
  │       hidden-questions  │
  │                         │
  │  Nome                   │
  │  [____________________] │
  │                         │
  │  Senha                  │
  │  [____________________] │
  │                         │
  │      [ Entrar ]         │
  └─────────────────────────┘
  ```
  - Card centralizado na tela (horizontal e vertical)
  - Componentes Bootstrap: `card`, `form-control`, `btn`
- [x] Criar serviço de autenticação no Angular
- [x] Implementar guard para proteger rotas do admin

---

## Etapa 4 — Painel do Admin

**Tela 1 — Dashboard (`/admin`)** ✅
  ```
  ┌──────────────────────────────────────────────┐
  │  hidden-questions         Olá, [nome] ⚙ Sair │
  ├──────────────────────────────────────────────┤
  │                                              │
  │  Meus Temas              [ + Novo Tema ]     │
  │                                              │
  │  ┌──────────────────────────────────────┐   │
  │  │ 📌 Nome do Tema                  →   │   │
  │  │ 10 perguntas · ativo                 │   │
  │  └──────────────────────────────────────┘   │
  │  ┌──────────────────────────────────────┐   │
  │  │ 📌 Outro Tema                    →   │   │
  │  │ 3 perguntas · desativado             │   │
  │  └──────────────────────────────────────┘   │
  │                                              │
  └──────────────────────────────────────────────┘
  ```
  - Navbar com nome do admin, ícone de configurações e botão sair
  - Cards Bootstrap para cada tema com contador de perguntas e status
  - Botão `+ Novo Tema` abre um modal com formulário (título e descrição)

**Tela 2 — Configurações do Admin (`/admin/configuracoes`)** ✅
  ```
  ┌──────────────────────────────────────────────┐
  │  hidden-questions         Olá, [nome] ⚙ Sair │
  ├──────────────────────────────────────────────┤
  │                                              │
  │  ← Voltar                                    │
  │                                              │
  │  ┌──────────────────────────────────────┐   │
  │  │ Alterar Nome                         │   │
  │  │ Nome                                 │   │
  │  │ [________________________________]   │   │
  │  │                     [ Salvar ]       │   │
  │  └──────────────────────────────────────┘   │
  │                                              │
  │  ┌──────────────────────────────────────┐   │
  │  │ Alterar Senha                        │   │
  │  │ Nova Senha                           │   │
  │  │ [________________________________]   │   │
  │  │ Confirmar Senha                      │   │
  │  │ [________________________________]   │   │
  │  │                     [ Salvar ]       │   │
  │  └──────────────────────────────────────┘   │
  │                                              │
  └──────────────────────────────────────────────┘
  ```
  - Dois cards Bootstrap separados: um para nome, outro para senha
  - Botão voltar para o dashboard

**Tela 3 — Detalhes do Tema (`/admin/tema/:id`)** ✅
  ```
  ┌──────────────────────────────────────────────┐
  │  hidden-questions         Olá, [nome] ⚙ Sair │
  ├──────────────────────────────────────────────┤
  │                                              │
  │  ← Voltar                                    │
  │                                              │
  │  Nome do Tema                  [ Desativar ] │
  │  Descrição do tema aqui                      │
  │                                              │
  │  Link público:                               │
  │  [https://site/t/slug______] [ Copiar ]      │
  │                                              │
  │  Perguntas recebidas (10)                    │
  │  ┌──────────────────────────────────────┐   │
  │  │ Qual é a sua opinião sobre...?       │   │
  │  │ há 2 horas                           │   │
  │  └──────────────────────────────────────┘   │
  │  ┌──────────────────────────────────────┐   │
  │  │ Você já pensou em...?               │   │
  │  │ há 5 horas                           │   │
  │  └──────────────────────────────────────┘   │
  │                                              │
  └──────────────────────────────────────────────┘
  ```
  - Status do tema exibido com badge Bootstrap (ativo/desativado)
  - Campo de link com botão copiar ao lado
  - Lista de perguntas em cards com horário relativo

---

## Etapa 5 — Página Pública do Tema

- [x] Criar página pública (`/t/:slug`)
- [x] Exibir título e descrição do tema
- [x] Criar formulário para envio de pergunta anônima
- [x] Exibir mensagem de confirmação após envio

---

## Etapa 6 — Ajustes Finais

- [ ] Validações de formulários
- [ ] Tratamento de erros (tema não encontrado, tema desativado, etc.)
- [ ] Melhorias de UX/UI

---

## Etapa 7 — Preparação para Hospedagem

- [ ] Revisar configurações de ambiente
- [ ] Build de produção Angular
- [ ] Configurar servidor para produção
- [ ] Deploy
