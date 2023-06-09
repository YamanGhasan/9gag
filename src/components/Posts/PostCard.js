import postData from "../../data"


import './PostCard.css';
import voteup from './photo-post-card/voteup.ico';
import votedown from './photo-post-card/votedown.ico';
import SaveIcon from './photo-post-card/saveicon.ico';
import DropdownIcon from './photo-post-card/dropdownicon.ico';
import CommitIcon from './photo-post-card/commit.ico';
import WhatsAppIcon from './photo-post-card/Whatsapp.ico';
import MessangerIcon from './photo-post-card/Messenger.ico';
import ShareIcon from './photo-post-card/Share.ico';
import LinkIcon from './photo-post-card/link.ico';
import Email from './photo-post-card/email.ico';
import Facebook from './photo-post-card/facebook.ico';
import Pinterest from './photo-post-card/pinterest.ico';
import Twitter from './photo-post-card/twitter.ico';
import Telegram from './photo-post-card/telegram.ico';
import { useState } from 'react';
import { Link } from "react-router-dom";

const PostCard = (props) => {
    // count 
    const [Up, setUp] = useState(props.up_votes);
    const [Down, setDown] = useState(props.down_votes);
    // button
    const [upvote, setUpvote] = useState(false)
    const [downvote, setdownvote] = useState(false)


    function Upvoteb() {
        if (upvote) {
            setUpvote(false)
            setUp(Up - 1)

        }
        else {
            setUpvote(true)
            setUp(Up + 1)

            if (downvote) {
                setUpvote(false)
                setUp(Up + 1)
                setDown(Down - 1)
            }
        }
    }

    function Downvoteb() {
        if (downvote) {
            setdownvote(false)
            setDown(Down + 1)
        }
        else {
            setdownvote(true)
            setDown(Down + 1)

            if (upvote) {
                setUpvote(false)
                setDown(Down + 1)
                setUp(Up - 1)
            }
        }
    }
    return (
        <>
            <div className='post-container'>
                <div className='gagger-part'>
                    <div className='gagger-prof-pic'>
                        <Link to='/gaggerpage' className="card-font" >
                            <img src={props.op_user_avatar} className='avatar-pic' alt=" op-avatar " />
                        </Link>
                        <div className='gagger'>
                            <Link to='/gaggerpage' className="card-font">{props.op_user}</Link>
                            <span className="time">{props.post_time}h</span>
                        </div>

                        <div >
                            <button onClick={SaveIcon} className='save-button'>
                                <img id="savebut" src={SaveIcon} className='save-icon' alt="this is save icon" type="button" />
                            </button>
                        </div>
                        <button className='dropdown-button dropdown' data-bs-toggle="dropdown" type="button">
                            <img src={DropdownIcon} className='drop-down-icon' alt="save icon" type="button" />
                        </button>
                        <ul className="dd-men dropdown-menu ">
                            <li><button className="dd-it dropdown-item " type="button">Download Media</button></li>
                            <li><button className="dd-it dropdown-item " type="button">Save</button></li>
                            <li><button className="dd-it dropdown-item " type="button">I Don't Like This</button></li>
                            <li><button className="dd-it dropdown-item " type="button">I've seen this</button></li>
                            <li><button className="dd-it dropdown-item " type="button">Hide Post</button></li>
                            <li><button className="dd-it dropdown-item " type="button">Report Post</button></li>
                            <li><button className="dd-it dropdown-item " type="button">Block@{props.op_user}</button></li>
                        </ul>
                    </div>

                    <div className='title-of-post'>
                        <h4 className="postcardh4" >{props.title}</h4>
                    </div>
                    <div className='Media'> <img className='Media' src={props.content} />
                    </div>
                    <div className='container-tag'>
                        <a className='Post-Card-Tag card-font' >{props.tags[0]}</a>
                        <a className='Post-Card-Tag card-font' >{props.tags[1]}</a>


                    </div>
                    <div className='button-card'>
                        <div className='vote-button'>
                            <button onClick={Upvoteb} type="button" id="up" className='btn btn-outline-secondary'><img className='arrowu' src={voteup} alt="up vote icon " /><b >{Up}</b></button>
                            <button onClick={Downvoteb} type="button" id="down" className="btn btn-outline-secondary"><img className='arrowd' src={votedown} alt=" down vote icon " /><b>{Down}</b></button>
                            <Link to='/comment' id="comment-but" className="btn btn-outline-secondary buttton"><img className="comment-img" src={CommitIcon} alt="this is commit icon " /><b>{props.comment_count}</b></Link>

                        </div>

                        <div className='share-buttons'>
                            <a className='share-icon'>
                                <img src={WhatsAppIcon} alt="this is WhatsAppIcon" /></a>

                            <a className='share-icon'>
                                <img src={MessangerIcon} alt="this is MessangerIcon " /></a>
                            <div className="dropdown dd-post">
                                <button className="dropdown dd-post" type="button" data-bs-toggle="dropdown">
                                    <a className='share-icon'><img src={ShareIcon} alt="this is ShareIcon " /></a>
                                </button>
                                <ul className="dd-men dropdown-menu ">
                                    <li><a className="dd-it dropdown-item " ><img className='dropdown-share-icon' src={LinkIcon} alt="this is Copylink Icon" />Copy Link</a></li>
                                    <li><a className="dd-it dropdown-item " ><img className='dropdown-share-icon' src={Email} alt="this is Email Icon" />Email</a></li>
                                    <li><a className="dd-it dropdown-item " >
                                        <img className='dropdown-share-icon' src={Facebook} alt="this is Facebook Icon" />Facebook</a></li>
                                    <li><a className="dd-it dropdown-item "><img className='dropdown-share-icon' src={Pinterest} alt="this is pinterest Icon" />pinterest</a></li>
                                    <li><a className="dd-it dropdown-item " >
                                        <img className='dropdown-share-icon' src={Twitter} alt="this is Twitter Icon" />Twitter</a></li>
                                    <li><a className="dd-it dropdown-item "><img className='dropdown-share-icon' src={Telegram} alt="this is telegram Icon" />Telegram</a></li>

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
            <hr className="hr-card" />
        </>
    )
}
export default PostCard;
