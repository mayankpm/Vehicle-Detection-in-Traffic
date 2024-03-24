# Vehicle-Detection-in-Traffic


## Description

This project aims to create a web-based application for uploading transportation-related images, such as traffic camera images, and performing object detection on them. Users will be able to upload images through a user-friendly interface, and the application will use machine learning models to detect and identify objects in the images, providing valuable insights for transportation planning and management. The application will also include features for viewing and analyzing the detected objects, making it a valuable tool for transportation professionals and enthusiasts alike.

## Getting Started

To run this project, follow these steps:

### Backend

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```

2. Build the Docker image:
   ```sh
   docker build -t <backend-image-name> .
   ```

3. Run the Docker container:
   ```sh
   docker run -p 5000:5000 <backend-image-name>
   ```

### Frontend

1. Navigate to the root directory (where the `Dockerfile` for the frontend is located):
   ```sh
   cd ..
   ```

2. Build the Docker image:
   ```sh
   docker build -t <frontend-image-name> .
   ```

3. Run the Docker container:
   ```sh
   docker run -p 5173:5173 <frontend-image-name>
   ```

Replace `<backend-image-name>` and `<frontend-image-name>` with your desired image names.

Examples:
![image](https://github.com/mayankpm/Vehicle-Detection-in-Traffic/assets/92316639/f5f22e2a-efb3-460b-be59-4b4881cc45bd)


## Usage

Please keep it simple.

## License

MIT License.

---
