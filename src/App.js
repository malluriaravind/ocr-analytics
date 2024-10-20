import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrResult, setOcrResult] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));  // Generate the image preview URL
  };

  const handleOcrAnalyze = async () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    // Replace with your Azure Computer Vision endpoint and key
    const endpoint = 'https://ocr-analytics.cognitiveservices.azure.com/';
    const subscriptionKey = 'ed89db436efe4f4b88d2c318dd4824a8';

    try {
      const response = await axios.post(
        `${endpoint}/vision/v3.2/read/analyze`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
          },
        }
      );
      const operationLocation = response.headers['operation-location'];

      // Wait for the analysis to complete
      setTimeout(async () => {
        const analysis = await axios.get(operationLocation, {
          headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
          },
        });

        // Extracting only text from the readResults
        const textLines = analysis.data.analyzeResult.readResults
          .map((page) => page.lines.map((line) => line.text).join('\n'))
          .join('\n');

        setOcrResult(textLines);  // Store the plain text result
      }, 5000);
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">OCR Analytics Page</div>
      <div className="steps-container">
        <div className="step">
          <h3>Step 1</h3>
          <input type="file" onChange={handleImageChange} />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Uploaded Preview" />
            </div>
          )}
          <button onClick={handleOcrAnalyze}>Select Image</button>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <button onClick={handleOcrAnalyze}>OCR Analyze</button>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <div className="output">
            <textarea
              value={ocrResult ? ocrResult : 'OCR Categories Output'}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
