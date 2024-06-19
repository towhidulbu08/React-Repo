/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../Context";
import { getURL } from "../../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Ratings from "./Ratings";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = state.cartData.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "Add_To_Cart",
        payload: {
          ...movie,
        },
      });
    } else {
      console.error(
        `The Movie ${movie.title} Has Been Added To The Cart Already `
      );
    }
  }
  function handleShowModal(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onCartAdd={handleAddToCart}
        ></MovieDetailsModal>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a
          onClick={() => handleShowModal(movie)}
          className="w-full object-cover"
          href="#"
        >
          <img src={getURL(movie.cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Ratings value={movie.rating}></Ratings>
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
