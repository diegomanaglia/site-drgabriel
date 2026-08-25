# Site — Dr. Gabriel Belnuovo | Transplante Capilar

Site estático em HTML + CSS + JS, sem dependências de build.

## Estrutura

```
index.html          versao 1 (oficial, indexavel)
css/style.css       design system + layout responsivo
js/main.js          header, menu mobile, reveal, FAQ, nav ativa
assets/             placeholders SVG (substituir por fotos reais)

versoes.html        indice interno para comparar as versoes
robots.txt          libera a raiz, bloqueia /v2/, /v3/ e versoes.html

v2/                 versao 2 (rascunho, noindex) — editorial, base clara
  index.html        + barra de identificacao no topo
  css/ js/ assets/  copias independentes

v3/                 versao 3 (rascunho, noindex) — minimalista, base bem escura
  index.html        + barra de identificacao no topo
  css/ js/ assets/  copias independentes

v4/                 versao 4 (rascunho, noindex) — a v1 com a paleta descida
  index.html        + barra de identificacao no topo
  css/ js/ assets/  copias independentes
```

## Versões

O GitHub Pages serve uma fonte por repositório, então as versões convivem em
subpastas em vez de branches separadas:

| Versão | Endereço | Situação | Direção |
|---|---|---|---|
| 1 | `/` | oficial, indexável pelo Google | noite e autoridade — base espresso, mecanismo técnico |
| 2 | `/v2/` | rascunho, `noindex` | papel e discrição — base clara, medo social |
| 3 | `/v3/` | rascunho, `noindex` | dossiê e precisão — base quase preta, dados |
| 4 | `/v4/` | rascunho, `noindex` | a v1 aprofundada — mesma estrutura, arousal reduzido |
| índice | `/versoes.html` | lista as versões, `noindex` | — |

Cada versão tem a própria cópia de `css`, `js` e `assets`. Alterar uma não
afeta as outras. Os caminhos no HTML são relativos, então a pasta funciona
em qualquer subdiretório sem edição.

**Criar uma versão nova:**

```bash
cp -r v4 v5
```

Depois ajuste o texto da barra em `v5/index.html` e adicione o cartão
correspondente em `versoes.html`.

**Promover uma versão a oficial:** mova os arquivos dela para a raiz, remova o
bloco `.version-bar` (marcado por comentário no `<head>` e no `<body>`),
remova a meta `robots` de `noindex` e tire o prefixo `[v2]` do `<title>`.
Atualize também o `robots.txt`.

## Como rodar

Abra `index.html` no navegador, ou sirva a pasta:

```bash
python -m http.server 8765
```

## Paleta aplicada (cores.txt)

| Papel | Cor | Hex |
|---|---|---|
| Fundo escuro principal | Espresso profundo | `#1C1512` |
| Fundo escuro secundário | Carvão quente | `#2A211B` |
| Fundo claro | Marfim quente | `#F3E9DD` |
| CTA / acento primário | Dourado antigo | `#C9A227` |
| Detalhes e bordas | Bronze clay | `#947051` |
| Títulos de destaque (fundo claro) | Bordô profundo | `#5C1F2E` |
| Texto secundário (fundo escuro) | Taupe champanhe | `#C7AD95` |
| Botão outline claro | Bronze envelhecido | `#6B4F37` |

Contrastes verificados: marfim sobre espresso 15.0:1, CTA dourado com texto espresso 7.4:1,
taupe sobre espresso 8.4:1, bordô sobre marfim 10.4:1. Todos acima de AA.

A versão 3 usa dois tons fora da paleta original, para um fundo mais escuro que o
espresso: `#0A0806` (noir, fundo principal) e `#131009` (onyx, superfícies). Luminância
relativa 0.0025 contra 0.0083 do espresso — quase o dobro de profundidade percebida.
Nessa base, dourado rende 8.27:1 e taupe 9.37:1; bronze cai para 4.47:1 e por isso ficou
restrito a texto grande (rótulos, não parágrafos).

A versão 4 desce a paleta da v1 mantendo o matiz. Todos os tons novos ficam entre 24° e
34°, a mesma faixa de espresso, bronze, taupe e marfim, então a harmonia vem por
construção e não por escolha avulsa:

| Papel | Cor | Hex | Contraste |
|---|---|---|---|
| Fundo principal | Abismo | `#100C09` | — (2,1x mais escuro que a v1) |
| Faixa alternada | Profundo | `#16110C` | — |
| Cartões | Superfície | `#1C1610` | 1.09:1 contra o fundo |
| Corpo de texto | Linho | `#EDE2D4` | 15.23:1 |
| Texto secundário | Areia | `#BCA48A` | 8.17:1 |
| Acento em repouso | Âmbar | `#B4901F` | 6.44:1 |
| Acento em foco e hover | Dourado antigo | `#C9A227` | 8.05:1 |
| Fundo de destaque | Vinho | `#4A1824` | 11.35:1 com linho |

Em luminância tão baixa, salto de tom quase não produz contraste: o cartão fica a
1.09:1 do fundo. Quem delimita é o filete, a 1.71:1. Bronze (4.35:1) e bronze
envelhecido (2.59:1) reprovam para texto pequeno nessa base e ficaram restritos a
bordas e decoração; bordô saiu do primeiro plano e passou a servir só como fundo.

## Substituição das imagens

Os arquivos em `assets/` são placeholders vetoriais. Troque pelos arquivos reais mantendo
os mesmos nomes (ou atualize os `src` no `index.html`). Proporções esperadas:

| Arquivo | Proporção | Uso |
|---|---|---|
| `dr-gabriel.svg` | 4:5 vertical | foto do médico no hero |
| `em-acao.svg` | 3:4 vertical | card de vídeo institucional |
| `caso-01..04.svg` | 16:10 | antes/depois dos resultados |
| `procedimento.svg` | 2:1 | mídia da seção FUE |
| `depoimento-01..03.svg` | 3:4 vertical | cards de depoimento |
| `atendimento.svg` | 7:8 | mockup da seção de agendamento |

Prefira WebP ou AVIF nas fotos reais e mantenha `loading="lazy"` em tudo que está
abaixo da primeira dobra.

## Vídeos

Os botões de play são placeholders — hoje apenas se desabilitam ao clique.
Para ativar, troque o handler em `js/main.js` (bloco "Placeholder de video")
por um embed de YouTube/Vimeo ou por um `<video>` local.

## Antes de publicar

- [ ] Substituir os placeholders de `assets/` pelas fotos reais e revisar os `alt`
- [ ] Confirmar CRM, CNPJ, telefone, e-mail e endereços no rodapé
- [ ] Confirmar o número do WhatsApp nos links `wa.me` (hoje `5511989294956`)
- [ ] Trocar `https://drgabrielbelnuovo.com.br/` nas tags canonical/OG se o domínio mudar
- [ ] Adicionar imagem `og:image` (1200x630) para compartilhamento em redes
- [ ] Revisar os depoimentos com autorização de uso de imagem e voz dos pacientes
- [ ] Validar o texto do rodapé com a assessoria jurídica (CFM, publicidade médica)
