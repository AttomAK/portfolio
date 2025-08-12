"use Strict";

const javaScriptBtn = document.getElementById("js");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const cssBtn = document.getElementById("css");
const htmlBtn = document.getElementById("html");

const showBtn = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const clModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

javaScriptBtn.addEventListener("click", showBtn);
closeModal.addEventListener("click", clModal);
cssBtn.addEventListener("click", showBtn);
htmlBtn.addEventListener("click", showBtn);
