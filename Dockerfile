FROM node:18.3.0

# RUN npm install -g yarn

WORKDIR /app

# RUN npx create-next-app portfolio --ts

RUN yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
RUN yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
# yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material @emotion/server @emotion/cache

# RUN yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/icons

# RUN yarn install