const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)] 

const backgroundImage = document.createElement("img");
// createElement는 JS에서 HTML을 생성시킨다. (여기서는 img가 생성됨.) //
// createElement = 지정한 HTMLtagName(div,span,h1,img,a등)의 HTML요소를 만들어 변환한다. //

backgroundImage.src = `IMG/${randomImages}`;
//backgroundImage = HTML에서는 <img></img>꼴로 나타났다고 생각하면 된다. --> <img src="IMG/randomImages"> //
// randomImages로 인해 images내에 있는 5개의 images들이 무작위로 console에 출력된다. //

document.querySelector('.section_one figure').prepend(backgroundImage);
// appendChild는 현재 위치에서 새로운 위치로 이동시킨다고 보면 된다. //
// 다시말해 backgroundImage를 body로 옮겨 browser로 출력(append)시킨다고 보면 된다. //
// append는 맨뒤로, prepend는 맨위로 오게 해준다. //