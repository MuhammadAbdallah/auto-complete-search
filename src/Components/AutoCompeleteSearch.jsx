import React, { Component } from "react";
import countries from "../data/Countries.js";
import "../CssFiles/AutoCompleteSearch.css";
class AutoCompleteSearch extends Component {
  state = {
    text: "",
    suggestions: [],
  };

  onTextChange = (e) => {
    const text = e.target.value;
    let suggestions = [];
    if (text.length > 0) {
      const reg = new RegExp(`^${text}`, "i");
      //   const reg = new RegExp(`^${value}`, "i");
      suggestions = countries.sort().filter((country) => reg.test(country));
    }

    this.setState(() => ({
      suggestions,
      text,
    }));
    console.log(suggestions);
  };

  onSuggestionSelected = (item) => {
    this.setState(() => ({
      suggestions: [],
      text: item,
    }));
  };
  renderSuggestions() {
    if (this.state.suggestions === 0) {
      return null;
    } else {
      return (
        <ul className="list-group">
          {this.state.suggestions.map((item, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => this.onSuggestionSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }

  showSuggNum() {
    if (this.state.suggestions.length === 0) {
      return null;
    } else {
      return (
        <span className="sugg-span ">
          suggestions :{" "}
          <span className="badge m-1">{this.state.suggestions.length}</span>
        </span>
      );
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Search for acountry"
          onChange={this.onTextChange}
          value={this.state.text}
        />
        {this.showSuggNum()}
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteSearch;
