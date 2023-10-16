#!/bin/bash
# rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uniapp-uview-vue3 haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uniapp haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uniapp haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/qiun-data-charts haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/qiun-data-charts haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/qiun-data-charts haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/qiun-data-charts haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/uni-ui haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uni-ui haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uni-ui haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uni-ui haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/third-party haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/third-party haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/third-party haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/third-party haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/uniapp-haomo haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uniapp-haomo haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uniapp-haomo haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uniapp-haomo haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/echarts-for-wx haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/echarts-for-wx haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/echarts-for-wx haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/echarts-for-wx haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/uniapp-uview2.x haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uniapp-uview2.x haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uniapp-uview2.x haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uniapp-uview2.x haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# rsync -avz src/components/built-in/uniapp-official haomo@192.168.1.7:/data/docker/design-cloud/files/built-in
# rsync -avz src/components/built-in/uniapp-official haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in
# rsync -avz src/components/built-in/uniapp-official haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in
# rsync -avz src/components/built-in/uniapp-official haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in

# 定义一个数组
my_array=("uniapp-uview-vue3" "uniapp" "qiun-data-charts" "uni-ui" "third-party" "uniapp-haomo" "uniapp-official" "uniapp-uview1.x" "uniapp-uview2.x")

# 使用 for 循环遍历数组
for item in "${my_array[@]}"; do
  echo "$item"
  rsync -avz src/components/built-in/$item/* haomo@192.168.1.7:/data/docker/design-cloud/files/built-in/$item/2.x/
  rsync -avz src/components/built-in/$item/* haomo@192.168.1.7:/data/docker/design-cloud.stage/files/built-in/$item/2.x/
  rsync -avz src/components/built-in/$item/* haomo@192.168.1.7:/data/docker/design-cloud.dev/files/built-in/$item/2.x/
  rsync -avz src/components/built-in/$item/* haomo@192.168.1.8:/data/docker/design-cloud.dev/files/built-in/$item/2.x/

done