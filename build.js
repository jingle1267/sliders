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
                // console.log('slides')
                // console.log(slides)
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
                    home_items.push({"path": target_path, "name": title});
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
        console.log(updatedArr.length + "===" + (files.length - 1) + "===" + home_items.length)
        if (updatedArr.length === (files.length - 1)) {

            // 对输出的列表进行排序
            home_items = home_items.sort(function (a, b) {
                // console.log(a.name + " - " + b.name)
                if (a.path < b.path) {
                    return -1;
                } else if (a.path > b.path) {
                    return 1;
                } else {
                    return 0;
                }
            });

            // 设置文章列表列表的样式
            var style_arr = ['aa', 'bb', 'cc'];
            console.log("home_items.length:" + home_items.length);
            for (var i = 0; i < home_items.length; i++) {
                // console.log(home_items[i].name)
                home_items[i].style = style_arr[i % style_arr.length]
            }

            for (var i = 0; i < home_items.length; i++) {
                console.log(home_items[i].name + " - " + home_items[i].style)
            }

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
