var currentRulesLink = 'http://www.radiodisneyapp.com/rules-files/demilovatorules.pdf'

//Detection Script//
  var iPadAgent = navigator.userAgent.match(/iPad/i) != null;
  var iPodAgent = navigator.userAgent.match(/iPhone/i) != null;
  var AndroidAgent = navigator.userAgent.match(/Android/i) != null;
  var webOSAgent = navigator.userAgent.match(/webOS/i) != null;
//iOS//
  if(iPadAgent || iPodAgent){
    ga('send', 'event', 'Detection', 'Device', 'iOS');
    var windowLocation = window.location.pathname;
    if(windowLocation == '/'){
      window.open("itms-apps://itunes.apple.com/us/app/radio-disney-junior/id1050711248?mt=8");
    } else if(windowLocation == '/rules'){
      window.location.replace(currentRulesLink);
    }
  }
//Android//
  else if(AndroidAgent){
    ga('send', 'event', 'Detection', 'Device', 'Android');
    var windowLocation = window.location.pathname;
    if(windowLocation == '/'){
      window.location.replace("https://play.google.com/store/apps/details?id=com.disney.radiodisneyjunior_goo&hl=en");
    } else if(windowLocation == '/rules'){
      window.location.replace(currentRulesLink);
    }
  }
//Other//
  else{
    ga('send', 'event', 'Detection', 'Device', 'Not an iPhone or Android');
    var windowLocation = window.location.pathname;
    // console.log(windowLocation);
  }


// Clicks
$(function(){
  $('.google a').on('click', function(){
        // console.log('google');
        // var axel = Math.random() + '';
        // var a = axel * 10000000000000;
        // $(this).append('<iframe src="https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/conv/?adv=g4lgqpc&ct=0:o9yxn1kf&fmt=3"/>');
  });

  $('.apple a').on('click', function(){
        // console.log('apple');
        // var axel = Math.random() + '';
        // var a = axel * 10000000000000;
        // $(this).append('<iframe src="https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio00;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe><img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/conv/?adv=g4lgqpc&ct=0:zlthlnwh&fmt=3"/>');
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
