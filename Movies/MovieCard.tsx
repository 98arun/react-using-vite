import "./Movie.css";
function MovieCard(props: any) {
  const { uname, image } = props;
  return (
    <div className="movie-container">
      <p className="movie-title">{uname}</p>
      <img className="movie-img" src={image} />
    </div>
  );
}

export default MovieCard;
