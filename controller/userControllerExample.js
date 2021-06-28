const { Router } = require('express');
const { User } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const Users = await User.findAll();
  res.status(200).json(Users);
});

router.get('/:id', async (req, res) => {
  const product = await User.findByPk(req.params.id);
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { fullName, email, senha, endereco, idade, telefone } = req.body;
  const newProduct = User.create({ fullName, email, senha, endereco, idade, telefone });

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { fullName, email, senha, endereco, idade, telefone } = req.body;

  await User.update(
    { fullName, email, senha, endereco, idade, telefone },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;