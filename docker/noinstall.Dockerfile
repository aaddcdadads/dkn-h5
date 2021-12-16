FROM registry.cn-shenzhen.aliyuncs.com/block-design/block-design-live:uniapp-uview-vue3
RUN cd /root/code-live-preview && git stash -u && git pull
# 本Dockerfile已经通过gitlab-ci自动构建镜像
# 执行命令构建：docker build  -t registry.cn-shenzhen.aliyuncs.com/block-design/block-design-live:uniapp-uview-vue3 . --no-cache