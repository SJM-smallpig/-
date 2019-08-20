//window.onload = function(){
////				let secondElement = document.querySelector('.second_body');
////				let contentElement = secondElement.querySelector('.inner_content');
////				let btnPre = secondElement.querySelector('.pre');
////				let btnNext = secondElement.querySelector('.next');
////				
////
////				let indexContent = 0;
////				let timerContent = null;
////				let countContent = secondElement.querySelectorAll('.inner_ul').length;
////
////				
////				renderContent();
////				autoContent();
////
////				secondElement.addEventListener('mouseover', () => {
////					clearInterval(timer);
////				})
////				secondElement.addEventListener('mouseout', autoContent);
////
////				btnPre.addEventListener('click', preContent);
////				btnNext.addEventListener('click', nextContent);
////
////				function preContent() {
////					
////					if(indexContent > 0) {
////						indexContent--;
////					} else {
////						indexContent = countContent - 1;
////					}
////					render(indexContent);
////				}
////
////				function nextContent() {
////					if(indexContent < countContent - 1) {
////						indexContent++;
////					} else {
////						indexContent = 0;
////					}
////					render(indexContent);
////				}
////
////				function autoContent() {
////					timerContent = setInterval(preContent, 3000);
////				}
////
////				function renderContent(indexContent) {
////					contentElement.setAttribute('style', `left:${-100 * indexContent}%`);
////				
////				}
//
//				
//			
//}
