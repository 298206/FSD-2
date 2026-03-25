// write a a node.js script that performs the following operations using the path module and the async file system module
// 1.From a given existing file path extract the direcory name using path module
// 2.Create the extracted dic=erctory inside an existing folder using fs module 
// 3.Exctract the file name from the given path using path module
// 4.Create thst file inside the newly created directory and write some data into it 
// 5.Copy the content of this file to another file
// 6. delete the orignal fule after copying the content.
var pm =require('path')
var fs=require('fs')
oldpath="LJ/sample.txt"
path1=pm.dirname(oldpath)
console.log(path1)
fs.mkdir(`${path1}`,(err)=>{
    console.log('dict created')
    path2=pm.basename(oldpath)
    fs.writeFile(`${path1}/${path2}`,'some data',(err)=>{
        console.log('file 1 writen')
        fs.readFile(`${path1}/${path2}`,'utf-8',(err,data)=>{
            fs.writeFile(`${path1}/tow_${path2}`,data,(err)=>{
                console.log('file 2 written')
                fs.unlink(`${path1}/${path2}`,(err)=>{
                    console.log('file unlinked')
                })
            })
        })
    })
})