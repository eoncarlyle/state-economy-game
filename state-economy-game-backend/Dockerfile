FROM node:21-bookworm-slim

USER root

RUN mkdir -p /opt/gdple
COPY dist/*.js /opt/gdple/
COPY dist/node_modules /opt/gdple/node_modules

EXPOSE 4000
RUN node --version
CMD ["node", "/opt/gdple/index.js", "/opt/app.db", "80"]
