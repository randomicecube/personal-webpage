const template = document.createElement("template");
template.innerHTML = `
  <!--<style>
    #template-header {
      font-size: 10px;
      color: beige;
      text-decoration: none;
      position: absolute;
      top: 1%;
      left: 1%;
    }

    #template-footer {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      width: 500px;
      height: 500px;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    #contact {
      background-color: blue;
      width: 50%;
      height: 50%;
    }

    #source-code {
      background-color: red;
      width: 50%;
      height: 50%;
    }

  </style>
  <header>
    <a id="template-header" href="index.html">
      <h1>diogo gaspar</h1>
    </a>
  </header>
  <footer>
    <div id="template-footer">
      <p id="contact" >contact me on discord - gaspa#4057</p>
      <a id="source-code" href="https://github.com/randomicecube/personal-webpage">source code @ github</a>
    </div>
  </footer> -->
`;

document.body.appendChild(template.content);
