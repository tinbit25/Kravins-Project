const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define the POST route for user sign-up
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if the required properties are present
  if (!name || !email || !password) {
    return res.status(400).send('Incomplete sign-up data.');
  }

  // Read existing users from users.json
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }

    const users = data ? JSON.parse(data) : [];

    // Check for existing user with the same email
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return res.status(400).send('User with this email already exists.');
    }

    // Add new user to the users array
    users.push({ name, email, password });

    // Write updated users array back to users.json
    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving user data');
      }
      res.status(200).send('User signed up successfully');
    });
  });
});

// Define the POST route for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the required properties are present
  if (!email || !password) {
    return res.status(400).send('Incomplete login data.');
  }

  // Read existing users from users.json
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }

    const users = data ? JSON.parse(data) : [];

    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid email or password.');
    }

    // Successful login
    res.status(200).send(`Welcome back, ${user.name}!`);
  });
});

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

// Define the POST route for checking form submissions
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

// Define the POST route for meal order submission
app.post('/submitMealOrder', (req, res) => {
  const orderData = req.body;

  // Check if orderData has valid properties
  if (!orderData.mealPreference || !orderData.numberOfMeals || !orderData.personalInfo || !orderData.address) {
    return res.status(400).send('Incomplete order data.');
  }

  fs.readFile('orderData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    jsonData.push(orderData);

    // Filter out empty entries
    const cleanedData = jsonData.filter(item => item.mealPreference || item.numberOfMeals || item.personalInfo || item.address);

    fs.writeFile('orderData.json', JSON.stringify(cleanedData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Order submitted successfully');
    });
  });
});

// Define a GET route to retrieve meal orders
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
