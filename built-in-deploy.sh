#!/bin/bash
rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in