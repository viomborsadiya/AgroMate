import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search";
const SearchInput = () => {
  // const [value, setValue] = useState(null)
  const [auth, setAuth] = useSearch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(auth);
      const data = await axios.get(`/api/v1/product/search/${auth?.keyword}`);
      // console.log(data);
      setAuth({ ...auth, results: data.data });
      navigate("/search");
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={auth?.keyword}
          onChange={(e) => setAuth({ ...auth, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
