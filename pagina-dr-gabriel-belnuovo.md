# Especificação de Página — Dr. Gabriel Belnuovo (Transplante Capilar)

> Landing page médica (nicho: transplante capilar / FUE). Estética escura, premium,
> alto contraste preto/branco com acentos em vermelho vivo. Tom: autoridade médica +
> prova social + conversão (CTAs recorrentes para WhatsApp/agendamento).

---

## 1. Sistema Visual Global

### 1.1 Paleta de Cores
| Uso | Cor | Hex aprox. |
|---|---|---|
| Fundo escuro principal (hero, header) | Preto quase puro | `#070708` |
| Fundo escuro secundário (seções dark) | Preto suave | `#0A0A0A` a `#141414` |
| Fundo dos cards dentro de seções escuras | Cinza-chumbo | `#1E1E1E` a `#222222` |
| Fundo das seções claras | Cinza muito claro (quase branco) | `#F0F0F0` |
| Vermelho de marca (botões, números, ícones, títulos de destaque) | Vermelho vivo/crimson | `#C2011E` (variação mais escura tipo vinho em alguns títulos: `#8B1538`) |
| Texto sobre fundo escuro | Branco / cinza-claro | `#FFFFFF` / `#C9C9C9` |
| Texto sobre fundo claro | Preto/cinza-escuro | `#1A1A1A` / `#555555` |
| Check verde (lista de benefícios) | Emoji verde padrão ✅ | — |

### 1.2 Tipografia
- **Fonte de títulos/corpo (site inteiro):** sans-serif geométrica/arredondada, peso bold nos títulos (visual similar a *Poppins*, *Baloo 2* ou *Quicksand Bold* — letras com curvas bem arredondadas, ex.: o "a" e o "e").
- **Fonte da logo ("GABRIEL BELNUOVO"):** serif elegante, versalete (small caps), bastante letter-spacing.
- **Subtítulo da logo ("TRANSPLANTE CAPILAR"):** sans-serif fina, caixa alta, letter-spacing largo, tamanho pequeno.
- Hierarquia:
  - H1/H2 de seção: 28–36px, bold, branco ou preto conforme fundo, `line-height` apertado, geralmente **centralizado**.
  - H3 de card/feature: 18–20px, bold, cor vermelha ou branca.
  - Corpo de texto: 15–16px, peso regular, cor cinza-claro (fundo escuro) ou cinza-médio (fundo claro).
  - Botões: caixa alta (UPPERCASE), bold, letter-spacing leve.

### 1.3 Botões (CTA)
- Fundo vermelho sólido (`#C2011E`), texto branco, **UPPERCASE**, bold.
- Cantos levemente arredondados (~4px).
- Padding generoso (~14px vertical x 28px horizontal).
- Usado repetidamente como o mesmo componente, com textos variando:
  - `AGENDAR AVALIAÇÃO` (header)
  - `SAIBA MAIS`
  - `QUERO PASSAR PELA PRÉ-AVALIAÇÃO GRATUITA`
  - `GARANTA SUA PRÉ-AVALIAÇÃO GRATUITA` (repetido várias vezes ao longo da página)
  - `QUERO TIRAR MINHAS DÚVIDAS`
- Sem sombra pronunciada; hover não observável no print (assumir leve escurecimento).

### 1.4 Padrões estruturais recorrentes
- **Divisores diagonais entre seções**: a transição entre um bloco escuro e um bloco claro (e vice-versa) é feita com uma borda **inclinada (skew)**, tipo "corte diagonal", não uma linha reta — dá um efeito dinâmico entre as faixas de fundo preto e fundo cinza-claro. Implementar com `clip-path: polygon(...)` ou pseudo-elemento rotacionado.
- **Padrão decorativo no hero**: fundo do topo (atrás do header e da foto) tem uma textura sutil em relevo escuro — losangos/arabescos tipo damasco, quase imperceptível, só visível em tons de cinza muito escuro sobre preto.
- **Cards "Antes/Depois"**: elemento recorrente — uma imagem/vídeo composto mostrando duas metades de rosto (uma em preto-e-branco/dessaturada = "antes", outra colorida = "depois"), com um overlay gradiente vermelho-para-preto na parte inferior e o texto "ANTES *vs.* DEPOIS" (a palavra "vs." menor, em vermelho, itálico) sobreposto. Nos cards de vídeo, tem também um selo de duração no canto superior esquerdo (ex. "1:00") e um botão de play circular com borda vermelha no centro.
- **Botões CTA vermelhos aparecem ~9 vezes** ao longo da página, sempre centralizados, entre blocos de conteúdo — reforço de conversão constante.
- Container de conteúdo centralizado com margens laterais generosas (aprox. largura útil ~1140–1200px em desktop, texto/cards não tocam as bordas da tela).

---

## 2. Estrutura da Página (seção a seção, ordem de cima para baixo)

### SEÇÃO 1 — Header / Navbar (fixo sobre o hero, fundo transparente/escuro)
- **Esquerda:** logo — ícone de um "G" estilizado (parece um fio de cabelo saindo da letra) + texto "GABRIEL BELNUOVO" (serif) + abaixo "TRANSPLANTE CAPILAR" (sans-serif pequena, letter-spacing).
- **Centro/direita:** menu horizontal: `Home` · `Transplante Capilar FUE` · `Dr Gabriel Belnuovo` · `Localização` · `Contato`
- **Extrema direita:** botão vermelho `AGENDAR AVALIAÇÃO`.

### SEÇÃO 2 — Hero
- Fundo preto com textura de losangos decorativa sutil.
- Foto grande do médico (Dr. Gabriel), corpo inteiro/torso, braços cruzados, jaleco preto de médico com lupas cirúrgicas penduradas no pescoço, posicionada **encostada à direita**, ocupando quase a metade direita da tela, com leve fade/gradiente escurecendo nas bordas (se funde com o fundo preto, sem borda definida).
- Lado esquerdo do hero: **vazio** (apenas o fundo texturizado) — todo o peso visual está na foto.
- Sem headline de texto visível nesta dobra (o texto vem logo abaixo, na seção seguinte).

### SEÇÃO 3 — Sobre / Confiança (fundo preto `#0A0A0A`)
Layout em 2 colunas:
- **Coluna esquerda:** card de vídeo vertical (proporção retrato, tipo 3:4), foto escura das mãos do médico trabalhando em um paciente, selo "1:00" no canto superior esquerdo, texto sobreposto na parte inferior "DR GABRIEL" (grande, bold, branco) / "EM AÇÃO" (menor, cinza) — sugere vídeo institucional/making-of.
- **Coluna direita:**
  - H2: **"Confiança e excelência em cada fio"**
  - Parágrafo: *"O Dr. Gabriel Belnuovo é médico especialista em tricologia e transplante capilar. Com técnica precisa, atendimento personalizado e foco em resultados naturais, ele coordena pessoalmente cada etapa, da primeira consulta à cirurgia e ao pós-operatório."*
  - Subtítulo bold: **"Mais do que estética, é sobre autoestima."**
  - Parágrafo: *"Detalhista e atualizado com as técnicas mais modernas do mercado, o Dr. Gabriel une precisão e arte para entregar um resultado natural e uma nova autoconfiança a cada paciente."*
  - Botão vermelho: `SAIBA MAIS`

*(fim da seção com divisor diagonal para a próxima, que continua em fundo escuro)*

### SEÇÃO 4 — Transplantes Reais / Antes-Depois (fundo preto `#0A0A0A`)
- H2 centralizado, 2 linhas: **"Transplantes Reais. Resultados Visíveis. Autoconfiança de Volta."**
- Parágrafo centralizado: *"Com uma trajetória de excelência e centenas de procedimentos bem-sucedidos, Dr. Gabriel Belnuovo domina a arte do transplante capilar, entregando resultados imperceptíveis, definitivos e personalizados."*
- **4 cards empilhados verticalmente**, cada um em largura total, fundo levemente mais claro que a seção (`#1E1E1E`), cantos arredondados, borda sutil. Cada card = imagem antes/depois (esquerda) + conteúdo (direita, com ícone de check vermelho circular acima do título):
  1. **Máxima Densidade e Precisão Cirúrgica** — "Resultado denso e natural, fio a fio, para um visual harmônico."
  2. **Distribuição Estratégica e Estética Avançada** — "Cada fio posicionado com técnica, para uma linha frontal natural."
  3. **Sem Cicatrizes Visíveis, Sem Marcas** — "Técnica FUE moderna: sem corte linear, sem pontos, com recuperação rápida."
  4. **Resultados 100% Naturais e Definitivos** — "Mais do que cabelo, o paciente recupera sua imagem e confiança"
- Botão vermelho centralizado: `QUERO PASSAR PELA PRÉ-AVALIAÇÃO GRATUITA`

*(divisor diagonal → transição para fundo claro)*

### SEÇÃO 5 — Transplante Capilar FUE (fundo claro `#F0F0F0`)
- H2 centralizado (texto preto, não vermelho): **"Transplante Capilar FUE"**
- Grande espaço em branco logo abaixo do título (na página real provavelmente é um vídeo incorporado ou imagem grande que não carregou no print — recriar como um bloco de mídia full-width/imagem de destaque do procedimento).
- **3 colunas de texto centralizado** (título vermelho bold + parágrafo cinza):
  1. **Técnica Exclusiva, Resultado Incomparável** — "O Dr. Gabriel realiza pessoalmente cada procedimento, com foco em alta densidade e resultado duradouro. Nada é delegado."
  2. **Discrição Possível com Técnica No Shave** — "Para alguns casos, é possível manter o visual sem raspar toda a cabeça. A técnica No Shave FUE oferece mais discrição durante a recuperação — avaliada caso a caso."
  3. **Processo Organizado do Início ao Fim** — "Pré-avaliação gratuita, consulta médica aprofundada, planejamento cirúrgico e acompanhamento pós-operatório. Tudo com clareza, etapas definidas e suporte real."
- Botão vermelho centralizado: `GARANTA SUA PRÉ-AVALIAÇÃO GRATUITA`

### SEÇÃO 6 — Depoimentos (mesmo fundo claro, sem divisor — continuação)
- H2 centralizado: **"O Que Nossos Pacientes Dizem"**
- **3 cards de vídeo lado a lado** (mesmo estilo visual dos cards antes/depois: retrato duotone P&B + cor, overlay gradiente vermelho/preto, selo "1:00", ícone de play circular vermelho, texto "ANTES *vs.* DEPOIS" sobreposto).
- Texto/link centralizado abaixo: **"Veja Mais Depoimentos"**
- Botão vermelho centralizado: `GARANTA SUA PRÉ-AVALIAÇÃO GRATUITA`

*(divisor diagonal → transição para fundo escuro)*

### SEÇÃO 7 — Como Funciona o Procedimento (fundo preto)
- H2: **"Como Funciona o Procedimento?"**
- Lista numerada vertical (4 passos), número grande em vermelho à esquerda, título bold branco + descrição cinza à direita, com linha divisória horizontal fina entre cada item:
  1. **Pré-Avaliação Online** — "Analisamos seu caso e esclarecemos dúvidas antes da consulta presencial."
  2. **Consulta com Dr. Gabriel Belnuovo** — "Avaliação detalhada da calvície, definição do design capilar e solicitação de exames para garantir um procedimento seguro."
  3. **Cirurgia Minimamente Invasiva** — este item tem 4 sub-bullets (ícone de losango azul/roxo pequeno antes de cada linha):
     - "Planejamento Personalizado – Definição da linha capilar para um resultado natural."
     - "Procedimento Indolor – Anestesia local com sedação leve para máximo conforto."
     - "Extração FUE de Alta Precisão – Sem cortes, sem cicatrizes visíveis."
     - "Implantação Estratégica – Fios posicionados para uma aparência densa e harmoniosa."
  4. **Recuperação Rápida e Resultados Definitivos** — "Naturalidade e sofisticação em cada detalhe."
- Botão vermelho centralizado: `GARANTA SUA PRÉ-AVALIAÇÃO GRATUITA`

*(divisor diagonal → fundo claro)*

### SEÇÃO 8 — Localização (fundo claro `#F0F0F0`)
- H2 alinhado à esquerda: **"Onde Estamos Localizados?"**
- 2 colunas:
  - **Esquerda:** mapa incorporado (Google Maps embed — em branco no print, recriar como iframe de mapa).
  - **Direita:**
    - "Nosso consultório:" (bold)
    - "Atria Medical Center"
    - "Avenida Brigadeiro Faria Lima, 3.900 – 7º Andar, Itaim Bibi, São Paulo/SP"

### SEÇÃO 9 — CTA de Agendamento (fundo preto)
- H2 centralizado, 2 linhas: **"Agende Sua Pré Avaliação Gratuita Agora Mesmo!"**
- 2 colunas:
  - **Esquerda:** imagem/mockup (em branco no print — provavelmente mockup de celular com WhatsApp ou foto do consultório; recriar como imagem ilustrativa).
  - **Direita:**
    - Parágrafo: *"Dê o primeiro passo para recuperar sua autoestima! Agende uma avaliação gratuita e sem compromisso pelo WhatsApp."*
    - Lista com ✅ verde:
      - "Esclareça todas as suas dúvidas diretamente com nossa equipe"
      - "Condições facilitadas: Parcelamento em até 12x sem juros"
      - "Atendimento personalizado para entender suas necessidades e expectativas"
    - Parágrafo: *"Sua transformação começa agora. Clique no botão abaixo e fale conosco!"*
    - Botão vermelho: `GARANTA SUA PRÉ-AVALIAÇÃO GRATUITA`

### SEÇÃO 10 — FAQ (fundo preto)
- H2 centralizado: **"Principais Dúvidas sobre o Transplante Capilar"**
- Acordeão vertical (todos fechados por padrão), cada item = card retangular fundo cinza-escuro (`#1E1E1E`), ícone de seta/caret vermelho apontando para baixo à esquerda, pergunta em branco bold, itens separados por um leve gap:
  1. O transplante capilar é definitivo?
  2. O procedimento deixa cicatrizes?
  3. A cirurgia é dolorosa?
  4. Em quanto tempo vejo os resultados?
  5. Quando posso voltar à rotina?
  6. Posso parcelar o procedimento?
  7. O procedimento é realizado por um médico?
  8. Preciso fazer exames ou ficar afastado do trabalho?
  9. Onde é realizado o procedimento?
  10. A partir de qual idade pode ser realizado o procedimento?
  11. Quantos folículos capilares ou fios são utilizados no meu transplante capilar?
- Abaixo do acordeão: texto centralizado **"Ainda com dúvidas?"**
- Botão vermelho centralizado: `QUERO TIRAR MINHAS DÚVIDAS`

### SEÇÃO 11 — Footer (fundo preto)
- Centralizado:
  - Logo (mesma composição do header, porém em tons de cinza/monocromático em vez de branco): ícone "G" + "GABRIEL BELNUOVO" (serif) + "TRANSPLANTE CAPILAR" (subtítulo).
- Bloco de texto (alinhado à esquerda, abaixo do logo, ainda centralizado como bloco na página):
  - "Dr. Gabriel Belnuovo"
  - **CRM:** 216712
  - **CNPJ:** 52.163.115/0001-09
  - **Celular:** (11) 98929-4956
  - **E-mail:** clin.gabrielbelnuovo@gmail.com
  - **Endereço:** Rua Helena, 218 – 2º andar – Vila Olímpia – SP
  - (labels em bold branco, valores em cinza-claro regular)

---

## 3. Componentes reutilizáveis (para nomear no código)

1. **`Button.CTA`** — botão vermelho padrão descrito em 1.3, reusado ~9x com textos diferentes.
2. **`Card.BeforeAfterFeature`** — usado na Seção 4: imagem antes/depois + ícone check + título + descrição, em linha.
3. **`Card.VideoTestimonial`** — usado nas Seções 3 e 6: retrato vertical antes/depois com overlay gradiente vermelho/preto, selo de duração, botão de play.
4. **`List.NumberedStep`** — usado na Seção 7: número vermelho grande + título + descrição + divisor.
5. **`Accordion.FAQItem`** — usado na Seção 10: caret vermelho + pergunta, expansível.
6. **`SectionDivider.Diagonal`** — faixa de transição inclinada entre fundo escuro e fundo claro, reutilizada 4x ao longo da página.

## 4. Observações finais para recriação
- Site em **português (pt-BR)**, nicho médico/estético, tom confiante e direto.
- Alterna estritamente entre **fundo preto** e **fundo cinza-claro** a cada 1–2 seções, sempre conectados por divisores diagonais — esse ritmo de contraste é a assinatura visual da página.
- Vermelho é usado com moderação mas de forma consistente: só em botões, ícones de check, números de etapa, títulos de destaque e nos cards antes/depois — nunca como cor de fundo de seção inteira.
- Muitas imagens são fotos reais (retratos) tratadas em duotone (metade P&B / metade colorida) para compor os elementos "antes/depois" — esse tratamento de imagem é o elemento gráfico mais distintivo do site e deve ser replicado com filtros CSS (`grayscale()` numa metade da imagem) se fotos reais não estiverem disponíveis.
- Múltiplos CTAs idênticos redirecionam provavelmente para WhatsApp (mencionado explicitamente no texto da Seção 9).
