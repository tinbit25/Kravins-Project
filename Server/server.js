const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define the POST route for form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Check if formData has valid properties
  if (!formData.name || !formData.phone || !formData.origin || !formData.budget) {
    return res.status(400).send('Incomplete form data.');
  }

  fs.readFile('formData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(formData);

    // Filter out empty entries
    const cleanedData = jsonData.filter(item => item.name || item.phone || item.origin || item.budget);

    fs.writeFile('formData.json', JSON.stringify(cleanedData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Form submitted successfully');
    });
  });
});

// Define a GET route to retrieve the data
app.get('/submit', (req, res) => {
  fs.readFile('formData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});




// Define the POST route for form submission
app.post('/submitchefform', (req, res) => {
  const formData2 = req.body;

  // Check if formData has valid properties
  if (!formData2.name || !formData2.phone || !formData2.location || !formData2.availability) {
    return res.status(400).send('Incomplete form data.');
  }

  fs.readFile('formData2.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(formData2);

    // Filter out empty entries
    const cleanedData = jsonData.filter(item => item.name || item.phone || item.location || item.availability);

    fs.writeFile('formData2.json', JSON.stringify(cleanedData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Form submitted successfully');
    });
  });
});

// Define a GET route to retrieve the data
app.get('/submitchefform', (req, res) => {
  fs.readFile('formData2.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});





// Define the POST route for form submission
app.post('/submitMealOrder', (req, res) => {
  const orderData = req.body;

  // Check if formData has valid properties
  if (!orderData.mealPreference || !orderData.numberOfMeals || !orderData.personalInfo || !orderData.address) {
    return res.status(400).send('Incomplete form data.');
  }

  fs.readFile('orderData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(orderData);

    // Filter out empty entries
    const cleanedData = jsonData.filter(item => item.mealPreference || itemnumberOfMeals || item.personalInfo || item.address);

    fs.writeFile('orderData.json', JSON.stringify(cleanedData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Form submitted successfully');
    });
  });
});

// Define a GET route to retrieve the data
app.get('/submitMealOrder', (req, res) => {
  fs.readFile('orderData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});