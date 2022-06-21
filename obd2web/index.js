/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// [START imports]
const firebase = require('firebase-admin');
// [END imports]



// TODO(DEVELOPER): Change the two placeholders below.
// [START initialize]
// Initialize the app with a service account, granting admin privileges
/** @type {any} */
const serviceAccount = require('./pyobd2-firebase-key.json');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://pyobd2-default-rtdb.firebaseio.com'
});
// [END initialize]



/**
 * Sends the weekly top post email to all users in the given `users` object.
 */
function start() {
  
        // Save the date at which we sent the weekly email.
        // [START basic_write]
     firebase.database().ref().child('/obddata/')
            .set(firebase.database.ServerValue.TIMESTAMP);
        // [END basic_write]
    
    }
 
// Start the server.

start();
