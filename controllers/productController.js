exports.testProduct = async (req, res) => {
  console.log(req.query);
  res.status(200).json({
    success: true,
    greeting: 'This is a test for product',
  });
};
