# VII Semana de Psicologia — Universidade Positivo (Campus Londrina-PR)

Landing page do evento **"Psicologia e seu projeto ético-político: história
e enfrentamentos contemporâneos"**, promovido pela Universidade Positivo —
Campus Londrina-PR.

Site estático (HTML + CSS + JS puro): sem build step, sem framework, sem
dependências externas. Todo o front-end carrega localmente a partir de
`assets/`.

## Estrutura do projeto

```
.
├── index.html            Estrutura e conteúdo da página
├── netlify.toml          Deploy, headers de segurança e cache (ver ressalva no arquivo)
├── README.md              Este arquivo
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css      Design tokens + todos os componentes visuais
    ├── js/
    │   └── main.js        Contador regressivo, favoritos, menu mobile, header on-scroll
    └── img/
        ├── hero-background.jpg
        ├── about-event.jpg
        ├── logo-universidade.png
        └── README.md      Guia de nomes/dimensões para trocar imagens
```

## Rodando localmente

Não há processo de build. Duas opções:

1. **Abrir direto no navegador** — dê duplo clique em `index.html`.
2. **Servidor local** (recomendado — evita restrições de CORS/`file://`
   que alguns navegadores aplicam):

   ```bash
   npx serve .
   # ou
   python3 -m http.server 8000
   ```

## Deploy (Netlify)

1. Conecte este repositório a um novo site no Netlify.
2. Build command: deixar em branco (não há build).
3. Publish directory: `.` (raiz do projeto).
4. O `netlify.toml` já define headers de segurança e cache de `/assets/*`
   — **antes do primeiro deploy, leia a nota no topo desse arquivo**: ele
   foi reconstruído a partir de uma descrição, não é uma cópia do arquivo
   que já existia no projeto, então vale conferir/mesclar com o original.

## Editando conteúdo

| O que mudar | Onde |
|---|---|
| Textos, programação, links | `index.html` |
| Cores, tipografia, espaçamentos | Design Tokens no topo de `assets/css/style.css` (bloco `:root`) — altere o token, não o valor espalhado pelo arquivo |
| Comportamento (contador, favoritos, menu) | `assets/js/main.js` |
| Imagens | `assets/img/README.md` |

## Pendências antes de publicar

- [ ] Substituir `hero-background.jpg`, `about-event.jpg` e
      `logo-universidade.png` (placeholders) pelos arquivos reais —
      especialmente o logo, que deve ser o arquivo oficial da instituição.
- [ ] Confirmar e preencher a seção "Programação" com a grade real do evento.
- [ ] Preencher o e-mail de contato no rodapé (`index.html`), hoje marcado
      como `[e-mail de contato]`.
- [ ] Apontar o botão final de inscrição (`#inscricao`) para o
      formulário/plataforma oficial.
- [ ] Conferir o `netlify.toml` com o arquivo já existente no projeto
      (ver nota no topo do arquivo).
