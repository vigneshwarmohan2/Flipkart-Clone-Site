// creation of overlay function.
function openForm() {
  document.getElementById("myOverlay").style.display = "block";
  addEventListener("click", function (event) {
    event.preventDefault();
  });
}
function closeForm() {
  document.getElementById("myOverlay").style.display = "none";
  e.preventDefault();
}
// creation of chatbot.
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtinput");
const send = document.querySelector(".send");
send.addEventListener("click", () => renderUserMessage());
const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput);
};
const renderMessageEle = (txt) => {
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add("userMessage");
  messageEle.append(txtNode);
};
