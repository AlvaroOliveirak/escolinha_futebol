# ⚽ Escola de Futebol "Craques do Futuro"

Projeto de desenvolvimento do site institucional e Single Page Application (SPA) da **Escola de Futebol Craques do Futuro**. O objetivo da aplicação é apresentar a metodologia da escola, corpo docente, grade de horários, planos de matrícula e permitir o agendamento interativo de aulas experimentais gratuitas com encaminhamento direto para o WhatsApp oficial.

---

## 👥 Divisão de Responsabilidades da Equipe

O projeto foi dividido entre 3 integrantes com escopos bem definidos:

| Integrante | Responsabilidade | Status / Escopo |
| :--- | :--- | :--- |
| **Pessoa 1** | **Conteúdo** | Textos institucionais, centralização de dados oficiais (`schoolData.js`), depoimentos e FAQ. |
| **Pessoa 2** | **Estilo e UI** | Design responsivo, estilização com Tailwind CSS, componentes visuais (`Header`, `Home`, `Coaches`, etc.) e polimento estético. |
| **Álvaro Oliveira** *(Eu)* | **Lógica e Fluxo da Aplicação** | **Implementado e entregue nesta etapa** (filtros interativos, fluxo do modal de agendamento, validações e orquestração). |

---

## ⚙️ O que foi Implementado: Módulo de Lógica e Fluxo

Nesta etapa, toda a arquitetura de controle de fluxo e regras de negócio foi construída de forma desacoplada e robusta:

### 1. Hook de Filtragem de Horários (`escolinhafutebol/src/hooks/useScheduleFilter.js`)
* **Gerenciamento de Estado:** Controla a categoria de turma atualmente ativa (`all`, `sub7`, `sub11`, `sub15`, `sub17`).
* **Performance:** Utiliza `useMemo` para evitar re-computações da lista de horários.
* **Compatibilidade Flexível:** Suporta chaves tanto em português (`categoria`, `nome`, `dias`, `horario`) quanto em inglês (`category`, `ageGroup`, `days`, `time`), facilitando a fusão com o arquivo que o responsável de conteúdo criar.

### 2. Componente de Grade com Filtro (`escolinhafutebol/src/components/FilterTurmas.jsx`)
* Consome o hook `useScheduleFilter`.
* Renderiza os seletores de categoria interativos com alternância de classe/estado ativo.
* Exibe a listagem/tabela das turmas com horário, professor responsável e disponibilidade de vagas.
* Fornece o botão **Agendar**, que aciona a prop `onAgendar(turmaNome)` conectando a grade diretamente ao fluxo do modal.

### 3. Fluxo do Modal de Agendamento (`escolinhafutebol/src/components/ModalAgendamento.jsx`)
* **Entrada Contextual:** Recebe `initialPlan` (ou `planosMock`) e pré-seleciona dinamicamente a turma ou plano que o usuário clicou na interface.
* **Captura de Dados:** Gerencia os estados de Nome do Responsável, Nome do Aluno, Idade, WhatsApp com DDD, Turma e Plano de Interesse.
* **Validação de Regras de Negócio Puras:**
  * Campos obrigatórios devidamente preenchidos.
  * Idade validada para o público da escolinha (entre 4 e 18 anos).
  * WhatsApp validado com quantidade mínima de dígitos incluindo DDD.
* **Ciclo de Submissão:** Estado de carregamento simulado (`isSubmitting`) desabilitando cliques múltiplos.
* **Confirmação e Integração Externa:** Tela de sucesso com botão que gera a mensagem formatada e codificada para a API do WhatsApp (`https://wa.me/5511987654321?text=...`).
* **Reset Seguro:** Ao fechar o modal, os erros e estados de sucesso são limpos para permitir novas inscrições sem travamentos.

### 4. Orquestrador Central Modular (`escolinhafutebol/src/App.tsx`)
* Centraliza o estado global do modal (`modalState.isOpen`, `modalState.selectedPlan`).
* Expõe as funções `handleOpenModal(plano)` e `handleCloseModal()`.
* Atua exclusivamente como orquestrador de alto nível (~70 linhas), delegando a renderização visual para componentes dedicados e reutilizáveis em `src/components/`.

### 5. Arquitetura Modular de Componentes (`escolinhafutebol/src/components/`)
A interface está 100% modularizada para evitar conflitos no Git e permitir fácil manutenção:
* `Header.tsx`: Navbar responsiva com logo e menu mobile.
* `Hero.tsx`: Seção de destaque com chamada para ação (CTA) e estatísticas.
* `Notices.tsx`: Mural dinâmico de avisos da coordenação.
* `About.tsx`: Metodologia formativa dos 4 pilares com gráfico tático.
* `Coaches.tsx`: Apresentação do corpo docente com fotos e especialidades.
* `FilterTurmas.jsx`: Grade interativa de horários conectada ao hook `useScheduleFilter`.
* `Plans.tsx`: Cards de investimento, planos de matrícula e benefícios.
* `Testimonials.tsx`: Depoimentos de pais e atletas.
* `FAQ.tsx`: Acordeão interativo de dúvidas frequentes com estado local encapsulado.
* `ContactLocation.tsx`: Informações de contato direto, localização e botão WhatsApp.
* `Footer.tsx`: Rodapé institucional com links rápidos e créditos.
* `ModalAgendamento.jsx`: Modal interativo com validação e envio formatado.
* `SoccerIcons.jsx`: Ícones temáticos SVG em alta resolução (escudo, bola e campo tático).

### 6. Mock e Dados Oficiais (`escolinhafutebol/src/data/`)
* `schoolData.js`: Centralização de dados oficiais da escola (avisos, professores, horários, planos, FAQ, contatos).
* `mockData.js`: Dados simulados para testes isolados de filtros e fluxo.

---

## 🤝 Guia de Integração para os Colegas de Equipe

### Para o colega de Conteúdo:
* Crie o arquivo `src/data/schoolData.js` com as constantes oficiais da escola (`noticesData`, `coachesData`, `schedulesData`, `plansData`, `testimonialsData`, `faqData`).
* O hook `useScheduleFilter` e o componente `FilterTurmas` já estão preparados para receber a sua lista de horários diretamente via prop: `<FilterTurmas turmas={schedulesData} />`.

### Para o colega de Estilo e UI:
* Sinta-se à vontade para estilizar o JSX de `FilterTurmas.jsx` e `ModalAgendamento.jsx` com as classes utilitárias do Tailwind CSS.
* **Apenas preserve:**
  * No filtro: os eventos de clique que chamam `setSelectedCategory(cat.key)` e o botão com `onAgendar(turma.nome)`.
  * No modal: os `name` dos inputs e o disparador `onChange={handleChange}` e `onSubmit={handleSubmit}`.
* No `App.tsx`, você pode encaixar os seus componentes visuais (`<Header />`, `<Home />`, `<Coaches />`, `<Testimonials />`, `<FAQ />`, `<Footer />`). Para qualquer botão que precise abrir o modal, basta passar a função `onOpenTrialModal={handleOpenModal}`.

---

## 🛠️ Como Executar Localmente

1. **Acesse a pasta do projeto:**
   ```bash
   cd escolinhafutebol
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL indicada no terminal (geralmente `http://localhost:5173`).

4. **Para validar a compilação de produção:**
   ```bash
   npm run build
   ```
