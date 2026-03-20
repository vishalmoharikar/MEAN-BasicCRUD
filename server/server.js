const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes.get.task');
const taskPostRoutes = require('./routes/task.routes.post.task');
const taskDeleteRoutes = require('./routes/task.routes.delete.task');
const taskUpdateRoute = require('./routes/task.routes.update.task');



const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Connect Database
connectDB();

// 3. Routes
app.use('/api', taskRoutes);
app.use('/api', taskPostRoutes);
app.use('/api', taskDeleteRoutes);
app.use('/api', taskUpdateRoute);

// 4. Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));