import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
let logomarket = require('./image/—Pngtree—shop logo vector template design_4146475.png');
let wctr1 = require('./image/fashionable-confident-woman-wearing-elegant-600nw-2255732941.webp')
let wctr2 = require('./image/The_Sophisticated_Gentleman_s_Ultimate_Fashion_Guide_for_Autumn_2023_1024x1024.jpg')
let wctr3 = require('./image/bf60e48f4a34af127d38929498.webp')
let wctr4 = require('./image/Без названия.jpg')


const Header = () => {
    return (
        <div>
          
            <section id='comand1'>
            <section id='comand'>
                
                <div className="comand">
                    <h1>Зарегистируйтесь на | <span> сайта и получите 10% скидку</span></h1>
                </div>

            </section>
          

            <div className="container">
                <div className="flex">

                <div className="comand1">
                    <img src={logomarket} alt="" />
                    </div>


                    <div className="comanda">
                        <a href="*">Для женщин</a>
                        <a href="*">Для мужчин</a>
                        <a href="*">Для подростков</a>
                       
                         <a href="*">О нас</a>
                       </div>
                       <div className="comands">
                        <SearchIcon style={{marginRight: "30px", fontSize: "36px", color: "white"}}/>
                        <AccountCircleIcon style={{marginRight: "30px",  fontSize: "36px", color: "white" }}/>
                      <ShoppingCartIcon style={{marginRight: "30px", fontSize: "36px" , color: "white" }} />
                       </div>
                       

                       </div>
              
                  <br />
                  <br />
                  <br />
                    <div className="comand2">
                    <h1>2023 Осений стиль</h1>
                    <br />
                    <br />
                    <p>Каждый год мы работаем с художниками из числа коренных народов <br /> 
                     мирового уровня, чтобы создать ограниченную коллекцию, в которой они <br /> 
                      используют наши муклуки в качестве холста для своего искусства. <br />
                       Новый выпуск каждую среду в 12:00 по центральному времени в течение 3 недель.</p>
                       <br />
                       <br />
                       <button>купить сейчас</button>

                    
                </div>
                </div>
            </section>
            <section id='comand2'>
                <div className="container">
                    <div className="comand2h1">
                     
                        <p>Как компания, основанная на культуре коренных народов, 
                         мы стремимся создать яркий глобальный бренд, <br />  который окажет положительное влияние на общины коренных народов.</p>
                    </div>
                    <div className="flexfoto">
                        <img src={wctr1} alt="" style={{width: "250px", height: "250px"}} />
                        <img src={wctr2} alt="" style={{width: "250px", height: "250px"}}  />
                        <img src={wctr3} alt="" style={{width: "250px", height: "250px"}}  />
                        <img src={wctr4} alt="" style={{width: "250px", height: "250px"}}  />


                  
                        </div>
                        </div>
            </section>
         
           
        </div>
    );
};

export default Header;