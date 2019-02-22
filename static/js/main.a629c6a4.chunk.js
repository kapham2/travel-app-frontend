(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),i=(a(30),a(3)),l=a(4),c=a(6),u=a(5),d=a(7),p=a(42),m=a(44),h=a(43),_=a(41),v=a(12),f=(a(36),a(37),a(24)),E=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(h.a,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(_.a,{to:"/"})}}))},g=a(40),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a=t.target.querySelector('input[name="username"]').value,n=t.target.querySelector('input[name="password"]').value;e.state.loginForm?e.authenticate(a,n):e.signUp(a,n)},e.authenticate=function(t,a){fetch("http://localhost:3333/api/v1/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({user:{username:t,password:a}})}).then(function(e){if(e.ok)return e.json();throw e}).then(function(t){return e.setUser(t)}).then(e.getUserDestinationsAndFollows).catch(function(t){return t.json().then(function(t){return e.setError(t)})})},e.setUser=function(t){console.log("LoginForm: response =>",t),e.props.setUser(t),localStorage.setItem("token",t.token),e.props.history.push("/".concat(t.user.username))},e.getUserDestinationsAndFollows=function(){e.getUserDestinations(),e.getFollows()},e.getUserDestinations=function(){fetch("http://localhost:3333/api/v1/user_destinations",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(t){return e.props.setUserDestinations(t)})},e.getFollows=function(){fetch("http://localhost:3333/api/v1/follows",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(t){return e.props.setFollows(t)})},e.setError=function(t){e.setState({errorMessage:t.error}),document.getElementById("error-message").classList.remove("hidden")},e.signUp=function(t,a){fetch("http://localhost:3333/api/v1/users",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({user:{username:t,password:a}})}).then(function(e){if(e.ok)return e.json();throw e}).then(function(t){return e.setUser(t)}).then(e.getUserDestinationsAndFollows).catch(function(t){return t.json().then(function(t){return e.setError(t)})})},e.onClickLink=function(){e.setState({errorMessage:"",loginForm:!e.state.loginForm}),document.getElementById("error-message").classList.add("hidden"),document.getElementById("form").reset()},e.state={errorMessage:"",loginForm:!0},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a;return this.state.loginForm?(e="Login",t="Don't have an account? ",a="Sign up"):(e="Sign up",t="Already have an account? ",a="Login"),r.a.createElement("div",{className:"ui very padded raised segment"},r.a.createElement("h3",{className:"ui center aligned icon header"},r.a.createElement("i",{className:"plane icon"}),"HelloWorld"),r.a.createElement("br",null),r.a.createElement("div",{className:"ui small hidden error message",id:"error-message"},this.state.errorMessage),r.a.createElement("form",{className:"ui form",id:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",name:"password",placeholder:"password"})),r.a.createElement("button",{className:"fluid ui black button",type:"submit"},e)),r.a.createElement("br",null),r.a.createElement("div",{className:"ui center aligned container"},t,r.a.createElement(g.a,{to:"/",onClick:this.onClickLink},a)))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui centered grid login-grid"},r.a.createElement("div",{className:"stretched row middle aligned"},r.a.createElement("div",{className:"column login-column computer only tablet only"},r.a.createElement("img",{className:"ui rounded bordered image",src:"/hello-world-app-frontend/helloworld.jpg",alt:""})),r.a.createElement("div",{className:"column login-column"},r.a.createElement(w,this.props))))}}]),t}(r.a.Component),b=Object(v.b)(null,function(e){return{setUser:function(t){return e({type:"SET_USER",data:t})},setUserDestinations:function(t){return e({type:"SET_USER_DESTINATIONS",data:t})},setFollows:function(t){return e({type:"SET_FOLLOWS",data:t})}}})(O),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickLogout=function(){localStorage.clear(),a.props.clearState(),a.props.history.push("/")},a.onClickProfile=function(){a.props.setOtherUser({user:a.props.user,avatar_url:a.props.avatar_url,visited_destinations:a.props.user_visited_destinations,saved_destinations:a.props.user_saved_destinations,followers:a.props.user_followers,following:a.props.user_following}),a.props.setActiveView("Visited"),a.props.history.push("/".concat(a.props.user.username))},a.onClickDropDown=function(){document.querySelector('div[name="dropdown-menu"').classList.remove("hidden"),document.querySelector('div[name="dropdown-menu"').classList.add("visible")},a.onMouseLeaveDropDown=function(){document.querySelector('div[name="dropdown-menu"').classList.remove("visible"),document.querySelector('div[name="dropdown-menu"').classList.add("hidden")},a.onClickDropDownExplore=function(){document.querySelector('div[name="dropdown-menu-explore"').classList.remove("hidden"),document.querySelector('div[name="dropdown-menu-explore"').classList.add("visible")},a.onMouseLeaveDropDownExplore=function(){document.querySelector('div[name="dropdown-menu-explore"').classList.remove("visible"),document.querySelector('div[name="dropdown-menu-explore"').classList.add("hidden")},a.onClickExplore=function(){a.props.setActiveView("Explore Cities"),a.props.history.push("/explore/cities")},a.onClickExplorePeople=function(){a.props.setActiveView("Explore People"),a.props.history.push("/explore/people")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("LogoutNavigation: this.props =>",this.props.avatar_url),r.a.createElement("div",{className:"ui borderless menu fixed"},r.a.createElement("div",{className:"ui text container"},r.a.createElement("div",{className:"ui header link item",onClick:this.onClickProfile},r.a.createElement("i",{className:"plane icon"}),r.a.createElement("div",{id:"hide-mobile-only"},"HelloWorld")),r.a.createElement("div",{className:"item",id:"hide-mobile-only"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:"Search...",value:this.props.search,onChange:this.props.onChangeSearch}),r.a.createElement("i",{className:"search icon"}))),r.a.createElement("div",{className:"ui right dropdown item",id:"hide-mobile-only",onClick:this.onClickDropDownExplore,onMouseLeave:this.onMouseLeaveDropDownExplore},"Explore",r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("div",{className:"menu transition hidden",name:"dropdown-menu-explore",onMouseLeave:this.onMouseLeaveDropDownExplore},r.a.createElement("div",{className:"item",onClick:this.onClickExplore},"Cities"),r.a.createElement("div",{className:"item",onClick:this.onClickExplorePeople},"People"))),r.a.createElement("div",{className:"ui right item",id:"show-mobile-only",onClick:this.onClickExplore},r.a.createElement("i",{className:"images big icon"})),r.a.createElement("div",{className:"ui right item",id:"show-mobile-only",onClick:this.onClickExplorePeople},r.a.createElement("i",{className:"users big icon"})),r.a.createElement("div",{className:"ui right dropdown item",onClick:this.onClickDropDown,onMouseLeave:this.onMouseLeaveDropDown},r.a.createElement("div",{className:"ui mini circular image"},this.props.avatar_url.length<=16?r.a.createElement("img",{src:"/hello-world-app-frontend"+this.props.avatar_url,alt:""}):r.a.createElement("img",{src:this.props.avatar_url,alt:""})),r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("div",{className:"menu transition hidden",name:"dropdown-menu",onMouseLeave:this.onMouseLeaveDropDown},r.a.createElement("div",{className:"item",id:"hide-mobile-only",onClick:this.onClickProfile},"Profile"),r.a.createElement("div",{className:"item",onClick:this.onClickLogout},"Logout")))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui very padded grid"},r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"ui row"},r.a.createElement(N,this.props)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ui text container"},r.a.createElement("div",{className:"ui very relaxed unstackable items"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui small circular blurring dimmable image"},r.a.createElement("img",{src:"/hello-world-app-frontend/cake.jpg",alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"header"},"Yay!"),r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,"You Found the Cake Page!")),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,r.a.createElement(g.a,{to:"/".concat(this.props.user.username)},"Go Back To Profile")))))))),r.a.createElement("div",{className:"row"},r.a.createElement("img",{className:"ui rounded bordered centered image",src:"/hello-world-app-frontend/cake.gif",alt:""})))}}]),t}(r.a.Component),y=Object(v.b)(function(e){return{user:e.user,avatar_url:e.avatar_url,user_visited_destinations:e.user_visited_destinations,user_saved_destinations:e.user_saved_destinations,user_followers:e.user_followers,user_following:e.user_following}},function(e){return{setOtherUser:function(t){return e({type:"SET_OTHER_USER",data:t})}}})(S),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickModalCancelButton=function(){document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active")},a.onClickModalOkButton=function(){document.querySelector('div[name="modal-upload-avatar"]').classList.remove("active");var e=document.querySelector('input[name="modal-uploaded-file"]').files;if(0!==e.length){var t=new FormData;t.append("user[avatar]",e[0]),fetch("http://localhost:3333/api/v1/users/".concat(a.props.user.id),{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:t}).then(function(e){return e.json()}).then(function(e){return a.props.setAvatarUrl(e.avatar_url)})}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui small modal",name:"modal-upload-avatar"},r.a.createElement("i",{className:"close icon"}),r.a.createElement("div",{className:"header"},"Upload Photo"),r.a.createElement("div",{className:"image content"},r.a.createElement("div",{className:"ui small circular image"},this.props.avatar_url.length<=16?r.a.createElement("img",{src:"/hello-world-app-frontend"+this.props.avatar_url,alt:""}):r.a.createElement("img",{src:this.props.avatar_url,alt:""})),r.a.createElement("div",{className:"description",name:"modal-description"},r.a.createElement("form",{className:"form",name:"modal-form",onSubmit:this.onSubmitForm},r.a.createElement("input",{type:"file",name:"modal-uploaded-file"}),r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"ui button",onClick:this.onClickModalOkButton},"OK"),r.a.createElement("div",{className:"ui button",onClick:this.onClickModalCancelButton},"Cancel")))}}]),t}(r.a.Component),j=Object(v.b)(null,function(e){return{setAvatarUrl:function(t){return e({type:"SET_AVATAR_URL",avatar_url:t})}}})(D),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickMenu=function(e){a.props.setActiveView(e.target.getAttribute("name"))},a.onMouseOverAvatar=function(e){a.props.user.id===a.props.other_user.id&&e.target.previousSibling.classList.add("active")},a.onMouseLeaveAvatar=function(e){a.props.user.id===a.props.other_user.id&&e.target.classList.remove("active")},a.onClickUpdateButton=function(e){document.querySelector('div[name="modal-upload-avatar"]').classList.add("active")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a;return"Explore Cities"===this.props.activeView?(e=r.a.createElement("img",{src:"/hello-world-app-frontend/helloworldsquare.jpg",alt:""}),t=r.a.createElement("p",{className:"header"},"Explore Cities"),a=r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("strong",null,this.props.more_destinations.length)," cities"))):"Explore People"===this.props.activeView?(e=r.a.createElement("img",{src:"/hello-world-app-frontend/helloworldsquare.jpg",alt:""}),t=r.a.createElement("p",{className:"header"},"Explore People"),a=r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("strong",null,this.props.more_users.length)," people"))):"Destination"===this.props.activeView?(e=r.a.createElement("img",{src:"/hello-world-app-frontend"+this.props.photo_url,alt:""}),t=r.a.createElement("p",{className:"header"},this.props.destination.city,", ",this.props.destination.country),a=r.a.createElement("div",{className:"meta"},r.a.createElement("span",null,r.a.createElement("strong",null,this.props.users_visited.length)," visited"))):(e=this.props.avatar_url.length<=16?r.a.createElement("img",{src:"/hello-world-app-frontend"+this.props.other_avatar_url,alt:"",onMouseOver:this.onMouseOverAvatar}):r.a.createElement("img",{src:this.props.other_avatar_url,alt:"",onMouseOver:this.onMouseOverAvatar}),t=r.a.createElement("p",{className:"header"},this.props.other_user.username),a=r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"cursor-pointer",name:"Visited",onClick:this.onClickMenu},r.a.createElement("strong",{name:"Visited"},this.props.other_user_visited_destinations.length)," cities")," ",r.a.createElement("br",{id:"show-mobile-only"})," ",r.a.createElement("span",{className:"cursor-pointer",name:"Followers",onClick:this.onClickMenu},r.a.createElement("strong",{name:"Followers"},this.props.other_user_followers.length)," followers")," ",r.a.createElement("br",{id:"show-mobile-only"})," ",r.a.createElement("span",{className:"cursor-pointer",name:"Following",onClick:this.onClickMenu},r.a.createElement("strong",{name:"Following"},this.props.other_user_following.length)," following"))),r.a.createElement("div",{className:"ui text container"},r.a.createElement("div",{className:"ui very relaxed unstackable items"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui small circular blurring dimmable image"},r.a.createElement("div",{className:"ui dimmer",onMouseLeave:this.onMouseLeaveAvatar},r.a.createElement("div",{className:"ui inverted button",onClick:this.onClickUpdateButton},"Update")),e),r.a.createElement("div",{className:"content"},t,a,r.a.createElement("div",{className:"description"},r.a.createElement("p",null)),r.a.createElement("div",{className:"extra"},r.a.createElement("p",null))))),r.a.createElement(j,this.props))}}]),t}(r.a.Component),T=a(10),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onMouseOverCard=function(e){"Home"!==a.props.activeView&&e.target.previousSibling.classList.add("active")},a.onMouseLeaveCard=function(e){"Home"!==a.props.activeView&&e.target.classList.remove("active")},a.onClickButton=function(e){var t=e.target.getAttribute("name");switch(a.props.activeView){case"Visited":"View Page"===t&&a.props.setActiveView("Destination"),"View Page"===t?a.getDestination():a.deleteUserDestination("Visited");break;case"Followers":case"Following":"View Page"===t?a.getOtherUser():"Unfollow"===t?a.deleteFollow("Following"):a.postFollow();break;case"Destination":"View Page"===t&&a.props.setActiveView("Visited"),"View Page"===t?a.getOtherUser():"Unfollow"===t?a.deleteFollow("Following"):a.postFollow();break;case"Explore Cities":"View Page"===t&&a.props.setActiveView("Destination"),"View Page"===t?a.getDestination():a.postUserDestination(!0);break;case"Explore People":"View Page"===t&&a.props.setActiveView("Visited"),"View Page"===t?a.getOtherUser():a.postFollow();break;default:console.log("Oh no!")}},a.postUserDestination=function(e){fetch("http://localhost:3333/api/v1/user_destinations",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({user_id:a.props.user.id,destination_id:a.props.item.id,visited:e})}).then(function(e){return e.json()}).then(function(e){return a.props.addUserDestination(e)}),e?a.props.addVisitedDestination(a.props.item):a.props.addSavedDestination(a.props.item)},a.deleteUserDestination=function(e){var t=a.props.user_destinations.find(function(e){return e.user_id===a.props.user.id&&e.destination_id===a.props.item.id});fetch("http://localhost:3333/api/v1/user_destinations/".concat(t.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),a.props.deleteFromUserDestinations(t),"Visited"===e&&a.props.deleteFromVisitedDestinations(a.props.item)},a.postFollow=function(){fetch("http://localhost:3333/api/v1/follows",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({follower_id:a.props.user.id,following_id:a.props.item.id})}).then(function(e){return e.json()}).then(function(e){return a.props.addFollow(e)}),a.props.addFollowing(a.props.item),a.props.user.id===a.props.other_user.id&&a.props.addOtherFollowing(a.props.item)},a.deleteFollow=function(e){var t="Following"===e?a.props.user.id:a.props.item.id,n="Following"===e?a.props.item.id:a.props.user.id,r=a.props.follows.find(function(e){return e.follower_id===t&&e.following_id===n});fetch("http://localhost:3333/api/v1/follows/".concat(r.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),a.props.deleteFromFollows(r),"Following"===e&&(a.props.deleteFromFollowing(a.props.item),a.props.user.id===a.props.other_user.id&&a.props.deleteFromOtherFollowing(a.props.item))},a.getOtherUser=function(){fetch("http://localhost:3333/api/v1/other-users/".concat(a.props.item.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(e){a.props.setOtherUser(e),a.props.history.push("/".concat(e.user.username))})},a.getDestination=function(){fetch("http://localhost:3333/api/v1/destinations/".concat(a.props.item.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(e){a.props.setDestination(e),a.props.history.push("/places/".concat(e.destination.city.toLowerCase().replace(/\s+/g,"-")))})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a,n,o,s=this;switch(this.props.activeView){case"Visited":e="View Page",t="Remove",a="/destinations/".concat(this.props.item.city.toLowerCase().replace(/ /g,""),".jpg"),n=this.props.item.city,o=this.props.item.country;break;case"Followers":case"Following":case"Destination":e="View Page",t=this.props.user_following.find(function(e){return e.id===s.props.item.id})?"Unfollow":"Follow",a=this.props.item.avatar_url,n=this.props.item.username,o="";break;case"Explore Cities":e="View Page",t="Visited",a="/destinations/".concat(this.props.item.city.toLowerCase().replace(/ /g,""),".jpg"),n=this.props.item.city,o=this.props.item.country;break;case"Explore People":e="View Page",t="Follow",a=this.props.item.avatar_url,n=this.props.item.username,o="";break;default:console.log("Oh no!")}return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"blurring dimmable image"},r.a.createElement("div",{className:"ui dimmer",onMouseLeave:this.onMouseLeaveCard},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"ui inverted button",id:"button1",name:e,onClick:this.onClickButton},e),r.a.createElement("div",{className:"ui inverted button",id:"button2",name:t,onClick:this.onClickButton},t)))),r.a.createElement("img",{className:"card-image",src:"/hello-world-app-frontend"+a,alt:"",onMouseOver:this.onMouseOverCard})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},n),r.a.createElement("div",{className:"meta"},o)))}}]),t}(r.a.Component),A=Object(v.b)(null,function(e){return{addVisitedDestination:function(t){return e({type:"ADD_VISITED_DESTINATION",destination:t})},deleteFromVisitedDestinations:function(t){return e({type:"DELETE_FROM_VISITED_DESTINATIONS",destination:t})},addFollowing:function(t){return e({type:"ADD_FOLLOWING",user:t})},addOtherFollowing:function(t){return e({type:"ADD_OTHER_FOLLOWING",user:t})},deleteFromFollowing:function(t){return e({type:"DELETE_FROM_FOLLOWING",user:t})},deleteFromOtherFollowing:function(t){return e({type:"DELETE_FROM_OTHER_FOLLOWING",user:t})},setOtherUser:function(t){return e({type:"SET_OTHER_USER",data:t})},addUserDestination:function(t){return e({type:"ADD_USER_DESTINATION",data:t})},deleteFromUserDestinations:function(t){return e({type:"DELETE_FROM_USER_DESTINATIONS",userDestination:t})},deleteFromFollows:function(t){return e({type:"DELETE_FROM_FOLLOWS",follow:t})},addFollow:function(t){return e({type:"ADD_FOLLOW",data:t})},setDestination:function(t){return e({type:"SET_DESTINATION",data:t})}}})(L),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getSearchedDestination=function(e){return Object(T.a)(e).filter(function(e){return e.city.toLowerCase().includes(a.props.search)||e.state.toLowerCase().includes(a.props.search)||e.country.toLowerCase().includes(a.props.search)||e.continent.toLowerCase().includes(a.props.search)})},a.getSearchedUser=function(e){return Object(T.a)(e).filter(function(e){return e.username.includes(a.props.search)})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this;switch(this.props.activeView){case"Visited":e=this.getSearchedDestination(this.props.other_user_visited_destinations),t=0===this.props.other_user_visited_destinations.length?r.a.createElement("div",null,this.props.other_user.username," doesn't have any visited places yet."):0===e.length?r.a.createElement("div",null,"No visited places match your search. :("):r.a.createElement("div",null);break;case"Followers":e=this.getSearchedUser(this.props.other_user_followers),t=0===this.props.other_user_followers.length?r.a.createElement("div",null,"No one has followed ",this.props.other_user.username," yet. :\\"):0===e.length?r.a.createElement("div",null,"No one matches your search. :("):r.a.createElement("div",null);break;case"Following":e=this.getSearchedUser(this.props.other_user_following),t=0===this.props.other_user_following.length?r.a.createElement("div",null,this.props.other_user.username," hasn't followed anyone yet. :("):0===e.length?r.a.createElement("div",null,"No one matches your search. :("):r.a.createElement("div",null);break;case"Destination":e=this.getSearchedUser(this.props.users_visited),t=0===this.props.users_visited.length?r.a.createElement("div",null,"No one has added ",this.props.destination.city,", ",this.props.destination.country," to their visited list."):0===e.length?r.a.createElement("div",null,"No one matches your search. :("):r.a.createElement("div",null);break;case"Explore Cities":e=this.getSearchedDestination(this.props.more_destinations),t=0===this.props.more_destinations.length?r.a.createElement("div",null,"You've added all the places to your lists! :)"):0===e.length?r.a.createElement("div",null,"No places match your search. :("):r.a.createElement("div",null);break;case"Explore People":e=this.getSearchedUser(this.props.more_users),t=0===this.props.more_users.length?r.a.createElement("div",null,"You've followed everyone! :)"):0===e.length?r.a.createElement("div",null,"No one matchs your search. :("):r.a.createElement("div",null);break;default:console.log("Oh no!")}return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui special centered cards"},t,e.map(function(e){return r.a.createElement(A,Object.assign({key:e.id,item:e},a.props))})))}}]),t}(r.a.Component),F=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).setActiveView=function(t){e.setState({activeView:t})},e.onChangeSearch=function(t){e.setState({search:t.target.value})},e.clearSearch=function(){e.setState({search:""})},e.state={search:"",activeView:"Visited"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;"explore"===this.props.match.url.split("/")[1]&&"cities"===this.props.match.url.split("/")[2]?this.setActiveView("Explore Cities"):"explore"===this.props.match.url.split("/")[1]&&"people"===this.props.match.url.split("/")[2]?this.setActiveView("Explore People"):"places"===this.props.match.url.split("/")[1]?(this.setActiveView("Destination"),fetch("http://localhost:3333/api/v1/destinations-by-city/".concat(this.props.match.url.slice(8)),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){if(e.ok)return e.json();throw e}).then(function(t){e.props.setDestination(t)}).catch(function(t){return t.json().then(function(t){e.props.history.push("/404")})})):(this.setActiveView("Visited"),fetch("http://localhost:3333/api/v1/other-users-by-username/".concat(this.props.match.url.slice(1)),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){if(e.ok)return e.json();throw e}).then(function(t){e.props.setOtherUser(t)}).catch(function(t){return t.json().then(function(t){e.props.history.push("/404")})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui very padded grid"},r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"ui row"},r.a.createElement(N,Object.assign({},this.props,{setActiveView:this.setActiveView,search:this.state.search,onChangeSearch:this.onChangeSearch}))),r.a.createElement("div",{className:"row"},r.a.createElement(k,Object.assign({},this.props,{activeView:this.state.activeView,setActiveView:this.setActiveView}))),r.a.createElement("div",{className:"row"},r.a.createElement(C,Object.assign({},this.props,{activeView:this.state.activeView,setActiveView:this.setActiveView,search:this.state.search,clearSearch:this.clearSearch}))))}}]),t}(r.a.Component),I=Object(v.b)(function(e){return{user:e.user,avatar_url:e.avatar_url,user_visited_destinations:e.user_visited_destinations,user_saved_destinations:e.user_saved_destinations,user_followers:e.user_followers,user_following:e.user_following,more_destinations:e.more_destinations,more_users:e.more_users,user_destinations:e.user_destinations,follows:e.follows,other_user:e.other_user,other_avatar_url:e.other_avatar_url,other_user_visited_destinations:e.other_user_visited_destinations,other_user_saved_destinations:e.other_user_saved_destinations,other_user_followers:e.other_user_followers,other_user_following:e.other_user_following,destination:e.destination,photo_url:e.photo_url,users_visited:e.users_visited,users_saved:e.users_saved}},function(e){return{setOtherUser:function(t){return e({type:"SET_OTHER_USER",data:t})},setDestination:function(t){return e({type:"SET_DESTINATION",data:t})},clearState:function(){return e({type:"CLEAR_STATE"})}}})(F),V=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&(fetch("http://localhost:3333/api/v1/users/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(t){return e.props.setUser(t)}),fetch("http://localhost:3333/api/v1/user_destinations",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(t){return e.props.setUserDestinations(t)}),fetch("http://localhost:3333/api/v1/follows",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.json()}).then(function(t){return e.props.setFollows(t)}))}},{key:"render",value:function(){return console.log("App: PUBLIC_URL =>","/hello-world-app-frontend"),r.a.createElement(p.a,{basename:"/hello-world-app-frontend"},r.a.createElement(m.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(E,{exact:!0,path:"/explore/cities",component:I}),r.a.createElement(E,{exact:!0,path:"/explore/people",component:I}),r.a.createElement(E,{exact:!0,path:"/places/:city",component:I}),r.a.createElement(E,{exact:!0,path:"/404",component:y}),r.a.createElement(E,{exact:!0,path:"/:username",component:I}),r.a.createElement(_.a,{from:"*",to:"/"})))}}]),t}(n.Component),U=Object(v.b)(function(e){return{user:e.user}},function(e){return{setUser:function(t){return e({type:"SET_USER",data:t})},setUserDestinations:function(t){return e({type:"SET_USER_DESTINATIONS",data:t})},setFollows:function(t){return e({type:"SET_FOLLOWS",data:t})}}})(V),x=a(2);var M=a(14),R=Object(M.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{},avatar_url:"",user_visited_destinations:[],user_saved_destinations:[],more_destinations:[],user_followers:[],user_following:[],more_users:[],user_destinations:[],follows:[],other_user:{},other_avatar_url:"",other_user_visited_destinations:[],other_user_saved_destinations:[],other_user_followers:[],other_user_following:[],destination:{},photo_url:"",users_visited:[],users_saved:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DESTINATION":return Object(x.a)({},e,{destination:t.data.destination,photo_url:t.data.photo_url,users_visited:t.data.users_visited,users_saved:t.data.users_saved});case"SET_USER":return Object(x.a)({},e,{user:t.data.user,avatar_url:t.data.avatar_url,user_visited_destinations:t.data.visited_destinations,user_saved_destinations:t.data.saved_destinations,more_destinations:t.data.more_destinations,user_followers:t.data.followers,user_following:t.data.following,more_users:t.data.more_users});case"SET_USER_DESTINATIONS":return Object(x.a)({},e,{user_destinations:t.data.user_destinations});case"SET_FOLLOWS":return Object(x.a)({},e,{follows:t.data.follows});case"ADD_VISITED_DESTINATION":return Object(x.a)({},e,{user_visited_destinations:[].concat(Object(T.a)(e.user_visited_destinations),[t.destination]),more_destinations:e.more_destinations.filter(function(e){return e.id!==t.destination.id})});case"ADD_SAVED_DESTINATION":return Object(x.a)({},e,{user_saved_destinations:[].concat(Object(T.a)(e.user_saved_destinations),[t.destination]),more_destinations:e.more_destinations.filter(function(e){return e.id!==t.destination.id})});case"DELETE_FROM_VISITED_DESTINATIONS":return Object(x.a)({},e,{user_visited_destinations:e.user_visited_destinations.filter(function(e){return e.id!==t.destination.id}),other_user_visited_destinations:e.other_user_visited_destinations.filter(function(e){return e.id!==t.destination.id}),more_destinations:[].concat(Object(T.a)(e.more_destinations),[t.destination])});case"DELETE_FROM_SAVED_DESTINATIONS":return Object(x.a)({},e,{user_saved_destinations:e.user_saved_destinations.filter(function(e){return e.id!==t.destination.id}),more_destinations:[].concat(Object(T.a)(e.more_destinations),[t.destination])});case"PATCH_FROM_VISITED_DESTINATIONS":return Object(x.a)({},e,{user_visited_destinations:e.user_visited_destinations.filter(function(e){return e.id!==t.destination.id}),user_saved_destinations:[].concat(Object(T.a)(e.user_saved_destinations),[t.destination])});case"PATCH_FROM_SAVED_DESTINATIONS":return Object(x.a)({},e,{user_saved_destinations:e.user_saved_destinations.filter(function(e){return e.id!==t.destination.id}),user_visited_destinations:[].concat(Object(T.a)(e.user_visited_destinations),[t.destination])});case"ADD_FOLLOWING":return Object(x.a)({},e,{user_following:[].concat(Object(T.a)(e.user_following),[t.user]),more_users:e.more_users.filter(function(e){return e.id!==t.user.id})});case"ADD_OTHER_FOLLOWING":return Object(x.a)({},e,{other_user_following:[].concat(Object(T.a)(e.other_user_following),[t.user])});case"DELETE_FROM_FOLLOWING":return Object(x.a)({},e,{user_following:e.user_following.filter(function(e){return e.id!==t.user.id}),more_users:[].concat(Object(T.a)(e.more_users),[t.user])});case"DELETE_FROM_OTHER_FOLLOWING":return Object(x.a)({},e,{other_user_following:e.other_user_following.filter(function(e){return e.id!==t.user.id})});case"DELETE_FROM_FOLLOWERS":return Object(x.a)({},e,{user_followers:e.user_followers.filter(function(e){return e.id!==t.user.id})});case"SET_OTHER_USER":return Object(x.a)({},e,{other_user:t.data.user,other_avatar_url:t.data.avatar_url,other_user_visited_destinations:t.data.visited_destinations,other_user_saved_destinations:t.data.saved_destinations,other_user_followers:t.data.followers,other_user_following:t.data.following});case"ADD_USER_DESTINATION":return Object(x.a)({},e,{user_destinations:[].concat(Object(T.a)(e.user_destinations),[t.data.user_destination])});case"ADD_FOLLOW":return Object(x.a)({},e,{follows:[].concat(Object(T.a)(e.follows),[t.data.follow])});case"DELETE_FROM_USER_DESTINATIONS":return Object(x.a)({},e,{user_destinations:e.user_destinations.filter(function(e){return e.id!==t.userDestination.id})});case"DELETE_FROM_FOLLOWS":return Object(x.a)({},e,{follows:e.follows.filter(function(e){return e.id!==t.follow.id})});case"UPDATE_USER_DESTINATIONS":return Object(x.a)({},e,{user_destinations:[].concat(Object(T.a)(e.user_destinations.filter(function(e){return e.id!==t.userDestination.id})),[Object(x.a)({},t.userDestination,{visited:!t.userDestination.visited})])});case"SET_AVATAR_URL":return Object(x.a)({},e,{avatar_url:t.avatar_url});case"CLEAR_STATE":return{user:{},avatar_url:"",user_visited_destinations:[],user_saved_destinations:[],more_destinations:[],user_followers:[],user_following:[],more_users:[],user_destinations:[],follows:[],other_user:{},other_avatar_url:"",other_user_visited_destinations:[],other_user_saved_destinations:[],other_user_followers:[],other_user_following:[],destination:{},photo_url:"",users_visited:[],users_saved:[]};default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(v.a,{store:R},r.a.createElement(U,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a629c6a4.chunk.js.map