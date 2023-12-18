// Import the mock payment function
const completePayment = require('./CompletePayment');

const processPayment = async (req, res) => {
  try {
    const { name, age, selectedBatch } = req.body;

    // Call the mock payment function
    const paymentResponse = completePayment({ name, age, selectedBatch });

    // Return response to front-end based on payment response
    if (paymentResponse.success) {
      return res.status(200).json({ message: 'Payment successful', paymentResponse });
    } else {
      return res.status(500).json({ error: 'Payment failed', paymentResponse });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  processPayment,
};
