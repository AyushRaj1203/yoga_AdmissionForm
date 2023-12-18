const completePayment = ({ name, age, selectedBatch }) => {
    // mock payment logic goes here
    // For simplicity, we're just returning a success response
    return { success: true, message: 'Payment completed successfully' };
  };
  
  module.exports = completePayment;
  