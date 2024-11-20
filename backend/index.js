import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"

dotenv.config({})

const app = express();

const PORT =  process.env.PORT ||  5000


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());





const corsOptions = {
    origin: function (origin, callback) {
        callback(null, origin || '*'); // Allow all origins
    },
    credentials: true,
};

app.use(cors(corsOptions));





app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);



app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at ${PORT}`);
    
})