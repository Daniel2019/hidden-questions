# Plano de Melhorias — Interface hidden-questions

## Situação Atual

- Visual depende 100% do Bootstrap dark mode padrão
- Nenhum CSS customizado
- Sem identidade visual própria
- Layout funcional, mas genérico

**Decisão:** Remover Bootstrap e adotar uma biblioteca de design moderna para Angular.

---

## Escolha da Biblioteca UI

### Opção 1 — Angular Material
- **Mantida por:** Google (time oficial do Angular)
- **Design:** Material Design 3 (Material You)
- **Tema escuro:** Sim, com sistema de temas customizável via CSS tokens
- **Prós:** Integração perfeita com Angular, CDK poderoso (drag & drop, overlay, etc), documentação excelente, muito estável
- **Contras:** Visual "Google" — precisa customizar para não parecer genérico
- **Ideal para:** Projetos que querem estabilidade e suporte de longo prazo

### Opção 2 — PrimeNG
- **Mantida por:** PrimeTek
- **Design:** Design system próprio com 30+ temas prontos
- **Tema escuro:** Sim, vários temas escuros prontos (Lara Dark, Aura Dark, Nora)
- **Prós:** +90 componentes, temas bonitos prontos para uso, visual mais rico que Material
- **Contras:** Bundle maior, curva de aprendizado nos temas customizados
- **Ideal para:** Projetos que querem visual bonito rápido com muitos componentes

### Opção 3 — Spartan UI (shadcn/ui para Angular)
- **Mantida por:** Comunidade (inspirado no shadcn/ui do React)
- **Design:** Minimalista e moderno, baseado em Tailwind CSS
- **Tema escuro:** Sim, via variáveis CSS
- **Prós:** Visual moderno e clean, componentes copiados para o projeto (sem dependência), muito customizável
- **Contras:** Mais novo, menos componentes que PrimeNG, precisa do Tailwind
- **Ideal para:** Projetos que querem visual moderno tipo SaaS/startup

### Opção 4 — NG-ZORRO (Ant Design para Angular)
- **Mantida por:** Alibaba
- **Design:** Ant Design (muito usado em dashboards e sistemas admin)
- **Tema escuro:** Sim, tema escuro completo
- **Prós:** +70 componentes, excelente para admin panels, muito maduro
- **Contras:** Visual mais "enterprise", documentação parcialmente em chinês
- **Ideal para:** Dashboards e painéis administrativos

### Opção 5 — Taiga UI
- **Mantida por:** Tinkoff (banco russo)
- **Design:** Clean e moderno
- **Tema escuro:** Sim
- **Prós:** Componentes bem projetados, boa DX, design limpo
- **Contras:** Comunidade menor, menos material de aprendizado
- **Ideal para:** Projetos que querem design limpo sem muito overhead

---

## Recomendação

| Critério               | Material | PrimeNG | Spartan | NG-ZORRO | Taiga |
|------------------------|----------|---------|---------|----------|-------|
| Visual moderno         | ⭐⭐⭐    | ⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐⭐ |
| Facilidade de uso      | ⭐⭐⭐⭐  | ⭐⭐⭐⭐  | ⭐⭐⭐    | ⭐⭐⭐⭐   | ⭐⭐⭐  |
| Qtd de componentes     | ⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ | ⭐⭐⭐    | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐ |
| Temas prontos          | ⭐⭐⭐    | ⭐⭐⭐⭐⭐ | ⭐⭐⭐    | ⭐⭐⭐     | ⭐⭐⭐  |
| Suporte longo prazo    | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐  | ⭐⭐      | ⭐⭐⭐⭐   | ⭐⭐⭐  |
| Comunidade             | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐  | ⭐⭐      | ⭐⭐⭐     | ⭐⭐   |

**Para o hidden-questions, as melhores opções são:**

1. **PrimeNG** — se quer resultado visual bonito rápido, com temas escuros prontos e muitos componentes
2. **Spartan UI** — se quer visual moderno estilo SaaS, minimalista e clean (mais trabalho manual)
3. **Angular Material** — se quer máxima estabilidade e integração oficial com Angular

---

## Decisão: PrimeNG

**Biblioteca escolhida: PrimeNG**

## Próximos Passos

1. **Remover Bootstrap** (CSS, JS, imports, tipagens, `typings.d.ts`)
2. **Instalar PrimeNG** e configurar tema escuro (Aura Dark ou Lara Dark)
3. **Instalar PrimeIcons** para ícones
4. **Refatorar tela por tela** seguindo a ordem:

| Etapa | Tela                     | Prioridade |
|-------|--------------------------|------------|
| 1     | Setup (tema, cores, fonte) | Alta     |
| 2     | Navbar                   | Alta       |
| 3     | Dashboard                | Alta       |
| 4     | Login                    | Média      |
| 5     | Detalhes do Tema         | Média      |
| 6     | Página Pública           | Média      |
| 7     | Configurações            | Baixa      |
| 8     | Micro-interações         | Baixa      |
