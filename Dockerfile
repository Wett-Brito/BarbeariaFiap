# FROM node:lts AS ui-build
# WORKDIR /usr/src/app
# RUN cd my-app && npm install && npm run build

FROM node:18
WORKDIR /root/
# COPY --from=ui-build /usr/src/app/my-app/dist ./my-app/dist
COPY ./my-app/dist ./my-app/
COPY package*.json ./
COPY server.js .
RUN npm install

EXPOSE 80

CMD ["node", "server.js"]

# # Stage 1: Compile and Build angular codebase
# 
# # Use official node image as the base image
# FROM node:latest as build
# 
# # Set the working directory
# WORKDIR /usr/local/app
# 
# # Add the source code to app
# COPY ./ /usr/local/app/
# 
# # Install all the dependencies
# RUN npm install
# 
# # Generate the build of the application
# RUN npm run build
# 
# 
# # Stage 2: Serve app with nginx server
# 
# # Use official nginx image as the base image
# FROM nginx:latest
# 
# # Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/local/app/dist /usr/share/nginx/html
# 
# # Expose port 80
# EXPOSE 80