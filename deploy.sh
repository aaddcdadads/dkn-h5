#!/bin/bash
set -x
rm -rf src/pages/haomo/test
rm -rf src/pages/test
# rm -rf src/components/built-in/third-party/HmMpHtml.vue
# rm -rf src/components/built-in/third-party/HmNiceCropper.vue
# rm -rf src/components/built-in/third-party/HmYqAvatar.vue
# rm -rf src/components/built-in/third-party/HmLimeClipper.vue
# rm -rf src/components/built-in/third-party/HmMonacoEditor.vue
# rm -rf src/components/built-in/third-party/HmLottery.vue
# rm -rf src/components/built-in/third-party/HmLimeSignature.vue
cp docs/fixes/store-selection.vue src/components/dkn-h-5/store-selection/index.vue
npm run build:h5
rsync -avz --delete --progress dist/build/h5/* haomo@192.168.1.7:/var/www/html/dkn-h5