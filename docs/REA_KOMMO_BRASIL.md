# Engenharia Reversa (REA) — Kommo Brasil (CRM Conversacional & IA)

**Alvo:** `https://www.kommo.com/br/` (`kommo.com.br`)  
**Categoria:** SaaS CRM Conversacional / Multi-canal (WhatsApp, Instagram, Telegram, TikTok)  
**Objetivo do Lucas:** Ter a arquitetura, copy, design system e stack dissecados para servir de base no **GitHub** (`jarvis-os` ou projeto SaaS dedicado).

---

## 1. Visão Geral do Produto & Posicionamento

* **Headline Principal (Hero H1):** *"Escale conversas, evite o caos."*
* **Sub-headline:** *"CRM com IA desenvolvido para vendas via aplicativos de mensagens. Usado por milhares de pessoas para automações no WhatsApp, Instagram, TikTok e mais."*
* **Proposta Única de Valor (UVP):** Centralização de todos os canais de mensagens em um único funil Kanban visual com agentes de IA e automação sem código (Salesbot).
* **Prova Social:** *"Confiados por mais de 100.000 clientes"* + Carrossel de canais oficiais homologados (Meta WhatsApp Business API, Instagram Direct, Facebook Messenger, Telegram, TikTok).

---

## 2. Anatomia das Seções & Arquitetura da Página (CRO)

A landing page foi construída seguindo uma estrutura de conversão de altíssimo impacto:

```
┌────────────────────────────────────────────────────────┐
│ 1. HERO SECTION                                        │
│    Headline: "Escale conversas, evite o caos"          │
│    CTA Primário: [ Iniciar teste de 14 dias ]          │
│    Carrossel de Canais: WhatsApp, Insta, Telegram, etc │
├────────────────────────────────────────────────────────┤
│ 2. VALUE PROPOSITION: OPERE EM UM ÚNICO LUGAR          │
│    Demonstração da Caixa de Entrada Unificada (Inbox)  │
│    Pipeline Kanban de Negócios com Drag & Drop         │
├────────────────────────────────────────────────────────┤
│ 3. MATRIZ DE IA NÍVEL PRO (AI Agents / Salesbot)       │
│    Qualificação automática de leads                    │
│    Respostas imediatas 24/7 com tom humano             │
├────────────────────────────────────────────────────────┤
│ 4. TABELA DE PLANOS & PRICING (4 Camadas)              │
│    - Básico                                            │
│    - Avançado                                          │
│    - Pro (Destaque / Recomendado)                      │
│    - Empresarial                                       │
├────────────────────────────────────────────────────────┤
│ 5. GATILHOS DE FECHAMENTO & FAQ                        │
│    CTA Final: "Comece a fechar mais vendas com IA"     │
│    Link direto para falar com especialistas humanos    │
└────────────────────────────────────────────────────────┘
```

---

## 3. Design System & Tokens Visuais (Base para o seu CSS/Tailwind)

A Kommo utiliza uma estética limpa, com muito respiro, cantos arredondados generosos e cores de alta tecnologia com acentos vibrantes:

### Paleta de Cores Primárias:
* **Background Primário:** `#FFFFFF` (Limpo, editorial)
* **Background Secundário / Cards:** `#F8FAFC` ou tons suaves de cinza azulado
* **Texto Principal:** `#0E0142` (Azul escuro profundo / quase preto, muito mais elegante que preto puro `#000000`)
* **Cor de Ação / Destaque Primário (Kommo Blue):** `#00A0FF` a `#00D2FF`
* **Cor de Sucesso / Conversão (WhatsApp Green):** `#15CF74` / `#2DA771`

### Tipografia:
* **Fonte Principal de Sistema:** `Euclid Circular A` (com fallback para `Roboto` e `sans-serif`).
* **Hierarquia:** Títulos em peso Bold (700) com tracking levemente negativo (`-0.02em`) e leading confortável.

### Classes Utilitárias Chave Encontradas:
* Espaçamentos amplos no layout: `-space-y-16`, `basis-0`, `-left-24`.
* Micro-interações: `animate-spin`, transições com `translate-x`, bordas arredondadas orgânicas.

---

## 4. Stack de Engenharia Reversa (Frontend & Infra)

* **Engine:** Webpack Modular Bundling distribuído via CDN própria (`//pcfcdn.kommo.com/frontend/dist/`).
* **CSS Framework:** Utilitários customizados inspirados na arquitetura do Tailwind CSS.
* **Componentes Dinâmicos:**
  * Modais assíncronos de Login / Cadastro em 2 etapas (`Verificação em duas etapas`).
  * Formulário de trial de 14 dias sem necessidade de cartão de crédito imediato.
  * Carrossel infinito em CSS/JS com os ícones de redes sociais.

---

## 5. Como Estruturar a sua Base no GitHub (`jarvis-os` / SaaS CRM)

Para você clonar e ter essa mesma base profissional dentro do seu repositório GitHub com padrão moderno (Next.js 15 + Tailwind CSS v4):

```
meu-crm-base/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Landing page completa inspirada na Kommo
│   │   ├── layout.tsx             # Fontes e metadata SEO ricos
│   │   ├── api/
│   │   │   ├── webhook-whatsapp/  # Recebimento de mensagens da Meta API
│   │   │   └── leads/             # Pipeline Kanban
│   ├── components/
│   │   ├── hero/                  # Headline + Carrossel de Apps
│   │   ├── kanban/                # Quadro de funil de vendas estilo Kommo
│   │   ├── pricing/               # 4 Tiers com switch mensal/anual
│   │   └── shared/                # Botões táteis com física Apple
│   └── lib/
│       └── design-tokens.ts       # Cores e tipografia extraídas
├── public/
│   └── icons/                     # Ícones limpos de WhatsApp, Instagram, etc.
└── README.md
```
