import React, { useContext, useEffect, useState} from "react";
import { Context } from "../Context";
import Movieboxes from "../components/Movieboxes";

const FavoriteMovies = () => {
    const {allFavMovies} = useContext(Context);
    
      //Check for duplicate entries on the database before adding a movie.

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
                            
                            />
                        )
                        
                    })}
            </div>
        </>
    )
                      
}
//     <Movieboxes
//     key={movie.id}
//     title={movie.movieTitle}
//     imageSrc={movie.movieImage}
    
// />
   

    
export default FavoriteMovies;