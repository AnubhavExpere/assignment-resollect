import React from "react";

const ItemTable = ({ groupedItems, search, deleteItem }) => {
    return (
        <div >
            {Object.entries(groupedItems).map(([category, items]) => {
                const filteredItems = items.filter(
                    (item) =>
                        item.name.toLowerCase().includes(search.name.toLowerCase()) &&
                        item.brand.toLowerCase().includes(search.brand.toLowerCase())
                );

                if (filteredItems.length === 0) return null;

                return (
                    <div key={category} style={styles.categoryContainer}>
                        <h3 style={styles.categoryHeading}>{category}</h3>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Brand</th>
                                    <th style={styles.th}>Price</th>
                                    <th style={styles.th}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((item) => (
                                    <tr key={item.id}>
                                        <td style={styles.td}>{item.name}</td>
                                        <td style={styles.td}>{item.brand}</td>
                                        <td style={styles.td}>${item.price}</td>
                                        <td style={styles.td}>
                                            <button onClick={() => deleteItem(item.id)} style={styles.deleteButton}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    categoryContainer: { 
        padding: "10px 10px",
        maxWidth: "80%",
        minWidth: "300px",
        margin: "20px auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",},
    categoryHeading: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        marginBottom: "10px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "10px",
        border: "1px solid #ddd",
    },
    th: {
        backgroundColor: "#f4f4f4",
        padding: "12px",
        textAlign: "center",
        borderBottom: "2px solid #ddd",
    },
    td: {
        padding: "10px",
        textAlign: "center",
        borderBottom: "1px solid #ddd",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default ItemTable;
