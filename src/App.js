import React from "react";

// import "./App.css";
import "./CssFiles/AutoCompleteSearch.css";
import AutoCompleteSearch from "./Components/AutoCompeleteSearch";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div class="search-view form-group">
      <div class="header text-center">
        <h4>Auto complete search</h4>
      </div>

      <AutoCompleteSearch />
    </div>
  );
}

export default App;
