#!/bin/bash
cp docs/fixes/uview-ui/mixin.js node_modules/uview-ui/libs/mixin/
cp docs/fixes/uview-ui/index.js node_modules/uview-ui/
rsync docs/fixes/uview-ui/components/* node_modules/uview-ui/components/