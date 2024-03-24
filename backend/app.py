from flask import Flask, jsonify, request
from flask_cors import CORS
import base64
import cv2
import numpy as np
from car_detection import detect_cars
# Import the detect_cars function from car_detection.py

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Global variable to store the processed image
processed_image_str = None




@app.route('/send-image', methods=['POST'])
def send_image():
    print("Received image for processing.")
    data = request.get_json()
    img_str = data['image']

    print("Decoding base64 image string.")
    img_bytes = base64.b64decode(img_str)
    nparr = np.frombuffer(img_bytes, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    print("Sending image to car_detection.py for processing.")
    processed_image = detect_cars(image)

    print("Encoding processed image back to base64 string.")
    _, buffer = cv2.imencode('.jpg', processed_image)
    img_str = base64.b64encode(buffer).decode()

    # Store the processed image in a global variable
    global processed_image_str
    processed_image_str = img_str

    print("Image processing completed. Sending response to client.")
    return jsonify({'status': 'Image received and sent for processing.'})

@app.route('/detected-objects', methods=['GET'])
def get_detected_objects():
    print("Sending processed image to client.")
    # Return the processed image stored in the global variable
    if processed_image_str:
        return jsonify({'image': processed_image_str})
    else:
        return jsonify({'error': 'No processed image available.'}), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

