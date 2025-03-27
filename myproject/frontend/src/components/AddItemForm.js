import React, { useState } from "react";

const AddItem = ({ addItem }) => {
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        category: "",
        price: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({ name: "", brand: "", category: "", price: "" }); 
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.heading}>Add New Item</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    value={formData.brand}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}> Add Item</button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "80%",
        minWidth: "max-content",
        margin: "20px auto",
        textAlign: "center",
    },
    heading: {
        fontSize: "22px",
        color: "#333",
        marginBottom: "15px",
    },
    form: {
        display: "grid",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
        transition: "border 0.3s ease",
    },
    inputHover: {
        border: "1px solid #007bff",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#ffffff",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        transition: "background 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default AddItem;
