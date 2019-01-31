import React from 'react'

class OtherUserCard extends React.Component {

    onClickMenu = (event) => {
        // console.log("OtherUserCard: clicked", event.target.getAttribute('name'))
        this.props.setActiveView(event.target.getAttribute('name'))
    }

    render() {
        // console.log("OtherUserCard: this.props => ", this.props)
        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui small circular image">
                            <img src={this.props.other_avatar_url} alt="" />
                        </div>

                        <div className="content">
                            <p className="header">{this.props.other_user.username}</p>
                            <div className="meta">
                                <span className="cursor-pointer" name="Visited" onClick={this.onClickMenu}>{this.props.other_user_visited_destinations.length} cities</span> | <span className="cursor-pointer" name="Followers" onClick={this.onClickMenu}>{this.props.other_user_followers.length} followers</span> | <span className="cursor-pointer" name="Following" onClick={this.onClickMenu}>{this.props.other_user_following.length} following</span>
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