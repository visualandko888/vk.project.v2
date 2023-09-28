# vk.project

## 💡 Concept

Création / refonte du site VisualAndKo.com

## 🎨 Charte graphique

### **Couleurs utilisées:**

- #### **_Background_**

  - Primaire: #e07a1b -> `$primary-color`
  - Secondaire: #102d4a -> `$secondary-color`

- #### **_Font_**
  - Primaire: #204060 -> `$primary-font-color`

## 🖌️ Figma

Lien d'accès au figma: [figma.com](https://www.figma.com/file/MtH30sLlydGdWhoUhjWJuO/Visual%26Ko?node-id=0%3A1&t=vxUPzmJ4npuJC4Bc-1)

![figma1](./figma/figma2.png)

## 📊 Trello

Pour faciliter la gestion de ce projet, un trello à été mis en place suivant la méthode AGILE (SCRUM). Le **Product Backlogs** contient les **User Story** à effecter tout au long du project et sont à définir pour les **SPRINTS** herbdomadaire.

Lien d'accès au trello: [trello.com](https://trello.com/invite/visualko/ATTI980fbbfd94b6a49ede19a3e9242e2044A61F8803)

## 🛠️ Technos

![react](https://camo.githubusercontent.com/ad8dafdc0932ce42ad64696e7f4957228e513eef86b0acf280d4682fb15ae3cf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163744a532532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
![php](https://camo.githubusercontent.com/6c74e2cbeaf8f414d3f1fac7f9e088ebfc0a28699cd61d844df2130b0dc2fb12/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465)

## ⚙️ Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## ❓ FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
