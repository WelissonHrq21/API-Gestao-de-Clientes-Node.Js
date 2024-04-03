import Customer from '../models/Customers.js';

class CustomerController {


    async index(req, res) {
        try {
            const customers = await Customer.find();
            res.json(customers);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async show(req, res) {
        try {
            const customer = await Customer.findById(req.params.id);

            if (!customer) {
                return res.status(404).json({ message: "Cliente não encontrado." });
            }

            res.json(customer);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async post(req, res) {
        const customer = new Customer({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
        });

        try {
            const newCustomer = await customer.save();
            res.status(201).json(newCustomer);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }
    async put(req, res) {
        try {
            const customer = await Customer.findById(req.params.id);
            if(!customer){
                res.status(404).json({message:err.message});
            }

            const { nome, email, telefone } = req.body;
            if(nome){
                customer.nome = nome;
            }
            if(email){
                customer.email = email;
            }
            if(telefone){
                customer.telefone = telefone;
            }

            await customer.save();
            res.json(customer);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }
    async delete(req, res) {
        try {
            const customer = await Customer.findById(req.params.id);
            if(!customer){
                res.status(404).json({message: 'Cliente não encontrado.'});
            }

            await customer.deleteOne();
            res.json({ message: "Cliente removido com sucesso" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new CustomerController();