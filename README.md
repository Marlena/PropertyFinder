# Marlena's Property Finder

This repo is for a propety finder app which started out as a copy of a [react native tutorial](https://www.raywenderlich.com/165140/react-native-tutorial-building-ios-android-apps-javascript), but which I'm growing and expanding as a portfolio app.

## Roadmap
* Configure CI
* Port to web using (React Native Web)[https://github.com/necolas/react-native-web]
*

Here is the project's (Trello)[https://trello.com/b/mq7dnvXz/property-finder]

## To run the app locally on MacOS
* Make sure you have an updated version of xcode
* Git clone
* `cd PropertyFinder`
* Make sure node is installed `brew install node`
* Install the watchman file watcher `brew install watchman`
* Install react native CLI `npm install -g react-native-cli`
* Install the node dependencies `npm i`
* Start the react native packager with `react-native start` and leave it running.
* In another tab, open the project in xcode `open ios/PropertyFinder.xcodeproj`
* Select a simulator device
* Click the Play button
* Get a coffee (it will take a minute to build)

## Demo the app
Currently, the app is configured to allow a search of properties for sale in London.
* Type Go to see a filtered list of properties


