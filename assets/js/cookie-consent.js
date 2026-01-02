(() => {
  const KEY = "cookie_consent_v1"; // accepted | rejected

  function bar(){ return document.getElementById("cookie-consent"); }

  function hide(){
    const el = bar();
    if (el) el.style.display = "none";
  }

  function show(){
    const el = bar();
    if (el) el.style.display = "block";
  }

  function set(value){
    try { localStorage.setItem(KEY, value); } catch(e) {}
    hide();
  }

  function init(){
    try {
      const v = localStorage.getItem(KEY);
      if (v === "accepted" || v === "rejected") return;
    } catch(e) {}

    show();

    const el = bar();
    if (!el) return;

    const accept = el.querySelector("[data-cookie-accept]");
    const reject = el.querySelector("[data-cookie-reject]");

    if (accept) accept.addEventListener("click", () => set("accepted"));
    if (reject) reject.addEventListener("click", () => set("rejected"));
  }

  document.addEventListener("DOMContentLoaded", init);
})();