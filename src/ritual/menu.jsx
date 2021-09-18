import React from 'react';

function Menu() {

      const [status,setStatus] = React.useState(false);
      const [menu2f,setM2] = React.useState(false);
      const [menu3f,setM3] = React.useState(false);
      const [menuc1f,setA] = React.useState(false);
      const [menuc2f,setB] = React.useState(false);
      const [menuc3f,setC] = React.useState(false);
      const [multi1f,setD] = React.useState(false);
      const [multi2f,setE] = React.useState(false);
      const [multi3f,setF] = React.useState(false);
      const [closef,setClose1] = React.useState(true);
      const [close2f,setClose2] = React.useState(true);
      const [close3f,setClose3] = React.useState(true);
      const [areaf,setArea] = React.useState(true);
      const [area2f,setArea2] = React.useState(true);
      const [area3f,setArea3] = React.useState(true);
      
      function Close(){
        return(<div className="closebtn" onClick={()=>setStatus(false)}>
        <svg width="16" height="16" version="1.1" viewBox="0 0 16 16">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          >
            <g stroke="#142B6F" stroke-width="2">
              <g>
                <g>
                  <path
                    d="M14,14 L2,2 L14,14 Z M14,2 L2,14 L14,2 Z"
                    transform="translate(-284.000000, -22.000000) translate(284.000000, 22.000000)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>)
      };
      function CloseHide(){
        return(<div className="closebtn" style={{opacity:"0"}}>
        <svg width="16" height="16" version="1.1" viewBox="0 0 16 16">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          >
            <g stroke="#142B6F" stroke-width="2">
              <g>
                <g>
                  <path
                    d="M14,14 L2,2 L14,14 Z M14,2 L2,14 L14,2 Z"
                    transform="translate(-284.000000, -22.000000) translate(284.000000, 22.000000)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>)
      };
      function CloseArea(){
        return(<div id="closearea" style={{width:"67%"}} onClick={()=>setStatus(false)}></div>)
      };
      function CloseArea2(){
        return(<div id="closearea" style={{width:"34%"}} onClick={()=>setStatus(false)}></div>)
      };
      function Menu2(){
        return(<div id="menu2" className="menu33">
        {close2f? <Close />:<CloseHide />}
        {menuc1f? <Multivitamin />:null}
        {menuc2f? <Protein />:null}
        {menuc3f? <Pregnancy />:null}
      </div>)
      };
      function Menu3(){
        return(<div id="menu3" className="menu33">
        {close3f? <Close />:<CloseHide />}
        {multi1f? <Women />:null}
        {multi2f? <Men />:null}
        {multi3f? <Kids />:null}
      </div>)
      };
      function Multivitamin(){
        return(<div id="multivitamin">
          <ul className="menu-main">
            <li><a id="multi1" href="#" onMouseOver={()=> setArea(false) & setArea2(false) & setArea3(false) & setClose1(false) & setClose2(false) & setClose3(true) & setM2(true) & setM3(true) & setD(true) & setE(false) & setF(false)}>Women</a></li>
            <li><a id="multi2" href="#" onMouseOver={()=> setArea(false) & setArea2(false) & setArea3(false) & setClose1(false) & setClose2(false) & setClose3(true) & setM2(true) & setM3(true) & setE(true) & setD(false) & setF(false)}>Men</a></li>
            <li><a id="multi3" href="#" onMouseOver={()=> setArea(false) & setArea2(false) & setArea3(false) & setClose1(false) & setClose2(false) & setClose3(true) & setM2(true) & setM3(true) & setF(true) & setD(false) & setE(false)}>Kids</a></li>
            <li><a id="d-none2" href="#" onMouseOver={()=> setArea(false) & setArea2(false) & setArea3(true) & setClose1(false) & setClose2(true) & setM2(true) & setM3(false)}>Shop All</a></li>
          </ul>
        </div>)
      };
      function Protein(){
        return(<div id="protein">
        <ul>
          <li>Essential Protein</li>
          <li><a href="#">Daily Shake 18+</a></li>
          <li><a href="#">Daily Shake 50+</a></li>
          <li><a href="#">Daily Shake Pregnancy &#38; Postpartum</a></li>
          <li><a href="#">Shop All</a></li>
        </ul>
      </div>)
      };
      function Pregnancy(){
        return(<div id="pregnancy">
        <ul>
          <li>Essential for Women</li>
          <li><a href="#">Prenatal Multivitamin</a></li>
          <li><a href="#">Postnatal Multivitamin</a></li>
        </ul>
        <ul>
          <li>Essential Protein</li>
          <li><a href="#">Daily Shake Pregnancy &#38; Postpartum</a></li>
        </ul>
        <ul>
          <li><a href="#">Shop All</a></li>
        </ul>
      </div>)
      };
      function Women(){
        return(<div id="women">
        <ul>
          <li>Essential for Women</li>
          <li><a href="#">Multivitamin 18+</a></li>
          <li><a href="#">Multivitamin 50+</a></li>
          <li><a href="#">Prenatal Multivitamin</a></li>
          <li><a href="#">Postnatal Multivitamin</a></li>
          <li><a href="#">Shop All</a></li>
        </ul>
      </div>)
      };
      function Men(){
        return(<div id="men">
        <ul>
          <li>Essential for Men</li>
          <li><a href="#">Multivitamin 18+</a></li>
          <li><a href="#">Multivitamin 50+</a></li>
          <li><a href="#">Shop All</a></li>
        </ul>
      </div>)
      };
      function Kids(){
        return(<div id="kids">
        <ul>
          <li>Essential for Kids</li>
          <li><a href="#">Multivitamin Kids 4+</a></li>
        </ul>
        <ul>
          <li>Essential for Teens</li>
          <li><a href="#">Multivitamin for Her</a></li>
          <li><a href="#">Multivitamin for Him</a></li>
        </ul>
        <ul>
          <li><a href="#">Shop All</a></li>
        </ul>
      </div>)
      };

        // ............................. Main Return ............................... 
        return (<React.Fragment>
            <div><a href="#" id="menu" onClick={()=> setArea(true) & setArea2(false) & setArea3(false) & setStatus(true) & setClose1(true) & setM2(false) & setM3(false)}>Menu</a></div>
            {
        status?<div id="menu-container">
      {areaf? <CloseArea />:null}
      {area2f? <CloseArea2 />: null}
      {area3f? <CloseArea2 />: null}
       <div id="menu1" className="menu33">
        {closef? <Close />:<CloseHide />}
        <ul className="menu-main">       
          <li><a id="menuc1" href="#" onMouseOver={()=> setArea(false) & setArea2(true) & setArea3(false) & setClose1(false) & setClose2(true) & setM2(true) & setM3(false) & setA(true) & setB(false) & setC(false)}>Multivitamin</a></li>
          <li><a id="menuc2" href="#" onMouseOver={()=> setArea(false) & setArea2(true) & setArea3(false) & setClose1(false) & setClose2(true) & setM2(true) & setM3(false) & setB(true) & setA(false) & setC(false)}>Protein</a></li>
          <li><a id="menuc3" href="#" onMouseOver={()=> setArea(false) & setArea2(true) & setArea3(false) & setClose1(false) & setClose2(true) & setM2(true) & setM3(false) & setC(true) & setA(false) & setB(false)}>Pregnancy</a></li>
          <li>
            <a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setArea3(false) & setClose1(true) & setM2(false) & setM3(false)}>Bundles</a>
            <span className="label">SAVE $10</span>
          </li>
        </ul>
        <ul className="menu-notmain">
          <li><a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setArea3(false) & setClose1(true) & setM2(false) & setM3(false)}>Who We are</a></li>
          <li><a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setArea3(false) & setClose1(true) & setM2(false) & setM3(false)}>Ingredients</a></li>
          <li><a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setArea3(false) & setClose1(true) & setM2(false) & setM3(false)}>Our Clinical Journey</a></li>
          <li><a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setArea3(false) & setClose1(true) & setM2(false) & setM3(false)}>The Journal</a></li>
        </ul>
        <div>
          <a href="#" onMouseOver={()=> setArea(true) & setArea2(false) & setClose1(true) & setM2(false) & setM3(false)}
            ><svg width="24" height="24" version="1.1" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                <g
                  fill="#142B6F"
                  fill-rule="nonzero"
                  transform="translate(-955.000000, -30.000000)"
                >
                  <g>
                    <g transform="translate(955.000000, 30.000000)">
                      <path
                        d="M8.54396677,12.6132965 C7.592539,11.703026 7,10.4207105 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614238,4 17,6.23857625 17,9 C17,10.4207105 16.4074609,11.703026 15.4560332,12.6132965 C18.1833676,13.6177866 20.3521921,15.7769777 21.3696494,18.4980124 C20.8931099,19.0927328 20.3611216,19.6411047 19.781523,20.135289 C18.9413768,16.6163976 15.7762347,14 12,14 C8.22376537,14 5.05862315,16.6163976 4.21847698,20.135289 C3.63887839,19.6411047 3.10689,19.0927328 2.63035063,18.4980124 C3.64780782,15.7769777 5.81663235,13.6177866 8.54396677,12.6132965 Z M12,12 C13.6568542,12 15,10.6568543 15,9 C15,7.34314575 13.6568542,6.00000001 12,6.00000001 C10.3431458,6.00000001 9,7.34314575 9,9 C9,10.6568543 10.3431458,12 12,12 Z"
                      ></path>
                      <path
                        d="M12,22.0680268 C17.5477849,22.0680268 22.0517918,17.56402 22.0517918,12 C22.0517918,6.43597997 17.5477849,1.93197312 12,1.93197312 C6.45221504,1.93197312 1.94820819,6.43597997 1.94820819,12 C1.94820819,17.56402 6.45221504,22.0680268 12,22.0680268 Z M12,23.9999999 C5.37258301,23.9999999 0,18.6274171 0,12 C0,5.37258301 5.37258301,0 12,0 C18.627417,0 24,5.37258301 24,12 C24,18.6274171 18.627417,23.9999999 12,23.9999999 Z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span id="account">Account</span></a> 
        </div>
      </div>
      
      {menu2f? <Menu2 />:null}
      {menu3f? <Menu3 />:null}

    </div>:null
      }
        </React.Fragment>);
};
export default Menu;
