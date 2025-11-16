 // ................................................................................................................................................



// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { GoogleGenAI } from '@google/genai'; 
// import 'dotenv/config'; 
// import https from 'https';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// // --- ES Module Path Setup Fix ---
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// // ---------------------------------

// // Initialize Google Gen AI (API Key comes from the .env file)
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); 

// const app = express();
// const port = process.env.PORT || 5000;


// // --- CRITICAL CORS FIX ---
// app.use(cors({ 
//     origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Added 127.0.0.1 for better compatibility
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204
// })); 

// app.use(bodyParser.json());

// // Log all requests
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// // --- API ROUTES ---

// // Health check
// app.get('/', (req, res) => {
//   res.send('Ad Variation Generator API is running 🚀');
// });

// /**
//  * Endpoint to generate Ad Copy/Prompts (REAL GEMINI INTEGRATION)
//  */
// app.post('/api/generate-images', async (req, res) => {
//   try {
//     const { productName, description, targetAudience, colorTheme } = req.body;

//     if (!productName || !description || !targetAudience) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // 1. Unified Prompt for Structured JSON Output (Image Prompts + Ad Copy)
//     const prompt = `You are an expert Ad Creative Generator. Based on the following inputs, generate structured JSON output.
//     Product: ${productName}.
//     Description: ${description}.
//     Audience: ${targetAudience}.
//     Color/Mood: ${colorTheme}.
    
//     Generate three distinct ad variations. The output MUST be a JSON array containing three objects. Each object MUST have the following keys:
//     1. "image_prompt": A highly detailed, single-sentence visual prompt suitable for a text-to-image generator.
//     2. "headline": A catchy, short headline (max 5 words).
//     3. "body": A compelling, action-oriented body copy (max 15 words).
    
//     Example Structure: [{"image_prompt": "...", "headline": "...", "body": "..."}, {...}]`;

//     // 2. Call the Gemini model with structured output configuration
//     const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash", 
//         contents: [{ role: "user", parts: [{ text: prompt }] }],
//         config: {
//             responseMimeType: "application/json",
//             // The schema definition helps Gemini ensure correct JSON structure
//             responseSchema: {
//                 type: "array",
//                 items: {
//                     type: "object",
//                     properties: {
//                         image_prompt: { type: "string" },
//                         headline: { type: "string" },
//                         body: { type: "string" },
//                     },
//                     required: ["image_prompt", "headline", "body"]
//                 }
//             }
//         }
//     });

//     // 3. Parse and combine with dummy image URLs (since we don't have a real Image Gen API)
//     const generatedAds = JSON.parse(response.text.trim());

//     const finalAds = generatedAds.map((ad, index) => ({
//         ...ad,
//         // Using placeholder URLs for the visual component until a real Image Gen API is integrated
//         image_url: `http://localhost:5000/placeholder/image${index+1}.jpg`, 
//         // NOTE: Placeholder URL uses your backend domain for better download behavior
//     }));

//     // 4. Send the structured data to the frontend
//     res.json({ images: finalAds });

//   } catch (error) {
//      console.error('CRITICAL: Image/Copy Route Crash:', error);
//      // Log the detailed error from the AI SDK if available
//      console.error('Gemini Error:', error.response ? error.response.data : 'No specific AI response data'); 
//      res.status(500).json({ error: 'Failed to generate ad concepts with Gemini.' });
//   }
// });

// /**
//  * Endpoint to generate Video Ad (SIMULATED)
//  * This remains a dummy since video generation is complex and often uses separate services.
//  */
// app.post('/api/generate-video', async (req, res) => {
//   try {
//     // Dummy response simulating video generation success
//     res.json({
//       videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
//     });
//   } catch (error) {
//     console.error('CRITICAL: Video Route Crash:', error);
//     res.status(500).json({ error: 'Internal server error during video generation.' });
//   }
// });

// // --- SERVER STARTUP LOGIC ---

// // Decide whether to use HTTPS or HTTP
// if (fs.existsSync(path.join(__dirname, 'certs', 'key.pem')) &&
//     fs.existsSync(path.join(__dirname, 'certs', 'cert.pem'))) {

//   const options = {
//     key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
//     cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')),
//   };

//   https.createServer(options, app).listen(port, '0.0.0.0', () => {
//     console.log(`✅ HTTPS Server running on port ${port}`);
//   });
// } else {
//   app.listen(port, () => {
//     console.log(`✅ HTTP Server running on port ${port}`);
//   });
// }

// ...............................................................................................................


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GoogleGenAI } from '@google/genai'; 
import 'dotenv/config'; 
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// --- ES Module Path Setup Fix ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// ---------------------------------

// Initialize Google Gen AI (API Key comes from the .env file)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); 

const app = express();
const port = process.env.PORT || 5000;


// --- CRITICAL CORS FIX ---
app.use(cors({ 
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
})); 

app.use(bodyParser.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// --- API ROUTES ---

// Health check
app.get('/', (req, res) => {
  res.send('Ad Variation Generator API is running 🚀');
});

/**
 * Endpoint to generate Ad Copy/Prompts (REAL GEMINI INTEGRATION)
 */
app.post('/api/generate-images', async (req, res) => {
  try {
    const { productName, description, targetAudience, colorTheme } = req.body;

    if (!productName || !description || !targetAudience) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Unified Prompt for Structured JSON Output (Image Prompts + Ad Copy)
    const prompt = `You are an expert Ad Creative Generator. Based on the following inputs, generate structured JSON output.
    Product: ${productName}.
    Description: ${description}.
    Audience: ${targetAudience}.
    Color/Mood: ${colorTheme}.
    
    Generate three distinct ad variations. The output MUST be a JSON array containing three objects. Each object MUST have the following keys:
    1. "image_prompt": A highly detailed, single-sentence visual prompt suitable for a text-to-image generator.
    2. "headline": A catchy, short headline (max 5 words).
    3. "body": A compelling, action-oriented body copy (max 15 words).
    
    Example Structure: [{"image_prompt": "...", "headline": "...", "body": "..."}, {...}]`;

    // 2. Call the Gemini model with structured output configuration
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash", 
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        image_prompt: { type: "string" },
                        headline: { type: "string" },
                        body: { type: "string" },
                    },
                    required: ["image_prompt", "headline", "body"]
                }
            }
        }
    });

    // 3. Robust JSON Parsing 
    let generatedAds = [];
    try {
        const cleanedText = response.text.trim().replace(/^```json\s*|(?:\r?\n|\r)```$/g, '');
        generatedAds = JSON.parse(cleanedText);
        
        if (!Array.isArray(generatedAds) || generatedAds.length === 0) {
            throw new Error("Parsed content is not a valid array of ads.");
        }

    } catch (e) {
        console.error('CRITICAL ERROR: Failed to parse Gemini JSON output:', e);
        console.error('Raw Gemini text output:', response.text);
        throw new Error("Gemini returned malformed data or failed to generate the structured output.");
    }
    
    // 4. Combine with WORKING Placeholder Image URL
    const finalAds = generatedAds.map((ad, index) => ({
        ...ad,
        // Using Picsum.photos, which allows cross-origin fetching, fixing the download/display issue.
        image_url: `https://picsum.photos/300/200?random=${index + 1}`, 
    }));

    // 5. Send the structured data to the frontend
    res.json({ images: finalAds });

  } catch (error) {
     console.error('CRITICAL: Image/Copy Route Crash:', error);
     res.status(500).json({ error: 'Failed to generate ad concepts with Gemini.' });
  }
});

/**
 * Endpoint to generate Video Ad (SIMULATED)
 */
app.post('/api/generate-video', async (req, res) => {
  try {
    // This remains a dummy response returning a working MP4 placeholder
    res.json({
      videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
    });
  } catch (error) {
    console.error('CRITICAL: Video Route Crash:', error);
    res.status(500).json({ error: 'Internal server error during video generation.' });
  }
});

// --- SERVER STARTUP LOGIC ---

// Decide whether to use HTTPS or HTTP
if (fs.existsSync(path.join(__dirname, 'certs', 'key.pem')) &&
    fs.existsSync(path.join(__dirname, 'certs', 'cert.pem'))) {

  const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')),
  };

  https.createServer(options, app).listen(port, '0.0.0.0', () => {
    console.log(`✅ HTTPS Server running on port ${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`✅ HTTP Server running on port ${port}`);
  });
}