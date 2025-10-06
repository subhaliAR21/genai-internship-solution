// import React, { useState } from 'react';
// import axios from 'axios';

// function InputForm({ setGeneratedData, setLoading, setError }) {
//   const [productName, setProductName] = useState('');
//   const [description, setDescription] = useState('');
//   const [targetAudience, setTargetAudience] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);
//     setGeneratedData(null);

//     try {
//       const imageResponse = await axios.post(`/generate-images`, {
//         productName,
//         description,
//         targetAudience,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const videoResponse = await axios.post(`/generate-video`, {
//         productName,
//         description,
//         targetAudience,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       setGeneratedData({
//         images: imageResponse.data.images,
//         videoUrl: videoResponse.data.videoUrl,
//       });
//     } catch (error) {
//       console.error('Error from backend:', error.response ? error.response.data : error.message);
//       setError('Failed to generate ads. Please try again. ' + (error.response ? error.response.data.error : ''));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//       <label>
//         Product Name:
//         <input
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//           style={{ width: '100%', padding: 8 }}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           style={{ width: '100%', padding: 8 }}
//         />
//       </label>
//       <label>
//         Target Audience:
//         <input
//           type="text"
//           value={targetAudience}
//           onChange={(e) => setTargetAudience(e.target.value)}
//           required
//           style={{ width: '100%', padding: 8 }}
//         />
//       </label>
//       <button type="submit" style={{ padding: 10, fontSize: 16 }}>
//         Generate Ads
//       </button>
//     </form>
//   );
// }

// export default InputForm;


//  // NEW UPDATED CODE
import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ setGeneratedData, setLoading, setError }) {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setGeneratedData(null);

    try {
      const imageResponse = await axios.post(
        `/generate-images`,
        { productName, description, targetAudience },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const videoResponse = await axios.post(
        `/generate-video`,
        { productName, description, targetAudience },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setGeneratedData({
        images: imageResponse.data.images,
        videoUrl: videoResponse.data.videoUrl,
      });
    } catch (error) {
      console.error('Error from backend:', error.response ? error.response.data : error.message);
      setError(
        'Failed to generate ads. Please try again. ' +
          (error.response ? error.response.data.error : '')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        background: '#f9fafb',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <h2 style={{ marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
        Enter Ad Details
      </h2>

      <label style={{ fontWeight: '600', color: '#374151' }}>
        Product Name
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            outline: 'none',
            fontSize: '15px',
          }}
        />
      </label>

      <label style={{ fontWeight: '600', color: '#374151' }}>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            outline: 'none',
            fontSize: '15px',
            minHeight: '100px',
          }}
        />
      </label>

      <label style={{ fontWeight: '600', color: '#374151' }}>
        Target Audience
        <input
          type="text"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '6px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            outline: 'none',
            fontSize: '15px',
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: '12px',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '10px',
          border: 'none',
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          color: '#fff',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.opacity = '0.9')}
        onMouseOut={(e) => (e.target.style.opacity = '1')}
      >
        🚀 Generate Ads
      </button>
    </form>
  );
}

export default InputForm;
