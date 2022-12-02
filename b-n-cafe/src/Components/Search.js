import React, {Components} from 'react';
import "./search.css";

export default function Search() {
    return (
        <div>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search for a menu item"></input>
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}