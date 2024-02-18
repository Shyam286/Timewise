import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce"; // Import debounce function from lodash library
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  // Debounce the handleChange function
  const debouncedFetchData = debounce(fetchData, 300); // Adjust the delay time as needed

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value); // Call debounced function instead of fetchData directly
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
