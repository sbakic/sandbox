#!/bin/sh

# Child container specifies the correct WORKINGDIR that's why executing this relative path "./index.js" works
node -r ./src/instrumentation.js ./index.js
