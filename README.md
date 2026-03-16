## Docker Compose Microservices Dev Template

This is a **minimal, generic, local development template** for running multiple Node.js services with Docker Compose.

It is designed to be:
- **Simple**: only what you need to run two services locally.
- **Generic**: no cloud providers, databases, or extra tooling.
- **Reusable**: easy to copy and adapt to your own services.

### Project structure

```text
.
├─ docker-compose.yml        # Orchestrates the services
├─ .env.example              # Example environment variables
└─ services/
   ├─ service-a/             # Sample Node.js service A
   │  ├─ Dockerfile
   │  ├─ package.json
   │  └─ index.js
   └─ service-b/             # Sample Node.js service B
      ├─ Dockerfile
      ├─ package.json
      └─ index.js
```

### Services

Both sample services are very small Express applications that expose:
- **`GET /`**: basic JSON response with service name and status.
- **`GET /health`**: simple health check.

Default ports (can be changed via `.env`):
- `service-a`: `3001`
- `service-b`: `3002`

### Prerequisites

- **Docker** and **Docker Compose** installed.

### Quick start

1. **Clone this template**

   ```bash
   git clone <your-repo-url>
   cd docker-microservices-dev-environment
   ```

2. **Configure environment variables (optional)**

   Copy the example file and adjust values if needed:

   ```bash
   cp .env.example .env
   ```

   The default `.env` values should work out of the box.

3. **Build and start all services**

   ```bash
   docker compose up --build
   ```

   This will:
   - Build Docker images for `service-a` and `service-b`.
   - Start both containers and attach logs to your terminal.

4. **Access the services**

   - `service-a`:
     - `http://localhost:3001/`
     - `http://localhost:3001/health`
   - `service-b`:
     - `http://localhost:3002/`
     - `http://localhost:3002/health`

5. **Stop the environment**

   In the same terminal where `docker compose up` is running, press `Ctrl+C`, then run:

   ```bash
   docker compose down
   ```

### Customizing for your own services

- **Rename services** in `docker-compose.yml` and under `services/` to match your domain (for example, `api-gateway`, `users-service`).
- **Add more services** by:
  - Creating a new folder under `services/` with a `Dockerfile`, `package.json`, and code.
  - Adding a new service entry to `docker-compose.yml` following the existing pattern.
- **Adjust ports and environment variables** by updating:
  - `.env.example` and your local `.env`.
  - The `ports` and `environment` sections for each service in `docker-compose.yml`.

### Notes

- This template is **intentionally minimal**:
  - No AWS, ECS, CI/CD, databases, testing, logging, or monitoring are included.
  - It is focused purely on **local multi-service development** with Docker Compose.

