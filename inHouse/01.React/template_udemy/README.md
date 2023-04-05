<React 기초정리!>

1. 사용자인터페이스(UI)를 구축하는 JS library이다.
(HTML, CSS, JS도 있지만 React는 더 간단하게 구현하게 해준다.)

2. React는 component가 전부이다. => component는 UI에서 재사용할수 있는 빌딩블럭이다.

3. React가 이렇게 component를 구성한건 재사용성(반복방지)과 우려사항을 개벌적으로 분리(개벌적으로 각각 집중할 수 있다.)할 수 있기 때문이다.

4. 대부분의 component들은 HTML과 JS를 결합하는게 많다.

5. React는 component들의 결합을 통해 만들어진다. 이렇게 여러가지 결합체들을 합쳐서 하나의 UI를 만든다.

6. React는 이런 component를 만들기 위해 선언적 접근 방식(declarative approach)을 사용한다.
    - 바닐라JS와 같이 직접 HTML을 제어하는게 아닌, 최종(목표)상태 또는 다양한 상황에 따라 다른목표를 정의함으로써 운용한다.
    => 다시말해, 최종상태와 어떤 상황에서 어떤 상태가 사용되어야 하는지 정의하면 된다. (직접 HTML을 제어할 필요가 없다. => useState사용)

7. src파일에서 index.js가 가장 먼저 실행되는 파일이다.