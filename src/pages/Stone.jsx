import React, { useState } from 'react';
import stonessImage from '../assets/stoness.jpg';
import lordganeshaImage from '../assets/lordganesha.png';
import lordshivaImage from '../assets/lordshiva.png'; // Import the image

const Stone = () => {
    const [showModel, setShowModel] = useState(false);
    const [showSecondModel, setShowSecondModel] = useState(false);

    const handleCardClick = () => {
        setShowModel(true);
    };

    const handleSecondCardClick = () => {
        setShowSecondModel(true);
    };

    const closeModel = () => {
        setShowModel(false);
    };

    const closeSecondModel = () => {
        setShowSecondModel(false);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>

            {/* Title */}
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>3D Stone Carvings</h2>


            {/* Card with Thumbnail for Dancing Ganesha */}
            <div onClick={handleCardClick} style={{
                width: '300px',
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                backgroundImage: `url(${lordganeshaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto 20px auto',
                transition: 'transform 0.2s',
            }}>
            </div>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Lord Ganesha</p>


            {/* Card with Thumbnail for Shiva Nataraja */}
            <div onClick={handleSecondCardClick} style={{
                width: '300px',
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                backgroundImage: `url(${lordshivaImage})`, // Use the same image or a different one if available
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto',
                transition: 'transform 0.2s',
            }}></div>

            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Lord Shiva</p>

            {/* Modal for Dancing Ganesha */}
            {showModel && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    padding: '20px',
                }}>
                    <div style={{
                        position: 'relative',
                        width: '90%',
                        maxWidth: '800px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '15px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                        transform: 'translateX(20px)',
                    }}>
                        <button onClick={closeModel} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            fontSize: '24px',
                            background: 'none',
                            border: 'none',
                            color: '#666',
                            cursor: 'pointer',
                            transition: 'color 0.2s',
                        }}>&times;</button>
                        <iframe
                            title="Dancing Ganesha, Brit. Mus. / North India"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/408ac4696cdf4a4d9aec6257f568872b/embed"
                            style={{ width: '100%', height: '500px', borderRadius: '8px' }}
                        ></iframe>
                        <p style={{
                            fontSize: '14px',
                            fontWeight: 'normal',
                            marginTop: '10px',
                            color: '#555',
                            textAlign: 'center',
                        }}>
                            <a href="https://sketchfab.com/3d-models/dancing-ganesha-brit-mus-north-india-408ac4696cdf4a4d9aec6257f568872b?utm_medium=embed&utm_campaign=share-popup&utm_content=408ac4696cdf4a4d9aec6257f568872b"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Dancing Ganesha, Brit. Mus. / North India
                            </a> by <a href="https://sketchfab.com/nebulousflynn?utm_medium=embed&utm_campaign=share-popup&utm_content=408ac4696cdf4a4d9aec6257f568872b"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Thomas Flynn
                            </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=408ac4696cdf4a4d9aec6257f568872b"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Sketchfab
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {/* Modal for Shiva Nataraja */}
            {showSecondModel && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    padding: '20px',
                }}>
                    <div style={{
                        position: 'relative',
                        width: '90%',
                        maxWidth: '800px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '15px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                        transform: 'translateX(20px)',
                    }}>
                        <button onClick={closeSecondModel} style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            fontSize: '24px',
                            background: 'none',
                            border: 'none',
                            color: '#666',
                            cursor: 'pointer',
                            transition: 'color 0.2s',
                        }}>&times;</button>
                        <iframe
                            title="Shiva Nataraja, Lord of the Dance"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/227d1524875042ce90176129ba98de6c/embed"
                            style={{ width: '100%', height: '500px', borderRadius: '8px' }}
                        ></iframe>
                        <p style={{
                            fontSize: '14px',
                            fontWeight: 'normal',
                            marginTop: '10px',
                            color: '#555',
                            textAlign: 'center',
                        }}>
                            <a href="https://sketchfab.com/3d-models/shiva-nataraja-lord-of-the-dance-227d1524875042ce90176129ba98de6c?utm_medium=embed&utm_campaign=share-popup&utm_content=227d1524875042ce90176129ba98de6c"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Shiva Nataraja, Lord of the Dance
                            </a> by <a href="https://sketchfab.com/artsmia?utm_medium=embed&utm_campaign=share-popup&utm_content=227d1524875042ce90176129ba98de6c"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Minneapolis Institute of Art
                            </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=227d1524875042ce90176129ba98de6c"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Sketchfab
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Stone;
