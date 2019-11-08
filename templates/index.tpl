<html lang="zh-cmn-Hans">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <title> 爱红旗渠的分享 </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/marx.min.css"/>
    <link href="css/totop.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.qrcode.min.js"></script>
    <style type="text/css">
        /* 去除页面默认的边框设置, 并将页面撑满 */
        body, html {
            width: 100%;
            height: 100%;
            margin: 0px;
            padding: 0px;
            border: 0px;
            background-color: #E1F3Fd;
            /*overflow:hidden*/
        }

        * {
            font-size: 18px;
            font-family: Arial;
        }

        .navlist {
            text-align: center;
            margin: 0 auto;
            width: 90%;
            padding-top: 1%;
        }

        #nav ul {
            padding: 0px 0px;
        }

        #nav li {
            list-style: none;
            text-align: center;
            width: 100%;
            margin-top: 10px;
        }

        #nav li a {
            text-decoration: none;
            line-height: 52px;
            width: 100%;
            color: #e0f7fa;
            font-size: 18px;
            text-shadow: 1px 1px 1px #eeeeee59;
        }

        #nav li a:hover {
            text-align: center;
            color: #ffffff;
            font-size: 20px;
        }

        .aa {
            border-top: 6px solid #01579b;
            background: #039be5;
        }

        .bb {
            border-top: 6px solid #006064;
            background: #00acc1;
        }

        .cc {
            border-top: 6px solid #004d40;
            background: #00897b;
        }

        .qrcode {
            margin-top: 20px;
        }

        span {
            display: none;
        }
    </style>
</head>

<body>

<nav id="nav" class="navlist">
    <ul>
        {{#sliders}}
        <li class="aa" style="{{style}}"><a href="./{{{path}}}">{{name}}</a></li>
        {{/sliders}}
    </ul>
</nav>

<div style="height: 1px"></div>


<div class="suspension">
    <a class="cart" title="手机扫码查看">
        <div class="pic">
            <div class="pic-content" id="qrcode"></div>
        </div>
    </a>
    <a href="javascript:void(0)" class="back-top" style="display: block;" title="返回顶部"></a>
</div>

<script type="text/javascript">
    $(function () {
        $(".back-top").hide();
        $(".back-top").live("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        })
        $(window).bind('scroll resize', function () {
            if ($(window).scrollTop() <= 400) {
                $(".back-top").hide();
            } else {
                $(".back-top").show();
            }
        })
    })

    jQuery('#qrcode').qrcode({width: 139, height: 139, text: window.location.href});
</script>


<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1260545070'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1260545070%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script>

</body>

</html>
