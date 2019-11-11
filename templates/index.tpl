<html lang="zh-cmn-Hans">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <title> 振国的分享 </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/list.css">
    <link rel="stylesheet" href="/css/marx.min.css"/>
    <link href="css/totop.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.qrcode.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/magic_normalize.css">
    <link rel="stylesheet" type="text/css" href="css/magic_component.css">
</head>

<body>

<div style="position: relative;">
    <div id="large-header" class="large-header" style="height: 667px; position: fixed; width:100%; height:100%;">
        <canvas id="demo-canvas" width="375" height="667"></canvas>
    </div>

    <div style="position: relative">
        <nav id="nav" class="navlist">
            <ul>
                {{#sliders}}
                    <li style="{{style}}"><a href="./{{{path}}}">{{name}}</a></li>
                {{/sliders}}
            </ul>
        </nav>
        <div style="height: 1px"></div>
        <div class="suspension">
            <a class="cart" title="手机扫码查看" id="cart">
                <div class="pic">
                    <div class="pic-content" id="qrcode"></div>
                </div>
            </a>
            <a href="javascript:void(0)" class="back-top" style="display: block;" title="返回顶部"></a>
        </div>
    </div>
</div>



<script src="js/magic_bg.js"></script>
<script src="js/init.js"></script>

<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1260545070'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1260545070%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script>

</body>

</html>
