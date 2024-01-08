import express from 'express'
import cors from 'cors'
import QRCode from 'qrcode'

const app = express();


app.use(cors())
app.use(express.json())

// Start the server
app.listen(3000, () => {
    console.log(`Server started on PORT: 3000`);
})

// GET Requests
app.get('/', (req, res) => {
    // console.log("Method: ", req.method);
    // console.log("URL: ", req.url)
    res.send('Hello world.')
})



app.post('/generate', async (req, res) => {
    // console.log("Method: ", req.method);
    // console.log("URL: ", req.url)
    // console.log(req.body)
    // destructing
    // const { para } = req.body
    const para = req.body.para
    // Convert this para into QR code
    try {
        const data = await QRCode.toString(para, {
            type: 'svg'
        })
        // console.log(data)
        res.json({
            message: 'Successfully generated QR code.',
            svg: data
        })
    } catch (error) {
        res.json({
            message: 'Error on converting to a QR code.'
        })
    }
})
