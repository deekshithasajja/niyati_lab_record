# Java Laboratory Record - M. Niyati Satya Ratna (25EU02095)

React + Vite website for the Java Programming Laboratory (AIML, Section B). Green theme.

## Run locally
1. `npm install`
2. Copy your PDFs into `public/pdfs/` (names below)
3. `npm run dev` and open the link shown (usually http://localhost:5173)
4. `npm run build` to check the production build

## PDF file names (exact)
week1.pdf, week2.pdf, week3.pdf, week6.pdf, week7.pdf, week8.pdf, week9.pdf, week10.pdf, week11.pdf, week12.pdf
Weeks 4 and 5 have no tasks, so they have no PDFs.
View/Download buttons appear on a card only when its PDF file really exists in `public/pdfs/`.

## Edit content
Weekly titles, status and PDF paths are in `src/data/labs.js`.

## Deploy on Vercel
Push to GitHub, import the repo in Vercel (Framework: Vite, Build: `npm run build`, Output: `dist`).
