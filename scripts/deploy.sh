#!/bin/bash


npm run build;

rm -Rf ./docs;
mv ./build ./docs;

cp ./docs/index.html ./docs/404.html;

git add --all;
git commit -m "部署$(date)";
git push;
