fetch('https://openapi.naver.com/v1/search/local.json?query=restaurant&display=10&start=1&sort=random')
  .then(res => console.log(res))