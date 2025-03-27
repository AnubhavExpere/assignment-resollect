import React from "react";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Item Management</h1>
        </nav>
    );
};

const styles = {
    navbar: {
        background: "linear-gradient(135deg, #007bff, #0056b3)",
        padding: "15px 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    title: {
        margin: 0,
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fff",
    },
};

export default Navbar;
