import React from 'react' 

const Comments = (props) => {
    return (
              <div>
            <p> {props.index > 1 && props.comment}</p>
           

			
            </div>
    )
}

export default Comments
