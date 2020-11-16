import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
<<<<<<< ours
import { Link, useHistory } from "react-router-dom";
import { useColorMode , Flex, Button, Input} from '@chakra-ui/core';

=======
import { useHistory } from "react-router-dom";
>>>>>>> theirs

function Search() {
//lightMode toggling
const {colorMode } = useColorMode();



  const history = useHistory();

  const {
    setSearchResults,
    searchQuery,
    setSearchQuery,
    setIsSearch,
    APIKEY
  } = useContext(Context);

  const inputEl = useRef(null);

  function searchSubmit(e) {
    e.preventDefault();

    setSearchQuery(inputEl.current.value);

    setIsSearch(true);

    history.push("/searchPage"); // Routes to search page on submit
    console.log(searchQuery);
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      try {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchQuery}`
          )
          .then(res => {
            setSearchResults(res.data.results);
            setIsSearch(true);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [APIKEY, searchQuery, setIsSearch, setSearchResults]);

<<<<<<< ours
    console.log(searchResults);
  }, [search]);


=======
>>>>>>> theirs
  return (
    <div className="search">
      <Flex onSubmit={searchSubmit}>
        <Input
          width = "300px"
          height = "35px"
          borderRadius = "30px"
          paddingLeft = "15px"
          background = "#fff"
          borderWidth = "2px"
          borderColor={colorMode === "light" ? "gray.400" : "#49c3fd"}
          focusBorderColor={colorMode === "light" ? "gray.600" : "blue.200"}
          marginRight = "75px"
          type="text"
          name="search"
          ref={inputEl}
<<<<<<< ours
          placeholder="Search movie here!"
        >
        </Input>
        <Button 
          width= "75px"
          height= "35px"
          borderRadius = "25px"
          color = {colorMode === "light" ? "#fff" : "#fff"}
          background = {colorMode === "light" ? "#4A5568" : "#49c3fd"}
          transitionProperty = "all"
          transitionDuration = "0.5s"
          position = "absolute"
          right = "132px"
          outline = "none"
          zIndex="33"
          _hover={{background : "#379fcf"}}
      
      ><i className="fas fa-search"
          transitionProperty= "all"
          transitionDuration= "0.5s"
          _hover={{ transform : "scale(1.5)",
            transitionProperty: "all",
            transitionDuration: "0.5s"}}
      ></i>
      </Button>
      
        
      </Flex>
=======
          placeholder="Search movies!"
        ></input>
        <button type="submit" name="button">
          <i className="fas fa-search"></i>
        </button>
      </form>
>>>>>>> theirs
    </div>
  );
}

export default Search;
