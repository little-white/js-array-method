#!/bin/sh

directory=$1
name="my$(tr '[:lower:]' '[:upper:]' <<< ${directory:0:1})${directory:1}.js"
testName="my$(tr '[:lower:]' '[:upper:]' <<< ${directory:0:1})${directory:1}.test.js"

mkdir $directory
echo $directory '文件夹已创建'
touch $directory/$name
echo $name '文件已创建'
touch $directory/$testName
echo $testName '文件已创建'
touch $directory/'README.md'
echo 'README.md文件已创建'
