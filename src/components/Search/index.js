import React from "react";

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        style={{ padding: "0 10px" }}
        className="form-input"
        type="text"
        placeholder="Search Course"
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
