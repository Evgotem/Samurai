import React from 'react';

class ProfileStatus extends React.Component {
   state = {
      editMode: false
      status: this.props.status
   }
   activateEditMode = () => {
      this.setState({editMode : true})
   }
   deactivateEditMode = () => {
      this.setState({editMode : false});
      this.props.updateStatus();
   }

   render() {
      return (
         <div>
            {!this.state.editMode ?
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
               </div>
               :
               <div>
                  <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus;