#!/bin/bash
cd ..
rm -rf uniapp-uview-vite
git clone ssh://git@gitlab.haomo-studio.com:15822/block-design-components/uniapp-uview-vite.git uniapp-uview-vite

rm -rf xxx
git clone ssh://git@gitlab.haomo-studio.com:15822/block-design-customer/xxx.git xxx
cd xxx

rsync -avz --delete --progress ../uniapp-uview-vite/src/components/built-in/* src/components/built-in/

git add .
git commit -m "chore: XXX 同步UniappUviewVite组件" --no-verify
git pull --no-edit
git push --no-verify
