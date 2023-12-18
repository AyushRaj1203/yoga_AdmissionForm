import React, { useState } from 'react';
import PaymentPage from './PaymentPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import './AdmissionForm.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });

  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate age
    const ageInt = parseInt(formData.age, 10);
    if (isNaN(ageInt) || ageInt < 18 || ageInt > 65) {
      notifyError('Age must be between 18 and 65');
      return;
    }

    // Clear previous errors
    setError('');

    // Show the confirmation modal
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Close the confirmation modal
    setShowModal(false);

    // Show the payment modal
    setShowPaymentModal(true);
  };

  const notifyError = (message) => toast.error(message);

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Confirmation Modal"
        className="confirmation-modal"
        overlayClassName="overlay"
      >
        <div>
          <p className="confirmation-message">Confirm your details before proceeding to payment:</p>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Selected Batch: {formData.selectedBatch}</p>
          <button onClick={handleConfirm} className="form-button">
            Confirm
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={showPaymentModal}
        onRequestClose={() => setShowPaymentModal(false)}
        contentLabel="Payment Modal"
        className="payment-modal"
        overlayClassName="overlay"
      >
        <PaymentPage userData={formData} closeModal={() => setShowPaymentModal(false)} />
      </Modal>

      <ToastContainer />

      <div className="form-container">
        <h2 className="form-header">Yoga Class Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Name:
            <input type="text" name="name" onChange={handleInputChange} required />
          </label>
          <br />
          <label className="form-label">
            Age:
            <input type="number" name="age" onChange={handleInputChange} required />
          </label>
          {error && <p className="form-error">{error}</p>}
          <br />
          <label className="form-label">
            Select Batch:
            <select name="selectedBatch" onChange={handleInputChange} required>
              <option value="">Select Batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
          <br />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
