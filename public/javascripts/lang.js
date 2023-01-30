document.querySelector("#lang").addEventListener("change", async (e) => {
  await fetch("/lang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lang: e.target.value }),
  });
  location.reload();
});
