import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import d1 from '../../assets/1.png';
import d2 from '../../assets/2.png';
import d3 from '../../assets/3.png';
import d4 from '../../assets/4.png';
import d5 from '../../assets/5.png';
import d6 from '../../assets/6.png';
import d7 from '../../assets/7.png';
import d8 from '../../assets/8.png';
import d9 from '../../assets/9.png';
import d10 from '../../assets/10.png';

const borderImages = [
    { src: d1, alt: "Border 1" },
    { src: d2, alt: "Border 2" },
    { src: d3, alt: "Border 3" },
    { src: d4, alt: "Border 4" },
    { src: d5, alt: "Border 5" },
    { src: d6, alt: "Border 6" },
    { src: "https://via.placeholder.com/150?text=Border+3", alt: "Border last" },
];

const Border = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { droppedImage } = location.state || {};
    const [selectedBorders, setSelectedBorders] = useState([]);

    const handleImageClick = (src) => {
        setSelectedBorders((prev) => {
            if (prev.includes(src)) {
                return prev.filter((border) => border !== src);
            } else {
                return [...prev, src];
            }
        });
    };

    const saveImage = () => {
        const element = document.getElementById("capture");
        html2canvas(element).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = "combined-image.png";
            link.click();
        });
    };

    const handleWatchIn3D = () => {
        const element = document.getElementById("capture");
        html2canvas(element).then((canvas) => {
            const link = canvas.toDataURL("image/png");
            // Navigate to the 3D simulator
            navigate("/3dsim", { 
                state: { 
                    backgroundImage: droppedImage, 
                    combinedImage: link // Pass the combined image
                } 
            });
        });
    };

    return (
        <div className="Desktop2" style={{ width: "100%", height: "100vh", position: "relative", background: "white", fontFamily: "Inter", padding: "20px", display: "flex" }}>
            <div style={{ flex: "1", maxHeight: "600px", marginRight: "20px", background: "#D9D9D9", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", overflowY: "auto" }}>
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Select Border</h2>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {borderImages.map((image) => (
                        <img
                            key={image.alt}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => handleImageClick(image.src)}
                            style={{
                                width: "80%",
                                margin: "10px 0",
                                borderRadius: "5px",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                                transition: "transform 0.2s",
                                border: selectedBorders.includes(image.src) ? "2px solid #4CAF50" : "none",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div
                id="capture"
                style={{ flex: "3", height: "600px", background: "#D9D9D9", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
            >
                {droppedImage && (
                    <div style={{ width: "100%", height: "100%", background: `url(${droppedImage}) center/cover`, borderRadius: "10px", position: "absolute", top: 0, left: 0, zIndex: 1 }} />
                )}

                {selectedBorders.map((borderSrc, index) => (
                    <img
                        key={index}
                        src={borderSrc}
                        alt="Selected Border"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            pointerEvents: "none",
                            zIndex: 2,
                        }}
                    />
                ))}
            </div>

            <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                <button
                    onClick={saveImage}
                    style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}
                >
                    Save Image
                </button>
                <button
                    onClick={handleWatchIn3D}
                    style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}
                >
                    Watch in 3D
                </button>
            </div>
        </div>
    );
};

export default Border;
