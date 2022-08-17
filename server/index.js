const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoutes");
const langueRoute = require("./routes/langueRoutes");
const categoryRoute = require("./routes/categorieRoutes");
const userRoute = require("./routes/userRoutes");
const trainingRoute = require("./routes/trainingRoutes");
const adminRoute = require("./routes/adminRoutes");
const conversationRoute = require("./routes/conversationRoutes");
const messageRoute = require("./routes/messageRoutes");

const { requireAuth } = require("./middlewares/auth");

const app = express();
dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000"
}));

// DB
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("DB connected"))
    .catch(err => console.log(err));

// Routes
app.use(authRoute);
app.use(langueRoute);
app.use(categoryRoute);
app.use(userRoute);
app.use(trainingRoute);
app.use(adminRoute);
app.use(conversationRoute);
app.use(messageRoute);


app.listen(process.env.PORT, () => {
    console.log("Server is running");
})
