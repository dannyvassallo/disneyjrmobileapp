//Detection Script//
  var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
  var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
  var AndroidAgent = navigator.userAgent.match(/Android/i) != null;
  var webOSAgent = navigator.userAgent.match(/webOS/i) != null;
//iOS//
  if(iPadAgent || iPodAgent){
    ga('send', 'event', 'Detection', 'Device', 'iOS');
    window.location.replace("http://bit.ly/1h4tYaU");
  }
//Android//
  else if(AndroidAgent){
    ga('send', 'event', 'Detection', 'Device', 'Android');
    window.location.replace("http://bit.ly/1f7t6Zj");
  }
//Other//
  else{
    ga('send', 'event', 'Detection', 'Device', 'Not an iPhone or Android');
  }


// Clicks
$(function(){
  $('.google a').on('click', function(){
        // console.log('google');
        var axel = Math.random() + '';
        var a = axel * 10000000000000;
        $(this).append('<iframe src="https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/conv/?adv=g4lgqpc&ct=0:o9yxn1kf&fmt=3"/>');  
  });

  $('.apple a').on('click', function(){
        // console.log('apple');
        var axel = Math.random() + '';
        var a = axel * 10000000000000;
        $(this).append('<iframe src="https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio00;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/conv/?adv=g4lgqpc&ct=0:zlthlnwh&fmt=3"/>');
  });
});

function resizeRed(){
  var bodyH = $(window).height();    
  var diff = bodyH/2;
  var redW = $('#red-wrap');
  redW.css('height',diff);
}

$(function(){
  resizeRed();
});

$(window).resize(function(){
  resizeRed();
});