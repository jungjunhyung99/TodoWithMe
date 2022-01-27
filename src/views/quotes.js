const quotes = [
    { quote: "안녕하세요 저는 정준형1입니다.",
    author: "정준형1",
},
{
    quote: "안녕하세요 저는 정준형2입니다.",
    author: "정준형2",
},
{
    quote: "안녕하세요 저는 정준형3입니다.",
    author: "정준형3",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const random_number = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[random_number].quote;
author.innerText = quotes[random_number].author;
