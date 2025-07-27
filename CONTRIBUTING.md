## How to Contribute 🤔

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Make sure you have [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

### Setup guidelines 🪜

Follow these steps to setup FlavorPantry on your local machine

1. [Fork](https://github.com/Ratangulati/FlavorPantry.git) the project
2. Clone the project to run on your local machine using the following command:

   ```sh
   git clone https://github.com/<your_github_username>/FlavorPantry.git
   ```

3. Get into the root directory

   ```sh
   cd FlavorPantry
   ```

4. Install all dependencies by running

   ```sh
   npm install
   ```

5. Create your branch

   ```sh
   git checkout -b <your_branch_name>
   ```

6. Run and view the application on localhost

   ```sh
    npm start
   ```

> **P.S**: If you have `docker` installed in your system, you can follow these steps to set up the environment:
>
> 1. After forking and cloning the repo(as mentioned above), get into the project directory:
>
> ```bash
> cd FlavorPantry/
> ```
>
> 2. Start the docker container with:
>
> ```bash
> docker-compose up
> ```
>
> 3. Now start adding your changes.
>    **Note:** You don't need to restart the container again and again after starting it once, because the changes you make will reflect in the container instantly.

7. Make your changes before staging them.

8. Stage your changes

   ```sh
   git add <filename>
   ```

9. Commit your changes

   ```sh
   git commit -m "<your-commit-message>"
   ```

10. Push your changes to your branch

    ```sh
    git push origin "<your_branch_name>"
    ```

11. Create a [PULL REQUEST](https://github.com/Ratangulati/FlavorPantry) 💣

    > Click _compare across forks_ if you don't see your branch

---

### Alternatively contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the FlavorPantry repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the FlavorPantry repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
  - Go to the GitHub website and navigate to your fork of the FlavorPantry repository.
  - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the FlavorPantry repository.