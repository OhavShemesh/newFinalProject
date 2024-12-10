import { Box, Typography, Container } from '@mui/material';
import React from 'react';

export default function AboutPage() {
    return (
        <Box sx={{ padding: 4, minHeight: "100vh" }}>
            <Container sx={{ paddingBottom: 5, display: "flex", flexDirection: 'column', gap: 3 }}>
                <Typography sx={{ textAlign: 'center', color: "black", paddingBottom: 3 }} variant="h3">
                    ABOUT US
                </Typography>
                <Typography color='black' variant="body1">
                    Welcome to our website. We are dedicated to providing exceptional service and ensuring that every interaction with us is efficient and rewarding.<br />
                    Our team strives to deliver the highest quality, continuously working to improve your experience with our offerings.<br /><br />
                    Our company was established with a clear vision: to offer unparalleled value to our clients through a wide range of specialized services tailored to meet your specific needs.<br /><br />
                    Thank you for choosing us as your trusted partner. We look forward to serving you and exceeding your expectations.
                </Typography>
            </Container>

            <Container sx={{ borderBottom: "1px dotted", marginBottom: 5 }}></Container>

            <Container sx={{ paddingBottom: 5, display: "flex", flexDirection: 'column', gap: 3 }}>
                <Typography sx={{ textAlign: 'center', color: "black", paddingY: 3 }} variant="h3">
                    ABOUT ME
                </Typography>
                <Typography color='black' variant="body1">
                    This website represents my final project, which integrates a full-stack solution. The front-end is developed using React, while the back-end is powered by an Express-based server and a MongoDB database.<br /><br />
                    The platform includes a comprehensive registration and login system. Users can browse a wide selection of products, view detailed product information, add items to their cart, and complete their purchase. Additionally, there is a search feature and category filter that helps customers easily find products. Each product's availability is clearly displayed, showing the number of items in stock, as well as indicating when an item is out of stock.<br /><br />
                    On the cart page, customers have the option to remove items from their cart, making it easier to manage their selections before completing the purchase.<br /><br />
                    Customers can also send messages directly to management via the contact page, eliminating the need for external communication methods such as email or WhatsApp.<br /><br />
                    In the "Manage Orders" section, customers can view their past orders, including order status, total price, and the list of products in each order.<br /><br />
                    For business customers, the site offers an exclusive business board where managers can add, update, and delete products. Additionally, managers have the ability to change the status of orders, offering enhanced control and flexibility in managing customer orders.<br /><br />
                    Furthermore, the site is designed to support both light and dark modes to cater to the user's preference and enhance the overall user experience.<br /><br />
                    Thank you once again for choosing us. We are committed to delivering excellent service and look forward to working with you.
                </Typography>
            </Container>
            <Container sx={{ borderBottom: "1px dotted", marginBottom: 5 }}></Container>
            <Container sx={{ paddingBottom: 5, display: "flex", flexDirection: 'column', gap: 3 }}>
                <Typography sx={{ textAlign: 'center', color: "black", paddingY: 3 }} variant="h3">
                    WAYS TO INTERFACE WITH THE WEBSITE
                </Typography>
                <Typography sx={{ display: "flex", gap: 1, flexDirection: "column" }} color="black" variant="body1" paragraph>
                    Interfacing with our website is designed to be seamless and intuitive. Follow these steps to make the most out of your experience:<br /><br />
                    <strong>1. Register or Log In:</strong> Create an account or log in to access personalized features. Both business and regular customers can register and log in to start using the website.<br /><br />
                    <strong>2. Browse Products:</strong> Navigate to the main Products page to view all available products. You can filter the product list by categories using the filter bar or search for specific items by name with the search bar.<br /><br />
                    <strong>3. View Product Details:</strong> Click on any product to see its details, including images, price, stock availability, description, and category. This helps you make informed purchasing decisions.<br /><br />
                    <strong>4. Select Quantity and Add to Cart:</strong> Choose the desired quantity for the product and click "Add to Cart" to place it in your shopping cart. You can also like the product and copy the link to share it with others.<br /><br />
                    <strong>5. Manage Your Cart:</strong> Review the items in your cart before proceeding to checkout. If needed, you can remove products from your cart, but the quantity cannot be updated directly on this page.<br /><br />
                    <strong>6. Place an Order:</strong> Once you’re ready, proceed to checkout and place your order. You’ll receive a confirmation of your purchase.<br /><br />
                    <strong>7. Manage Orders:</strong> Both business and regular customers can view their past orders and their statuses on the "Manage Orders" page. This helps you keep track of your purchases and their progress.<br /><br />
                    <strong>8. Manage Orders and Customer Interactions (Business Customers Only):</strong> Business customers can access the "Manage Orders" section within the Business Board. Here, you can view full order details, including customer information (address, phone, email, name) and the list of products ordered. You can also manage and update the order status to maintain better control over orders. Additionally, business customers can see and reply to customer messages, providing support directly from the platform.<br /><br />
                    <strong>9. Manage Customer Status (Business Customers Only):</strong> You have the ability to patch and update the status of customers, distinguishing between business and non-business customers for better segmentation and targeted management.<br /><br />
                    <strong>10. Manage Stock (Business Customers Only):</strong> Business customers can oversee and manage product stock within the Business Board. This includes updating product inventory by adding new items or specifying the number of items available, ensuring accurate stock representation and product availability.<br /><br />
                    <strong>11. Contact Page Features:</strong> If you encounter any issues or need assistance, navigate to the "Contact" page for quick support. On this page, you can see the storage address, which will open Google Maps when clicked. You can also see the phone number; clicking on it will navigate you to your phone’s call application. Additionally, you can click on the provided Gmail link to open your email application with the sender field pre-populated with our email address, or click the WhatsApp link to open the WhatsApp app or web interface with our contact details already filled in.<br /><br />
                    The Contact page also includes a text field and a "Send" button for sending messages directly to the business. These messages will be stored in the "Messages" section of the Business Board. Business customers can manage these messages by marking them as completed, deleting them, or replying. Depending on the action taken, the customer will receive an email notification: if marked as completed, the customer will be notified that the message has been handled; if deleted, they will receive an email indicating that the message is deemed irrelevant; and if replied to, they will get an email containing the response text.<br /><br />
                    <strong>12. Light and Dark Mode:</strong> Customize your experience by switching between light and dark modes according to your preference, ensuring comfort during extended browsing sessions.<br /><br />
                    These steps ensure a smooth and comprehensive interaction with our website, whether you are a regular user or a business customer.
                </Typography>
            </Container>
        </Box>
    );
}
