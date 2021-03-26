import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-info">
        <h1 id="contact-title">Get In Touch:</h1>
        <p>
          I am currently looking for a full time position as a Software
          Engineer. At this time I am also available for contract and freelance
          work. Please contact me if you have any professional needs for my
          skills in software development!
        </p>
        <h5 id="contact-tagline">I look forward to working with you!</h5>
        <p>
          I am based in Salt Lake City, Utah. I am also available for remote
          work!
        </p>
        <p>Email me: pcward.k@gmail.com</p>
        <div className="contact-links">
          <h6>
            Visit my Github{" "}
            <a
              href="https://github.com/KWard94"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/GitHub-Mark-120px-plus.png" alt="Github Logo" />
              {/* <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAb1BMVEXn5+cAAADq6urx8fHu7u7y8vLFxcWcnJxfX199fX3Nzc3R0dHh4eGwsLA/Pz9UVFTb29u3t7dsbGyHh4e9vb2QkJChoaGnp6dxcXFGRkZPT094eHgxMTHIyMgeHh4kJCQNDQ01NTWKiooYGBgqKir7+LyGAAAEp0lEQVR4nO2c7VbiMBCGm2QKtKVAQUBRV1Hv/xq3lY8mk4ANHKkk7/NLXLMnec/MZGaSkCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAiQRKT21D/KvufzZ5GkksEqG03+iZp/k1G2GiQKgtnUJjVYTITFZDGAgZnINM9soQ5keQq5DkhVOmzKsK9SQa4GmZZv56VqeCthXUmi8h+s6mhduep7rj0j6Uys4mRxR3oqOnig5osF9T3j/kjXPlI1rNO+59wXqYcLHsgiVUuN/LUSYhRlmKfpJVoJMY0wbqkLtarVis620sdLtRLiMbK4RcPLtRJiGJUnysE1WgkxiCo71RZezgbDzU/qbIaDWal97nv+NyTVkwYlJanZ4pxUi5kiKZX2m1E0YUtW2rLnu/hDyckMNUt2NSHNtV9WsTgivWurPgZrmj2Jz/mwKsbfXXgaF9Vw/imeZsc/0DeF90hiPC2F00Qk1d5Wu9vxs6TaP9tOg2GQYhmJWoaTvWr+5HAt/V9fjYG/P88/gGlYhljnYWJFYVpkhu+H7mI9mCMjEEuyHtaq85ppZY5ch78hqidzyfPuYs3NkU/BF9RyJhidl6z4yFnopmVV0B4BPmdDg6+nFSsDffY0to+KTeh+KM31vnmtV7GzoMDdkPdmSq/1ytIcHXinhocsz6jDcrTAgxbb/p99xXo2hndPO+4SZV5s8PNCyw8nYUd4lisVvmIV5viwxTI7Dhd0Dq4df0fw/N3bMphlBp3DX+1GV7rxXcErFu/djOUOeUxi+f8PMYnF3PDa3TBsN2QBvnubdD+eNUuDDvDcjXzrFV4t/c4c/wpsN/OtV3izNOykVG2vWi3Tehu2WMSuRvo1WXiDZxR2Ic2bnXO/5h/zwsCPDvl25rWfWYcdvpvp3cHW63N3KOXXm39vln8DxV/qlN3PDVlTOfR2lh206iy8o1pU8JGBhyy7YKnJO62Z+Klh4MXON+mLtej1z08JpeOZz0v4VyVdl7o3xfmHqlIVjiu6gZ/t7NivNXso22ukowf9zp9O8+UFlfM1xq3n3QeH55hVKinRsszHdUHcwEhRvp67lGqeavYz/9syPrhRvfOn5ub4tTLUouWnW6iGcV/zvynHl74byd/wbJm1kL0bxGVYSZvFN9dgjHve/P7RmWcr/cz89rT3Heu0UtfDTgbSrxNadb9dee+0NU9dR2tVzMJSgE48Uwm+0mlp2weP1OTm292Hd7u7xS8ZaSJHQ2tNzSep8uFiscodmemJoNW9+g6B9HB36Pk7TDWZp/MbLthDAWNQPBzvlpZno49TrODvklrIfaASw3NltEusbUTxao9MDlnBpKLmK+vIKnYSp1hfrvdQoSOT7VGAzfPHRzZynPXYYm1j1KqJ6ryZYD8gsHbDabTfdKRYyumwLCZWFl1sb1GVn1hVxFrV2el42l2s6TiqXNRBWnYVq4wsFXVB7emYfcLcnmAvZexmtYOS5U+WtUwg1QGiso5dE4cgtK1jVUmQSkeqsftomooxvtDV5oQkUAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFr+A7jbJGLLYylkAAAAAElFTkSuQmCC"
                alt="Github Logo"
              /> */}
            </a>
          </h6>
          <h6>
            Visit my LinkedIn{" "}
            <a
              href="https://www.linkedin.com/in/keenan-k-ward/"
              target="_blank"
              rel="noreferrer"
            >
              Here!
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
