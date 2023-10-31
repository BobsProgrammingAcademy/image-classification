# Image Classification

This is an image classification app built using **Django 3**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5**. The app uses **Inception-ResNet-v2** to classify images selected by the user.


![plot](https://github.com/BobsProgrammingAcademy/Image-Classification/blob/main/frontend/public/images/image_classification.png?raw=true)


## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Customizing the application](#customize-the-application)
- [Copyright and License](#copyright-and-license)


### Prerequisites

Install the following prerequisites:

1. [Python 3.7-3.10](https://www.python.org/downloads/)
<br>This project uses **TensorFlow v2.8.0**. For TensorFlow to work, you must have a correct Python version installed on your machine. More information [here](https://www.tensorflow.org/install/source#tested_build_configurations).
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)


### Installation

#### Backend

#### 1. Create a virtual environment

From the **root** directory, run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory, run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory, run:

```bash
pip install -r requirements.txt
```

#### 4. Run migrations

From the **backend** directory, run:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

#### Frontend

#### 1. Install required frontend dependencies

From the **root** directory, run:

```bash
cd frontend
```
```bash
npm install
```

### Run the application

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **backend** directory, run:

```bash
python manage.py runserver
```

#### 2. Run frontend

From the **frontend** directory, run:

```bash
npm run dev
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.

### Customize the application

This section describes how to customize the application. 

#### 1. Changing Colors

To modify the colors in the application, make changes in the ```frontend/src/theme/theme.js``` file.

#### 2. Changing Fonts

To modify the fonts in the application, first, add a new font to the ```frontend/src/pages/_document.js``` file, and then make changes in the ```frontend/src/theme/theme.js``` file.

#### 3. Changing Logo

To modify the logo in the application, make changes in the ```frontend/src/layout/Header.js``` and ```frontend/src/layout/Sidebar.js``` files.

#### 4. Changing the Image in the Hero Section

To modify the image in the Hero section, make changes in the ```frontend/src/components/Hero.js``` and ```frontend/src/layout/Footer.js``` files.

#### 5. Changing the Text in the Hero Section

To modify the text in the Hero section, make changes in the ```frontend/src/components/Hero.js``` file.

#### 6. Changing Buttons in the Hero Section

To modify the two buttons in the Hero section, make changes in the ```frontend/src/components/HeroButtons.js``` file.

#### 7. Changing the App Description

To modify the app's description on the home page, make changes in the ```frontend/src/components/Description.js``` file.

### Copyright and License

Copyright © 2022 Bob's Programming Academy. Code released under the MIT license.
3
