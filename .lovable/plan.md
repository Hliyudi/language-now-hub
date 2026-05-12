## Plan: Carousel de Testimonios (5 testimonios, 3 visibles, rotación automática)

### 1. Atualizar `src/i18n/translations.ts`
Substituir os 3 testimonials atuais por 5 novos em PT, EN e ES (mesmas chaves `testimonial.1..5.name/country/text`). O texto fornecido em inglês será usado como base; PT e ES serão traduções fiéis do mesmo conteúdo.

Nomes/nacionalidades:
1. Adriana — Mexicana / Mexican / Mexicana
2. Jaime — Chileno / Chilean / Chileno
3. Paulina — Colombiana / Colombian / Colombiana
4. Dayana — Porto-riquenha / Puerto Rican / Puertorriqueña
5. Daniel — Espanhol / Spanish / Español

### 2. Refatorar `src/components/TestimonialsSection.tsx`
- Manter exatamente o design atual do card (cores, bordas, sombra, estrelas, avatar com gradiente, tipografia, spacing).
- Iterar de 1 a 5 (em vez de 1..3) para construir o array de testimonials.
- Estender `avatarColors` para 5 entradas mantendo a paleta atual (blue, emerald, amber, e adicionar 2 tons já presentes no tema — ex: `from-rose-500 to-rose-600`, `from-violet-500 to-violet-600`) — sem alterar tokens do design system, apenas classes utilitárias do mesmo estilo já usado.
- Implementar rotação automática:
  - Estado `startIndex` (0..4).
  - `useEffect` com `setInterval` de ~5s que avança `startIndex = (startIndex + 1) % 5`.
  - Pausar no `hover` do container (mouse enter/leave) para acessibilidade.
  - Limpar interval no unmount.
- Exibição de 3 por vez:
  - Desktop (`md:grid-cols-3`): mostrar 3 testimonials usando slice circular: `[startIndex, startIndex+1, startIndex+2] mod 5`.
  - Mobile (1 coluna, layout atual): mostrar 1 por vez baseado em `startIndex` (mantém responsividade existente).
- Transição suave: aplicar `key={startIndex}` no wrapper do grid + classes `animate-fade-in` (já disponíveis no tailwind config) para fade entre rotações. Sem mudar layout/grid.
- Sem controles visuais (setas/dots) para preservar o design atual — somente rotação automática conforme pedido.
- Estrelas: continuar fixas em 5 (já é o caso).

### 3. Verificação
- Garantir que apenas o componente `TestimonialsSection` e as chaves i18n foram tocados.
- Conferir build/preview para confirmar que cores, sombras, fontes e spacing permanecem idênticos.

### Não será alterado
Cores, tema, layout, spacing, tipografia, responsividade, identidade visual, design dos cards, header, footer, outras seções.
