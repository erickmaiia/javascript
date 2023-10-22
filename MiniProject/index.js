const btn = document.querySelector("#btn");
const back = document.querySelector("#back");

const lucian = document.querySelector("#lucian");
const graves = document.querySelector("#graves");
const zed = document.querySelector("#zed");
const yasuo = document.querySelector("#yasuo");

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    const search = document.querySelector("#search").value;
    const text = search.toLowerCase();

    if (text === "") {
      alert("Please write a search term");
    }
    if (text === "lucian") {
      lucian.classList.remove("hide");
      zed.classList.add("hide");
      graves.classList.add("hide");
      yasuo.classList.add("hide");
    }
    if (text === "zed") {
      zed.classList.remove("hide");
      lucian.classList.add("hide");
      graves.classList.add("hide");
      yasuo.classList.add("hide");
    }
    if (text === "yasuo") {
      yasuo.classList.remove("hide");
      lucian.classList.add("hide");
      graves.classList.add("hide");
      zed.classList.add("hide");
    }
    if (text === "graves") {
      graves.classList.remove("hide");
      lucian.classList.add("hide");
      yasuo.classList.add("hide");
      zed.classList.add("hide");
    }
  }
});

back.addEventListener("click", () => {
  lucian.classList.remove("hide");
  zed.classList.remove("hide");
  graves.classList.remove("hide");
  yasuo.classList.remove("hide");
});

btn.addEventListener("click", () => {
  const search = document.querySelector("#search").value;
  const text = search.toLowerCase();

  if (text === "") {
    alert("Please write a search term");
  }
  if (text === "lucian") {
    lucian.classList.remove("hide");
    zed.classList.add("hide");
    graves.classList.add("hide");
    yasuo.classList.add("hide");
  }
  if (text === "zed") {
    zed.classList.remove("hide");
    lucian.classList.add("hide");
    graves.classList.add("hide");
    yasuo.classList.add("hide");
  }
  if (text === "yasuo") {
    yasuo.classList.remove("hide");
    lucian.classList.add("hide");
    graves.classList.add("hide");
    zed.classList.add("hide");
  }
  if (text === "graves") {
    graves.classList.remove("hide");
    lucian.classList.add("hide");
    yasuo.classList.add("hide");
    zed.classList.add("hide");
  }
});
