let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #b380cc;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b380cc;">Soy estudiante de ingenieria en sistemas computacionales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
