// Add "use client" at the top of your component file
"use client"; // This line indicates that this is a client component

import React, { useState, useRef, useEffect } from "react";

const KalamkariSimulator = () => {
    const [tool, setTool] = useState("brush");
    const [color, setColor] = useState("#000000");
    const [customCursor, setCustomCursor] = useState(false);
    const [isPainting, setIsPainting] = useState(false);
    const [shapes, setShapes] = useState([]);
    const [brushStrokes, setBrushStrokes] = useState([]); // Added to store brush strokes
    const [tempShape, setTempShape] = useState(null);
    const [shapeSize, setShapeSize] = useState(50);
    const [brushSize, setBrushSize] = useState(5); // Brush size state
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    // Set up the canvas when the component mounts
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF"; // Set initial background to white
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctxRef.current = ctx;
    }, []);

    // Draw cloth background
    const drawClothBackground = () => {
        const ctx = ctxRef.current;
        ctx.fillStyle = "#F5F5DC"; // Beige color for cloth
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };
    
    const clearCanvas = () => {
        setShapes([]); // Assuming shapes is your state holding all drawn shapes
        renderCanvas([]); // Clear the canvas
    };

    // Handle brush painting
    const startPainting = (e) => {
        if (tool === "brush") {
            setIsPainting(true);
            draw(e);
        } else if (tool === "dragCloth") {
            drawClothBackground(); // Change canvas to beige
        } else {
            startDraggingShape(e);
        }
    };

    const stopPainting = () => {
        setIsPainting(false);
        const ctx = ctxRef.current;
        ctx.beginPath(); // Reset path
    };

    const draw = (e) => {
        if (!isPainting || tool !== "brush") return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ctx = ctxRef.current;
        ctx.lineWidth = brushSize; // Set brush size dynamically
        ctx.lineCap = "round";
        ctx.strokeStyle = color;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    // Start dragging shape
    const startDraggingShape = (e) => {
        e.preventDefault();
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setTempShape({ tool, x, y, color, size: shapeSize });
    };

    const handleMouseMove = (e) => {
        if (isPainting) {
            draw(e); // Call draw if painting
        } else if (tempShape) {
            // If dragging shape, update its position
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setTempShape((prev) => ({ ...prev, x, y }));
            renderCanvas([...shapes, { ...tempShape, x, y }]);
        }
    };

    const handleMouseUp = (e) => {
        e.preventDefault();
        stopPainting(); // Stop painting on mouse up
        if (tempShape) {
            setShapes((prevShapes) => {
                const newShapes = [...prevShapes, tempShape];
                renderCanvas(newShapes);
                return newShapes;
            });
            setTempShape(null);
        }
    };

    // Render shapes and brush strokes on the canvas
    const renderCanvas = (shapes = [], strokes = []) => {
        const ctx = ctxRef.current;
    
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        drawClothBackground(); // Retain cloth background
    
        // Ensure strokes is defined and is an array
        if (strokes && Array.isArray(strokes)) {
            // Render brush strokes
            strokes.forEach((stroke) => {
                ctx.lineWidth = stroke.size;
                ctx.lineCap = "round";
                ctx.strokeStyle = stroke.color;
    
                ctx.beginPath();
                ctx.moveTo(stroke.x, stroke.y);
                ctx.lineTo(stroke.x + 1, stroke.y + 1); // Simulate continuous strokes
                ctx.stroke();
            });
        }
    
        // Render shapes
        shapes.forEach((shape) => {
            ctx.strokeStyle = shape.color;
            ctx.fillStyle = "transparent"; // Make shapes transparent (outlines only)
    
            if (shape.tool === "circle") {
                ctx.beginPath();
                ctx.arc(shape.x, shape.y, shape.size / 2, 0, Math.PI * 2, false);
                ctx.stroke();
            } else if (shape.tool === "oval") {
                ctx.beginPath();
                ctx.ellipse(shape.x, shape.y, shape.size, shape.size / 2, 0, 0, Math.PI * 2);
                ctx.stroke();
            } else if (shape.tool === "star") {
                drawStar(ctx, shape.x, shape.y, 5, shape.size, shape.size / 2);
            }
        });
    
        // Render temporary shape if any
        if (tempShape) {
            ctx.fillStyle = tempShape.color;
            ctx.fillStyle = "transparent"; // Transparent fill for temporary shape
            if (tempShape.tool === "circle") {
                ctx.beginPath();
                ctx.arc(tempShape.x, tempShape.y, tempShape.size / 2, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.stroke();
            } else if (tempShape.tool === "oval") {
                ctx.beginPath();
                ctx.ellipse(tempShape.x, tempShape.y, tempShape.size, tempShape.size / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            } else if (tempShape.tool === "star") {
                drawStar(ctx, tempShape.x, tempShape.y, 5, tempShape.size, tempShape.size / 2);
            }
        }
    };
    

    // Draw a star shape
    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
        let rot = (Math.PI / 2) * 3;
        const x = cx;
        const y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(x, y - outerRadius);

        for (let i = 0; i < spikes; i++) {
            ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
            rot += step;

            ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
            rot += step;
        }

        ctx.lineTo(x, y - outerRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    // Reset canvas to initial state
    const resetCanvas = () => {
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        drawClothBackground(); 
        setShapes([]); 
    };

    return (
        <div className="flex">
            {/* Side navigation bar */}
            <div className="w-1/4 bg-gray-200 p-4">
                <h2 className="text-xl mb-4 text-black">Tools</h2>

                {/* Brush Tool */}
                <button
                    onClick={() => {
                        setTool("brush");
                        setCustomCursor(true); // Change the cursor when brush is selected
                    }}
                    className={`px-4 py-2 mb-4 w-full ${tool === "brush" ? "bg-blue-500" : "bg-gray-300"} text-black`}
                >
                    Brush
                </button>

                {/* Shape Tools */}
                <button
                    onClick={() => { setTool("circle"); setTempShape(null); }}
                    onMouseDown={startDraggingShape} // Start dragging shape
                    className={`text-black px-4 py-2 mb-4 w-full ${tool === "circle" ? "bg-green-500" : "bg-gray-300"} text-white`}
                >
                    Circle
                </button>
                <button
                    onClick={() => { setTool("oval"); setTempShape(null); }}
                    onMouseDown={startDraggingShape} // Start dragging shape
                    className={`text-black px-4 py-2 mb-4 w-full ${tool === "oval" ? "bg-red-500" : "bg-gray-300"} text-white`}
                >
                    Oval
                </button>
                <button
                    onClick={() => { setTool("star"); setTempShape(null); }}
                    onMouseDown={startDraggingShape} // Start dragging shape
                    className={`text-black px-4 py-2 mb-4 w-full ${tool === "star" ? "bg-yellow-500" : "bg-gray-300"} text-white`}
                >
                    Star
                </button>

                {/* Color Picker */}
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full mb-4"
                />

                {/* Shape Size Slider */}
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={shapeSize}
                    onChange={(e) => setShapeSize(e.target.value)}
                    className="w-full mb-4"
                />
                <button
                    onClick={clearCanvas}
                    className="bg-red-500 text-white px-4 py-2"
                >
                    Clear Canvas
                </button>
                <button
                    onClick={resetCanvas}
                    className="bg-red-500 text-white px-4 py-2"
                >
                    New Canvas
                </button>
            </div>

            {/* Canvas */}
            <div className="relative w-3/4">
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    onMouseDown={startPainting}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        cursor: customCursor ? `url('D:\IITT\Sem 3\SE\simulator\web\web\Screenshot 2024-10-02 111421.png'), auto` : 'auto', // Change the cursor here
                    }}
                />
            </div>
        </div>
    );
};

export default KalamkariSimulator;
