# Image Classification

This is an image classification app built using **Django 3.2**, **Next.js 12**, and **Material UI 5**. The app uses **Inception-ResNet-v2** to classify images selected by the user.


![plot](https://github.com/BobsProgrammingAcademy/Image-Classification/blob/main/frontend/public/images/image_classification.png?raw=true)


## Prerequisites

Install the following prerequisites:

1. [Python](https://www.python.org/downloads/)
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)


## Installation

### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend
```
```bash
python -m venv venv
```

### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

### 4. Run migrations

From the **backend** directory run:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### 5. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

### 3. View the application

Go to http://localhost:3000/ to view the application.
