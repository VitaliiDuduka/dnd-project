"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 9000;
class User {
    constructor(imageURL, name, skills, currentJob, previousJobs, showUpRate) {
        this.imageURL = imageURL;
        this.name = name;
        this.skills = skills;
        this.currentJob = currentJob;
        this.previousJobs = previousJobs;
        this.showUpRate = showUpRate;
    }
}
const generateJob = () => ({ id: faker_1.faker.string.uuid(), name: faker_1.faker.person.jobTitle() });
const generateRandomArrayOfUpToFiveJobs = () => {
    const length = Math.floor(Math.random() * 6); // Random length between 0 and 5
    const resultArray = [];
    for (let i = 0; i < length; i++) {
        resultArray.push(generateJob()); // Random numbers between 0 and 100
    }
    return resultArray;
};
const generateUser = () => new User(faker_1.faker.image.urlPicsumPhotos(), faker_1.faker.person.fullName(), generateRandomArrayOfUpToFiveJobs(), generateJob(), generateRandomArrayOfUpToFiveJobs(), faker_1.faker.number.int({ min: 0, max: 100 }));
const users = Array.from({ length: 100 }, () => generateUser());
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS
// Route to get all Users
app.get('/users', (req, res) => {
    res.json({ users });
});
// // Route to add an User
// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   data.users.push(newUser);
//   res.status(201).json(newUser);
// });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
