
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayedPost = ({ post }) => {

    const _handleDelete = () => {

        axios.delete('http://localhost:3000/myposts' + post._id )
            .then((result) => {
                console.log("Post: " + post._id + " deleted")
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="post-frame">
            <div className="image-container">
                <img src={ post.image } className="post-image"/>
            </div>
            <p className="post-text">Category: { post.category }</p>
            <p className="post-text">{ post.likeCount } Likes</p>
            <p className="post-text">Caption: { post.caption }</p>
            <Link to={{pathname: "/edit-spotted", search: post._id }}>Edit Spotted</Link>
            <Link onClick={ _handleDelete }>Delete Spotted</Link>
        </div>
    );
}

export default DisplayedPost;