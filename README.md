# Código de Conduta em TI

Site educativo e interativo para apresentação escolar sobre código de conduta
profissional na área de Tecnologia da Informação.

O visitante lê os fundamentos, conhece as principais violações e decide casos
práticos com simulações visuais.

## Conteúdo

- O que é um código de conduta e por que ele importa
- Seis violações: sigilo, assédio, fraude, uso de recursos, segurança e má-fé
- Laboratório com quatro alternativas por caso, incluindo zonas cinzentas

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- ESLint e Prettier

## Como executar

Instale o [Node.js 22 LTS](https://nodejs.org/) e, na pasta do projeto:

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Verificações antes de publicar

```bash
npm run lint
npm run format:check
npm run build
```

## Publicação

1. Envie o projeto para um repositório no GitHub.
2. Na Vercel, escolha **Add New → Project**.
3. Importe o repositório.
4. Mantenha as configurações detectadas para Next.js e publique.

O site não possui backend e não envia as respostas do laboratório.
