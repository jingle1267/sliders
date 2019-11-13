'use strict';

var path = require('path');
var fm = require('front-matter');
var marked = require('marked');
var md = require('reveal.js/plugin/markdown/markdown');
var Mustache = require('mustache');
var mkdirp = require('mkdirp');
var fs = require('fs');

var opts = {
    printMode: false,
    separator: '^(\r\n?|\n)---(\r\n?|\n)$',
    verticalSeparator: '^(\r\n?|\n)----(\r\n?|\n)$',
    revealOptions: {}
};

// monkey patch -- add new end lines
function split_content(content) {
    var ret = [];
    var lines = content.split('\n');
    lines.forEach(function (line, index, array) {
        if (line.indexOf("###") >= 0) {
            line = "----\n\n" + line;
        } else {
            if (line.indexOf("##") >= 0) {
                line = "---\n\n" + line;
            }
        }
        ret.push(line);
    });
    return ret.join("\n");
}

var home_items = [];

function build_slider(md_files) {
    var style = "aa";
    md_files.forEach(function (file) {
        if (file.indexOf('.md') > 1) {

            var file_name = file.slice(0, file.length - 3);
            fs.readFile('./src/' + file, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var content_with_split = split_content(data);
                var slides = md.slidify(content_with_split, opts);
                var title = data.split("\n")[0].replace("#", '').trim();
                var view = {
                    title: title,
                    prefix: "../templates/revealjs/",
                    slides: slides
                };
                fs.readFile("./templates/slider.tpl", "utf8", function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    var output = Mustache.render(data, view);
                    mkdirp.sync(file_name);
                    var target_path = file_name + "/index.html";
                    fs.writeFile(target_path, output, function (err, written, buffer) {
                    });
                    // 设置索引数据
                    // home_items.push({"path": target_path, "name": title, "style": style});
                    // home_items.push({"path": target_path, "name": title});
                    fs.stat('./src/' + file, function (err, stat) {
                        if (stat.isFile()) {
                            home_items.push({
                                "path": target_path,
                                "name": title,
                                'createtime': Date.parse(stat.birthtime)
                            });
                        }
                    })

                });
            });
        }
    });


}

var eventify = function (arr, callback) {
    arr.push = function (e) {
        Array.prototype.push.call(arr, e);
        callback(arr);
    };
};

fs.readdir('./src', function (err, files) {
    if (err) {
        return console.log(err);
    }
    eventify(home_items, function (updatedArr) {
        // console.log(updatedArr.length + "===" + files.length + "===" + home_items.length)
        // mac下面会自动生成隐藏的.DS_Store文件
        if (updatedArr.length === files.length) {

            // 对输出的列表进行排序：按照文件创建日期排序
            home_items = home_items.sort(function (a, b) {
                if (a.createtime < b.createtime) {
                    return -1;
                } else if (a.createtime > b.createtime) {
                    return 1;
                } else {
                    return 0;
                }
            })

            // just for test
            // home_items.push({name:'aaa', 'path':'abc'})
            // home_items.push({name:'bbb', 'path':'abc'})
            // home_items.push({name:'ccc', 'path':'abc'})
            // home_items.push({name:'ddd', 'path':'abc'})
            // home_items.push({name:'eee', 'path':'abc'})

            // home_items.push({name:'aaa', 'path':'abc'})
            // home_items.push({name:'bbb', 'path':'abc'})
            // home_items.push({name:'ccc', 'path':'abc'})
            // home_items.push({name:'ddd', 'path':'abc'})
            // home_items.push({name:'eee', 'path':'abc'})

            // home_items.push({name:'aaa', 'path':'abc'})
            // home_items.push({name:'bbb', 'path':'abc'})
            // home_items.push({name:'ccc', 'path':'abc'})
            // home_items.push({name:'ddd', 'path':'abc'})
            // home_items.push({name:'eee', 'path':'abc'})

            // 设置文章列表列表的样式
            var style_arr = [
                'border-top: 6px solid #455a64;background: #90a4ae;',
                'border-top: 6px solid #333333;background: #9e9e9e;',
                'border-top: 6px solid #8d6e63;background: #bcaaa4;',
                'border-top: 6px solid #ff7043;background: #ffab91;',
                'border-top: 6px solid #ff9800;background: #ffb74d;',
                'border-top: 6px solid #f9a825;background: #fdd835;',
                'border-top: 6px solid #c0ca33;background: #d4e157;',
                'border-top: 6px solid #0a7e07;background: #72d572;',
                'border-top: 6px solid #689f38;background: #aed581;',
                'border-top: 6px solid #673ab1;background: #9775cd;',
                'border-top: 6px solid #006064;background: #00acc1;',
                'border-top: 6px solid #01579b;background: #039be5;',
                'border-top: 6px solid #004d40;background: #00897b;',
                'border-top: 6px solid #e51c23;background: #f69988;',
                'border-top: 6px solid #e91e63;background: #f48fb1;'
            ];
            // console.log("home_items.length:" + home_items.length);
            for (var i = 0; i < home_items.length; i++) {
                // console.log(home_items[i].name)
                home_items[i].style = style_arr[i % style_arr.length]
            }

            // for (var i = 0; i < home_items.length; i++) {
            //     console.log(home_items[i].name + " - " + home_items[i].style)
            // }

            fs.readFile("./templates/index.tpl", "utf8", function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var output = Mustache.render(data, {sliders: home_items});
                fs.writeFile('index.html', output, function (err, written, buffer) {
                });
            });
        }
    });
    build_slider(files);
});
