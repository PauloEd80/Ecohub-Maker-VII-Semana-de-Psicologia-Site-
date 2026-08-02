# Guia de Imagens — `assets/img/`

Todas as imagens do projeto vivem **nesta única pasta**. Para trocar
qualquer uma delas, basta **substituir o arquivo mantendo exatamente o
mesmo nome** — o HTML e o CSS já apontam para esses nomes, então nenhuma
linha de código precisa ser tocada.

| Arquivo | Onde é usado | Dimensões recomendadas | Formato |
|---|---|---|---|
| `hero-background.jpg` | Fundo da seção Hero — `assets/css/style.css`, regra `.hero::before` | 1920×1080px (paisagem, 16:9) | JPG |
| `about-event.jpg` | Imagem da seção "Sobre o evento" — `index.html`, dentro de `.about__media` | 1000×1250px (retrato, 4:5) | JPG |
| `logo-universidade.png` | Logo do cabeçalho **e** ícone da aba do navegador (favicon) — `index.html`, classe `.logo__image` e `<link rel="icon">` | 256×256px, fundo transparente | PNG |

## Como trocar uma imagem

1. Prepare a nova imagem, de preferência já nas dimensões recomendadas
   acima — evita distorção e mantém o carregamento rápido.
2. Salve-a com **o mesmo nome e a mesma extensão** do arquivo que está
   sendo substituído (ex.: `hero-background.jpg`, não `hero-background.png`
   nem `Hero-Background.jpg`).
3. Substitua o arquivo antigo por ele, direto nesta pasta.
4. Pronto — nenhuma edição em `index.html`, `style.css` ou `main.js` é
   necessária.

Se a imagem nova tiver proporção um pouco diferente da recomendada, não
tem problema: `hero-background.jpg` usa `background-size: cover` e
`about-event.jpg` usa `object-fit: cover`, então o navegador recorta
automaticamente para preencher o espaço. Ainda assim, tente manter a
orientação (paisagem para o Hero, retrato para o "Sobre") para o
enquadramento não cortar partes importantes da foto.

Ao trocar `about-event.jpg`, vale também atualizar o atributo `alt` da
tag `<img>` correspondente em `index.html`, para continuar descrevendo
o conteúdo real da nova imagem (acessibilidade).

## Sobre os ícones da interface

Os ícones pequenos (calendário, localização, estrela de favoritos,
microfone, lápis, balão de conversa, medalha) **não estão nesta pasta**
— eles são código SVG embutido direto no `index.html`. Isso é
proposital, por dois motivos:

- Evita cerca de 7 requisições extras ao servidor para elementos
  puramente decorativos.
- Permite que o ícone de estrela dos favoritos mude de contorno para
  preenchido usando só CSS, sem JavaScript adicional
  (`assets/css/style.css`, regra
  `.btn-favorite[aria-pressed="true"] .icon-star`).

Se preferirem gerenciar os ícones do mesmo jeito que as fotos — arquivo
único, substituível por nome, nesta mesma pasta — é possível extraí-los
para `.svg` separados; é só pedir. A única ressalva é o ícone de
favoritos, que precisaria de um tratamento à parte (continuar embutido,
ou usar uma técnica de *sprite* SVG) para manter essa troca visual
automática.

---

*Observação: `hero-background.jpg`, `about-event.jpg` e
`logo-universidade.png` são, no momento, placeholders (composições
abstratas/genéricas geradas para o projeto não nascer com imagem
quebrada). Substituam pelos arquivos reais assim que possível —
especialmente `logo-universidade.png`, que deve ser o arquivo oficial
fornecido pela assessoria de comunicação da instituição.*
