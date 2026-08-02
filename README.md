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

   ```

## Deploy (Netlify)

1. Conecte este repositório a um novo site no Netlify.
2. Build command: deixar em branco (não há build).
3. Publish directory: `.` (raiz do projeto).
4. O `netlify.toml` já define headers de segurança e cache de `/assets/*`
   — **antes do primeiro deploy, leia a nota no topo desse arquivo**: ele
   foi reconstruído a partir de uma descrição, não é uma cópia do arquivo
   que já existia no projeto, então vale conferir/mesclar com o original.
