import React from 'react';
import AdmissionForm from './components/AdmissionForm';
import './components/AdmissionForm.css';


function App() {
  return (
    <div className="App">
      {/* Render the floating form */}
      <div className="floating-form-container">
        <AdmissionForm />
      </div>
    </div>
  );
}

export default App;
