import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    telefone: {
        type: String,
        required: true,
    },

    endereco: {
        type: String,
        required: false,
    },

    status: {
        type: String,
        required: true,
        default: 'Ativo'
    }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);


export default Customer;