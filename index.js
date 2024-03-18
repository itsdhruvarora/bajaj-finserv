const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/bfhl", async (req, res) => {
  try {
    console.log("HIT");
    const { data } = req.body;

    if (!data) {
      return res
        .status(400)
        .json({ is_success: false, message: "No data provided" });
    }

    const fullName = "Dhruv Arora";
    const dob = "21082003";
    const email = "dhruv2073.be21@chitkara.edu.in";
    const collegeRollNumber = "2110992073";

    const userId = `${fullName.toLowerCase().replace(/\s/g, "_")}_${dob}`;

    const even = data.filter(
      (num) => typeof parseInt(num) === "number" && parseInt(num) % 2 === 0
    );
    const odd = data.filter(
      (num) => typeof parseInt(num) === "number" && parseInt(num) % 2 === 1
    );
    const alpha = data.filter(
      (num) => typeof num === "string" && isNaN(parseInt(num))
    );
    const upper = alpha.map((al) => al.toUpperCase());

    return res.json({
      is_success: true,
      user_id: userId,
      email: email,
      college_roll_number: collegeRollNumber,
      even_numbers: even,
      odd_numbers: odd,
      alphabets: upper,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ is_success: false, message: "An error occurred" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

