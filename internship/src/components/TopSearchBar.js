import React from "react";

class TopSearchBar extends React.Component {
  render() {
    return (
      <div class="top">
        <div class="image">
          <img
            className="profilepic"
            src={require("../images/profilepic/7.jpeg")}
            alt="Logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Write something here...."
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}
export default TopSearchBar;
