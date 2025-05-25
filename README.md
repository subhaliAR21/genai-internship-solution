## Challenge: Build a Text-to-Image API for Ad Generation

### Objective
Develop a RESTful API that generates an image suitable for a social media ad based on a text prompt. The solution must be containerized with Docker and submitted via a GitHub repository for review.

### Requirements

1. **Fork the Template Repository**  
   - Start by forking this template repository: [insert link to template repo when created]. It provides a basic Flask app and Dockerfile to minimize setup time.

2. **Implement the API**  
   - Use **Flask** to create a RESTful API with a single endpoint: `POST /generate`.  
   - The endpoint must accept a JSON body with a `"prompt"` field (e.g., `{"prompt": "A sleek sports car on a mountain road"}`).  
   - Integrate a pre-trained image generation model (e.g., DALL-E mini or Stable Diffusion) to create an image from the prompt.  
   - Return the generated image as a **base64-encoded string** in the response (e.g., `{"image": "base64_encoded_data"}`).  
   - Ensure the image is **1080x1080 pixels**, suitable for platforms like Instagram.

3. **Containerize with Docker**  
   - Update the provided Dockerfile to include all dependencies (e.g., Flask, Transformers, Torch).  
   - Ensure the container runs the API on **port 5000** when started.

4. **Document in README**  
   - Add clear instructions to build and run the Docker container (e.g., `docker build -t ad-image-gen .` and `docker run -p 5000:5000 ad-image-gen`).  
   - Include a sample `curl` command to test the API (e.g., `curl -X POST -H "Content-Type: application/json" -d '{"prompt": "A luxurious watch on a velvet background"}' http://localhost:5000/generate`).  

5. **Verification**  
   - Generate an image using the prompt `"A red apple on a wooden table"` and save it as `verification.png` in the repository to confirm the API works.

6. **Submission**  
   - Push your code to the `main` branch of your forked repository.  
   - Create a pull request (PR) to the original repository (details provided in the template repo).  
   - Ensure the PR includes all files: `app.py`, `Dockerfile`, `requirements.txt`, `README.md`, and `verification.png`.

### Optional Enhancements
- Generate a short video or GIF by creating multiple images and combining them (e.g., using OpenCV or MoviePy).  
- Add support for additional parameters (e.g., `"style"` or `"color_scheme"` in the JSON request).  
- Implement caching to store generated images for faster retrieval.  
- Use a more advanced model for higher-quality images.

### Evaluation Criteria
- **Functionality:** Does the API generate images correctly from prompts?  
- **Code Quality:** Is the code clean, organized, and well-documented?  
- **Dockerization:** Can we build and run the container without errors?  
- **Creativity:** Are there innovative features or optimizations?  
- **Speed:** Was the task completed efficiently within a day?

### Note
Ensure compliance with the licensing terms of the chosen model and libraries. Generated content should be appropriate and ethical.

---

## Supporting Template Repository

To help you focus on the core task, the template repository includes the following structure:

```python
# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_image():
    return jsonify({"message": "Hello, World!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

```dockerfile
# Dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install flask
EXPOSE 5000
CMD ["python", "app.py"]
```

```text
# requirements.txt
flask==2.3.3
```

### Instructions for Candidates
- Fork the template repository.  
- Install libraries for the image generation model (e.g., `transformers`, `torch`) by updating `requirements.txt` and the Dockerfile.  
- Replace the placeholder `/generate` endpoint with image generation logic.  
- Test locally, then build and run the Docker container to ensure it works.  
- Commit your changes, including `verification.png`, and submit a PR.