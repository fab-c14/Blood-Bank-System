# Blood Bank System

![Blood Bank System Logo](images/blood.png)

## Overview

Blood Bank System is a web application designed to manage blood donation, storage, and distribution efficiently. It allows hospitals to register, add blood samples, view available blood samples, and manage blood requests. Receivers can also register, view available blood samples, and request blood samples as needed.

## Features

- **User Authentication**: Hospitals and receivers can register and log in securely.
- **Hospitals Management**: Hospitals can add details of available blood samples to their bank.
- **Blood Inventory**: Track blood inventory, including blood type, quantity, and expiration dates.
- **Blood Requests**: Receivers can request blood samples based on their blood group and availability.
- **Request Management**: Hospitals can view and manage requests received for blood samples.
- **Admin Panel**: Administrative interface for managing users, blood samples, and requests.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS (Bootstrap for UI components)

## Getting Started
> *1. Clone the repository:*
```
   git clone https://github.com/fab-c14/blood-bank-system.git
```
> *2. Setup And Installation:*
>> Frontend
```
  cd blood-bank-system-frontend
  npm install
```
>> Backend
```
  cd ../blood-bank-system-backend
  npm install
```
> *3. Setup Environment Variables:*
```
> 1. Create a `.env` file in the `blood-bank-system-backend` directory.

> 2. Define the necessary environment variables in the `.env` file. These typically include variables such as MongoDB connection string, JWT secret, and any other configuration options your application requires.
```

> *4. Run The App*
>> Frontend
```
cd blood-bank-system-frontend
npm start
```
>> Backend
```
cd ../blood-bank-system-backend
npm start
```
## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests. **fab-c14**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

