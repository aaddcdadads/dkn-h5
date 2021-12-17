#!/bin/bash
rsync -avz docker/client.mjs root@sz-server8:/data/docker/design-cloud.dev/shared-node-modules/uniapp-uview-vue3/node_modules/vite/dist/client/
rsync -avz docker/server.js root@sz-server8:/data/docker/design-cloud.dev/shared-node-modules/uniapp-uview-vue3/node_modules/@dcloudio/vite-plugin-uni/dist/cli/