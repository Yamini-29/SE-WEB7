import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import silk from '../../assets/silkcloth.png';
import cotton from '../../assets/cotton.png';
import image3 from '../../assets/sui.jpg';

const Simulations = () => {
    const [droppedImage, setDroppedImage] = useState(null);
    const navigate = useNavigate();

    const handleDragStart = (event) => {
        event.dataTransfer.setData("imageSrc", event.target.src);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const imageSrc = event.dataTransfer.getData("imageSrc");
        setDroppedImage(imageSrc);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleAddBorderClick = () => {
        navigate("/border", { state: { droppedImage } }); // the dropped image as state
    };

    return (
        <div
            className="Desktop2"
            style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                background: "white",
                fontFamily: "Inter",
                padding: "20px",
                display: "flex",
            }}
        >
            {/* Sidebar for Background Selection */}
            <div
                style={{
                    flex: "1",
                    maxHeight: "600px",
                    marginRight: "20px",
                    background: "black",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    overflowY: "auto",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Drag and Drop the Cloth</h2>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                        style={{
                            width: "80%",
                            margin: "10px 0",
                            borderRadius: "5px",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.2s",
                        }}
                        src={silk}
                        alt="Image 1"
                        draggable
                        onDragStart={handleDragStart}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} 
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <img
                        style={{
                            width: "80%",
                            margin: "10px 0",
                            borderRadius: "5px",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", 
                            transition: "transform 0.2s",
                        }}
                        src={cotton}
                        alt="Image 2"
                        draggable
                        onDragStart={handleDragStart}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    {/* <img
                        style={{
                            width: "80%",
                            margin: "10px 0",
                            borderRadius: "5px",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.2s",
                        }}
                        src={image3}
                        alt="Image 3"
                        draggable
                        onDragStart={handleDragStart}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    /> */}
                </div>
            </div>

            {/* Drop Area for Image */}
            <div
                className="Rectangle1"
                style={{
                    flex: "3",
                    height: "600px",
                    background: "black",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <div
                    className="DropHere"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        background: droppedImage ? `url(${droppedImage}) center/cover` : "#black",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {!droppedImage && (
                        <span
                            style={{
                                color: "black",
                                fontSize: "3vw",
                                fontWeight: "400",
                                textAlign: "center",
                                padding: "20px",
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                borderRadius: "5px",
                            }}
                        >
                            DROP HERE
                        </span>
                    )}
                </div>
            </div>

            <button
                onClick={handleAddBorderClick}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                Add Border
            </button>
        </div>
    );
};

export default Simulations;
