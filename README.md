
# OCR Analytics Documentation

This documentation covers the entire OCR Analytics project, from setting up the frontend to using Azure AI for Optical Character Recognition (OCR) and displaying the results. 

## Project Overview

This project demonstrates how to integrate Azure's Computer Vision API into a React application for extracting text from uploaded images using Optical Character Recognition (OCR). The extracted text is then displayed in a structured format on the frontend.

### Key Features:

1. **Image Upload**: Users can upload an image (e.g., a photo ID).
2. **Image Preview**: The uploaded image is shown in the interface.
3. **OCR Analysis**: The image is sent to Azure AI's Computer Vision API for text extraction.
4. **Text Output**: The extracted text is displayed in a text box after analysis.

---

## 1. Frontend Design

The frontend layout follows a three-step process:

1. **Step 1**: Upload an image.
2. **Step 2**: Perform OCR analysis.
3. **Step 3**: Display the extracted text.

The layout mimics the provided design and is styled using CSS.

### Uploaded Image:
![Result](ocr_result_image.png)

---

## 2. Backend Integration with Azure AI

The project leverages Azure's Computer Vision API to perform OCR. Follow these steps to set up and use Azure AI:

### Set Up Azure Computer Vision Resource

1. Log in to the [Azure Portal](https://portal.azure.com/).
2. Click **Create a resource** and search for **Computer Vision**.
3. Set up a new Computer Vision resource.
4. After the resource is created, go to **Keys and Endpoint** and copy the key and endpoint for use in the React app.

### API Request to Azure Computer Vision

In the app, the image file is sent to the Computer Vision API, which processes the image and returns the extracted text.

---

## 3. Extracted Text from OCR

Below is the result of the OCR process after analyzing the uploaded image:

### Extracted Text:

```
Pennsylvania
IDENTIFICATION CARD
visitPA.com
USA
NOT FOR REAL ID PURPOSES
99 999 999
000
4d IDN:
DUPS: 00
3 DOB:
01/07/1973
SAMPLE
2 ANDREW JASON
8 123 MAIN STREET
APT. 1
HARRISBURG, PA 17101-0000
4b EXP: 01/31/2026
4a ISS:
01/07/2022
15 SEX: M 18 EYES: BRO
ABERTY
16 HGT: 5'-11"
Andrew Sample
ID
SAMPLE
5 DD:1234567890123
456789012345
ORGAN DONOR
```

---

## Conclusion

This project demonstrates how to integrate Azure AI's Computer Vision API with a React frontend to perform OCR on images and display the extracted text. The uploaded image is displayed on the frontend, and the extracted text is shown in a text box after analysis.

