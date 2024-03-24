import cv2

def detect_cars(image):
    """
    Detects cars in the given image and returns the processed image with cars detected.

    Parameters:
    - image: A numpy array representing the image to process.

    Returns:
    - A numpy array representing the processed image with cars detected.
    """
    # Load the trained cars XML classifiers
    car_cascade = cv2.CascadeClassifier('haarcascade_cars.xml')

    # Convert image into gray scale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Detect cars in the image
    cars = car_cascade.detectMultiScale(gray, 1.1, 3)

    # Draw a rectangle in each car
    for (x, y, w, h) in cars:
        cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)

    return image
