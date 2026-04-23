
# Substituir imagem do Hero pelo mascote

## O que será feito
Substituir a imagem atual do hero (foto de alunos) pelo mascote enviado, ajustando tamanho, posicionamento e efeitos visuais premium.

## Passos

### 1. Copiar a imagem do mascote para o projeto
- Copiar `user-uploads://Certificado_Language_Now.png` para `src/assets/hero-mascot.png`

### 2. Atualizar `src/components/HeroSection.tsx`
- Trocar o import de `hero-image.jpg` para `hero-mascot.png`
- Remover classes da imagem antiga (`rounded-2xl shadow-2xl object-cover max-h-[420px] w-full`, `width/height` attributes)
- Aplicar novo estilo na imagem:
  - `height: clamp(380px, 45vw, 480px)`, `width: auto`
  - `object-fit: contain` (sem fundo, sem caixa)
  - `filter: drop-shadow(0 20px 40px rgba(0,0,0,0.25))`
  - `transform: scale(1.05)`
- Manter o container com `flex justify-center items-center` para centralização vertical e horizontal

### Arquivos modificados
- `src/assets/hero-mascot.png` (novo)
- `src/components/HeroSection.tsx` (editado)

### O que NÃO será alterado
- Textos, layout, espaçamentos, CTA, gradiente de fundo — tudo permanece igual
