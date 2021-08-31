const template = document.createElement("template");
template.innerHTML = `
  <style>
    .template-header {
      font-size: 10px;
      color: beige;
      text-decoration: none;
      position: absolute;
      top: 1%;
      left: 1%;
    }

    footer {
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  <header>
    <a class="template-header" href="index.html">
      <h1>diogo gaspar</h1>
    </a>
  </header>
  <footer>
    <p>contact me on discord - gaspa#4057</p>
  </footer>
`;

document.body.appendChild(template.content);
