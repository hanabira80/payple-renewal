<!DOCTYPE html>
<html>
    <head>
        <title>BETA : 페이플 간편결제</title>
        <link rel="icon" type="image/png" href="img/common/favicon.png" sizes="32x32" />
        <meta http-equiv="Content-Type" content="charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <!-- mobile setting -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#7852e8" />
        <meta name="msapplication-navbutton-color" content="#7852e8" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#7852e8" />
        <!-- mobile setting end-->

        <!-- cache setting -->
        <meta http-equiv="Cache-Control" content="no-store" />
        <meta http-equiv="Expires" content="0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <!-- cache setting end-->

        <!-- open graph protocol -->
        <meta id="og_type" property="og:type" content="website" />
        <meta id="og_title" property="og:title" content="" />
        <meta id="og_description" property="og:description" content="" />
        <meta id="og_image" property="og:image" content="" />
        <meta id="og_url" property="og:url" content="" />
        <!-- open graph protocol end -->

        <!--font setting -->
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,500,700&display=swap" rel="stylesheet" />
        <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Black+And+White+Picture|Black+Han+Sans|Do+Hyeon|East+Sea+Dokdo|Gaegu|Gamja+Flower|Gugi|Hi+Melody|Jua|Nanum+Pen+Script|Poor+Story|Single+Day|Sunflower:300&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css" />
        <!-- font setting end-->

        <!-- css setting -->
        <link href="./css/style.min.css" rel="stylesheet" type="text/css" />
        <!-- css setting end -->

        <!-- js setting -->
        <script src="./js/jquery.js"></script>
        <!-- js setting -->
    </head>

    <body class="_js-is-limit">
        <figure style="display:none;">
            <img src="img/common/front_img.png" alt="" />
        </figure>

        <header>
            <div class="header-bg">
                <div class="scroll_nav">
                    <div class="percent"></div>
                </div>
            </div>
            <div class="width_limiter dp_flex flc_al_center">
                <div class="header_logo_box">
                    <a href="" class="full"></a>
                </div>
                <div class="header_menu_area dp_flex">
                    <div class="header_menu_box dp_flex">
                        <nav class="header_menu">
                            <div class="div js_trigger_mo_menu">
                                <div class="txt">
                                    <i class="material-icons"> keyboard_arrow_left </i>
                                    <div class="icon_text">카드결제</div>
                                </div>
                                <div class="border"></div>
                            </div>
                            <div class="header_sub_menu_box ">
                                <ul class="space_setter">
                                    <li>
                                        <a href="">
                                            정기결제
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            앱카드결제
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <nav class="header_menu">
                            <div class="div js_trigger_mo_menu">
                                <div class="txt">
                                    <i class="material-icons">
                                        keyboard_arrow_left
                                    </i>

                                    <div class="icon_text">계좌이체</div>
                                </div>
                                <div class="border"></div>
                            </div>
                            <div class="header_sub_menu_box ">
                                <ul class="space_setter">
                                    <li>
                                        <a href="">
                                            정기결제
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            간편결제
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            일회성결제
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <nav class="header_menu">
                            <a href="" class="div">
                                <div class="txt">
                                    <div class="icon_text">URL 링크결제</div>
                                </div>
                                <div class="border"></div>
                            </a>
                        </nav>
                    </div>

                    <div class="header_menu_box dp_flex right">
                        <nav class="header_menu">
                            <a href="" class="div">
                                <div class="txt">
                                    <div class="icon_text">가입문의하기</div>
                                </div>
                                <div class="border"></div>
                            </a>
                        </nav>
                        <nav class="header_menu">
                            <a href="" class="div">
                                <div class="txt">
                                    <div class="icon_text">API</div>
                                </div>
                                <div class="border"></div>
                            </a>
                        </nav>
                        <nav class="header_menu">
                            <a href="" class="div">
                                <div class="txt">
                                    <div class="icon_text">고객사 로그인</div>
                                </div>
                                <div class="border"></div>
                            </a>
                        </nav>
                        <nav class="header_menu">
                            <a href="" class="div">
                                <div class="txt">
                                    <div class="icon_text">결제내역 조회</div>
                                </div>
                                <div class="border"></div>
                            </a>
                            <div class="tool_tip tool_tip__bottom has_ani_bounce_bottom js_tg_header_tool_tip">
                                페이플에서 진행된 결제 내역이 궁금하신가요?<br />
                                여기서 확인하세요
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="header_menu_icn y_center">
                    <div class="bar bar1"></div>
                    <div class="bar bar2"></div>
                    <div class="bar bar3"></div>
                    <div class="bar bar4"></div>
                </div>
            </div>
        </header>