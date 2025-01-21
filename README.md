# ABOUT

**Konekta** will be a web-based social app that will implement some common social media applications features such as Account personalization, posts creation and interaction, chats, and more.

**NOTE:**
_I'm only doing this project to learn, I will keep this open-source so others can learn or fork, i plan to containerized this with docker so it will work on any machine and environments_

---

# GETTING STARTED

_NOTE: There's nothing much to see here yet, i just started out this guide early so i won't have to remember all of these later_

**requirements:**

- docker and docker compose
- git
- git bash or wsl (for git clone and executing bash scripts) FOR WINDOWS ONLY
- node and npm

**1. Clone and install dependencies**

```bash
git clone https://github.com/retsaeiouu/konekta-web-app.git
cd konekta-web-app/frontend/
npm i
cd ../api/
npm i
```

**2. Setup database with compose and prisma**

```bash
# make sure you are at the root directory of the project (not in frontend or api directory)

# for linux and mac
chmod +x run-compose.sh && chmod +x api/run-migration.sh

# this will create a new postgres container with credentials based on the .env file
NODE_ENV=dev ./run-compose.sh

cd api/

# create tables in the database based on the models defined in schema.prisma
NODE_ENV=dev ./run-migration.sh
```

**3. Running the frontend and backend**

```bash
# navigate to each of their directories and run:
npm run dev
```
