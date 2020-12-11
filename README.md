# React Native Test

yarn go -> will run on ios
or manually yarn -> pod install -> yarn ios

tips : run on ios first then android, since android has memory & cache issue

if android has issue cache try this:
rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-* && watchman watch-del-all && rm -rf node_modules/ && yarn install && yarn start -- --reset-cache

or 

Completely removing the android device from AVD manager and adding it again fixed the issue suggesting that it was something to do with caching.


## hooks
hooks on fetching data, i used api from latest test, havent completely clean the code yet

## redux
since it's not mention what redux for, and the app has limited action for requiring global state, 
so i use it for toggle bottom sheet

## navigation v5
used on top bar & navigation detail 

## push notification
somehow on android must trigger from the server first to make it work,
the fcm removed temporarily , 