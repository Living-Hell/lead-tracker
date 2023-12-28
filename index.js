const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

function saveInput() {
  myLeads.push(inputEl.value);
  // ulEl.innerHTML += `<li> ${inputEl.value} </li>`;
  // const li = document.createElement("li");
  // li.innerText = inputEl.value;
  // ulEl.append(li);
  inputEl.value = "";
  renderList();
}

function renderList() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
      <li> 
        <a target="_blank" href="${myLeads[i]} "> 
          ${myLeads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItem;
}

inputBtn.addEventListener("click", saveInput);
