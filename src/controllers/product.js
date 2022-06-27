import Product from '../models/product.js';
import { Generic } from './generic.js';

export const postAddProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.send(product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const getProducts = async (req, res) => {
    try {
        const productos = await Product.find();
        Generic.notFoundElements(productos, "Producto", res)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const editProduct = async (req, res) => {
    try {
        const { nombre, descripcion, instrucciones, imagen, categoria, peso, stock, precio, sabores } = req.body;
        const prodId = req.params.prodId;

        let producto = await Product.findById(prodId);
        if(!producto){
            res.status(404).json({ msg: "Producto no encontrado" });
        }

        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.instrucciones = instrucciones;
        producto.imagen = imagen;
        producto.categoria = categoria;
        producto.peso = peso;
        producto.stock = stock;
        producto.precio = precio;
        producto.sabores = sabores;

        producto = await Product.findOneAndUpdate({ _id: prodId }, producto, { new: true });
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const getProduct = async (req, res) => {
    try {
        const prodId = req.params.prodId;
        const producto = await Product.findById(prodId);
        Generic.notFoundElement(producto, "Producto", res)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const prodId = req.params.prodId;
        const producto = await Product.findById(prodId);
        if(!producto){
            res.status(404).json({ msg: "No se encontro el producto "});
        }

        await Product.findOneAndRemove({ _id: prodId });
        res.json({ msg: "El producto fue eliminado con exito "});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
