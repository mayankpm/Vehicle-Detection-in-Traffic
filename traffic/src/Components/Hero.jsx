import { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

export default function Hero() {
    const [previewSource, setPreviewSource] = useState();
    const [processedImage, setProcessedImage] = useState();

    const fileSelectedHandler = event => {
        const file = event.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const fileUploadHandler = async () => {
        if (!previewSource) {
            alert("Please select a file before uploading.");
            return;
        }
    
        try {
            // Send the image to the Flask API for processing
            await axios.post('http://127.0.0.1:5000/send-image', {
                image: previewSource.split(',')[1]
            });

            // Retrieve the processed image from the Flask API
            const response = await axios.get('http://127.0.0.1:5000/detected-objects');
            if (response.status === 200) {
                const processedImageStr = response.data.image;
                setProcessedImage(processedImageStr);
            } else {
                alert("Failed to process the image.");
            }
        } catch (error) {
            console.error("Error processing the image:", error);
            alert("Error processing the image.");
        }
    };
    return (
        <>
            <Navbar navPosition={{position: 'fixed'}} navTextStyle={{color: 'white'}} navBGColor='white' navIcon={{background: 'white'}} navCartIcon='public\cart.svg' navSearchIcon='search-black.svg'/>
            <div className="flex flex-col items-center justify-between">
                <div className="flex justify-center items-center w-full">
                    {previewSource && (
                        <div className="w-1/2">
                            <img className="preview-image flex-grow mx-auto block w-full h-auto" src={previewSource} />
                        </div>
                    )}
                    {processedImage && (
                        <div className="w-1/2">
                            <img className="flex-grow mx-auto block w-full h-auto" src={`data:image/jpeg;base64,${processedImage}`} />
                        </div>
                    )}
                </div>
            </div>
                <div className="button-lower-tag fixed w-full mt-2">
                    <div className="flex justify-center">
                        <input type="file" onChange={fileSelectedHandler} className="" />
                        <button onClick={fileUploadHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Upload and See Results
                        </button>
                    </div>
                </div>
        </>
    );
}
