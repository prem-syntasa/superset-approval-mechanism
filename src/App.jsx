import React from 'react';

export default function App() {
  const handleClick = (label) => {
    alert(`You clicked: ${label}`);
  };

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '16px',
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #ccc',
      borderRadius: '10px',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', backgroundColor: '#b0b0b0', padding: '10px', borderRadius: '8px' }}>
        <button onClick={() => handleClick('Audience Segment')} style={btnStyle('#A8F0C6')}>Audience Segment</button>
        <button onClick={() => handleClick('Profile Attributes')} style={btnStyle('#B8FFC0')}>Profile Attributes</button>
        <button onClick={() => handleClick('Donor ID')} style={btnStyle('#95FFBC')}>Donor ID</button>
        <button onClick={() => handleClick('Submit')} style={btnStyle('#89A9F9')}>Submit</button>
      </div>

      <div style={{
        backgroundColor: '#E6FFF5',
        padding: '50px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '30px',
        borderRadius: '10px'
      }}>
        Message
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button onClick={() => handleClick('Feedback')} style={btnStyle('#FFF7A6')}>Feedback (Open text)</button>
        <button onClick={() => handleClick('Approve')} style={btnStyle('#FFF7A6')}>Approve</button>
        <button onClick={() => handleClick('Reject')} style={btnStyle('#FFF7A6')}>Reject</button>
        <button onClick={() => handleClick('Approve Segment')} style={btnStyle('#FFF7A6')}>Approve this Audience Segment</button>
      </div>
    </div>
  );
}

function btnStyle(color) {
  return {
    backgroundColor: color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };
}
