import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js"; 
import taskRoutes from './routes/task.routes.get.task.js'; 
import taskPostRoutes from './routes/task.routes.post.task.js'; 
import taskDeleteRoutes from './routes/task.routes.delete.task.js'; 
import taskUpdateRoute from './routes/task.routes.update.task.js'; 





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


