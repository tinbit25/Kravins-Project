const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json()); 

// Define the POST route for user sign-up
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Incomplete sign-up data.');
  }

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }

    const users = data ? JSON.parse(data) : [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return res.status(400).send('User with this email already exists.');
    }

    users.push({ name, email, password });

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving user data');
      }
      res.status(200).send('User signed up successfully');
    });
  });
});

// Define the GET route to retrieve user signups
app.get('/signup', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }
    res.status(200).send(data);
  });
});

// Define the POST route for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Incomplete login data.');
  }

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }

    const users = data ? JSON.parse(data) : [];
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
      return res.status(401).send('Invalid email or password.');
    }

    res.status(200).send(`Welcome back, ${user.name}!`);
  });
});

// Define the POST route for form submission
app.post('/submit', (req, res) => {
  const formData = req.body;

  if (!formData.name || !formData.phone || !formData.origin || !formData.budget) {
    return res.status(400).send('Incomplete form data.');
  }

  fs.readFile('bookChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    formData.id = Date.now().toString(); // Add unique id
    jsonData.push(formData);

    fs.writeFile('bookChef.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Form submitted successfully');
    });
  });
});

// Define a GET route to retrieve form submissions
app.get('/submit', (req, res) => {
  fs.readFile('bookChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});

// DELETE route for form submissions
app.delete('/submit/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('bookChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let formData = JSON.parse(data);

    const entryExists = formData.some(item => item.id === id);
    if (!entryExists) {
      return res.status(404).send('Form submission not found');
    }

    formData = formData.filter(item => item.id !== id);

    fs.writeFile('bookChef.json', JSON.stringify(formData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }

      res.status(200).send(`Form submission with ID ${id} deleted successfully`);
    });
  });
});

// Define the POST route for chef form submissions
app.post('/submitchefform', (req, res) => {
  const formData2 = req.body;

  if (!formData2.name || !formData2.phone || !formData2.location || !formData2.availability) {
    return res.status(400).send('Incomplete form data.');
  }

  fs.readFile('becomeChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    formData2.id = Date.now().toString(); // Add unique id
    jsonData.push(formData2);

    fs.writeFile('becomeChef.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Chef form submitted successfully');
    });
  });
});

// Define a GET route to retrieve chef form submissions
app.get('/submitchefform', (req, res) => {
  fs.readFile('becomeChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
});

// DELETE route for chef form submissions
app.delete('/submitchefform/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('becomeChef.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let formData2 = JSON.parse(data);

    const entryExists = formData2.some(item => item.id === id);
    if (!entryExists) {
      return res.status(404).send('Chef form submission not found');
    }

    formData2 = formData2.filter(item => item.id !== id);

    fs.writeFile('becomeChef.json', JSON.stringify(formData2, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }

      res.status(200).send(`Chef form submission with ID ${id} deleted successfully`);
    });
  });
});

// Define the POST route for meal order submission
app.post('/submitMealOrder', (req, res) => {
  const orderData = req.body;

  if (!orderData.mealPreference || !orderData.numberOfMeals || !orderData.personalInfo || !orderData.address) {
    return res.status(400).send('Incomplete order data.');
  }

  fs.readFile('orderData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : [];
    orderData.id = Date.now().toString(); // Add unique id
    jsonData.push(orderData);

    fs.writeFile('orderData.json', JSON.stringify(jsonData, null, 2), (err) => {
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

// DELETE route for meal orders
app.delete('/submitMealOrder/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('orderData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let orderData = JSON.parse(data);

    const orderExists = orderData.some(order => order.id === id);
    if (!orderExists) {
      return res.status(404).send('Meal order not found');
    }

    orderData = orderData.filter(order => order.id !== id);

    fs.writeFile('orderData.json', JSON.stringify(orderData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }

      res.status(200).send(`Meal order with ID ${id} deleted successfully`);
    });
  });
});

// DELETE route to remove a user by email
app.delete('/signup/:email', (req, res) => {
  const emailToDelete = req.params.email;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading users file');
    }

    let users = JSON.parse(data);

    const userExists = users.some(user => user.email === emailToDelete);
    if (!userExists) {
      return res.status(404).send('User not found');
    }

    users = users.filter(user => user.email !== emailToDelete);

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing users file');
      }

      res.status(200).send(`User with email ${emailToDelete} deleted successfully`);
    });
  });
});
// Define the POST route for contact form submissions
app.post('/contact', (req, res) => {
  const formData = req.body;

  // Validate form data
  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).send('Incomplete form data.');
  }

  // Read the existing contactInfo.json file
  fs.readFile('contactInfo.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    const jsonData = data ? JSON.parse(data) : []; // Parse existing data or initialize as an empty array
    formData.id = Date.now().toString(); // Add unique ID to form data
    jsonData.push(formData); // Add new form data to the array

    // Write updated data back to contactInfo.json
    fs.writeFile('contactInfo.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Contact form submitted successfully');
    });
  });
});

// Define a GET route to retrieve contact form submissions
app.get('/contact', (req, res) => {
  fs.readFile('contactInfo.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data); // Send the contact form data
  });
});

// DELETE route for contact form submissions
app.delete('/contact/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile('contactInfo.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }

    let contactData = JSON.parse(data);

    const entryExists = contactData.some(item => item.id === id);
    if (!entryExists) {
      return res.status(404).send('Contact form submission not found');
    }

    // Filter out the submission to delete
    contactData = contactData.filter(item => item.id !== id);

    // Write updated data back to contactInfo.json
    fs.writeFile('contactInfo.json', JSON.stringify(contactData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }

      res.status(200).send(`Contact form submission with ID ${id} deleted successfully`);
    });
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
