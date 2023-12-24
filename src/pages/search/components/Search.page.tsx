import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { Book } from "../../../types/book";

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    try {
      const clientId = process.env.REACT_APP_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
      const query = encodeURIComponent(searchValue);

      const response = await axios.get(
        `v1/search/book.json?query=${query}&display=50&start=1`,
        {
          headers: {
            "X-Naver-Client-Id": clientId,
            "X-Naver-Client-Secret": clientSecret,
          },
        },
      );

      return response.data.items;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  const {
    data: books,
    isLoading,
    isError,
  } = useQuery(["books", searchValue], fetchData);

  return (
    <div className="App">
      <div>
        <h1>Book Search Results</h1>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        <ul>
          {books &&
            books.map((book: Book) => (
              <li key={book.link}>
                <Link to={`/book/${encodeURIComponent(book.title)}`}>
                  <img src={book.image} alt={book.title} />
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                  <p>{book.publisher}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
