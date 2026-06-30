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
  title: "Thomas",

  // Gli indizi e le risposte. clue = la domanda mostrata sotto "INFO".
  clues: [
    { number: 1, clue: "My name",                    answer: "THOMAS" },
    { number: 2, clue: "My surname",                 answer: "LANDO" },
    { number: 3, clue: "My brother call me",         answer: "PAVESINO" },
    { number: 4, clue: "What i mainly play",         answer: "FOOTBALL" },
    { number: 5, clue: "But i also play",            answer: "PADEL" },
    { number: 6, clue: "Principal hobbie",           answer: "PARTYING" },
    { number: 7, clue: "Where i mainly spend money", answer: "CLOTHES" },
    { number: 8, clue: "What is my talent",          answer: "NONE" },
  ],

  // Contatti mostrati sotto "CONTACT" (di solito restano questi: sono i tuoi).
  contact: {
    mail: "lando.andrea04@gmail.com",
    tel: "+393337216052",            // usato nel link "chiama"
    telDisplay: "+39(0)3337216052",  // come viene mostrato
    instagram: "andrelndo",
    instagramUrl: "https://instagram.com/andrelndo",
    year: 2026,
  },
};
