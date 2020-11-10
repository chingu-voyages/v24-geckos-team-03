import React, { useContext, useEffect, useState} from "react";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";
import MovieDetails from "./MovieDetails";
import { useDisclosure } from "@chakra-ui/core";

const FavoriteMovies = () => {
    const [movieId, setMovieId] = useState(null);
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    function onHandleMovieClick(id) {
        setMovieId(id);
        onOpen();
      }

    const {allFavMovies} = useContext(Context);



    //styles for the grid
    const gridStyles = {
        maxWidth: "1200px",
        marginTop: "10%",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      };

    return (
        <>
            <div className="container" style={gridStyles}>
                {allFavMovies.map(movie => {
                        return (
                            <Movieboxes
                                key={movie.id}
                                title={movie.movieTitle}
                                imageSrc={movie.movieImage}
                                onClick={() => onHandleMovieClick(movie.id)}
                            />
                        )
                        
                    })}
            </div>
            <MovieDetails isOpen={isOpen} onClose={onClose} id={movieId} />
        </>
    )
                      
}
//     <Movieboxes
//     key={movie.id}
//     title={movie.movieTitle}
//     imageSrc={movie.movieImage}
    
// />
   

    
export default FavoriteMovies;