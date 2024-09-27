# bubblebot3
For real this time

## How to run:
- Add auth.json in the app directory with auth token for your bot account

### Install docker and docker compose

### Build and run docker image
```
docker compose build
docker compose up
```

## Adding commands

- When adding new commands, add a new folder under /cmd/ and a command builder
- IMPORTANT: File for command builder MUST have the same name as the folder or it will not be detected!

