# 🚀 Guia de Deploy - Alta Performance Fitness Landing Page

Este guia te ajudará a publicar sua landing page rapidamente.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter:
- [ ] Conta no GitHub (já tem! ✅)
- [ ] Imagens da academia prontas
- [ ] Informações de contato (WhatsApp, email, endereço)
- [ ] IDs de tracking (GA4, Meta Pixel, TikTok - opcional)
- [ ] Preços dos planos definidos

---

## 🎯 Opção 1: GitHub Pages (GRÁTIS e Rápido)

### Passo 1: Personalizar Conteúdo
Antes de publicar, substitua os placeholders:

1. **Informações Básicas** (use Find & Replace no editor):
   ```
   ALTA PERFORMANCE → [Seu Nome]
   5511999999999 → [Seu WhatsApp com DDI]
   contato@altaperformance.com.br → [Seu Email]
   Rua Exemplo, 123 → [Seu Endereço]
   ```

2. **Preços dos Planos** (index.html, seção #planos):
   - Ajuste valores de R$ conforme seus planos
   - Recalcule economias

3. **Tracking IDs** (index.html):
   - `G-XXXXXXXXXX` → Seu Google Analytics GA4 ID
   - `YOUR_PIXEL_ID` → Seu Meta Pixel ID (opcional)
   - `YOUR_TIKTOK_PIXEL_ID` → Seu TikTok Pixel ID (opcional)

### Passo 2: Adicionar Imagens
Coloque suas imagens otimizadas em `assets/images/`:
- hero-fitness.jpg (1920x1080px, <200KB)
- gym-equipment.jpg (800x600px, <150KB)
- gym-cardio.jpg (800x600px, <150KB)
- gym-functional.jpg (800x600px, <150KB)
- gym-locker.jpg (800x600px, <150KB)
- og-image.jpg (1200x630px, <200KB)
- favicon.ico (32x32px)

**Dica:** Use [Squoosh.app](https://squoosh.app) para comprimir

### Passo 3: Commit e Push
```bash
git add .
git commit -m "Personalização completa para [Nome da Academia]"
git push origin main
```

### Passo 4: Ativar GitHub Pages
1. Vá em **Settings** do repositório
2. Navegue até **Pages** (menu lateral)
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde 2-5 minutos para deploy

### Passo 5: Verificar Deploy
Acesse: `https://fonemaassessoria.github.io/`

🎉 **Pronto! Sua landing page está no ar!**

---

## 🌐 Opção 2: Domínio Personalizado (Recomendado)

### Por que usar domínio próprio?
- Mais profissional (ex: suaacademia.com.br)
- Melhor para SEO
- Mais confiável para clientes
- Fácil de lembrar

### Passo 1: Comprar Domínio
Recomendações:
- **Registro.br** - Domínios .br oficiais (R$ 40/ano)
- **Hostinger** - Internacional e .br (R$ 50-80/ano)
- **GoDaddy** - Internacional (.com, .net)

**Dica:** Escolha um nome curto e fácil de digitar

### Passo 2: Configurar DNS
No painel do seu registrador, adicione:

**Opção A - Usando CNAME (Recomendado):**
```
Tipo: CNAME
Nome: www
Valor: fonemaassessoria.github.io
TTL: 3600
```

**Opção B - Usando A Records:**
```
Tipo: A
Nome: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nome: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @
Valor: 185.199.111.153
TTL: 3600
```

### Passo 3: Configurar no GitHub
1. No repositório, vá em **Settings > Pages**
2. Em **Custom domain**, digite: `www.seudominio.com.br`
3. Clique em **Save**
4. Aguarde verificação DNS (pode levar até 24h)
5. Após verificado, marque **Enforce HTTPS**

### Passo 4: Atualizar Links no Código
Em `index.html`, substitua:
```html
<!-- Linha 11 -->
<link rel="canonical" href="https://www.seudominio.com.br/">

<!-- Linhas 15, 22 -->
<meta property="og:url" content="https://www.seudominio.com.br/">

<!-- Linhas 18, 25 -->
<meta property="og:image" content="https://www.seudominio.com.br/assets/images/og-image.jpg">

<!-- Linha 57 -->
"image": "https://www.seudominio.com.br/assets/images/og-image.jpg",
```

Commit e push novamente.

---

## 📊 Pós-Deploy: Configurar Analytics

### Google Analytics GA4

1. **Criar Propriedade:**
   - Acesse [analytics.google.com](https://analytics.google.com)
   - Clique em "Criar Propriedade"
   - Nome: "Landing Page - [Sua Academia]"
   - Fuso horário: "Brasil/São Paulo"
   - Configure "Web Stream"
   - URL: Seu domínio

2. **Obter ID:**
   - Copie o ID (formato: `G-XXXXXXXXX`)
   - Cole em `index.html` (linha 78)

3. **Testar:**
   - Abra sua página
   - Verifique em Realtime do GA4

### Meta Pixel (Facebook Ads)

1. **Criar Pixel:**
   - Acesse [business.facebook.com](https://business.facebook.com)
   - Events Manager > Pixels
   - "Criar Pixel"
   - Nome: "[Sua Academia] - Website"

2. **Obter ID:**
   - Copie o ID (numérico)
   - Cole em `index.html` (linha 97)

3. **Testar:**
   - Instale extensão "Meta Pixel Helper" (Chrome)
   - Abra sua página
   - Verifique se pixel dispara

### TikTok Pixel (Opcional)

1. **Criar Pixel:**
   - Acesse TikTok Ads Manager
   - Assets > Events > Web Events
   - "Create Pixel"

2. **Configurar:**
   - Copie Pixel ID
   - Cole em `index.html` (linha 113)

---

## ✅ Checklist Pré-Launch

### Conteúdo
- [ ] Todos os textos revisados
- [ ] Preços atualizados
- [ ] WhatsApp com número correto
- [ ] Email funcionando
- [ ] Endereço correto no mapa
- [ ] Horários de funcionamento corretos
- [ ] Depoimentos reais (com autorização)

### Técnico
- [ ] Imagens carregando (todas)
- [ ] Links funcionando (todos)
- [ ] WhatsApp abre corretamente
- [ ] Google Maps carregando
- [ ] Formulários validando (se houver)
- [ ] Mobile responsivo (testar no celular)

### SEO & Marketing
- [ ] Title tag personalizado
- [ ] Meta description personalizado
- [ ] Google Analytics configurado
- [ ] Meta Pixel configurado (se usar Facebook Ads)
- [ ] Sitemap gerado (opcional)

### Legal
- [ ] Política de Privacidade revisada
- [ ] Termos de Uso revisados
- [ ] CNPJ atualizado (se aplicável)
- [ ] Dados do DPO corretos

---

## 🧪 Testar Antes de Anunciar

### Teste Manual
1. **Desktop:**
   - Chrome, Firefox, Safari, Edge
   - Todos os links clicáveis
   - CTAs levam para WhatsApp

2. **Mobile:**
   - Abra no celular real
   - Teste rotação (portrait/landscape)
   - CTAs acessíveis
   - Texto legível

3. **Velocidade:**
   - Teste em [PageSpeed Insights](https://pagespeed.web.dev/)
   - Meta: Score > 80 (mobile e desktop)

### Teste com Amigos
- Peça para 3-5 pessoas acessarem
- Pergunte:
  - "Ficou claro o que oferecemos?"
  - "Você clicaria para saber mais?"
  - "Alguma dúvida não respondida?"

---

## 📈 Próximos Passos (Marketing)

### Semana 1: Validação
- [ ] Monitorar Google Analytics diariamente
- [ ] Verificar taxa de rejeição (<60%)
- [ ] Conferir tempo médio na página (>2 min)
- [ ] Testar CTAs (quantos cliques?)

### Semana 2-4: Otimização
- [ ] Analisar heatmaps (Hotjar/Clarity)
- [ ] Identificar pontos de abandono
- [ ] Ajustar copy se necessário
- [ ] Testar variações de CTA

### Mês 2+: Escalar
- [ ] Iniciar Google Ads
- [ ] Iniciar Meta Ads (Instagram/Facebook)
- [ ] Implementar A/B tests (ver README.md)
- [ ] Expandir para outras páginas (blog, sobre)

---

## 🆘 Problemas Comuns

### "Página não carrega"
- Verifique se GitHub Pages está ativo
- Aguarde 5 minutos após ativar
- Limpe cache do navegador (Ctrl+Shift+R)

### "Imagens não aparecem"
- Verifique nomes dos arquivos (case-sensitive)
- Confirme que estão em `assets/images/`
- Verifique tamanho (<1MB cada)

### "WhatsApp não abre"
- Confirme número com DDI: `5511999999999`
- Teste no mobile (WhatsApp instalado)
- Link deve começar com `https://wa.me/`

### "Analytics não registra"
- Verifique se ID está correto
- Aguarde 24h para dados aparecerem
- Use modo Realtime para testar imediatamente

### "Domínio não funciona"
- DNS pode levar até 48h para propagar
- Verifique configuração no registrador
- Use ferramenta: [whatsmydns.net](https://whatsmydns.net)

---

## 📞 Suporte

### Comunidade
- GitHub Issues deste repositório
- Stack Overflow (tag: bootstrap, github-pages)
- Fórum do Bootstrap

### Profissional
- **Web Designer:** Para ajustes visuais
- **Desenvolvedor:** Para funcionalidades avançadas
- **Especialista SEO:** Para otimização de busca
- **Advogado:** Para adequação LGPD completa

---

## 🎉 Parabéns!

Sua landing page está pronta para converter visitantes em alunos!

Lembre-se:
- Marketing é iterativo (sempre teste e melhore)
- Monitore métricas semanalmente
- Ouça feedback dos clientes
- Mantenha conteúdo atualizado

**Boa sorte com sua academia! 💪🚀**

---

Última atualização: 12 de janeiro de 2026
