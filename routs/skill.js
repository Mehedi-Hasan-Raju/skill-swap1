const express = require('express');
const Skill = require('../models/Skill');
const router = express.Router();

router.get('/add', (req, res) => res.render('skill'));
router.post('/add', async (req, res) => {
  const { title, description } = req.body;
  try {
    await Skill.create({ title, description, user: req.session.user._id });
    req.flash('success_msg', 'Skill added successfully.');
    res.redirect('/dashboard');
  } catch (error) {
    req.flash('error_msg', 'Error adding skill.');
    res.redirect('/skill/add');
  }
});

router.get('/', async (req, res) => {
  const skills = await Skill.find().populate('user');
  res.render('dashboard', { skills });
});

module.exports = router;
