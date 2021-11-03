var dragBtn = $('.drag-button');
var dragTgt = $('.drag-target');
var laptop = $('.part.top');
var overlap = '50%';

Draggable.create(dragBtn, {
	type: 'y',
	bounds: '.drag-container',
	onDrag: function(e) {
		if( this.hitTest(dragTgt, overlap) ) {
			$(this.target).addClass('in-range');
		} else {
			$(this.target).removeClass('in-range');
		}
    var matrix = dragBtn.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var matrixY = matrix[13] || matrix[5]
    var matrixPlusY = -matrixY /6 - 90
    console.log(matrixPlusY);
    if(matrixPlusY > 0) {
      laptop.stop().css('transform', 'translate3d(0, 0, 0) rotateX(0deg)');
    } else {
		  laptop.stop().css('transform', 'translate3d(0, 0, 0) rotateX('+ matrixPlusY + 'deg)');
    }
	},
	onDragEnd: function(e) {
		var endPos = $(this.target).parent().height() - 52 + 'px';
		if( $(this.target).hasClass('in-range') ) {
			$(this.target).addClass('in-target');
			gsap.to(this.target, {duration: 0.2, y: '-' + endPos});
			gsap.to('.drag', {duration: 0.5, autoAlpha: 0, delay: 0.5});
			$('#mission1').css('z-index','0');
		} else {
			gsap.to(this.target, {duration: 0.5, y: 0});
			laptop.stop().css({'transform': 'translate3d(0, 0, 0) rotateX(-90deg)'})
		}
	}
});

var errorNum = 0;
$('.close').click(function(){
	if(errorNum < 4){
		// console.log('close');
		$(this).parents('.error-window').css('display','none');
		errorNum++;
		console.log(errorNum);
	} else if(errorNum == 4){
		$(this).parents('.error-window').css('display','none');
    $('.error-complete').stop().animate({'opacity':'1'}, 400);
		$('.mission2').stop().delay(3000).animate({'opacity':'0'}, 400, function(){
			$('.mission2').css({'z-index':'0'});
		});
	}
})

var save = 0

if($(this).is(':animated') == false){
	$('.content-btn').click(function(){
		$(this).animate({'opacity':'0'}).css({'display':'none'});
		if(save == 0) {
			save = 1;
		} else if(save == 1){
			save = 2;
			$('.save-complete').stop().animate({'opacity':'1'}, 400);
		  $('.mission3').stop().delay(3000).animate({'opacity':'0'}, 400, function(){
			$('.mission3').css({'z-index':'0'});
		});

		}
		console.log(save);
	})
		
};


var addEvent = (function () {
	if (document.addEventListener) {
	  return function (el, type, fn) {
		if (el && el.nodeName || el === window) {
		  el.addEventListener(type, fn, false);
		} else if (el && el.length) {
		  for (var i = 0; i < el.length; i++) {
			addEvent(el[i], type, fn);
		  }
		}
	  };
	} else {
	  return function (el, type, fn) {
		if (el && el.nodeName || el === window) {
		  el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
		} else if (el && el.length) {
		  for (var i = 0; i < el.length; i++) {
			addEvent(el[i], type, fn);
		  }
		}
	  };
	}
  })();
  
  (function () {
  
	var pre = document.createElement('pre');
	pre.id = "view-source"
	
	// private scope to avoid conflicts with demos
	addEvent(window, 'click', function (event) {
	  if (event.target.hash == '#view-source') {
		// event.preventDefault();
		if (!document.getElementById('view-source')) {
		  pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
		  document.body.appendChild(pre);      
		}
		document.body.className = 'view-source';
		
		var sourceTimer = setInterval(function () {
		  if (window.location.hash != '#view-source') {
			clearInterval(sourceTimer);
			document.body.className = '';
		  }
		}, 200);
	  }
	});
	  
	})();
	
	
	  var eat = ['yum!', 'gulp', 'burp!', 'nom'];
	  var yum = document.createElement('p');
	  var msie = /*@cc_on!@*/0;
	  yum.style.opacity = 1;
	  var objNum = 0;
	
	  var links = document.querySelectorAll('li > a'), el = null;
	  for (var i = 0; i < links.length; i++) {
		el = links[i];
	  
		el.setAttribute('draggable', 'true');
	  
		addEvent(el, 'dragstart', function (e) {
		  e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
		  e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
		});
	  }
	
	  var bin = document.querySelector('#bin');
	
	  addEvent(bin, 'dragover', function (e) {
		if (e.preventDefault) e.preventDefault(); // allows us to drop
		this.className = 'over';
		e.dataTransfer.dropEffect = 'copy';
		return false;
	  });
	
	  // to get IE to work
	  addEvent(bin, 'dragenter', function (e) {
		this.className = 'over';
		return false;
	  });
	
	  addEvent(bin, 'dragleave', function () {
		this.className = '';
	  });
	
	  addEvent(bin, 'drop', function (e) {
		if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???
	
		var el = document.getElementById(e.dataTransfer.getData('Text'));
		
		el.parentNode.removeChild(el);
	
		// stupid nom text + fade effect
		bin.className = '';
	  //   yum.innerHTML = eat[parseInt(Math.random() * eat.length)];
	  //   yum.innerHTML = this.innerText;
		objNum++;
		console.log(objNum);
		
	
		var y = yum.cloneNode(true);
		bin.appendChild(y);
	
		setTimeout(function () {
		  var t = setInterval(function () {
			if (y.style.opacity <= 0) {
			  if (msie) { // don't bother with the animation
				y.style.display = 'none';
			  }
			  clearInterval(t); 
			} else {
			  y.style.opacity -= 0.1;
			}
		  }, 50);
		}, 250);
		
		if(objNum == 4) {
			console.log('next');
			$('.submit-complete').stop().animate({'opacity':'1'}, 400);
		  $('.mission4').stop().delay(3000).animate({'opacity':'0'}, 400, function(){
			$('.mission4').css({'z-index':'0'});})
  
		}
    
  
		return false;
	  });