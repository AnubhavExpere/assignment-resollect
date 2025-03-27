import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import AddItemForm from "./components/AddItemForm";
import ItemTable from "./components/ItemTable";
import Navbar from "./components/NavBar";

function App() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState({ name: "", brand: "" });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get("/api/items/");
            setItems(response.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const createItem = async (newItem) => {
        try {
            await axios.post("/api/items/", newItem);
            fetchItems();
        } catch (error) {
            console.error("Error creating item:", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`/api/items/${id}/`);
            fetchItems();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const groupByCategory = () => {
        return items.reduce((groups, item) => {
            if (!groups[item.category]) groups[item.category] = [];
            groups[item.category].push(item);
            return groups;
        }, {});
    };

    return (
        <div style={styles.appContainer}>
            <Navbar />
            <SearchBar search={search} setSearch={setSearch} />
            <AddItemForm addItem={createItem} />
            <ItemTable groupedItems={groupByCategory()} search={search} deleteItem={deleteItem} />
        </div>
    );
}

const styles = {
    appContainer: {
        minHeight: "100vh",
        width: "100%",
        // padding: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#333",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
    },
};

export default App;
