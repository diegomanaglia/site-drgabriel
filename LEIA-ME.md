# Site — Dr. Gabriel Belnuovo | Transplante Capilar

Site estático em HTML + CSS + JS, sem dependências de build.

## Estrutura

```
index.html          página única
css/style.css       design system + layout responsivo
js/main.js          header, menu mobile, reveal, FAQ, nav ativa
assets/             placeholders SVG (substituir por fotos reais)
```

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
