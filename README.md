# MeetApp Mobile

MeetApp is an event aggregator app for developers (an acronym for Meetup + App).
This is the MeetApp mobile app created using React Native, Redux and Redux Saga. It uses the [MeetApp API server](https://github.com/milena-rosa/meetapp-api).

This application will be used by meetup subscribers and will not have meetup organization features.


## Features

Following are the features available in MeetApp mobile app.


### Authentication

The user can authenticate using *email* and *password*.


### User registration

New users can register in the application using *name*, *email* and *password*.


### Dashboard

In this screen, the user can browse meetups by date. He/she can subscribe for a meetup.


### Subscriptions

The user can view their subscriptions in meetups and also can unsubscript.


### Profile

The user can edit his/her information data.


## Setup

To run mobile apps, an emulator or a physical device must be connected and running. To set the things up, follow the steps in this [Documentation](https://docs.rocketseat.dev/ambiente-react-native/introducao).

With the emulator/device setup, clone the repo and run `npm install` or `yarn`.

The server must be running so the application works correctly. Its default address is set to `http://localhost` on port `3333`. If you want to change it, you have to edit the file `services/api.js`.

After all set, run `react-native run-android` or `react-native run-ios` and then `react-native start`.

Obs: This code was tested only with Android and, therefore, can present instabilities in iOS environment.

