const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello World!');
    }
);

app.post('/bfhl', async (req, res) => {
  try {
   console.log("HIT");
    const {data} = req.body;

    if (!data) {
      return res.status(400).json({ is_success: false, message: 'No data provided' });
    }

    const fullName = "Dhruv Arora"; 
    const dob = "21082003"; 
    const email = "dhruv2073.be21@chitkara.edu.in"; 
    const collegeRollNumber = "2110992073"; 

   
    const userId = `${fullName.toLowerCase().replace(/\s/g, '_')}_${dob}`;

    
    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    for (const item of data) {
      if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      }
    }

    
    return res.json({
      is_success: true,
      user_id: userId,
      email: email,
      college_roll_number: collegeRollNumber,
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabets,
    });
  } catch (error) {
    
    console.error(error);
    return res.status(500).json({ is_success: false, message: 'An error occurred' });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));