const tabBtn = document.querySelectorAll(".design-btn");
const tabs = document.querySelectorAll(".gallery");

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    tabs.forEach((content) => {
      content.classList.remove("active");
    });
    tabs[index].classList.add("active");
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = [
  "Graphic Designer",
  "Product Designer",
  "Motion Graphics designer",
  "Animation Artiste",
];
// console.log(phrases);
const el = document.getElementById("typewriter");
let sleepTime = 100;
let curPhrase = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhrase];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 10);
    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 5);
    if (curPhrase === phrases.length - 1) {
      curPhrase = 0;
    } else {
      curPhrase++;
    }
  }
};
writeLoop();
