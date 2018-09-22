#!/bin/bash

npm run build;

mv ./build ./docs;

cp ./docs/index.html ./docs/404.html;
