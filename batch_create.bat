@echo off
:: 定义要创建的文章标题列表，每行一个
set "titles=
第一篇文章
第二篇文章
极简文艺风博客优化
Hexo批量创建文档教程
2026年3月笔记
"

:: 循环创建每篇文章
for /f "delims=" %%i in ('echo %titles%') do (
  if not "%%i"=="" (
    echo 正在创建：%%i
    hexo new post "%%i"
  )
)

echo 所有文章创建完成！
pause