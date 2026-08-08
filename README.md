# Ana Beatriz Beauty Studio

Site profissional para o estúdio de maquiagem **Ana Beatriz Beauty Studio**, com portfólio,
cursos online de automaquiagem e agendamento de atendimentos via WhatsApp.

## Páginas

- `/` — Início: hero, serviços, portfólio em destaque, cursos, sobre, depoimentos e CTA
- `/portfolio` — Galeria de trabalhos com categorias
- `/cursos` — Cursos online de autoatendimento
- `/agendamento` — Formulário de agendamento (envia para o WhatsApp)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Como editar o conteúdo

Quase todo o conteúdo fica em **`lib/site.ts`**:

| O que | Onde |
| --- | --- |
| Nome, Instagram, WhatsApp, e-mail, cidade | `site` em `lib/site.ts` |
| Cursos e valores | `courses` em `lib/site.ts` |
| Fotos do portfólio | `portfolioItems` em `lib/site.ts` |

### Trocar as fotos

As imagens atuais são placeholders em `public/images/`. Para usar as fotos reais:

1. Copie suas fotos para `public/images/` (mantendo os nomes dos arquivos) ou
2. Atualize os caminhos (`src`) no arquivo `lib/site.ts`.

Tamanhos de referência: hero e perfil ~800×1000; portfólio ~600×750.

### Ajustar WhatsApp/Instagram

Em `lib/site.ts`, atualize:

```ts
whatsapp: "https://wa.me/5511999999999",   // DDD + número, sem espaços
whatsappDisplay: "(11) 99999-9999",
instagram: "https://instagram.com/anabeatrizbeauty",
instagramHandle: "@anabeatrizbeauty",
```

## Publicar na Vercel (gratuito)

1. Suba este projeto para um repositório no GitHub.
2. Crie uma conta em [vercel.com](https://vercel.com) (login com o GitHub).
3. Clique em **Add New → Project**, escolha o repositório e **Deploy**.
4. Pronto: deploy automático a cada `git push`.

## Scripts úteis

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — serve o build
- `npm run lint` — checagem de lint
- `node scripts/generate-images.js` — regenera as imagens placeholder
