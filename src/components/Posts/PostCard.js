import  postData  from "../../data"


import './PostCard.css';
import voteup from './photo-post-card/voteup.ico';
import votedown from './photo-post-card/votedown.ico';
import SaveIcon from './photo-post-card/saveicon.ico';
import DropdownIcon from './photo-post-card/dropdownicon.ico';
import CommitIcon from './photo-post-card/commit.ico';
import WhatsAppIcon from './photo-post-card/Whatsapp.ico';
import MessangerIcon from './photo-post-card/Messenger.ico';
import ShareIcon from './photo-post-card/Share.ico';
import Link from './photo-post-card/link.ico';
import Email from './photo-post-card/email.ico';
import Facebook from './photo-post-card/facebook.ico';
import Pinterest from './photo-post-card/pinterest.ico';
import Twitter from './photo-post-card/twitter.ico';
import Telegram from './photo-post-card/telegram.ico';
import { useState } from 'react';


const PostCard = (props) => {

    const [Up, setUp] = useState(20);
    const [Down, setDown] = useState(30);

    const [upvote, setUpvote] = useState(false)
    const [downvote, setdownvote] = useState(false)
    const [save, setsave] = useState(true)
    function Save() {
        if (save){
            setsave(false)
            document.getElementById("savebut").className ="save-button-active";
        }
        else {
            setsave(true)
            document.getElementById("savebut").className ="save-button";
  
        }
    }
    function Upvote() {
        // number=101
        // console.log(number)
        if (upvote) {
            setUpvote(false)
            setUp(Up - 1)
            document.getElementById("up").className = "button-vote";
        }
        else {
            setUpvote(true)
            setUp(Up + 1)
            document.getElementById("up").className = "button-vote-active";


        }
    }

    function Downvote() {
        // number=101
        // console.log(number)
        if (downvote) {
            setdownvote(false)
            setDown(Down - 1)
            document.getElementById("down").className = "button-vote";

        }
        else {
            setdownvote(true)
            setDown(Down + 1)
            document.getElementById("down").className = "button-vote-active";

        }
    }
    return (
        <div className='post-container'>
            <div className='gagger-part'>
                <div className='gagger-prof-pic'>
                    <a className="cardfont" >
                        <img src={props.op_user_avatar} className='AvatarPic' alt="this is avatar " />
                    </a>
                    <div className='gagger'>
                       <a className="cardfont">{props.op_user}</a>
                        <span className="time">1h</span>
                    </div>

                    <div className='save-icon'>
                        <button onClick={Save} className='save-button'>
                            <img id="savebut" src={SaveIcon} className='SaveIcon' alt="this is save icon" type="button" />
                        </button>
                    </div>
                    <div className="dropdown dd-card">
                        <button className='dropdown-button' data-bs-toggle="dropdown" type="button">
                            <img src={DropdownIcon} className='dropdownIcon' alt="this is save icon" type="button" />
                        </button>
                        <ul className="dropdown-menu dd-menu">
                            <li><button className="dropdown-item dd-item" type="button">Download Media</button></li>
                            <li><button className="dropdown-item" type="button">Save</button></li>
                            <li><button className="dropdown-item" type="button">I Don't Like This</button></li>
                            <li><button className="dropdown-item" type="button">I've seen this</button></li>
                            <li><button className="dropdown-item" type="button">Hide Post</button></li>
                            <li><button className="dropdown-item" type="button">Report Post</button></li>
                            <li><button className="dropdown-item" type="button">Block</button></li>
                        </ul>
                    </div>
                </div>
                <div className='title-of-post'>
                    <h4 className="postcardh4" >{props.title}</h4>
                </div>
                <div className='Media'> <img className='Media' src={props.content} />
                  </div>
                <div className='container-tag'>
                    <a className='Post-Card-Tag cardfont' >{props.tags[0]}</a>
                    <a className='Post-Card-Tag cardfont' >{props.tags[1]}</a>
                    <a className='Post-Card-Tag cardfont' >{props.tags[2]}</a>


                </div>
                <div className='button-card'>
                    <div className='vote-button'>
                        <button onClick={Upvote} id="up" className='button-vote'><img className='arrowu' src={voteup} alt="this is vote up icon" />{Up}</button>
                        <button onClick={Downvote} id="down" className='button-vote'><img className='arrowd' src={votedown} alt="this is vote down icon " />{Down}</button>
                        {/* <Link to='/comment'className='button-vote-comment'><img className="comment-img"  src={CommitIcon} alt="this is commit icon " />90</Link> */}
                    </div>

                    <div className='share-buttons'>
                        <a className='share-icon'>
                            <img src={WhatsAppIcon} alt="this is WhatsAppIcon" /></a>

                        <a className='share-icon'>
                            <img src={MessangerIcon} alt="this is MessangerIcon " /></a>
                        <div class="dropdown">
                            <button className="dropdown" type="button" data-bs-toggle="dropdown">
                                <a className='share-icon'><img src={ShareIcon} alt="this is ShareIcon " /></a>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src={Link} alt="this is Copylink Icon" />Copy Link</a></li>
                                <li><a className="dropdown-item" ><img className='dropdown-share-icon' src={Email} alt="this is Email Icon" />Email</a></li>
                                <li><a className="dropdown-item" >
                                    <img className='dropdown-share-icon' src={Facebook} alt="this is Facebook Icon" />Facebook</a></li>
                                <li><a className="dropdown-item"><img className='dropdown-share-icon' src={Pinterest} alt="this is pinterest Icon" />pinterest</a></li>
                                <li><a className="dropdown-item" >
                                    <img className='dropdown-share-icon' src={Twitter} alt="this is Twitter Icon" />Twitter</a></li>
                                <li><a className="dropdown-item"><img className='dropdown-share-icon' src={Telegram} alt="this is telegram Icon" />Telegram</a></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            {/* <>
            {posts.map((post) => {
                return <Card key={post.id} name={post.op_user} icon={post.op_user_avatar} description={post.title} image={post.content}
                    type1={post.tags} 
                    up={post.up_votes} down={post.down_votes} commt={post.comment_count}
                />
            })}
        </>            */}

        </div>
    )
}
export default PostCard;
