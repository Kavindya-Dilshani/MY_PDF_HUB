# MY PDF HUB

**MY PDF HUB** is a comprehensive PDF management system that allows users to sign up, log in, and manage PDF files. Built with React.js, Node.js, Express.js, and MongoDB, this platform provides a secure and efficient way to view, download, and delete PDF files from a list.

## Features

- **User Authentication:**
  - Sign up to create an account.
  - Log in securely to access your PDF files.
  
- **PDF Management:**
  - Retrieve and display a list of PDFs stored in the database.
  - Download any PDF file with a single click.
  - Delete unwanted PDFs from the list directly.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kavindya-Dilshani/MY_PDF_HUB.git
   cd MY_PDF_HUB
   
2. **Install dependencies for the backend:**
   
   ```bash
   cd backend
   npm install

3. **Install dependencies for the frontend:**
   
   ```bash
   cd ../frontend
   npm install

4. **Set up environment variables:**
   
   ```bash
   SERVER_PORT=5000
   FRONT_END_URL=http://localhost:3000
   DATABASE_URL=mongodb://127.0.0.1:27017/PDFHubDB

5. **Set up environment variables:**
   
   ```bash
   cd backend
   npm start

6. **Run the frontend development server:**
   
   ```bash
   cd ../frontend
   npm start

7. **Run the frontend development server:**
   
   Open your browser and navigate to http://localhost:3000.

## Usage

  - Sign up for a new account or log in if you already have one.
  - Upload PDFs to the database using drag and drop and upload.
  - View the list of available PDFs on the list.
  - Download any PDF file by clicking on it.
  - Delete unwanted PDFs by selecting them and confirming the action.

**License:**
This project is licensed under the MIT License - see the LICENSE file for details.
