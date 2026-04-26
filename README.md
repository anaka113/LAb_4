This project demonstrates:
Multi-stage Docker build optimization
Persistent storage using volumes
Bind mounts for real-time log access
Observability using Docker logs

Docker Images
Naive Build
Single-stage
Large image size (~1.1GB)
Optimized Build
Multi-stage
Alpine base image
Non-root user
Healthcheck
Reduced size (~132MB)
Image Size Comparison

Run:
docker images

Result:
app-naive: ~1.1GB
app-optimized: ~132MB

Persistent Volume
Logs are stored using a Docker volume:
docker volume create app-logs
Logs remain after container removal.

Bind Mount
Logs are mapped to host:
-v $(pwd)/logs:/app/logs
Logs visible in real time on host.


Observability
Logs accessible via:
docker logs
log file (logs/app.log)

Run Instructions
Build
docker build -f Dockerfile.naive -t app-naive .
docker build -f Dockerfile.optimized -t app-optimized .

Run with volume

docker run -d -p 3000:3000 -v app-logs:/app/logs --name app-volume app-optimized

Run with bind mount

docker run -d -p 3000:3000 -v $(pwd)/logs:/app/logs --name app-bind app-optimized
