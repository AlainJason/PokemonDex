import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";
import pokeapi from "../img/pokeapi_256.3fa72200.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Navbar = () => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const navigate = useNavigate();

  function SearchClick() {
    navigate("/" + searchPokemon.toLowerCase());
    document.getElementById("outlined-size-small").value = "";
  }
  return (
    <div className="img_container">
      <img className="pokeapi_img" src={pokeapi} alt="" />
      <div className="Navbar_list">
        <TextField
          label="Search Pokemon"
          id="outlined-size-small"
          size="Normal"
          placeholder="Pokemon ID or Name"
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={SearchClick}>
          Search
        </Button>
        <span>
          <Link to="/" className="span">
            <AiFillHome size={30} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
