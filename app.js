import express from 'express';
import { router } from './routes.js'
const app = express ();

//motor de plantillas
//app.set('view engine', 'pug')
//descargue ambas pero me sale mejor trabajar con EJS, anduve investigando y vi que es la mas utilizada,
//tambien es la que tiene mas gadgets 

app.set ('view engine','ejs' );
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
	res.render("index", { titulo: "Titulo EJS" });
  });
  
app.get("/productos", (req, res) => {
	res.render("productos");
  });
  


const __dirname = process.cwd()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use('/static', express.static(__dirname + '/public'))



//#levantando
app.listen(8080, () => {
	console.log('server up')
})