import { perfumelist } from "./Config";
import PerfumeCard from "./PerfumeCard";

import { useState } from "react";


function filterData (searchText, perfumes) {
    const filteredData = perfumes.filter((perfume) =>
        perfume.title.includes(searchText)
    );
    return filteredData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [perfumes, setPerfumes] = useState(perfumelist);

    const handleSearch = () => {
        const filteredData = filterData(searchText, perfumelist);
        setPerfumes(filteredData);
    };

    return  (
        <>
        
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={handleSearch}
                    
                >
                    Search
                </button>
            </div>
            <div className="perfume-list">
                {perfumes.map(perfume => <PerfumeCard key={perfume.title} {...perfume} />)}
            </div>
        </>
    );
};

export default Body;
