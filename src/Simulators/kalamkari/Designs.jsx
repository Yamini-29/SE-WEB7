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
    { src: d7, alt: "Border 7" },
    { src: d8, alt: "Border 8" },
    { src: d9, alt: "Border 9" },
    { src: d10, alt: "Border 10" },
];

const Designs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { droppedImage } = location.state || {};
    const [selectedBorders, setSelectedBorders] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedBorders((prev) => {
            if (prev.includes(src)) {
                return prev.filter((border) => border !== src);
            } else {
                return [...prev, src];
            }
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveUploadedImage = () => {
        setUploadedImage(null);
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

    return (
        <div className="Desktop2" style={{ width: "100%", height: "100vh", position: "relative", background: "white", fontFamily: "Inter", padding: "20px", display: "flex" }}>
            <div style={{ flex: "1", maxHeight: "600px", marginRight: "20px", background: "#D9D9D9", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", overflowY: "auto" }}>
                <h2 className="text-black" style={{ textAlign: "center", marginBottom: "15px" }}>Tap to add Design</h2>
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

                <div style={{ marginTop: "20px", width: "100%" }}>
                    {/* Add Your Design Box or Image Preview */}
                    {uploadedImage ? (
                        <div style={{
                            width: "100%",
                            height: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "5px"
                        }}>
                            <img src={uploadedImage} alt="Uploaded Design" style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                borderRadius: "5px"
                            }} />
                            <button
                                onClick={handleRemoveUploadedImage}
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    padding: "5px 10px",
                                    backgroundColor: "#FF0000",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                border: "2px dashed #4CAF50",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5px",
                                cursor: "pointer",
                                margin: "10px 0",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                            onClick={() => document.getElementById("file-input").click()}
                        >
                            <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                            />
                            <span style={{ fontSize: "24px", color: "#4CAF50" }}>+</span>
                            <span style={{ marginLeft: "10px", fontSize: "18px", color: "#4CAF50" }}>Add Your Design</span>
                        </div>
                    )}
                </div>
            </div>

            <div
                id="capture"
                style={{
                    flex: "3",
                    height: "600px",
                    background: "#D9D9D9",
                    borderRadius: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                }}
            >
                {droppedImage && (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        background: `url(${droppedImage}) center/cover`,
                        borderRadius: "10px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }} />
                )}

                {uploadedImage && (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        background: `url(${uploadedImage}) center/cover`,
                        borderRadius: "10px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1
                    }} />
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
            </div>
        </div>
    );
};

export default Designs;
