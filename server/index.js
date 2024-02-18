const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 9000;

// In-memory "database"
const data = {
    jobs: [
        {id: 'a', position: 'Teacher', workplace: 'New York', showUpRate: 60},
        {id: 'b', position: 'Teacher', workplace: 'Sidney', showUpRate: 100},
        {id: 'c', position: 'Driver', workplace: 'New York', showUpRate: 100},
        {id: 'd', position: 'Warehouseman', workplace: 'Seattle', showUpRate: 80},
        {id: 'e', position: 'Doctor', workplace: 'Seattle', showUpRate: 33},
        {id: 'f', position: 'Warehouseman', workplace: 'Ontario', showUpRate: 19},
    ],
    users: [
        {
            id: 1,
            name: 'Pablo Escobar',
            currentJob: null,
            previousJobs: [
                {id: 'a'},
                {id: 'b'},
            ]
        },
        {
            id: 2,
            name: 'Jorge Nunos',
            currentJob: {id: 'd'},
            previousJobs: [],
        },
        {
            id: 3,
            name: 'Sergio Damian',
            currentJob: {id: 'b'},
            previousJobs: [
                {id: 'e'},
                {id: 'f'},
            ]
        },
        {
            id: 4,
            name: 'Chase Ecman',
            currentJob: {id: 'f'},
            previousJobs: [
                {id: 'c'},
                {id: 'b'},
            ]
        },
    ]
};

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

// Route to get all Users
app.get('/users', (req, res) => {
  res.json(data.users);
});

// Route to add an User
app.post('/users', (req, res) => {
  const newUser = req.body;
  data.users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
