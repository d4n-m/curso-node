import express from 'express';

const app = express();

let isLoggedIn = true;
app.use(express.json())

app.use((req,res,next)=>{
    if (isLoggedIn){
        next()
    } else {
        res.sendStatus(403);
    }
});

app.use((req,res,next)=>{
    let path = req.path;
    let method = req.method;

    console.log(path, method);
    next();
});

app.post('/', (req,res)=>{
    let body= req.body;
    res.status(200).send(body);
})

app.put('/', (req,res)=> res.send('Hola PUT!'));

app.delete('/', (req,res)=> res.send('Hola DELETE!'));

app.get('/', (req, res)=>{
    res.send('Hola mundo!');
})

app.get('/home', (req, res)=>{
    res.send('Esto es el home!');
})
app.get('/api/v1/users', (req, res)=>{
    res.json({"username":"raul"});
})

app.listen(3000,_=>console.log('running on 3000'));
