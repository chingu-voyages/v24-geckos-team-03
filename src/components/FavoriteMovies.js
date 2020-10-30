import React, { useContext, useEffect, useState} from "react";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";

const FavoriteMovies = () => {
    const {allFavMovies} = useContext(Context);
     
    return (
        <>
            {allFavMovies.map(movie => {
                return (
                    <Movieboxes
                        key={movie.id}
                        title={movie.movieTitle}
                        imageSrc={movie.movieImage}
                    
                    />
                )
                
            })}
           
        </>
    )
}
//     <Movieboxes
//     key={movie.id}
//     title={movie.movieTitle}
//     imageSrc={movie.movieImage}
    
// />
        

    
export default FavoriteMovies;