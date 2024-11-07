import React, { CSSProperties } from 'react'

const AdminHomePage = () => {
  return (
    <div style={body}>
      <p style={heading}>AdminHomePage</p>
    </div>
  );
};

// Define Styles
const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  color: '#000',
  fontSize: '32px'
}

export default AdminHomePage