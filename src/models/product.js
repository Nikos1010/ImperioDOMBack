import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProductSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    instrucciones: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    peso: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    sabores: {
        type: Array,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})

export default model('Product',ProductSchema);