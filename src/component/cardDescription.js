import React from 'react'
import './cardDescription.css'
import Comments from './comments'

class CardDescription extends React.Component{ 
    state={
        show:false
    }
    showComments=()=>{
        this.state.show ? this.setState({
            show:false
        })
        :this.setState({
            show:true
        })

    }

    render(){
    const allComments = this.props.comments.map((comment,index)=>{
        return  <Comments
         key ={index} 
         index={index}
        comment={comment}
        showComments={this.showComments} />
    })
    // console.log(this.state.show)
    return (
        <div className="description" >
        <div className="likes"> <p className="likes">
				Liked by <span>person</span> and <span>others</span>
			</p></div>
           
            <div className="caption">
			<p >
				<span className="profileName">{this.props.profileName}</span> {this.props.caption} <span id="more">...more</span>
			</p>
            </div>
            <button onClick={this.showComments} className="comments">View all {allComments.length} comments</button>
            <p>{this.props.comments[0]}</p>
            <p>{this.props.comments[1]}</p>
             {this.state.show && allComments}
             <p>{this.props.commentTime}</p>
          
        </div>
    )
}
}
export default CardDescription
