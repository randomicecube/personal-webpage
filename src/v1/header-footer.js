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
      left: 2.5%;
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
      text-align: center;
    }
    
    #footer-box-2 {
      width: 100%;
      height: 100%;
      text-align: center;
    }
    
    #source-code {
      color: beige;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }
    
    #source-code:hover {
      color: cornflowerblue;
      transition: all 0.3s ease;
    }
  
  </style>
  <footer>
    <div class="template-footer">
      <div id="footer-box-1">
        <p>contact me by e-mail - 
          <a href="mailto:diogo@gaspa.pt" id="link">diogo@gaspa.pt</a>
        </p>
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
