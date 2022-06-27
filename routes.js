import { Router } from 'express'
import fs from 'fs'

import { Contenedor } from './productos.js'

export const router = Router()
const db = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))

const prods = new Contenedor(db)

//Creando rutas
router
	.route('/productos')
	.get((req, res) => {
		const getAll = prods.getAll()
		res.send(getAll)
	})
	.post((req, res) => {
		const { tittle, price, thumbnail } = req.body

		const saveProd = prods.save({ tittle, price, thumbnail })
		res.send(saveProd)
	})




//comento porque no pide APIrest
//router
	//.route('/productos/:id')
	//.get((req, res) => {
	//	const idProd = req.params.id
	//	const getById = prods.getById(Number(idProd))
	//	res.send(getById)
//	})
//	.delete((req, res) => {
//		const idRemoved = req.params.id
//		const deleteById = prods.deleteById(Number(idRemoved))
//	})

//falta put 
//me ayudaron mis compañeros asi que puede tner algun error, bienvendias las correciones
//.put(async (req, res) => {
  //  try {
   //     let idPr = +req.params.id
   //
   //     let index = db.findIndex((pr) => pr.id === idPr)
  //   let body = req.body
    // let updatedProd = { ...db[index], ...body, id: idPr }
    //   db[index] = updatedProd
    // await prods.updateProduct(db[index])
    //  res.send(db)
   // } catch (err) {
    //   throw new Error('el error es:' + err.message)
   // }
//})
module.exports = router