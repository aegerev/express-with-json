# Express with JSON

## User Story
This project was showcases the use of adding Express Routes using a JSON Web Token. 

## Deployment
Unfortunately, since we are doing the back-end, I can't deploy it to a website. Sorry about that. :( 

## Instructions to Get the App Working
1. Clone the repository
2. Install express, jsonwebtoken, and body-parser using npm install.
3. Install the ThunderClient Extension using the VS Code Extension Store
4. In the VS Code console, start up the server by using node index.js (!THIS IS VERY IMPORTANT. FAILURE TO DO SO WILL RESULT IN THE APP GIVING AN ERROR.!)
5. In ThunderClient, enter http://localhost:3000. You should get the following message:
   ![image](https://github.com/user-attachments/assets/5894a73f-6681-4601-a6be-887303f246c1)

7. Replace the URL in the URL input field with http://localhost:3000/login. Select the drop-down list beside the URL input and change the GET method to a POST method.  
   Select the "Body" tab below the URL input. Copy the following JSON inside the "Body" tab:
{
  "username": "ariel",
  "password": "NewAtlantica2024!"
}
If you run it, you should get the token. FOR SECURITY PURPOSES, STORE IT SOMEWHERE SAFE.

8. Replace the URL in the input field with http://localhost:3000/protected. Select the drop-down list beside the URL input and change the POST method to a GET method.  
    a. Next, select the "Headers" tab below the URL input. In the "Header" tab, ensure that the fields "Authorization" and "Accept" are selected. Inside the "value" field, add "Bearer" followed by the token you copied in the previous step. The "Header" tab should look like the following:
![image](https://github.com/user-attachments/assets/029aad65-76e8-4bcd-a582-a93fa135e9a6)
    b. Select the “Send” button.

## Credits
(c) 2024 Alexander Egerev. All Rights Reserved. 
(c) 2024 MIT/xPRO. All Rights Reserved.

