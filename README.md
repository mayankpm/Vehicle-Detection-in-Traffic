# Vehicle-Detection-in-Traffic


## Description

Briefly describe your project here.

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

## Usage

Please keep it simple.

## License

MIT License.

---
