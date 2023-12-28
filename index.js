const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];
let myLeads = [];

if (leadsFromStorage) {
  myLeads = [...leadsFromStorage];
  render(myLeads);
}

function saveInput() {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // ulEl.innerHTML += `<li> ${inputEl.value} </li>`;
  // const li = document.createElement("li");
  // li.innerText = inputEl.value;
  // ulEl.append(li);
  inputEl.value = "";
  render(myLeads);
}

function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `
      <li> 
        <a target="_blank" href="${leads[i]} "> 
          ${leads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItem;
}

function deleteAll() {
  localStorage.clear();
  localStorage.setItem("myLeads", JSON.stringify([]));
  ulEl.innerHTML = "";
  myLeads = [];
}

function saveTab() {
  // console.log(tabs[0].url);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    myLeads.push(url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
}

tabBtn.addEventListener("click", saveTab);

inputBtn.addEventListener("click", saveInput);

deleteBtn.addEventListener("dblclick", deleteAll);
