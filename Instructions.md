# JavaScript Assignments - Setup and Testing Guide

This guide will help you set up the project, write the code, and test it for the JavaScript assignments.

## 1. Set up the project

Create a new folder on your local machine for the JavaScript assignments. You can use the command line or a graphical file explorer to do this. For example, using the command line:

mkdir javascript-assignments
cd javascript-assignments

## 2. Initialize a Git repository

Initialize a Git repository in the project folder to keep track of your code changes and version history:

git init

## 3. Create separate folders for each assignment

Create a separate folder for each assignment to keep your code organized:

mkdir assignment1-temperature-converter
mkdir assignment2-simple-calculator
mkdir assignment3-fizzbuzz
mkdir assignment4-palindrome-checker
mkdir assignment5-simple-todo-list

## 4. Write the code

Open the project folder in your favorite code editor (e.g., Visual Studio Code, Atom, Sublime Text), and start writing your code for each assignment in its respective folder. It's recommended to create an index.html and a separate script.js file for each assignment.

For example, inside the assignment1-temperature-converter folder, create an index.html file with the following content:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
</head>
<body>
    <!-- Add your HTML code for the temperature converter here -->

    <script src="script.js"></script>
</body>
</html>
```

Next, create a script.js file in the same folder and start writing your JavaScript code for the temperature converter.

## 5. Test the code

To test your code, open the index.html file in a web browser. You can do this by double-clicking the file or by right-clicking it and selecting "Open with" followed by your preferred web browser. As you make changes to your code, save the files and refresh the web page to see the updates.

## 6. Commit your changes

As you complete each assignment, make sure to commit your changes to the Git repository. This will help you keep track of your progress and maintain a version history of your work. To commit your changes, use the following commands:

git add .
git commit -m "Completed Assignment X"

Replace "X" with the number of the assignment you've completed.

## 7. Share your work

If you'd like to share your work, you can push your changes to a remote repository on a platform like GitHub or GitLab. First, create a new repository on the platform, then follow the instructions provided to add the remote repository and push your changes.

For example, to add a remote repository and push your changes to GitHub, you can use the following commands:

git remote add origin https://github.com/your-username/javascript-assignments.git
git branch -M main
git push -u origin main

Replace "your-username" with your actual GitHub username and "javascript-assignments" with the name of the repository you created.

Now you can share the link to your repository with others, or use it to showcase your work in your portfolio.
