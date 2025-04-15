import React, { useEffect, useState } from 'react';

export default function App() {
  let [message, setMessage ] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  useEffect(() => {
    // Function to be called automatically
    setCustomMessage('Click any button');
    // Optional: Return a cleanup function if needed
    return () => {
      // This function runs when the component unmounts or before the next effect
      console.log('Component is unmounting or re-rendering');
    };
  }, []);
  const handleClick = (label) => {
    if (label === "Submit") {
      setCustomMessage(message);
    }
    else {
      setCustomMessage(`You clicked: ${label}`);
    }
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
  };

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '16px',
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #ccc',
      borderRadius: '10px',
      // width: '100%',
      width: '850px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', justifyContent: 'space-between', backgroundColor: '#b0b0b0', padding: '10px', borderRadius: '8px' }}>
        <div style={{ display: 'flex', gap: '60px' }}>
        <button onClick={() => handleClick('Audience Segment')} style={btnStyle('#A8F0C6')}>Audience Segment</button>
        <button onClick={() => handleClick('Profile Attributes')} style={btnStyle('#B8FFC0')}>Profile Attributes</button>
        <button onClick={() => handleClick('Donor ID')} style={btnStyle('#95FFBC')}>Donor ID</button>
        </div>
        <div>
        <button onClick={() => handleClick('Submit')} style={btnStyle('#89A9F9')}>Submit</button>
        </div>
      </div>

      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: '100%',
            height: '235px',
            resize: 'none',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            backgroundColor: '#f0fff0',
          }}
          rows={6}
          placeholder="Message"
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => handleClick('Feedback')} style={btnStyle('#FFF7A6')}>Feedback (Open text)</button>
        <button onClick={() => handleClick('Approve')} style={btnStyle('#FFF7A6')}>Approve</button>
        <button onClick={() => handleClick('Reject')} style={btnStyle('#FFF7A6')}>Reject</button>
        <button onClick={() => handleClick('Approve Segment')} style={btnStyle('#FFF7A6')}>Approve this Audience Segment</button>
      </div>
      {(
      <div style={{ marginTop: '20px', padding: '10px', background: '#dff', borderRadius: '5px' }}>
        {customMessage}
      </div>
    )}
    </div>
  );
}

function btnStyle(color) {
  return {
    backgroundColor: color,
    padding: '10px 40px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };
}
