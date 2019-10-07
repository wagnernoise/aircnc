# AirCnC

AirCnC (coffee and code) is a project emulates the AirBnB interface but, instead of rooms and homes, it's a tool to find available spots to work in your area. This spots will then be accepted or rejected by th owner (real-time implementation). The project is developed using [NodeJS](https://nodejs.org/en/), [ReactJS](https://reactjs.org), [React Native](https://facebook.github.io/react-native/) and [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/) stack. This stack will allow us to use almost the same approach and code to implement both Web a mobile apps.

# Backend
A REST API was developed using NodeJS and libraries such as express and socket.io to implement real-time capabilities to accept/reject a spot registration. The test database of choice is the free version of MongoDB.  

# Frontend
ReactJS was used to build the frontend of our web app. <br>
Screenshot:
![frontend](/screenshots/aircnc_web.png)

# Mobile app
Expo CLI was employed to build the React Native mobile app. In case of any issues, please check this repository [here](https://github.com/Rocketseat/expo-common-issues) where some of the common issues are listed. <br>
Screenshot:

![mobile](/screenshots/aircnc_mobile.png)