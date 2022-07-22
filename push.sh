#!/bin/zsh
git add .
git commit -m "submitted at $(date +"%y/%m/%d %H:%M:%S")."
git push -u origin master