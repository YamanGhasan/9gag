import { Link } from 'react-router-dom';
import './Navbar.css';
import RecommendedPosts from '../Pages/Shuffle';
import handleShuffle from '../Pages/Shuffle';
import CostuomTags from './CustomizeTags/CustomTags'
import SocialMediaSignup from '../SignupLoginModal/SocialMediaSignup';
import LogoNavHome from './NavBarHomeImg/logoNavHome.png'

const itemClicked = (event) => {
    event.stopPropagation();
}

const Navbar = () => {


/*import './Navbar.css';




const Navbar = () => {


    const itemClicked = (event) => {
        event.stopPropagation();
    }
   
    /*const dropdowns=document.querySelectorAll('.Dropdown');
    dropdowns.forEach(Dropdown=>{
    const select=Dropdown.querySelector('.select');
    const caret=Dropdown.querySelector('.caret');
    const menu=Dropdown.querySelector('.menu');
    const options=Dropdown.querySelectorAll('.menu li');
    const selected=Dropdown.querySelector('.test');
    select.addEventListener('click', () =>{
     
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    })
    options.forEach(option => {
      option.addEventListener('click',() => {
         test.innerText = option.innerText;
         select.classList.remove('select-clicked');
         caret.classList.remove('caret-rotate');
         menu.classList.remove('menu-open');
         options.forEach(option => {
           option.classList.remove('active');
         });
    option.classList.add('active');
      });
     });
    });*/

   
    return(        
          <div className='basic-navbar sticky-top'>
             <div className='components'>
                <div className='left-components'>   
                        <div id="menu-div">
                        <button className="btn-start" type="button" data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><img className="menue"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAH9JREFUWEft1UsKgDAMANH05npypTsXtYOGQAvTbaikLx9bLHbaYvmECVFFFFKIBCi+VQ9d9JpkfIgxEzKhLr5VDyVb5N91hchtJnREROWknaPkHPuHyufF2EtWeYbfd8qIXKGMUOUOev2Puocye4jKXRJ3yohVIYVIgOL2EAndFg4LJcntgd8AAAAASUVORK5CYII="/></button>
                        </div>  
                        <div className='logo-div'>
                            <Link to='/Home' id="gag-but" className="navbar-brand" href="#" ><img id="gag-img" src={LogoNavHome} /></Link>
                        </div>
                        
                           <Link to='/shuffle' className="left-links" id='Shuffle' onClick={RecommendedPosts}><b>🔀 Shuffle</b></Link>
                           <Link to='/getapp' className="left-links" id='GetApp'><b>📱 Get App</b></Link>
                           <a className="left-links" id='Memeland'><b>🏴‍☠️ Memeland</b></a>
                           <a className="left-links" id='Potatoz'><b>🥔 Potatoz</b></a>
                        
                </div>  
                <div className='right-components'>
                        <div className="right-component dropdown" id='search-div' >
                            <button id="search-but" className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                                <img id="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAjRJREFUSEv
                                    lllFO20AQhme8m742nKDpCRoeKxwgUnYl3sIJCjegJyCcoPQEDScgb0g2UqAE9ZHcoOEEmFds71RrOZEdbO86kssD+xIpmp1vZv6ZWSO80cE34oI1+M739
                                    4Hoi4PYVkQBAcx3pbzdNPBK8J+rq07cap0C0VEJIADECQvDs68HB4s6QZSCZ75/AgA/bJ0R0UlPyp+29oXgmeeNAfHbygnRhXKcSczYTb/fD6bTaZvF8b6
                                    j1DBnhzh2B4NjG/gr8Fqmj0g03JFyXubs3vO6hDgBgE+pzXdXiHMTPAdONOX8b3rpMeS8qzM0OdEVaEWRDi6Bsyj6bNI8B86WGIm2qzJdDybN/CH5n+jCl
                                    bKsIROTPNj3yfZiURUygQeuEFtVlVqB9ZwiwFQbK8TD3cFA61br/L6+HjpEl0nSAP2eEDdlDlbgbFOFnG/ZaLvuNNX6yabJshmPEOBUX3KFsN5o6/BZKhc
                                    BnPWEGP33jE1yNaaxaSpyJb3z/QABPtqMg6GrjXI1MscmfV/NcW5zIS5CxrZtujvp5jh+AKIOATxHnHdM96p3NeIClTo07mrHudTQOsvH7nVCHCPR5IXz2
                                    +Xr9CGK9ghxWPRWI9HxjpRjq81VMI/W77Eurw4s+0Sa4OYvEMZGOrOk2wuObqSI83NdiXvPOyLEX0uzKrj1hkp3eZcA2oQ4Z0otirS3hVuD67wWNvBGwDr
                                    ILLyo5I2Bl3D9W9ThjYI3Gqc6mm5i+/4y/gdaBUkuj2W3yQAAAABJRU5ErkJggg=="/>
                            </button>
                                <ul id="search-drpdown" className="dropdown-menu">
                                        <li>
                                        <nav className="navbar navbar-light bg-light">
                                            <form className="form-inline">
                                            <div className="input-group">
                                                <div id="search-div" className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><svg id="nested-search" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" onClick={itemClicked}>
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                </svg></span>
                                                </div>
                                                <input id="search-input" type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"  />
                                            </div>
                                            </form> 
                                        </nav> 
                                        </li>
                                </ul>
                        </div>  
                        <div className='right-component'>
                            <button id="sign-but" type="button" className="buttons" > <b>Sign Up/ Log In</b></button>
                        </div>
                        
                        
                        <div id='profile-dropdown' className="right-component dropdown-center">
                                <button id='profile-btn' className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg id="prof" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>     
                                </button>
                                <ul id='pofile-ul' className="dropdown-menu">
                                    <li><a className="items dropdown-item">Sign up or Log in</a></li>
                                    <li><a className="items dropdown-item">Customize with Tags</a></li>
                                    <li>
                                        <a  className="items dropdown-item" onClick={itemClicked}> <div id="dark-mode-text">Dark Mode<div id="dark-mode-switch"  className="form-check form-switch">
                                           <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                           <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label></div> </div>
                                        </a>
                                    </li>
                                    <li><a className="items dropdown-item">Download 9GAG App</a></li>
                                    <li><a className="items dropdown-item">Help Center</a></li>
                                    <li><a className="items dropdown-item">Report Problems</a></li>
                                    <li>  
                                            <a className="dropdown-nested btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={itemClicked}>
                                              <div className='carets-div'>
                                                Terms & Policies
                                                <div className='caret'>
                                                        <svg id='img-terms-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                        </svg>
                                                </div>
                                             </div> 
                                            </a>
                                            <div className="collapse" id="collapseExample">
                                                <a className='nested-dropdown'>Term</a><br />
                                                <a className='nested-dropdown'>Privacy</a><br />
                                                <a className='nested-dropdown'>Copyright</a>
                                            </div>                                                       
                                    </li> 

                                    <li>  
                                            <a className="dropdown-nested btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={itemClicked}>
                                             <div className='carets-div'>
                                                Advertise
                                                <div className='caret'>
                                                        <svg id='img-Advertise-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                        </svg>
                                                </div>
                                              </div>  
                                            </a>
                                            <div className="collapse" id="collapseExample">
                                            <div>
                                                <a className='nested-dropdown'>Advertise on 9GAG</a><br />
                                                <a className='nested-dropdown'>Report Ads</a>
                                            </div>
                                            </div>                                                       
                                    </li> 


                                    <li>  
                                            <a className="dropdown-nested btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={itemClicked}>
                                             <div className='carets-div'> 
                                                Contact
                                                <div className='caret'>
                                                        <svg id='img-Contact-id'  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                        </svg>
                                                </div>
                                              </div>  
                                            </a>
                                            <div className="collapse" id="collapseExample">
                                            <div>
                                                <a className='nested-dropdown'>Career</a><br />
                                                <a className='nested-dropdown'>Business Enquiry</a>
                                            </div>
                                            </div>                                                       
                                    </li> 
                                    <li>
                                    <p id="gag" href="#" className='disabled'>9GAG <i>&copy;</i> 2022</p>
                                    </li>
                                </ul>
                        </div>
             
                        <div id='post-but-div' className="right-component">
                                    <Link to='/addnewpost' id="post-but" type="button" className="buttons"><img className='post-pen' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXJJREFUSEvt1v1NwkAYBvDnJRViAthOoCPUCZQNcAM20RHcwDiBI8gIt4F1gn4cibQcPXOJNYVeP+hdQ2Lsv5D+eN57yHuEMz10Jhd/B/4Kw5uR47wB8AGwXIiHS88LjidrNXG22fhSyncAbgmKiGgxnk5ZGbcGyzB0M8dRya40vYlyIW7Lya3BCsuSZCWJXrSFlfJ1Mp+vis+MYTXei90uIM+L2vDJbPbrGcGlMw3GQiwacVuJNUViDXicC+Ebn3FNe9WkdfgzEd0bt7oBLXpzgKu2F0fQ++/UAdXiupZ3LtcJqHJi3XhPTmwbVT+gNfEQaCs8FNoID4nWwkOjtXCaJAGIrjvcTlrbW/eOSrl+FvnHkKg2cZokSxCpG0TT0ztp7VpMOX8C8NigGqPaxFvO1wTc1cBWUP2oOVcLvXp9kfKTRqPl8Zbp0AXtVw7KVSpWLAFGwBpSsny/Z7qbYl+0klitsC3g2kaMtpNJun9YTeAbfjfzH40wiiEAAAAASUVORK5CYII="/> <b className='post-text'>  Post </b>
                                    </Link>
                                </div>  
                </div>
             </div> 
             <hr id="navbar-hr"/>
          </div>



    )
    }//end func
    export default Navbar;