// import React, { useState } from 'react';
// import InputForm from './components/InputForm';
// import ResultsPage from './components/ResultsPage';

// function App() {
//   const [generatedData, setGeneratedData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   return (
//     <div className="App" style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
//       <h1>Ad Variation Generator</h1>
//       {!generatedData && (
//         <InputForm
//           setGeneratedData={setGeneratedData}
//           setLoading={setLoading}
//           setError={setError}
//         />
//       )}
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {generatedData && (
//         <ResultsPage
//           data={generatedData}
//           reset={() => {
//             setGeneratedData(null);
//             setError(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// // NEW UPDATED CODE

import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';

function App() {
  const [generatedData, setGeneratedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div
      className="App"
      style={{
        maxWidth: 1000,
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Inter, sans-serif',
        color: '#111827',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: '700',
          color: '#4f46e5',
        }}
      >
        🎨 Ad Variation Generator
      </h1>

      {!generatedData && (
        <InputForm
          setGeneratedData={setGeneratedData}
          setLoading={setLoading}
          setError={setError}
        />
      )}

      {loading && (
        <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: '600' }}>
          ⏳ Generating Ads...
        </p>
      )}

      {error && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{error}</p>
      )}

      {generatedData && (
        <ResultsPage
          data={generatedData}
          reset={() => {
            setGeneratedData(null);
            setError(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
