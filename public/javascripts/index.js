window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function type(text, ref, delay = 100) {
  const letters = text.split("");
  let i = 0;
  while (i < letters.length) {
    await wait(delay);
    $(ref).append(letters[i]);
    i++;
  }
  return;
}

async function deleteText(ref) {
  const text = $(ref).html();
  const letters = text.split("");
  let i = 0;
  while (letters.length > 0) {
    await wait(100);
    letters.pop();
    $(ref).html(letters.join(""));
  }
}

const learning = ["UX design", "web development", "graphic design", "Back-end development"];
var textRunning = false;

document.addEventListener("scroll", async () => {
  if (textRunning || !$("#learning").visible(true)) return;
  while ($("#learning").visible(true)) {
    textRunning = true;
    for (item of learning) {
      await type(item, "#learning");
      await wait(2000);
      await deleteText("#learning");
    }
    textRunning = false;
  }
});
