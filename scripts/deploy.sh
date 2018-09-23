#!/bin/bash


npm run build;

mv ./build ./docs;

cp ./docs/index.html ./docs/404.html;

git add --all;
git commit -m '部署';
git push;
