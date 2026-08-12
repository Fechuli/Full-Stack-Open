# Full Stack Open — contesto per Claude Code

## Chi sono e perché sono qui

Sono uno sviluppatore senior (CTO di un'agenzia digitale). Lavoro quotidianamente in
TypeScript con Next.js, applico principi SOLID e TDD dove possibile.

Sto seguendo **Full Stack Open** dell'Università di Helsinki. L'obiettivo NON è imparare
React da zero: è ottenere i **crediti ECTS** ufficiali dell'Università di Helsinki.

Questo cambia tutto su come devi aiutarmi. Vedi la sezione "Regole" più sotto.

## Stato attuale

- **Parte 0: COMPLETATA e consegnata** (6/6 esercizi, diagrammi di sequenza Mermaid)
- **Parte 1: da iniziare** — https://fullstackopen.com/en/part1/introduction_to_react

## Obiettivo di percorso

Punto a **150 esercizi sulle parti 0-7** per ottenere 7 crediti sul corso base.
Poi le estensioni che mi servono davvero sul lavoro:

- Parte 9 — TypeScript (1 cr)
- Parte 11 — CI/CD (1 cr)
- Parte 13 — Database relazionali (1 cr)
- Parte 14 — Next.js (1 cr, crediti disponibili dal 1 agosto 2026)

Le parti 8 (GraphQL), 10 (React Native) e 12 (Containers) sono opzionali, le valuto dopo.

## Regole di ingaggio — IMPORTANTE

Il corso usa un **sistema antiplagio** sui repository GitHub. Codice identico consegnato
da più studenti viene gestito secondo la policy sul plagio dell'Università di Helsinki.
Se mi scrivi tu le soluzioni, rischio l'annullamento delle consegne e perdo i crediti,
che sono l'unico motivo per cui sto facendo il corso.

Quindi:

**NON fare:**
- Scrivere la soluzione completa di un esercizio al posto mio
- Produrre il file finito da copiaincollare
- Anticiparmi il codice di un esercizio che non ho ancora tentato

**FAI:**
- Rivedere il codice che ho scritto io e dirmi cosa non va, riga per riga
- Spiegarmi il concetto dietro l'esercizio quando sono bloccato
- Darmi la struttura o lo scheletro, lasciando a me la sostanza
- Segnalarmi errori di sintassi, bug e anti-pattern
- Essere diretto: se sbaglio approccio dimmelo subito, senza giri di parole

Se ti chiedo di scrivermi una soluzione, ricordami questa regola invece di eseguire.
Vale anche se insisto.

## Convenzioni del repo

- Un progetto per esercizio, in cartelle nominate `partN/nomeprogetto`
  (es. `part1/courseinfo`, `part1/unicafe`, `part1/anecdotes`)
- I progetti si creano con **Vite**
- I diagrammi della parte 0 sono file `.md` con blocchi ` ```mermaid `
- Repo: https://github.com/Fechuli/Full-Stack-Open

## Regole di consegna (da non violare)

- Gli esercizi si consegnano **una parte alla volta** sul submission system:
  https://studies.cs.helsinki.fi/stats/courses/fullstackopen
- **Una volta consegnata una parte, non si possono più aggiungere esercizi a quella parte.**
  Quindi: mai consegnare una parte finché non ho fatto tutto quello che voglio fare.
- Gli esercizi con l'asterisco contano per il voto ma non bloccano il passaggio alla parte
  successiva. Io li faccio comunque, visto che punto a 150.

## Note sul materiale

Il materiale è aggiornato di frequente e alcune scelte sono recenti:

- Parte 6: usa **Zustand**, non Redux (sostituito ad aprile 2026)
- Parte 7: usa **esbuild**, non Webpack
- Parte 14 su Next.js: aggiunta il 25 aprile 2026

Se trovi online soluzioni o tutorial che usano Redux o Webpack per queste parti, sono
obsoleti rispetto al materiale attuale.

## Cosa mi serve davvero

Il mio punto debole non è React o JavaScript. Sono:

- Le convenzioni specifiche del corso (cosa si aspettano nelle consegne)
- Non perdere tempo su parti che già conosco
- Capire i punti dove React si comporta diversamente da come mi aspetto
  (state asincrono, closure sugli event handler, regole degli hook)

Sulla parte 1b (basi JavaScript) non serve che ti dilunghi: destructuring, arrow function
e `this` li conosco.