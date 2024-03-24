# FROM python:3.10.12-slim

# WORKDIR /app

# COPY backend /app

# RUN apt-get update && \
#     apt-get install -y --no-install-recommends \
#     libgl1-mesa-glx \
#     libgtk2.0-0 && \
#     apt-get clean && \
#     rm -rf /var/lib/apt/lists/*

# RUN pip install --no-cache-dir -r requirements.txt

# EXPOSE 5000

# CMD ["python3", "app.py"]


FROM node:20

WORKDIR /app

COPY traffic /app

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5173"]
