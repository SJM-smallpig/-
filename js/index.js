window.onload = function(){
				let sliderElement = document.querySelector('.slider');
				let containerElement = sliderElement.querySelector('.container');
				let btnsElement = sliderElement.querySelector('.btns');
				let btnLeft = btnsElement.querySelector('.btn_left');
				let btnRight = btnsElement.querySelector('.btn_right');
				let dotsElement = sliderElement.querySelector('.dots');
				

				let index = 0;
				let timer = null;
				let count = sliderElement.querySelectorAll('.content').length;
				//				动态添加轨迹点

				for(i = 0; i < count; i++) {
					//					dotsElement.insertAdjacentHTML('beforeend','<li></li>');
					var li_1 = document.createElement("li");
					dotsElement.appendChild(li_1);

				}
				
				render();
				autoMove();

				sliderElement.addEventListener('mouseover', () => {
					clearInterval(timer);
				})
				sliderElement.addEventListener('mouseout', autoMove);

				btnLeft.addEventListener('click', moveToRight);
				btnRight.addEventListener('click', moveToLeft);

				function moveToRight() {
					if(index > 0) {
						index--;
					} else {
						index = count - 1;
					}
					render(index);
				}

				function moveToLeft() {
					if(index < count - 1) {
						index++;
					} else {
						index = 0;
					}
					render(index);
				}

				function autoMove() {
					timer = setInterval(moveToLeft, 3000);
				}

				function render(index) {
					containerElement.setAttribute('style', `left:${-100 * index}%`);
					for(i = 0; i < dotsElement.children.length; i++) {
						let el = dotsElement.children[i];
						if(index == i) {
							el.setAttribute('class', 'active');
						} else {
							el.removeAttribute('class');
						}
					}
				}

				　
				let dots = document.querySelector('.dots');
				let li = dots.childNodes; 
				li[0].setAttribute('class', 'active');
				for(var i = 0; i < li.length; i++) {
					(function(i) {
						li[i].addEventListener('click', function(e) {
							console.log(i);
							index = i;
							render(index);
						}, false);
					})(i)
					
				}
				
				let head_ul = document.querySelector('.head_ul');
				let head_lis = head_ul.getElementsByTagName('li'); 
				for(var i = 1; i < head_lis.length; i++) {
					(function(i) {
						head_lis[i].addEventListener('mouseover', function(e) {
							head_lis[i].setAttribute('class', 'li_active');
							head_lis[i].childNodes[1].setAttribute('style', 'color:#fff');
							
						}, false);
						head_lis[i].addEventListener('mouseout', function(e) {
							head_lis[i].removeAttribute('class', 'li_active');
							head_lis[i].childNodes[1].setAttribute('style', 'color:#ccc');
						}, false);
					})(i)
					
				}
				
				var head_input = document.getElementsByClassName('head_search');
				head_input[0].addEventListener('mouseover', () => {
					head_input[0].childNodes[0].setAttribute('style', 'width:250px;border: 3px solid rgb(171,235,96);transition: all 2s;');
				}, false)
				head_input[0].addEventListener('mouseout', () => {
					head_input[0].childNodes[0].setAttribute('style', 'width:200px;border: 3px solid #ccc;transition: all 2s;');
				}, false)
}
$(document).ready(function(){
    $('.dropdown').hover(function(){
       $('.dropdown>i').removeClass().addClass('hover-up');
	     $('.dropdown>span').css({'color':'#fff'});
    },function(){
        $('.dropdown>i').removeClass().addClass('hover-down');
        $('.dropdown>span').css({'color':'#ccc'});
    })
});
