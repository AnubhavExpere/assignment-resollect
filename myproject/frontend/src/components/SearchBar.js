import React, { useState } from "react";

const SearchBar = ({ search, setSearch }) => {
    const [searchType, setSearchType] = useState("name"); 

    const handleSearchChange = (e) => {
        setSearch({ ...search, [searchType]: e.target.value });
    };

    return (
        <div style={styles.searchContainer}>
            <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.select}
            >
                <option value="name">Search by Name</option>
                <option value="brand">Search by Brand</option>
            </select>
            <input
                type="text"
                placeholder={`Enter ${searchType}...`}
                value={search[searchType] || ""}
                onChange={handleSearchChange}
                style={styles.input}
            />
        </div>
    );
};

const styles = {
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "5%",
        padding: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginBottom: "20px",
        minWidth: "max-content",
        maxWidth: "40%",
        margin: "10px auto",
    },
    select: {
        padding: "10px",
        borderRadius: "8px",
        border: "2px solid #007bff",
        backgroundColor: "#f8f9fa",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "2px solid #007bff",
        width: "40%",
        fontSize: "16px",
        outline: "none",
        transition: "all 0.3s ease",
    },
};

export default SearchBar;
