import React, {Components} from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";


export default function Search() {
    return (
        <div>
            <div class="wrap">
                <div class="search">
                    <label htmlFor="Search">Search Here</label>
                    <input id = "Search" type="text" class="searchTerm" placeholder="Search for a menu item"></input>
                    <button type="submit" className="searchButton">
                        {/* <i><SearchIcon /></i> */}
                        <i>Search</i>
                    </button>
                </div>
            </div>
        </div>
    )
}
