const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/index.html")
    res.sendFile(filePath);
});

router.get('/stories', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/stories.html")
    res.sendFile(filePath);
});

router.get('/contact', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/contact.html")
    res.sendFile(filePath);
});

router.get('/script', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/script.html")
    res.sendFile(filePath);
});

router.get('/terribly-lovely-day', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/terribly-lovely-day.html")
    res.sendFile(filePath);
});

router.get('/terribly-lovely-day-script', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/terribly-lovely-day-script.html")
    res.sendFile(filePath);
});

router.get('/glass', (req, res) => {
    const filePath = path.resolve(__dirname, "../public/shattered-glass.html")
    res.sendFile(filePath);
});

module.exports = router;
