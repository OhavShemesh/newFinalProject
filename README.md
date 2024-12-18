# MyStore

## Description

MyStore is my final project, showcasing a series of technologies including React, Node.js, and MongoDB. It is designed to be fully responsive, meets all the requirements, and includes most of the bonus features.

In addition, a `logs` directory is created to track various actions, including:

- Registration of a new customer.
- Login of an existing customer.
- Updates to an existing customer's data, such as name changes.
- Switching a customer's status from regular to business.
- Creation of a new order.
- Deletion of an existing order.
- Creation of a new product.
- Deletion of an existing product.
- For orders, a log is generated detailing the remaining stock quantity of each product involved.

If a regular customer wishes to switch to business status to access and perform actions on the **Business Board**, they must provide the code: `SECRETBUSINESSCODE`.

## Usage

The application is primarily integrated locally but is also deployed online using Render. The project provides the following functionalities:

- View, edit, create, and delete products.
- Add items to the cart and place orders.
- Send messages, view all customers, and update their statuses (regular or business).
- Track completed orders from both the customer and admin perspectives.
- Edit and manage stock.
- Send and view customer messages and respond to them, where responses are also sent as emails to customers.
- View product statistics, including popular items and order quantities per product.
- User authentication and registration.
- Switch between dark and light modes.
- Search for products using the search bar.
- Navigate between categories.
- Toggle between table or card views for product displays.

## Technology Stack

The project uses the following technologies:

- **Node.js**
- **Express**
- **Mongoose**
- **JSON Web Token (JWT)**
- **Bcrypt**
- **Joi**
- **CORS**
- **Morgan**
- **Nodemailer**
- **Router**
- **Nodemon**

## Scripts

- For the frontend: `npm run dev`
- For the backend: `nodemon app`
