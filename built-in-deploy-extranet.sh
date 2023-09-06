#!/bin/bash
rsync -avz src/components/built-in/uniapp-uview-vue3 -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp-uview-vue3 -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uniapp -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/qiun-data-charts -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/qiun-data-charts -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/qiun-data-charts -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/qiun-data-charts -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uni-ui -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uni-ui -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uni-ui -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uni-ui -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/third-party -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/third-party -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/third-party -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/third-party -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uniapp-haomo -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp-haomo -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp-haomo -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp-haomo -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/echarts-for-wx -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/echarts-for-wx -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/echarts-for-wx -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/echarts-for-wx -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uniapp-official -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp-official -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp-official -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp-official -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in

rsync -avz src/components/built-in/uniapp-uview1.x -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud/files/built-in
rsync -avz src/components/built-in/uniapp-uview1.x -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.stage/files/built-in
rsync -avz src/components/built-in/uniapp-uview1.x -e 'ssh -p 22327' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in
rsync -avz src/components/built-in/uniapp-uview1.x -e 'ssh -p 22328' haomo@haomo.tpddns.cn:/data/docker/design-cloud.dev/files/built-in