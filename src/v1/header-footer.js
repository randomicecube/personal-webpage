// this file's purpose is to have a header and footer shared by all the website's html pages

const template = document.createElement("template");
template.innerHTML = `
  <style>
    /* header classes and ids */
  
    #template-header {
      font-size: clamp(1rem, 1vw, 1rem);
      color: beige;
      text-decoration: none;
      position: absolute;
      opacity: 0;
      left: 3.5%;
      animation: fade-in-up 2s ease calc(var(--type_writer-speed) + 1s) forwards;
    }
    
    /* footer classes and ids */
    
    .template-footer {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100px;
      width: 325px;
      position: absolute;
      left: 50%;
      top: 90%;
      transform: translate(-50%, -50%);
    }
    
    #footer-box-1 {
      width: 100%;
      height: 100%;
      opacity: 0;
      text-align: center;
      animation: fade-in-up 2s ease calc(var(--type_writer-speed) + 1s) forwards;
    }
    
    #footer-box-2 {
      width: 100%;
      height: 100%;
      opacity: 0;
      text-align: center;
      animation: fade-in-up 2s ease calc(var(--type_writer-speed) + 1s) forwards;
    }
    
    #source-code {
      color: beige;
      text-decoration: none;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      animation: fade-in-up 2s ease calc(var(--type_writer-speed) + 1s) forwards;
    }
    
    #source-code:hover {
      color: cornflowerblue;
      transition: all 0.3s ease;
    }
  
  </style>
  <header>
    <a id="template-header" href="index.html">
      <h1>home</h1>
    </a>
  </header>
  <footer>
    <div class="template-footer">
      <div id="footer-box-1">
        <p>contact me by e-mail - diogo@gaspa.pt</p>
        <p>or by discord - gaspa#4057</p>
      </div>
      <div id="footer-box-2">
        <a
          id="source-code"
          href="https://github.com/randomicecube/personal-webpage"
          target="_blank"
        >
          <p>source code @ github</p>
        </a>
      </div>
    </div>
  </footer>
`;

document.body.appendChild(template.content);
