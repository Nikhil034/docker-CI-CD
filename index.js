const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Dockerized Node.js App,Now it working with CI-CD pipeline.!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
