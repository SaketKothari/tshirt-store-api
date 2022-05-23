exports.testProduct = async (req, res) => {
  res.status(200).json({
    success: true,
    greeting: 'This is a test for product',
  });
};
