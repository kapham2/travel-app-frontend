import React from 'react'
import ExplorePlacesPeopleContainer from './ExplorePlacesPeopleContainer'

class ExploreNavigation extends React.Component {

    constructor() {
        super()
        this.state = {
            activeView: "Places"
        }
    }

    onClickMenu = (event) => {
        // console.log("ExploreNavigation: clicked", event.target.getAttribute('name'))
        const newActive = event.target
        const oldActive = document.getElementsByClassName("link item active")[0]
        if (newActive !== oldActive) {
            oldActive.classList.remove("active")
            newActive.classList.add("active")
            this.setState({
                activeView: event.target.getAttribute('name')
            })
        }
        this.props.clearSearch()
    }

    render() {
        // console.log("ExploreNavigation: this.props =>", this.props)
        return (
            <div className="ui container">
                <div className="ui text container">
                    <div className="ui stackable secondary menu">
                            {/* <div className="link item active" data-tab="Visited" name="Visited" onClick={this.onClickMenu} >Visited</div>
                            <div className="link item" data-tab="Saved" name="Saved" onClick={this.onClickMenu} >Saved</div> */}
                            <div className="link item active" data-tab="Places" name="Places" onClick={this.onClickMenu} >Places</div>

                            {/* <div className="link item" data-tab="Followers" name="Followers" onClick={this.onClickMenu} >Followers</div>
                            <div className="link item" data-tab="Following" name="Following" onClick={this.onClickMenu} >Following</div> */}
                            <div className="link item" data-tab="People" name="People" onClick={this.onClickMenu} >People</div>
                    </div>
                </div>
                
                <br/><br/><br/>
                <div className="ui active tab">
                    <ExplorePlacesPeopleContainer {...this.props} activeView={this.state.activeView}/>
                </div>

            </div>
        )
    }
}

export default ExploreNavigation














