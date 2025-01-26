# ABOUT

**Konekta** will be a web-based social app that will implement some common social media applications features such as Account personalization, posts creation and interaction, chats, and more.

**NOTE:**
_I'm only doing this project to learn, I will keep this open-source so others can learn or fork, i plan to containerized this with docker so it will work on any machine and environments_

---

## GETTING STARTED

_NOTE: There's nothing much to see here yet, i just started out this guide early so i won't have to remember all of these later_

**requirements:**

- docker and docker compose
- git

**1. Clone the repository**

```bash
git clone https://github.com/retsaeiouu/konekta-web-app.git
cd konekta-web-app/
```

**2. Setup environment variables**

create a `.env.dev` file and paste the snippet below (modify it if you want)

```bash
# POSTGRES CONTAINER CREDENTIALS
POSTGRES_USER=name
POSTGRES_PASSWORD=password
POSTGRES_DB=dbname

# URL STRING FOR PRISMA (schema is public by default if omitted)
DATABASE_URL=postgresql://name:password@db:5432/dbname?schema=public

# API PORT (express endpoint)
PORT=3000

# JWT SECRET KEY FOR SIGNING AND DECODING (you can generate your own secrets here if u want: https://jwtsecret.com/generate)
JWT_SECRET=mysecretisimissher
```

**3. Spin up the docker containers**

```bash
# try to run this with 'sudo' if it didn't work
docker compose --env-file ./.env.dev -f docker-compose.yml -f docker-compose.dev.yml up -d
```

---

## ISSUES

_You're free to open up issues anytime incase you have encountered one [here](https://github.com/retsaeiouu/konekta-web-app/issues)_
