#!/bin/bash
git clone ssh://git@gitlab.haomo-studio.com:15822/block-design/low-code-editor.git low-code-editor
rsync -avz src/components/built-in/jeecg/* low-code-editor/src/components/built-in/jeecg/
cd low-code-editor
git config --global user.email "block-design-jeecg@haomo-studio.com"
git config --global user.name "haomo"
git add src/components/built-in && git commit -m "CI同步BlockDesignJeecg组件库到LowCodeEditor中" 
git pull --no-edit && git push