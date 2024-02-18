import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { faker } from '@faker-js/faker'
import { Job, Skill, UserData } from "./interfaces";

const app = express();
const PORT = 9000;


class User implements UserData {
  constructor(
    public imageURL: string,
    public name: string,
    public skills: Skill[],
    public currentJob: Job,
    public previousJobs: Job[],
    public showUpRate: number
  ) { }
}

const generateJob = (): Job => ({
  id: faker.string.uuid(),
  name: faker.person.jobType(),
  yearsOfExperience: faker.number.int({ min: 1, max: 10 })
})

const generateRandomArrayOfUpToFiveJobs = (): Job[] => {
  const length = Math.floor(Math.random() * 3); // Random length between 0 and 5
  const resultArray: Job[] = [];
  for (let i = 0; i < length; i++) {
    resultArray.push(generateJob()); // Random numbers between 0 and 100
  }
  return resultArray;
}


const generateUser = () => new User(
  faker.image.urlPicsumPhotos(),
  faker.person.fullName(),
  generateRandomArrayOfUpToFiveJobs(),
  generateJob(),
  generateRandomArrayOfUpToFiveJobs(),
  faker.number.int({ min: 0, max: 100 }),
)

let users: User[] = Array.from({ length: 100 }, () => generateUser())

app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

// Route to get all Users
app.get('/users', (req: Request, res: Response) => {
  console.log(`Returned ${users.length} users`)
  if (req.body?.filters?.ex) {
    res.json({ users: users.filter(u => u.previousJobs.length) });
  }
  else if (req.body?.filters?.recommended) {
    const newJobName = req.body.newJobName
    if (!newJobName) {
      console.error(`Couldn't filter by recommended: newJobId not provided`);
      res.status(400).json({ error: `Couldn't filter by recommended: newJobId not provided` });
    }
    else {
      const isExperiencedIn = (job: Job) => job.yearsOfExperience > 2;
      const isRecommended = (user: User) => (user.previousJobs.some(job => job.name === newJobName && isExperiencedIn(job)) ||
        user.skills.some(job => job.name === newJobName && isExperiencedIn(job)) ||
        user.currentJob.name === newJobName && isExperiencedIn(user.currentJob)) &&
        user.showUpRate > 80
        
      res.json({
        users: users.filter(isRecommended)
      });
    }
  }
  else {
    res.json({ users });
  }
});

// Route to add a User
app.post('/users', (req, res) => {
  const newUser = req.body;
  try {
    users.push(newUser);
    res.status(201).json(newUser);
  }
  catch (e) {
    const errorMessage = (e as Error).message;
    console.error(errorMessage);
    res.status(400).json({ error: `Couldn't add a new user: ${errorMessage}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
