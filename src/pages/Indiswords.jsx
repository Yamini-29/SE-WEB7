import React, { useState } from 'react';
import katarImage from '../assets/katar.png'; // Add a thumbnail image for the Katar
import katzbalgerImage from '../assets/katzbalger.png'; // Add a thumbnail image for the Katzbalger

const Indiswords = () => {
    const [showKatarModel, setShowKatarModel] = useState(false);
    const [showSwordModel, setShowSwordModel] = useState(false);

    const handleKatarClick = () => {
        setShowKatarModel(true);
    };

    const handleSwordClick = () => {
        setShowSwordModel(true);
    };

    const closeKatarModel = () => {
        setShowKatarModel(false);
    };

    const closeSwordModel = () => {
        setShowSwordModel(false);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>

            {/* Title for Katar */}
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>3D Indian Katar</h2>

            {/* Card with Thumbnail for Indian Katar */}
            <div onClick={handleKatarClick} style={{
                width: '300px',
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                backgroundImage: `url(${katarImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto 10px auto',
                transition: 'transform 0.2s',
            }}></div>

            {/* Title below the thumbnail for Katar */}
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Indian Katar</p>

            {/* Modal for Indian Katar */}
            {showKatarModel && (
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
                        <button onClick={closeKatarModel} style={{
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
                            title="Indian Katar"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/c315ac778e2a4ef7a18c3903f6c8c885/embed"
                            style={{ width: '100%', height: '500px', borderRadius: '8px' }}
                        ></iframe>
                        <p style={{
                            fontSize: '14px',
                            fontWeight: 'normal',
                            marginTop: '10px',
                            color: '#555',
                            textAlign: 'center',
                        }}>
                            <a href="https://sketchfab.com/3d-models/indian-katar-c315ac778e2a4ef7a18c3903f6c8c885?utm_medium=embed&utm_campaign=share-popup&utm_content=c315ac778e2a4ef7a18c3903f6c8c885"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Indian Katar
                            </a> by <a href="https://sketchfab.com/Peter.Nox?utm_medium=embed&utm_campaign=share-popup&utm_content=c315ac778e2a4ef7a18c3903f6c8c885"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Peter Nox
                            </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=c315ac778e2a4ef7a18c3903f6c8c885"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Sketchfab
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {/* Title for Sword Katzbalger */}
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '30px', marginBottom: '15px', color: '#333' }}>3D Sword Katzbalger</h2>

            {/* Card with Thumbnail for Sword Katzbalger */}
            <div onClick={handleSwordClick} style={{
                width: '300px',
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                backgroundImage: `url(${katzbalgerImage})`, // Image for Sword Katzbalger
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0 auto 10px auto',
                transition: 'transform 0.2s',
            }}></div>

            {/* Title below the thumbnail for Sword Katzbalger */}
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Sword Katzbalger</p>

            {/* Modal for Sword Katzbalger */}
            {showSwordModel && (
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
                        <button onClick={closeSwordModel} style={{
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
                            title="Sword Katzbalger"
                            frameBorder="0"
                            allowFullScreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            src="https://sketchfab.com/models/684e0260118d49cb8c8b007e14efad6a/embed"
                            style={{ width: '100%', height: '500px', borderRadius: '8px' }}
                        ></iframe>
                        <p style={{
                            fontSize: '14px',
                            fontWeight: 'normal',
                            marginTop: '10px',
                            color: '#555',
                            textAlign: 'center',
                        }}>
                            <a href="https://sketchfab.com/3d-models/sword-katzbalger-684e0260118d49cb8c8b007e14efad6a?utm_medium=embed&utm_campaign=share-popup&utm_content=684e0260118d49cb8c8b007e14efad6a"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                Sword Katzbalger
                            </a> by <a href="https://sketchfab.com/FeSSvG?utm_medium=embed&utm_campaign=share-popup&utm_content=684e0260118d49cb8c8b007e14efad6a"
                                target="_blank"
                                rel="nofollow"
                                style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                                FeSSvG
                            </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=684e0260118d49cb8c8b007e14efad6a"
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
};

export default Indiswords;
