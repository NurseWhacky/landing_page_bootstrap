"use strict";

const json = "assets/data/reviews.json";

const fetchData = function () {
  return fetch(json)
    .then((response) => {
      if (!response.ok) {
        throw new error("Si è verificato un errore.");
      }
      return response.json();
    })
    .catch((err) => {
      console.error("Non è stato possibile recuperare le recensioni", err);
    });
};
