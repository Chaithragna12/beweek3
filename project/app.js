const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRouter');
const bookRoutes = require('./src/routes/bookRoutes');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
