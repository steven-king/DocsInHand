
# Docs in Hand

## Second Screen Application

To test app, play this video clip on a seperate device (same as emulator is fine) with volume at normal level.
http://steventking.com/clients/testing_sm.mov

Built with Angular.js

Need to run an HTTP server
python -m SimpleHTTPServer 8000

**Recent Changes** (too long & confusing to include all of in commit log)

*Switched from CSS based slider to paginated list to make it easier trigger events based on frequency changes
*Need to use $watch based on a DOM event - specifically -> $watchCollection(obj, listener)
`Angular docs on $watch <http://docs.angularjs.org/api/ng.$rootScope.Scope#methods_$watch/>`_

**To Note**
*May want to move current header from index.html to partials - will depend on structure
*Not sure how Cordova files are set up. Could the functions and listeners be included in the angular controllers.js file?
-> Might elminate the need to look for DOM elements and set count directly

