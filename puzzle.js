// ============================================================================
//  PUZZLE.JS — L'UNICO FILE DA MODIFICARE PER CREARE UN CRUCIVERBA
// ============================================================================
//
//  Per fare il cruciverba di una nuova persona, cambia solo i valori qui sotto
//  e ricarica la pagina: la griglia (portrait + landscape) e il footer con gli
//  indizi si rigenerano da soli, in automatico.
//
//  Regole per le risposte (answer):
//   - una sola parola, senza spazi
//   - vengono messe in MAIUSCOLO in automatico
//   - le parole devono CONDIVIDERE QUALCHE LETTERA tra loro, altrimenti il
//     cruciverba non puo incrociarsi (in locale, con ?dev, vedrai un avviso)
//
//  Numero di indizi: libero (il footer si divide da solo in due colonne).
// ============================================================================

const PUZZLE = {
  // Titolo della scheda del browser.
  title: "Ilaria",

  // Gli indizi e le risposte. clue = la domanda mostrata sotto "INFO".
  clues: [
    { number: 1, clue: "Il mio nome",                answer: "ILARIA" },
    { number: 2, clue: "Il mio pregio è essere",     answer: "FEMMINA" },
    { number: 3, clue: "Cosa studio?",               answer: "FARMACIA" },
    { number: 4, clue: "Il mio sogno è fare",        answer: "SOLDI" },
    { number: 5, clue: "La mia passione è la",       answer: "PALLAVOLO" },
    { number: 6, clue: "Ma anchre la",               answer: "DOLCEVITA" },
    { number: 7, clue: "Ed i? (sus)",                answer: "BAMBINI" },
    { number: 8, clue: "Ho un figlio, il mio...",    answer: "GATTO" },
  ],

  // Contatti mostrati sotto "CONTACT" (di solito restano questi: sono i tuoi).
  contact: {
    mail: "lando.ilaria04@gmail.com",
    tel: "+393337341336",            // usato nel link "chiama"
    telDisplay: "+39 3337341336",  // come viene mostrato
    instagram: "ilandolaria",
    instagramUrl: "https://instagram.com/ilandolaria",
    year: 2026,
  },
};
