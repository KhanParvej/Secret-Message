const { hash } = window.location;
const pureEncoded = hash.replace("#", "");
const decodeMessage = atob(pureEncoded);

if (decodeMessage) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = decodeMessage;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const textInput = document.querySelector("#text-input");
  const linkInput = document.querySelector("#link-input");

  const incripted = btoa(textInput.value);
  linkInput.value = `${window.location}#${incripted}`;
  linkInput.select();
});
