const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});

search_icon.addEventListener("click",
  handletSearchCloseOnClick);

sort_wrapper.addEventListener("click",
  handleSortIconClick);

function handleInputChange(inputElement) {
  const inputValue = inputElement.value;

  if (inputValue != "") {
    document 
      .querySelecto("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document 
    .querySelecto("#search-close-icon")
    .classList.remove("search-close-icon-visible");
  }
}

function handletSearchCloseOnClick() {
  document.querySelector("#search-input").value = "";
  document.querySelector("#search-close-icon")
          .classList.remove("search-close-icon-visible");
}

function handleSortIconClick() {
  document.querySelector(".filter-wrapper")
          .classList.toggle("filter-wrapper-open");
          document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}