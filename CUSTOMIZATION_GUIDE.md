# 🎨 Guia Rápido de Customização

Este guia te ajudará a personalizar a Landing Page para sua academia em poucos passos.

---

## 📝 Passo 1: Informações Básicas

### 1.1 Nome da Academia
Substitua "ALTA PERFORMANCE" em:
- `index.html` (navbar, footer, titles)
- `privacy.html` 
- `terms.html`
- `README.md`

**Buscar e Substituir:**
```
ALTA PERFORMANCE → [SEU NOME]
Alta Performance Fitness → [SEU NOME COMPLETO]
```

### 1.2 Contatos
Em `index.html`, substitua:

```html
<!-- WhatsApp (várias ocorrências) -->
https://wa.me/5511999999999
Substituir por: https://wa.me/55[SEU_DDD][SEU_NUMERO]

<!-- Telefone -->
(11) 99999-9999
Substituir por: ([SEU_DDD]) [SEU_TELEFONE]

<!-- E-mail -->
contato@altaperformance.com.br
Substituir por: [SEU_EMAIL]

<!-- Endereço -->
Rua Exemplo, 123 - Centro
São Paulo/SP - CEP: 00000-000
Substituir por: [SEU_ENDERECO_COMPLETO]
```

---

## 💰 Passo 2: Preços dos Planos

Em `index.html`, seção `#planos`, ajuste os valores:

```html
<!-- Plano Mensal -->
<span class="display-4 fw-bold text-warning">R$ 149</span>
<span class="text-white-50">/mês</span>

<!-- Plano Trimestral -->
<span class="display-4 fw-bold">R$ 399</span>
<span class="text-dark">/trimestre</span>
<p class="small mb-0 mt-2"><strong>R$ 133/mês</strong> - Economize R$ 48</p>

<!-- Plano Anual -->
<span class="display-4 fw-bold text-warning">R$ 1.299</span>
<span class="text-white-50">/ano</span>
<p class="small text-warning mb-0 mt-2"><strong>R$ 108/mês</strong> - Economize R$ 489</p>
```

**Dica:** Calcule as economias:
- Trimestral: (Mensal × 3) - Preço Trimestral
- Anual: (Mensal × 12) - Preço Anual

---

## 📊 Passo 3: Tracking & Analytics

### 3.1 Google Analytics GA4
Em `index.html`, linha ~77:
```javascript
gtag('config', 'G-XXXXXXXXXX');
// Substituir G-XXXXXXXXXX pelo seu ID do GA4
```

**Como obter:**
1. Acesse [Google Analytics](https://analytics.google.com)
2. Crie uma propriedade GA4
3. Copie o ID (formato: G-XXXXXXXXX)

### 3.2 Meta Pixel (Facebook)
Em `index.html`, linha ~97:
```javascript
fbq('init', 'YOUR_PIXEL_ID');
// Substituir YOUR_PIXEL_ID pelo ID do seu pixel
```

**Como obter:**
1. Acesse [Meta Business](https://business.facebook.com)
2. Events Manager > Pixels
3. Copie o ID (formato numérico)

### 3.3 TikTok Pixel
Em `index.html`, linha ~110:
```javascript
ttq.load('YOUR_TIKTOK_PIXEL_ID');
// Substituir YOUR_TIKTOK_PIXEL_ID pelo seu ID
```

---

## 🎨 Passo 4: Cores e Branding

### 4.1 Paleta de Cores
Em `assets/css/style.css`, linhas 10-16:

```css
:root {
  --primary-yellow: #FFC107;   /* Cor primária (botões, destaques) */
  --primary-dark: #0d0d0d;     /* Cor escura (header, footer) */
  --accent-gold: #FFD700;       /* Cor de acento */
  --text-light: #ffffff;        /* Texto claro */
  --text-muted: #a0a0a0;        /* Texto secundário */
  --bg-light: #f8f9fa;          /* Fundo claro */
}
```

**Recomendações de Paleta:**
- **Energética:** Vermelho (#DC143C) + Preto (#000000)
- **Moderna:** Azul Elétrico (#0066FF) + Cinza (#333333)
- **Premium:** Dourado (#D4AF37) + Preto (#0a0a0a)

### 4.2 Tipografia
Em `index.html`, linha ~38:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

**Alternativas no Google Fonts:**
- **Forte/Impactante:** Oswald, Bebas Neue, Anton
- **Moderna/Clean:** Inter, Plus Jakarta Sans, Work Sans
- **Elegante:** Playfair Display, Merriweather

---

## 🖼️ Passo 5: Imagens

### 5.1 Substituir Imagens
Coloque suas imagens em `assets/images/`:

| Arquivo | Dimensões | Uso |
|---------|-----------|-----|
| hero-fitness.jpg | 1920x1080 | Imagem principal |
| gym-equipment.jpg | 800x600 | Infraestrutura 1 |
| gym-cardio.jpg | 800x600 | Infraestrutura 2 |
| gym-functional.jpg | 800x600 | Infraestrutura 3 |
| gym-locker.jpg | 800x600 | Infraestrutura 4 |
| og-image.jpg | 1200x630 | Share social media |
| favicon.ico | 32x32 | Ícone do site |

### 5.2 Otimizar Imagens
1. Use WebP ao invés de JPG (melhor compressão)
2. Comprima para <200KB por imagem
3. Tool recomendada: [Squoosh.app](https://squoosh.app)

---

## 🗺️ Passo 6: Google Maps

### 6.1 Obter Código Embed
1. Acesse [Google Maps](https://maps.google.com)
2. Busque seu endereço
3. Clique em "Compartilhar" > "Incorporar mapa"
4. Copie o código iframe

### 6.2 Substituir no HTML
Em `index.html`, seção `#localizacao`:
```html
<iframe src="https://www.google.com/maps/embed?pb=SEU_CODIGO_AQUI"></iframe>
```

---

## ⏰ Passo 7: Horários de Funcionamento

Em `index.html`, seção `#localizacao`:
```html
<ul class="list-unstyled">
  <li class="mb-2">Segunda a Sexta: <strong>06:00 - 22:00</strong></li>
  <li class="mb-2">Sábado: <strong>08:00 - 18:00</strong></li>
  <li class="mb-2">Domingo: <strong>08:00 - 14:00</strong></li>
</ul>
```

Ajuste conforme seus horários reais.

---

## 💬 Passo 8: Depoimentos

Em `index.html`, seção `#depoimentos`:

```html
<p class="mb-4">"[SEU DEPOIMENTO REAL]"</p>
<div class="d-flex align-items-center">
  <!-- Avatar pode ser substituído por foto real -->
  <div>
    <p class="mb-0 fw-bold">[NOME DO ALUNO]</p>
    <p class="mb-0 small text-muted">Aluno há [X] meses</p>
  </div>
</div>
```

**Importante:** 
- Use depoimentos reais (com autorização por escrito)
- Evite inventar reviews (pode configurar publicidade enganosa)
- Considere adicionar fotos reais dos alunos (com permissão)

---

## ❓ Passo 9: FAQ (Perguntas Frequentes)

Personalize conforme sua política em `index.html`, seção `#faq`:

```html
<div class="accordion-item">
  <h3 class="accordion-header">
    <button class="accordion-button">
      [SUA PERGUNTA]
    </button>
  </h3>
  <div class="accordion-collapse collapse">
    <div class="accordion-body">
      [SUA RESPOSTA]
    </div>
  </div>
</div>
```

**Perguntas recomendadas:**
- Política de cancelamento
- Formas de pagamento
- Teste/período de experiência
- Upgrades de plano
- Aulas inclusas
- Estacionamento
- Personal trainer

---

## 📱 Passo 10: Redes Sociais

No footer de `index.html`:
```html
<div class="d-flex gap-3">
  <a href="[SEU_INSTAGRAM]" class="text-white fs-4" aria-label="Instagram">
    <i class="bi bi-instagram"></i>
  </a>
  <a href="[SEU_FACEBOOK]" class="text-white fs-4" aria-label="Facebook">
    <i class="bi bi-facebook"></i>
  </a>
  <a href="[SEU_YOUTUBE]" class="text-white fs-4" aria-label="YouTube">
    <i class="bi bi-youtube"></i>
  </a>
  <a href="[SEU_TIKTOK]" class="text-white fs-4" aria-label="TikTok">
    <i class="bi bi-tiktok"></i>
  </a>
</div>
```

---

## 🔐 Passo 11: LGPD

### 11.1 Política de Privacidade
Em `privacy.html`, ajuste:
- Nome da empresa
- CNPJ
- Endereço
- E-mail do DPO (Data Protection Officer)
- Telefone de contato

### 11.2 Termos de Uso
Em `terms.html`, ajuste:
- Condições específicas dos seus planos
- Regras da academia
- Política de cancelamento detalhada

**Importante:** Consulte um advogado especializado em LGPD para adequar às suas necessidades específicas.

---

## 🚀 Passo 12: Publicação

### 12.1 GitHub Pages (Gratuito)
1. No repositório GitHub, vá em Settings
2. Pages > Source > Selecione `main` branch
3. Salve e aguarde deploy
4. Acesse em: `https://[seu-usuario].github.io/[repo-name]`

### 12.2 Domínio Próprio (Recomendado)
1. Compre um domínio (.com.br recomendado para Brasil)
2. Configure DNS:
   - Tipo A apontando para GitHub IPs
   - ou CNAME apontando para `[usuario].github.io`
3. Adicione domínio customizado no GitHub Pages
4. Ative HTTPS

**Registradores de Domínio:**
- Registro.br (oficial .br)
- GoDaddy
- Hostinger
- Namecheap

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Todos os placeholders substituídos
- [ ] Informações de contato corretas
- [ ] Preços atualizados
- [ ] IDs de tracking configurados
- [ ] Imagens otimizadas e carregando
- [ ] Google Maps funcionando
- [ ] Links de WhatsApp funcionando
- [ ] Testado em mobile e desktop
- [ ] Política de Privacidade revisada
- [ ] Termos de Uso revisados

---

## 🆘 Precisa de Ajuda?

### Técnicas:
- [Documentação Bootstrap](https://getbootstrap.com/docs/5.3)
- [Google Analytics Help](https://support.google.com/analytics)
- [Meta Pixel Guide](https://www.facebook.com/business/help/952192354843755)

### Marketing:
- Consulte um especialista em CRO (Conversion Rate Optimization)
- Considere contratar um copywriter para melhorar textos
- Use ferramentas como Hotjar para analisar comportamento

### Legal:
- Consulte um advogado especializado em LGPD
- Revise políticas com um profissional jurídico
- Mantenha registros de consentimentos

---

**Boa sorte com sua academia! 💪**
