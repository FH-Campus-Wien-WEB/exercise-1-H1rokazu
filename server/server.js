const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {

  // Movie Data in JSON
  const movies = [
    {
      "Title": "Dune: Part Two",
      "Released": "2024-03-01",
      "Runtime": 166,
      "Genres": ["Action", "Adventure", "Drama"],
      "Directors": ["Denis Villeneuve"],
      "Writers": ["Denis Villeneuve", "Jon Spaihts", "Frank Herbert"],
      "Actors": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      "Plot": "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
      "Poster": "https://preview.redd.it/official-poster-for-dune-part-two-v0-99a79xg2yfxa1.jpg?auto=webp&s=06487fa78a1fe075161c518bd50993e35d394c25",
      "Metascore": 79,
      "imdbRating": 8.6
    },
    {
      "Title": "Trainspotting",
      "Released": "1996-08-09",
      "Runtime": 93,
      "Genres": ["Drama"],
      "Directors": ["Danny Boyle"],
      "Writers": ["Irvine Welsh", "John Hodge"],
      "Actors": ["Ewan McGregor", "Ewen Bremner", "Jonny Lee Miller"],
      "Plot": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
      "Poster": "https://www.fbw-filmbewertung.com/uploads/fbwdb_film/poster/c3f3d9a3a8918eb0120e2570e2051a6dee7c39f5.jpg",
      "Metascore": 83,
      "imdbRating": 8.1
    },
    {
      "Title": "Tropic Thunder",
      "Released": "2008-08-13",
      "Runtime": 107,
      "Genres": ["Action", "Comedy", "War"],
      "Directors": ["Ben Stiller"],
      "Writers": ["Justin Theroux", "Ben Stiller", "Etan Cohen"],
      "Actors": ["Ben Stiller", "Jack Black", "Robert Downey Jr."],
      "Plot": "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_.jpg",
      "Metascore": 71,
      "imdbRating": 7.1
    }
  ];

  // Send array as valid json to client
  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

