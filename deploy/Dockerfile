# Stage 1: Build with Chainguard Node
FROM cgr.dev/chainguard/node:latest AS build
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

# Stage 2: Serve with Chainguard Nginx
FROM cgr.dev/chainguard/nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /var/lib/nginx/html/
EXPOSE 8080
