const User = require('../../db/models/user');

const router = require('express').Router(),
  cloudinary = require('cloudinary').v2,
  mongoose = require('mongoose');

/**
 * GET current user
 */
router.get('/me', async (req, res) => res.json(req.user));

/**
 * UPDATE a user
 */
router.patch('/me', async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ['email', 'name'];
  const isValidOperation = updates.every((update) => {
    allowedUpdates.includes(update);
    console.log(isValidOperation);
  });
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

/**
 * LOGOUT a user
 */
router.post('/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/**
 * LOGOUT all devices
 */
router.post('/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

/**
 * DELETE a user
 */
router.delete('/me', async (req, res) => {
  try {
    await req.user.remove();

    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

/**
 * UPLOAD Avatar
 */
router.post('/api/users/avatar', async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

/**
 * UPDATE User Password
 */
router.put('/password', async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
