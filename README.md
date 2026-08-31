# Site — Dr. Gabriel Belnuovo | Transplante Capilar

Site estático em HTML + CSS + JS, sem dependências e sem etapa de build.
O repositório hospeda **quatro versões** da mesma página, cada uma em uma
subpasta, para comparação lado a lado antes de escolher a definitiva.

> Documentação completa do projeto (paleta, imagens, checklist de publicação):
> [LEIA-ME.md](LEIA-ME.md).

---

## Como acessar as páginas

### 1. Online (GitHub Pages)

A raiz é o **hub**: uma página que lista as quatro versões com um botão para
abrir cada uma.

| Página | Endereço |
|---|---|
| Hub de versões | https://diegomanaglia.github.io/site-drgabriel/ |
| Versão 1 — noite e autoridade | https://diegomanaglia.github.io/site-drgabriel/v1/ |
| Versão 2 — papel e discrição | https://diegomanaglia.github.io/site-drgabriel/v2/ |
| Versão 3 — dossiê e precisão | https://diegomanaglia.github.io/site-drgabriel/v3/ |
| Versão 4 — a v1 aprofundada | https://diegomanaglia.github.io/site-drgabriel/v4/ |

A barra da porta final é obrigatória (`/v1/`, não `/v1`).

### 2. Localmente, com servidor

Recomendado: reproduz o comportamento do GitHub Pages, inclusive os caminhos
relativos e o `robots.txt`.

```bash
python -m http.server 8765
```

Depois abra `http://localhost:8765/` (hub) ou vá direto para
`http://localhost:8765/v1/`, `/v2/`, `/v3/`, `/v4/`.

Alternativa sem Python, se você tiver Node instalado:

```bash
npx serve .
```

### 3. Localmente, abrindo o arquivo direto

Funciona porque não há build nem chamadas de rede entre arquivos: basta abrir
`index.html` (hub) ou `v1/index.html` no navegador. Use quando quiser só olhar
o layout — as fontes do Google continuam carregando, mas o `robots.txt` e
URLs absolutas não são exercitados.

---

## Estrutura

```
index.html      hub de versões (noindex) — o que abre em "/"
robots.txt      libera /v1/, bloqueia a raiz exata, /v2/, /v3/ e /v4/
cores.txt       paleta de referência
LEIA-ME.md      documentação completa do projeto

v1/  v2/  v3/  v4/
  index.html    página da versão
  css/style.css design system e layout responsivo
  js/main.js    header, menu mobile, reveal, FAQ, navegação ativa
  assets/       placeholders SVG (substituir por fotos reais)
```

Cada versão tem cópia própria de `css`, `js` e `assets`, e todos os caminhos no
HTML são relativos à própria pasta `vN/`. Alterar uma versão não afeta as
outras, e qualquer pasta funciona em qualquer subdiretório sem edição.

---

## As quatro versões

| # | Endereço | Situação | Direção |
|---|---|---|---|
| 1 | `/v1/` | oficial, indexável | noite e autoridade — base espresso, argumento técnico |
| 2 | `/v2/` | rascunho, `noindex` | papel e discrição — base clara, medo social |
| 3 | `/v3/` | rascunho, `noindex` | dossiê e precisão — base quase preta, dados |
| 4 | `/v4/` | rascunho, `noindex` | a v1 aprofundada — mesma estrutura, tom mais sereno |

Só a versão 1 é indexada pelo Google. As demais levam `noindex` para não
competir com ela na busca, e exibem uma barra de identificação no topo com o
link **Comparar versões**, que volta para o hub.

---

## Trabalhando no projeto

**Criar uma versão nova:**

```bash
cp -r v4 v5
```

Depois ajuste o texto da barra em `v5/index.html` e acrescente o cartão
correspondente em `index.html`, na raiz.

**Promover uma versão a oficial:** troque a pasta liberada no `robots.txt`
(`Allow: /vN/`), remova o bloco `.version-bar` da versão promovida (marcado por
comentário no `<head>` e no `<body>`), tire a meta `robots` de `noindex` e o
prefixo `[vN]` do `<title>`. A antiga oficial recebe de volta a barra e o
`noindex`. Atualize também o cartão dela no hub.

O passo a passo de substituição de imagens, ativação dos vídeos e o checklist
de publicação estão em [LEIA-ME.md](LEIA-ME.md).
