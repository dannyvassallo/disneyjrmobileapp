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
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    var script = document.createElement('script');
    var img = new image(1,1);
    script.src = 'https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=' + a + '?';
    img.src = "https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=1?";            
    document.documentElement.firstChild.appendChild(script);
    document.documentElement.firstChild.appendChild(img);    
  });

  $('.apple a').on('click', function(){
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    var script = document.createElement('script');
    var img = new image(1,1);
    script.src = 'https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=' + a + '?';
    img.src = "https://4996767.fls.doubleclick.net/activityi;src=4996767;type=ip158907;cat=radio000;ord=1?";            
    document.documentElement.firstChild.appendChild(script);
    document.documentElement.firstChild.appendChild(img);    
  });
});