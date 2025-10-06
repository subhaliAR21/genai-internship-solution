// import React from 'react';

// function ResultsPage({ data, reset }) {
//   const { images, videoUrl } = data;

//   return (
//     <div>
//       <h2>Generated Ad Variations</h2>
//       <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
//         {images && images.map((imgUrl, index) => (
//           <div key={index} style={{ textAlign: 'center' }}>
//             <img src={imgUrl} alt={`Ad Variation ${index + 1}`} width={256} height={256} />
//             <div>
//               <a href={imgUrl} download={`ad-variation-${index + 1}.png`}>
//                 Download Image
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       {videoUrl && (
//         <div style={{ marginTop: 20 }}>
//           <h3>Video Ad</h3>
//           <video width="480" height="270" controls>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div>
//             <a href={videoUrl} download="ad-video.mp4">
//               Download Video
//             </a>
//           </div>
//         </div>
//       )}
//       <button onClick={reset} style={{ marginTop: 20, padding: '10px 20px', fontSize: 16 }}>
//         Generate New Ads
//       </button>
//     </div>
//   );
// }

// export default ResultsPage;

// // NEW UPDATED CODE

import React from 'react';

function ResultsPage({ data, reset }) {
  const { images, videoUrl } = data;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ color: '#1f2937', marginBottom: '1rem', textAlign: 'center' }}>
        Generated Ad Variations
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {images &&
          images.map((imgUrl, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                textAlign: 'center',
              }}
            >
              <img
                src={imgUrl}
                alt={`Ad Variation ${index + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <div style={{ marginTop: '10px' }}>
                <a
                  href={imgUrl}
                  download={`ad-variation-${index + 1}.png`}
                  style={{
                    textDecoration: 'none',
                    background: '#4f46e5',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  ⬇ Download Image
                </a>
              </div>
            </div>
          ))}
      </div>

      {videoUrl && (
        <div
          style={{
            marginTop: '2rem',
            background: '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>🎬 Video Ad</h3>
          <video width="100%" height="auto" controls style={{ borderRadius: '10px' }}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ marginTop: '10px' }}>
            <a
              href={videoUrl}
              download="ad-video.mp4"
              style={{
                textDecoration: 'none',
                background: '#4f46e5',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
              }}
            >
              ⬇ Download Video
            </a>
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={reset}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '10px',
            border: 'none',
            background: '#ef4444',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          🔄 Generate New Ads
        </button>
      </div>
    </div>
  );
}

export default ResultsPage;
