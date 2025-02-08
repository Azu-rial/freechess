import express from 'express';

// 1. Create Express app
const app = express();

// 2. Add your routes/middleware here
app.get('/', (req, res) => {
  res.send('Chess server is running!');
});

// 3. MUST HAVE THIS AT THE END FOR VERCEL
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 4. Crucial export for Vercel
module.exports = app;
