blood-bank-system/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── hospitalController.js
│   │   └── receiverController.js
│   ├── models/
│   │   ├── Hospital.js
│   │   ├── Receiver.js
│   │   ├── BloodSample.js
│   │   └── Request.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── hospitalRoutes.js
│   │   └── receiverRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── config.js
│   ├── utils/
│   │   └── helpers.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── Hospital/
│   │   │   │   ├── AddBloodInfo.js
│   │   │   │   ├── ViewRequests.js
│   │   │   │   └── AvailableBloodSamples.js
│   │   │   └── Receiver/
│   │   │       ├── ViewAvailableBloodSamples.js
│   │   │       └── RequestBloodSample.js
│   │   ├── pages/
│   │   │   ├── AuthPage.js
│   │   │   ├── HospitalPage.js
│   │   │   └── ReceiverPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       ├── global.css
│   │       └── variables.css
│   └── package.json
└── README.md

// this file was developed for project structure for better understanding


**Here is the description**

backend/: Contains all backend code files.

controllers/: Controllers for handling business logic.
models/: MongoDB models for defining schemas.
routes/: Route definitions for RESTful APIs.
middleware/: Middleware functions (e.g., authentication middleware).
config/: Configuration files (e.g., database configuration).
utils/: Utility functions (e.g., helper functions).
app.js: Entry point of the backend application.
package.json: Node.js dependencies and scripts.

frontend/: Contains all frontend code files.

public/: Public assets (e.g., HTML files).
src/: Source code.
components/: Reusable UI components.
pages/: Components representing different pages of the application.
App.js: Main component rendering all other components.
index.js: Entry point of the frontend application.
styles/: CSS stylesheets.
package.json: Node.js dependencies and scripts.
README.md: Project documentation file.