#!/bin/bash
cd /root/code-live-preview
export GIT_MERGE_AUTOEDIT=no
git config core.ignorecase false
npm config set ignore-scripts false
git add src/components/ . ':!src/components/built-in'
git add src/pages && git add src/pages.json && git commit -m "chore: restart and bak"
git stash -u && git pull
rm -rf /root/code-live-preview/node_modules/.vite/*.js.map
cp /root/code-live-preview/docker/action.js /root/code-live-preview/node_modules/@dcloudio/vite-plugin-uni/dist/cli/action.js
# npm run serve
# node node_modules/vite/bin/vite.js
npm run dev:h5 -- --host `hostname`