# NextCode — Site institucional

Landing page da agência digital **NextCode**, construída em React + Vite +
Tailwind CSS. Mobile-first, pensada para funcionar como o link da bio do
Instagram.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

O build final fica na pasta `dist/` — pode ser hospedado em Vercel,
Netlify, Cloudflare Pages ou qualquer serviço de arquivos estáticos.

## O que editar antes de publicar

Todos os dados que ainda não estão definidos ficam centralizados em
**`src/config/siteConfig.js`**. Edite esse arquivo (nenhum outro precisa
ser tocado) para preencher:

- `whatsapp.number` — número real, apenas dígitos com DDI + DDD
  (ex: `"5511999999999"`)
- `whatsapp.defaultMessage` — mensagem automática do WhatsApp
- `instagram.handle` / `instagram.url`
- `email`
- `projects` — troque os 3 projetos demonstrativos pelos reais
  (nome, categoria, descrição, imagem, link)

Assim que `whatsapp.number` for preenchido com um número real, **todos os
botões de CTA do site** (hero, CTA final, contato, rodapé e botão
flutuante) passam a abrir o WhatsApp corretamente — nenhum outro arquivo
precisa ser alterado, pois todos usam a função central
`getWhatsAppLink()` em `src/config/whatsapp.js`.

## Estrutura

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    WhyNextCode.jsx
    Process.jsx
    Portfolio.jsx
    CTA.jsx
    Contact.jsx
    Footer.jsx
    WhatsAppButton.jsx
  config/
    siteConfig.js     ← edite aqui
    whatsapp.js        ← função central de link do WhatsApp
  hooks/
    useReveal.js       ← animação sutil de entrada ao rolar a página
  App.jsx
  index.css
  main.jsx
```

## Imagens do portfólio

Os projetos demonstrativos usam placeholders com as iniciais do nome
(sem imagens reais, para não inventar nada). Para usar fotos reais,
coloque os arquivos em `public/projects/` e ajuste o campo `image` de
cada projeto em `siteConfig.js`; depois troque o placeholder por uma
tag `<img>` em `src/components/Portfolio.jsx`.

## Identidade visual

- Paleta: Obsidian `#0B0B0C`, Bone `#F2F0EB`, Graphite `#202022`,
  Steel `#858585`, Silver `#C7C7C7` — definidos em `tailwind.config.js`.
- Tipografia: Inter (títulos) + Manrope (textos), carregadas via
  Google Fonts em `index.html`.
- Todas as animações respeitam `prefers-reduced-motion`.
