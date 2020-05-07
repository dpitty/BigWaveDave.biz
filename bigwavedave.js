var breakpointEm = 40.5;
var breakpointPx = toPx(breakpointEm);
var w = window;

$(w).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});


function toPx(em) {
    return em * parseFloat($("body").css("font-size"));
}

function toEm(px) {
  return px / parseFloat($("body").css("font-size"));
}

//Check if Mobile
function checkMobile() {
  mobile = (sw > breakpointPx) ? false : true;
  swEm = toEm(sw)
  console.log(`sw em=${swEm} px=${sw}`)

  if (!mobile) { //If Not Mobile
    $('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
  } else { //Hide 
    if(!$('#nav-anchors a').hasClass('active')) {
      $('#nav,#search').hide(); //Hide full navigation and search
    }
  }
}