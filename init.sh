#!/bin/sh
# USER='qiqi'
# echo ${USER:1}

# name=$1
# firstLetter=${name:0:1}
# uppercaseFirstLetter="$(echo $firstLetter | tr '[:lower:]' '[:upper:]')"
# filename="my$uppercaseFirstLetter${name:1}.js"
# testFilename="my$uppercaseFirstLetter${name:1}.test.js"
#
# mkdir $name
# echo $name '文件夹已创建'
# touch $name/$filename
# echo $filename '文件已创建'
# touch $name/$testFilename
# echo $testFilename '文件已创建'
# touch $name/'README.md'
# echo 'README.md文件已创建'
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
