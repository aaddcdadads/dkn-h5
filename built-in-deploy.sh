#!/bin/bash
rsync -avz src/components/built-in/jeecg haomo@192.168.1.7:/data/docker/design-cloud/files/built-in/
rsync -avz src/components/built-in/jeecg haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in/
rsync -avz src/components/built-in/jeecg haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in/
rsync -avz src/components/built-in/jeecg haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in/