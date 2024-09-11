$(function () {

  // slickを利用してカルーセルを実装
  $('slider').slick ({
    arrows:false,         // スライダーの左右に表示される矢印ナビゲーションを表示しない。
    dots:true,            //スライダーの下にページネーション（ドット）を表示
    autoplay:true,        //スライダーが自動的にスライドするようにする。
    fade:true,            // スライドの切り替えにフェード効果を使用
    speed:1500,           //スライドの切り替えの速度をミリ秒単位で指定す
    pauseOnHover:true     //スライダーにマウスカーソルが乗ったときに、自動スライドを一時停止
  });
    
  // リンクのホバー時に不透明度をアニメーションで変更
  $('a, .item img').hover (
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);     //要素の透明度を指定
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);     //要素の透明度を指定
    }
  );

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
  $(window).scroll(function () {        //ウィンドウがスクロールされるたびに、指定した関数を実行
    if ($(this).scrollTop() > 100)      //スクロール位置が 100 ピクセルを超えたかどうかを判断し、その結果に応じて処理を分岐
    {
      $('#page-top').fadeIn();          //ID が page-top の要素をフェードイン（徐々に表示）スクロール位置が 100 ピクセルを超えたときにこの処理が実行
    }
    else                                //if 条件が false の場合に実行する処理を指定
    {
      $('#page-top').fadeOut();         //ID が page-top の要素をフェードアウト（徐々に非表示）スクロール位置が 100 ピクセル以下のときにこの処理が実行
    }
  });

  // ページ内リンクのスクロールをなめらかに（スムーズスクロール）
  $('a[href^="#"]').click(function () {     //href 属性が # で始まるすべての <a> タグを選択
    const speed = 500;                      //スクロールアニメーションの速度をミリ秒単位で指定
    const href = $(this).attr('href');      //クリックされた <a> タグの href 属性の値を取得
    let $target;                            //スクロールのターゲットとなる要素を格納する変数を宣言
    if (href == '#')                        //href が # であるかどうかを確認し、ターゲットを設定
    {
      $target = $('html');                
    }
    else 
    {
      $target = $(href);
    }
    const position = $target.offset().top;  // ターゲット要素のページ内の縦位置を取得   
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');     //HTML とボディをアニメーションさせて、スクロール位置を position に設定
    return false;                           // デフォルトのリンク動作（ページ内リンクのジャンプ）をキャンセル
  });

  //スクロールしたときにセクションをフェードイン
    $(window).scroll(function () {                        //ウィンドウがスクロールされるたびに、指定した関数を実行  
    const scrollAmount = $(window).scrollTop();         // ウィンドウのスクロール位置（縦方向のピクセル数）を取得
    const windowHeight = $(window).height();            //ウィンドウの高さをピクセル単位で取得
    $('section').each(function () {                     //各<section> 要素に対して、指定した関数を繰り返し実行
      const position = $(this).offset().top;            //現在の <section> 要素のページ内の縦位置を取得
      if (scrollAmount > position - windowHeight + 100) //スクロール位置が <section> 要素の位置からウィンドウの高さを引いた位置に 100 ピクセルを加えた位置を超えた場合、指定した処理を実行
      {
        $(this).addClass('fade-in');                    //現在の <section> 要素に fade-in クラスを追加
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {     //.works クラス内のすべての <img> タグがクリックされたときに、指定した関数を実行
    const imgSrc = $(this).attr('src');   //クリックされた画像の src 属性（画像のURL）を取得して、変数 imgSrc に保存
    const imgAlt = $(this).attr('alt');   //クリックされた画像の alt 属性（代替テキスト）を取得して、変数 imgAlt に保存
    $('.big-img').attr                    //.big-img クラスの画像に対して、取得した src と alt を設定
    ({
      src: imgSrc,                        
      alt: imgAlt,
    });
    $('.modal').fadeIn();                 //.modal クラスの要素をフェードイン（徐々に表示）
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {             //.close-btn クラスの要素がクリックされたときに、指定した関数を実行
    $('.modal').fadeOut();                        //.modal クラスの要素をフェードアウト（徐々に非表示にする）
  });

});