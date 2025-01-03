📅 Calendar Application for Communication Tracking
This project is a full-stack web application built with React (Frontend) and Django (Backend), designed to track and manage communication events effectively. The app provides calendar views, notification alerts, and company-specific communication tracking.

🚀 Features
✅ Communication Calendar:

View scheduled communications on a calendar.
Highlight overdue and upcoming events.
✅ Notifications:

Alerts for overdue and today's communications.
✅ Company Management:

Add, delete, and manage companies.
View detailed communication logs for each company.
✅ Dashboard:

Overview of last five communications.
Next scheduled communications.
🛠️ Technologies Used
Frontend:
React.js
Axios
React-Router
React-Calendar
Backend:
Django
Django REST Framework
Django CORS Headers
Database:
SQLite
📂 Project Structure
bash
Copy code
/backend
    ├── manage.py
    ├── core/
    │   ├── settings.py
    │   ├── urls.py
    │   └── ...
    ├── api/
    │   ├── views.py
    │   ├── serializers.py
    │   ├── urls.py
    │   └── models.py
    └── db.sqlite3

/frontend
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.js
    │   │   ├── CalendarView.js
    │   │   ├── Notifications.js
    │   │   ├── CompanyDetails.js
    │   │   └── AdminModule.js
    │   ├── services/api.js
    │   ├── App.js
    │   ├── index.js
    │   └── styles/
    ├── public/
    ├── package.json
    └── README.md
⚙️ Setup and Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/calendar-communication-app.git
cd calendar-communication-app
2. Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
Backend will run on http://127.0.0.1:8000/.
3. Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
npm install
npm start
Frontend will run on http://localhost:3000/.
🔗 API Endpoints
Endpoint	Method	Description
/api/companies/	GET	Get all companies
/api/companies/	POST	Add a new company
/api/companies/:id/	DELETE	Delete a company
/api/communications/	GET	Get communication logs
/api/notifications/	GET	Fetch notifications
🎯 Usage
Open the Dashboard to see company and communication summaries.
Use the Calendar View to track events visually.
Check Notifications for overdue or upcoming events.
Manage companies via the Admin Module.
🐞 Troubleshooting
CORS Error: Ensure CORS_ALLOW_ALL_ORIGINS = True in settings.py.
Network Error: Verify that both frontend and backend are running on their respective ports.
Database Issues: Run python manage.py migrate and restart the server.
🧑‍💻 Contributing
Fork the project.
Create a new branch: git checkout -b feature/your-feature.
Commit your changes: git commit -am 'Add new feature'.
Push to the branch: git push origin feature/your-feature.
Submit a pull request.
📜 License
This project is licensed under the MIT License.

📬 Contact
Developer: Umme Rumman
Email: ummerumman124@gmail.com

