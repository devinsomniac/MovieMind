import express from "express"
import cors from "cors"
import axios from "axios"

const port = 5000
const app = express()
app.use(cors())
app.use(express.json())

app.post('/greet', async (req, res) => {
    const { name } = req.body;
    console.log('Received request with name:', name);  // Log received data
    try {
        const response = await axios.post("http://localhost:5001/greet", { name });
        console.log('Received response from Flask:', response.data);  // Log Flask response
        const greeting = response.data.greeting;
        res.json({ greeting });
    } catch (err) {
        console.error("Error fetching data from Flask:", err);
        res.status(500).json({ error: "Something went wrong !!" });
    }
});



app.listen(port, ()=>{
    console.log(`The app is listening to ${port}`)
})