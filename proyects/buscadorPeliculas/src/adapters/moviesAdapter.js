export const moviesAdapter = (data) => {

  if (!data) return [];
  const movies = data.map((movie) => {
    const { Title, Year, imdbID, Type, Poster } = movie;
    return {
      title: Title,
      year: Year,
      id: imdbID,
      type: Type,
      imagen: Poster,
    };
  
  })
  console.log("In moviesAdapter", movies)
  return movies
};


