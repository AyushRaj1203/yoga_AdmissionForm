import React from 'react';
import { toast } from 'react-toastify';
import './AdmissionForm.css';

const PaymentPage = ({ userData, closeModal }) => {
  const handlePayment = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/admission/process-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to process payment. HTTP error! Status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log(data); // Handle the payment response
      toast.success("Payment successful! Thank you for enrolling in Yoga Classes."); // Success message
    } 
    catch (error) {
      console.error('Error processing payment:', error.message);
      toast.error('Oops! An error occurred while processing your payment. Please try again later.');
    } finally {
      // Close the modal
      closeModal();
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-header">Payment Page</h2>
      <p className="payment-details">Name: {userData.name}</p>
      <p className="payment-details">Age: {userData.age}</p>
      <p className="payment-details">Selected Batch: {userData.selectedBatch}</p>
      <p className="payment-details">Monthly Fee: 500 INR</p>
      <button onClick={handlePayment} className="payment-button">
        Proceed For Payment
      </button>
    </div>
  );
};

export default PaymentPage;
