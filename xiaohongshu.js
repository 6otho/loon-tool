# > 小红书
# hostname = edith.xiaohongshu.com, www.xiaohongshu.com, ci.xiaohongshu.com, rec.xiaohongshu.com

# 惊喜弹窗
^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v1\/surprisebox\/(?:get_style|open|submit_action) reject-dict
^https?:\/\/www\.xiaohongshu\.com\/api\/marketing\/box\/trigger\? reject-dict

# 信息流（搜索相关）
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/(banner|hot)_list script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书搜索页
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/(hint|trending)\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书搜索页
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/notes\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书搜索页

# 开屏广告
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书开屏广告
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书开屏广告

# 详情页、小部件
http-response ^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/widgets script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书详情页

# 图片水印、视频水印处理
http-response ^https?:\/\/(edith|rec|www)\.xiaohongshu\.com\/api\/sns\/v\d\/note\/(imagefeed|live_photo\/save) script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书图片视频水印
http-response ^https?:\/\/(edith|rec|www)\.xiaohongshu\.com\/api\/sns\/(v2\/note\/feed|v3\/note\/videofeed)\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书图片视频水印
http-response ^https?:\/\/(edith|rec|www)\.xiaohongshu\.com\/api\/sns\/(v4\/note\/videofeed|v10\/note\/video\/save)\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书图片视频水印

# 评论区图片及 live 图水印（存储与下载）
http-response ^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v5\/note\/comment\/list\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书评论区去水印存储
http-response ^https:\/\/edith\.xiaohongshu\.com\/api\/sns\/v1\/interaction\/comment\/video\/download\? script-path=https://github.com/fmz200/wool_scripts/raw/main/Scripts/xiaohongshu/xiaohongshu.js, requires-body=true, timeout=60, tag=小红书评论区去水印下载