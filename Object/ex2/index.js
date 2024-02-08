/* Read the code below, and answer:

const movie = {
name: "Auto da Compadecida",
year: 2000,
cast: [
"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
"Virginia Cavendish"
],
broadcastsToday: [
{channel: "Telecine", time: "21h"},
{channel: "Canal Brasil", time: "7pm"},
{channel: "Globo", time: "2pm"}
]
};
a) What is the code to print the name of the first actor/actress?

b) What is the code to print the name of the last actor/actress?

c) What is the code to display the array with all broadcasts today?

d) What is the code to display the movie's broadcast time on Canal Brasil?
 */

const film = {
  namee: "Auto da Compadecida",
  year: 2000,
  cast: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  broadcastsToday: [
    { chanel: "Telecine", time: "21h" },
    { chanel: "chanel Brasil", time: "19h" },
    { chanel: "Globo", time: "14h" },
  ],
};

console.log(film.cast[0]);
console.log(film.cast[film.cast.length - 1]);
console.log(film.broadcastsToday);
console.log(film.broadcastsToday[1].time);
