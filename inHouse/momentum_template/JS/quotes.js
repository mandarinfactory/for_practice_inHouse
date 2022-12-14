const quotes = [
    {
        quote: "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        author: "Amal Clooney",
    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
        author: "Duchess Meghan",
    },
    {
        quote: "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
        author: "Gabrielle Bernstein",
    },
    {
        quote:  "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
        author: "Ella Fitzgerald", 
    },
    {
        quote:  "All you need is the plan, the road map, and the courage to press on to your destination.",
        author: "Earl Nightingale",
    },
    {
        quote:  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
        author: "Roald Dahl",
    },
    {
        quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Live your beliefs and you can turn the world around.",
        author: "Henry David Thoreau",
    },
    {
        quote: "To strive, to seek, to find, and not to yield",
        author: "Lord Tennyson",
    },
    
]
const quote = document.querySelector("#quotes span:first-child");

const author = document.querySelector("#quotes span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random은 무작위 번호를 console에 출력해 준다. Math.random(); = 0.1324145, 0.023895 등등 //
// 단, Math.random은 0-1내에 있는 숫자만 무작위로 출력해준다. //
// round = 반올림, ceil = 올림, floor = 내림 //
// array로 quotes를 늘릴때마다 계속 숫자를 바꿀 필요 없이 바로 quotes.length를 이용해서 편리하게 사용할 수 있다. //

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
// 각각 HTML에 있는 span들을 quote, author로 인식시켜 innerText로 browser에 출력시킨다. //
// Math.random으로 quotes중 무작위로 browser에 출력하게 된다. //