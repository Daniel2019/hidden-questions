# hidden-questions

## Objetivo do Projeto

Disponibilizar um site onde usuários possam fazer perguntas anônimas.
O administrador cria temas, e qualquer pessoa pode enviar perguntas anônimas sobre esses temas.

## Tecnologias

- **Framework:** Angular
- **UI:** Bootstrap (componentes e estilos)
- **Tema:** Light mode (tema claro em todas as telas)
- **Armazenamento:** JSON Server (arquivo `db.json` local, sem banco de dados por enquanto)
- **Hospedagem:** Prevista para o futuro

## Funcionalidades

1. **Cadastro de Admin** — nome e senha
2. **Cadastro de Tema** — o admin cria temas para receber perguntas
3. **Link do Tema** — o admin compartilha o link do tema com as pessoas
4. **Visualizar Perguntas** — o admin visualiza todas as perguntas recebidas por tema

## Estrutura de Dados

- **Admin:** `id`, `nome`, `senha`
- **Tema:** `id`, `título`, `descrição`, `adminId`, `slug`
- **Pergunta:** `id`, `temaId`, `conteúdo`, `criadoEm`

## Estrutura de Pastas

```
hidden-questions/
├── db.json                                  # Base de dados do JSON Server
├── src/
│   └── app/
│       ├── core/
│       │   ├── guards/
│       │   │   └── auth.guard.ts            # Guard de autenticação
│       │   └── services/
│       │       ├── auth.service.ts          # Login, logout, localStorage
│       │       ├── admin.service.ts         # Atualização de dados do admin
│       │       ├── tema.service.ts          # CRUD de temas + generateSlug()
│       │       └── pergunta.service.ts      # CRUD de perguntas
│       ├── pages/
│       │   ├── login/                       # Página /login
│       │   ├── admin/                       # Página /admin (dashboard)
│       │   │   ├── configuracoes/           # Página /admin/configuracoes
│       │   │   └── tema-detalhe/            # Página /admin/tema/:id
│       │   └── tema-publico/                # Página /t/:slug (pública)
│       ├── shared/
│       │   ├── components/
│       │   │   └── navbar/                  # Navbar compartilhada (admin)
│       │   └── pipes/
│       │       └── relative-time.pipe.ts    # Pipe "há X horas/dias"
│       └── typings.d.ts                     # Declaração de tipos do Bootstrap
```

## Endpoints da API (JSON Server)

- `GET /admins` — listar admins
- `POST /admins` — cadastrar admin
- `GET /temas` — listar todos os temas
- `POST /temas` — criar tema
- `PATCH /temas/:id` — ativar/desativar tema
- `GET /perguntas?temaId=:id` — listar perguntas do tema
- `POST /perguntas` — enviar pergunta anônima

## Rotas da Aplicação

- `/login` — login do admin
- `/admin` — dashboard (info do admin + lista de temas), protegida por AuthGuard
- `/admin/configuracoes` — configurações do admin (alterar nome e senha)
- `/admin/tema/:id` — detalhes do tema (perguntas, link, ativar/desativar)
- `/t/:slug` — página pública para envio de perguntas
- `**` — redireciona para `/login`

```ts
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
{ path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.AdminComponent), canActivate: [authGuard] },
{ path: 'admin/configuracoes', loadComponent: () => import('./pages/admin/configuracoes/configuracoes').then(m => m.ConfiguracoesComponent), canActivate: [authGuard] },
{ path: 'admin/tema/:id', loadComponent: () => import('./pages/admin/tema-detalhe/tema-detalhe').then(m => m.TemaDetalheComponent), canActivate: [authGuard] },
{ path: 't/:slug', loadComponent: () => import('./pages/tema-publico/tema-publico').then(m => m.TemaPublicoComponent) },
{ path: '**', redirectTo: 'login' }
```

## Layout das Telas

**Login (`/login`)**
- Card centralizado na tela (horizontal e vertical)
- Campos: Nome e Senha + botão Entrar
- Componentes Bootstrap: `card`, `form-control`, `btn`

**Dashboard (`/admin`)**
- Navbar com nome do admin, ícone de configurações (⚙) e botão Sair
- Lista de temas em cards com contador de perguntas e badge de status
- Botão `+ Novo Tema` abre modal com formulário (título e descrição)

**Configurações (`/admin/configuracoes`)**
- Dois cards separados: um para alterar nome, outro para alterar senha
- Botão voltar para o dashboard

**Detalhes do Tema (`/admin/tema/:id`)**
- Badge de status (ativo/desativado) com botão para alternar
- Campo de link público com botão Copiar ao lado
- Lista de perguntas em cards com horário relativo
- Botão voltar para o dashboard

## Fluxo do Usuário

**Admin:**
1. Faz login com nome e senha
2. Cria um tema
3. Copia o link do tema e compartilha
4. Visualiza as perguntas recebidas por tema

**Visitante anônimo:**
1. Acessa o link do tema
2. Envia uma pergunta anonimamente

## Primeiro Acesso

O `db.json` já vem com um admin padrão pré-cadastrado:
- **Nome:** `admin`
- **Senha:** `admin123`

O admin deve alterar as credenciais após o primeiro login via tela de configurações.

## Decisões Técnicas

- **Injeção de dependências:** usar `inject()` em vez de construtor para evitar erro de inicialização antes do construtor
- **Autenticação:** admin autenticado é armazenado no `localStorage` com a chave `hq_admin`
- **Slug:** gerado automaticamente a partir do título do tema (sem acentos, letras minúsculas, espaços viram `-`)
- **Bootstrap Modal:** importado via `import { Modal } from 'bootstrap'` com types declarados em `typings.d.ts`
- **Tempo relativo:** `RelativeTimePipe` exibe "há X minutos/horas/dias" a partir de um ISO string
- **Componentes:** standalone por padrão (Angular 21), sem NgModules
- **Lazy loading:** todas as rotas usam `loadComponent` para carregamento sob demanda
- **Signals:** Angular 21 usa zoneless change detection (sem `zone.js`). Todo estado reativo nos componentes deve usar `signal()` para que a view atualize automaticamente. Propriedades simples não disparam re-renderização. No template, acessar signals como função: `carregando()`, `temas()`, etc.
- **CSS:** nunca usar estilos inline (`style="..."` ou `[style]="..."`). Sempre criar classes CSS no SCSS do componente. Inline só é permitido quando não for possível resolver via classe.

## Como Rodar

```bash
npm run api   # JSON Server na porta 3000
npm start     # Angular na porta 4200
```

## Regras de Negócio

- Perguntas não têm autoria (anônimas)
- O admin não responde perguntas (por enquanto)
- Tema pode ser ativado/desativado pelo admin
