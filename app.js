function showItems( lItems){
    lItems.forEach(v => console.log(v));
}

function filterByYear( items, annoAntes, annoDespues ) {
    return items.filter(v => v.anno > annoAntes && v.anno < annoDespues);
}
function CountByCategory( items, genre) {
    let count = items.filter(v => v.genero === genre).length;
    console.log(count, " peliculas encontradas del genero: ", genre);
}


const peliculas1 = [
  {
    id: 1,
    titulo: "Titanic",
    director: "James Cameron",
    anno: 1997,
    genero: "Romance",
    duracion: 195
  },
  {
    id: 2,
    titulo: "Avatar",
    director: "James Cameron",
    anno: 2009,
    genero: "Ciencia ficción",
    duracion: 162
  },
  {
    id: 3,
    titulo: "Origen",
    director: "Christopher Nolan",
    anno: 2010,
    genero: "Ciencia ficción",
    duracion: 148
  },
  {
    id: 4,
    titulo: "Gladiator",
    director: "Ridley Scott",
    anno: 2000,
    genero: "Acción",
    duracion: 155
  },
  {
    id: 5,
    titulo: "El padrino",
    director: "Francis Ford Coppola",
    anno: 1972,
    genero: "Drama",
    duracion: 175
  },
  {
    id: 6,
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anno: 2014,
    genero: "Ciencia ficción",
    duracion: 169
  },
  {
    id: 7,
    titulo: "Joker",
    director: "Todd Phillips",
    anno: 2019,
    genero: "Drama",
    duracion: 122
  },
  {
    id: 8,
    titulo: "Toy Story",
    director: "John Lasseter",
    anno: 1995,
    genero: "Animación",
    duracion: 81
  },
  {
    id: 9,
    titulo: "Tiburón",
    director: "Steven Spielberg",
    anno: 1975,
    genero: "Terror",
    duracion: 124
  },
  {
    id: 10,
    titulo: "Rocky",
    director: "John G. Avildsen",
    anno: 1976,
    genero: "Deportes",
    duracion: 119
  }
];
const peliculas2 = [
  {
    id: 11,
    titulo: "Matrix",
    director: "Lana y Lilly Wachowski",
    anno: 1999,
    genero: "Ciencia ficción",
    duracion: 136
  },
  {
    id: 12,
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    anno: 1994,
    genero: "Drama",
    duracion: 142
  },
  {
    id: 13,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anno: 1994,
    genero: "Crimen",
    duracion: 154
  },
  {
    id: 14,
    titulo: "Los Vengadores",
    director: "Joss Whedon",
    anno: 2012,
    genero: "Acción",
    duracion: 143
  },
  {
    id: 15,
    titulo: "Coco",
    director: "Lee Unkrich",
    anno: 2017,
    genero: "Animación",
    duracion: 105
  },
  {
    id: 16,
    titulo: "Jurassic Park",
    director: "Steven Spielberg",
    anno: 1993,
    genero: "Aventura",
    duracion: 127
  },
  {
    id: 17,
    titulo: "Star Wars",
    director: "George Lucas",
    anno: 1977,
    genero: "Ciencia ficción",
    duracion: 121
  },
  {
    id: 18,
    titulo: "El rey león",
    director: "Roger Allers",
    anno: 1994,
    genero: "Animación",
    duracion: 88
  },
  {
    id: 19,
    titulo: "Regreso al futuro",
    director: "Robert Zemeckis",
    anno: 1985,
    genero: "Aventura",
    duracion: 116
  },
  {
    id: 20,
    titulo: "Piratas del Caribe",
    director: "Gore Verbinski",
    anno: 2003,
    genero: "Aventura",
    duracion: 143
  }
];

//showItems(peliculas1);
//showItems(peliculas2);

filmsYear = filterByYear(peliculas1, 2005, 2010);

console.log(filmsYear.forEach(v => console.log(v))); //TODO: No funciona revisar

filterByYear(peliculas1, 2010, 2015);
CountByCategory(peliculas1, "Ciencia ficción");
