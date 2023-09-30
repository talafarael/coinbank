const authRouter=require('./authrouter')
const PORT = process.env.PORT||8000
const mongoose = require('mongoose');

app.start=async()=>{
    try{
    await mongoose.connect(process.env.MONGO)
    app.use('/auth', authRouter);
    app.listen(PORT, () => {
            console.log(PORT);
        });

    }catch{
        console.log(e);
    }
}


start()