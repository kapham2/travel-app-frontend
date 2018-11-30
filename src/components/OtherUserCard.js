import React from 'react'

class OtherUserCard extends React.Component {

    render() {
        // console.log("OtherUserCard: this.props => ", this.props)
        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui tiny circular image">
                            <img src={`/users/dog${this.props.other_user.id}.jpg`} alt="" />
                        </div>

                        <div className="content">
                            <p className="header">{this.props.other_user.username}</p>
                            <div className="meta">
                                <span>{this.props.other_user_followers.length} followers | {this.props.other_user_following.length} following</span>
                            </div>
                            <div className="description">
                                <p></p>
                            </div>
                            <div className="extra">
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default OtherUserCard