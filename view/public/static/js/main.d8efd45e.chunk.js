(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(239)},238:function(e,t){e.exports={GOOGLE_CLIENTID:"461114790135-uqibl32l9f2fps35en1asdl45qkmafo2.apps.googleusercontent.com",MONGODB_URL:"http://localhost:3030"}},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(55),o=a.n(c),s=a(12),l=a(6),i=a(111),u=a(30),m=a(7),p=a(8),d=a(10),h=a(9),E=a(11),f=a(19),b=Object(f.a)(),v=a(26),g=a(5),y=a.n(g),N=a(18),O=a(112),S=a.n(O).a.create({baseURL:"http://pagame.kbvapps.com:3000/",headers:{"Content-Type":"application/json"}}),w=a(14),j=a.n(w),x=function(e){return function(){var t=Object(N.a)(y.a.mark(function t(a){var n,r,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.post("/users/gauth",{email:e.currentUser.get().getBasicProfile().getEmail()});case 2:n=t.sent,r=e.currentUser.get().getBasicProfile(),n?(c={userId:r.getId(),fullName:r.getName(),email:r.getEmail()},a({type:"SIGN_IN",payload:c,instance:e}),b.push("/")):j()("Authentication Error","There was an error when trying to Log in please try again.","warning");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(N.a)(y.a.mark(function t(a){var n,r,c;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.post("/users/auth",Object(v.a)({},e));case 2:n=t.sent,r=n.data,n.data.fullName?(c={fullName:r.fullName,email:r.email},a({type:"SIGN_IN",payload:c,instance:null}),b.push("/")):j()("Not found",n.data,"warning");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(N.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/users/logout");case 2:t({type:"SIGN_OUT"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C=a(241),_=a(240),P=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t="field ".concat(e.meta.error&&e.meta.touched?"error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.label),r.a.createElement("input",e.input),a.renderError(e.meta))},a.onExpenseSubmit=function(e){a.props.onSubmit(e)},a.onExpenseRequest=function(){},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onExpenseSubmit),className:"ui form error"},r.a.createElement(C.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement(C.a,{name:"amount",component:this.renderInput,label:"Enter Amount"}),r.a.createElement("button",{className:"ui button primary"},"Add to my history")))}}]),t}(r.a.Component),A=Object(_.a)({form:"expense form",validate:function(e){var t={};return e.description||(t.description="You must enter a description"),e.amount||(t.amount="You must enter an amount"),e.requestee||(t.requestee="You must enter an amount"),t}})(P),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={errors:{}},a.renderInput=function(e){var t="field ".concat(e.meta.error&&e.meta.touched?"error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.label),r.a.createElement("input",Object.assign({},e.input,{type:e.type})),a.renderError(e.meta))},a.onExpenseSubmit=function(){var e=Object(N.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/users/".concat(t.requestee));case 2:(n=e.sent).data.email?a.props.onSubmit(t):j()("Email not found",n.data,"warning");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onExpenseSubmit),className:"ui form error"},r.a.createElement(C.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement(C.a,{name:"amount",component:this.renderInput,label:"Enter Amount"}),r.a.createElement(C.a,{name:"requestee",type:"email",component:this.renderInput,label:"Enter Requestee email"}),r.a.createElement("button",{className:"ui positive button"},"Submit Request")))}}]),t}(r.a.Component),T=Object(_.a)({form:"expense form",validate:function(e){var t={};return e.description||(t.description="You must enter a description"),e.amount||(t.amount="You must enter an amount"),e.requestee||(t.requestee="You must enter the requestee email address"),t}})(q),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.requestee?a.props.createExpense(e):(e.requestee=a.props.usrProfile.email,a.props.createExpense(e))},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){!0!==this.props.isSignedIn&&b.push("/login")}},{key:"render",value:function(){return"/expense/add"===this.props.location.pathname?r.a.createElement("div",null,r.a.createElement("h3",null,"Add an Expense"),r.a.createElement(A,{onSubmit:this.onSubmit})):r.a.createElement("div",null,r.a.createElement("h3",null,"Request an Expense"),r.a.createElement(T,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),L=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn,usrProfile:e.auth.usrProfile}},{createExpense:function(e){return function(){var t=Object(N.a)(y.a.mark(function t(a,n){var r,c,o,s;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.amount=e.amount.replace("$",""),r=new Date,c=n().auth.usrProfile.userId,o=n().auth.usrProfile.email,t.next=6,S.post("/expenses/create",Object(v.a)({},e,{requestor:o,userId:c,date:r}));case 6:s=t.sent,a({type:"CREATE_EXPENSE",payload:s.data}),b.push("/");case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}})(D),M=a(22),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){!0===a.props.isSignedIn?0===a.props.expenses.length&&a.props.fetchExpenses(a.props.usrProfile.email):b.push("/login")},a.handleExpenseDelete=function(e){j()({title:"Are you sure?",text:"This will permanenlty delete the record",icon:"warning",buttons:["cancel","Yes"],dangerMode:!0}).then(function(t){t&&a.props.deleteExpense(e,a.props.usrProfile.email)})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.expenses.map(function(t){var a=new Date(t.date),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()]+"/"+a.getDate()+"/"+a.getFullYear();return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,r.a.createElement("h4",null,"$",t.amount)),r.a.createElement("td",null,n),r.a.createElement("td",null,t.requestor),r.a.createElement("td",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-12"},r.a.createElement("p",null,t.requestee)),r.a.createElement("div",{className:"col-lg-4 col-md-12"},r.a.createElement("button",{onClick:function(){e.handleExpenseDelete(t._id)},className:"mini ui inverted red button",style:{float:"right"}},"Delete")))))})}},{key:"renderCreateBtn",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right",marginBottom:"15px"}},r.a.createElement("div",{className:"ui buttons"},r.a.createElement(M.a,{to:"/expense/add",className:"ui  button primary"},"Add Expense"),r.a.createElement("div",{className:"or"}),r.a.createElement(M.a,{to:"/expense/request",className:"ui positive button"},"Request Expense")))}},{key:"renderWelcome",value:function(){return 0===this.props.expenses.length?r.a.createElement("div",{className:"ui floating message",style:{marginTop:"10px"}},r.a.createElement("i",{onClick:this.onBannerClose,className:"close icon"}),r.a.createElement("div",{className:"header"},"Welcome to PagaMe!..."),"Add notes of expenses you would like to keep track of or request one from another PagaMe user."):null}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderWelcome(),r.a.createElement("h2",null,"Expenses History"),r.a.createElement("table",{className:"ui celled padded table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Requestor"),r.a.createElement("th",null,"Requestee"))),r.a.createElement("tbody",null,this.renderList())),r.a.createElement("div",null,this.renderCreateBtn()))}}]),t}(r.a.Component),R=Object(s.b)(function(e){return{expenses:Object.values(e.expenses),usrProfile:e.auth.usrProfile,isSignedIn:e.auth.isSignedIn}},{fetchExpenses:function(e){return function(){var t=Object(N.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get("/expenses/".concat(e,"/all"));case 2:n=t.sent,a({type:"FETCH_EXPENSES",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteExpense:function(e){return function(){var t=Object(N.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.delete("/expenses/".concat(e,"/delete"));case 3:n=t.sent,a({type:"DELETE_EXPENSE",payload:n.data._id}),j()("Successfully Deleted!",{icon:"success"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),j()("Error while trying to delete",{icon:"error"});case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}})(U),G=a(238),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?a.props.signIn(a.authInstance):b.push("/login")},a.onSignInClick=function(){a.authInstance.signIn()},a.onSignOutClick=function(){a.authInstance.signOut()},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:G.GOOGLE_CLIENTID,scope:"profile"}).then(function(){e.authInstance=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.authInstance.isSignedIn.get()),e.authInstance.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return!0!==this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google"):r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),X=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:x,signOut:k})(B),Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t="ui labeled input ".concat(e.meta.error&&e.meta.touched?"error":""),n=e.placeholder,c=e.type,o=e.icon,s="".concat(o," icon");return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"ui label"},r.a.createElement("i",{className:s})),r.a.createElement("input",Object.assign({type:c,placeholder:n},e.input)),a.renderError(e.meta))},a.onLoginSubmit=function(e){a.props.onSubmit(e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t)))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"Log-in to your account")),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onLoginSubmit),className:"ui form error"},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"email",type:"email",icon:"user",component:this.renderInput,placeholder:"E-mail address"})),r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"password",type:"password",icon:"lock",component:this.renderInput,placeholder:"Password"}))),r.a.createElement("button",{className:"ui fluid large teal submit button"},"Login")),r.a.createElement("div",{className:"ui message"},"Don't have an account? ",r.a.createElement(M.a,{to:"/signup"}," Sign Up")),r.a.createElement("div",{className:"ui horizontal divider"},"Or"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(X,null)))}}]),t}(r.a.Component),H=Object(_.a)({form:"login form",validate:function(e){var t={};return e.email||(t.email="*"),e.password||(t.password="*"),t}})(Y),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.authUser(e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-md-center",style:{marginTop:"20px"}},r.a.createElement("div",{className:"col-md-8 col-sm-10 col-xs-12"},r.a.createElement(H,{onSubmit:this.onSubmit})))}}]),t}(r.a.Component),F=Object(s.b)(function(e){return{usrProfile:e.auth.usrProfile,isSignedIn:e.auth.isSignedIn}},{signIn:x,authUser:I})(W),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t="ui labeled input ".concat(e.meta.error&&e.meta.touched?"error":""),n=e.placeholder,c=e.type,o=e.icon,s="".concat(o," icon");return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"ui label"},r.a.createElement("i",{className:s})),r.a.createElement("input",Object.assign({type:c,placeholder:n},e.input)),a.renderError(e.meta))},a.onSubmit=function(){var e=Object(N.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/users/".concat(t.email));case 3:e.sent.data.email?j()("Account already exists","The email entered is already associated with an account","warning"):a.props.onSubmit(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j()("Sorry","There was a problem when trying to create your account","warning");case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t)))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"Create an account")),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui large form error"},r.a.createElement("div",{className:"ui stacked segment"},r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"fullName",type:"text",icon:"user",component:this.renderInput,placeholder:"Full Name"})),r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"email",type:"email",icon:"mail",component:this.renderInput,placeholder:"E-mail address"})),r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"password",type:"password",icon:"lock",component:this.renderInput,placeholder:"Password"})),r.a.createElement("div",{className:"field"},r.a.createElement(C.a,{name:"re_password",type:"password",icon:"lock",component:this.renderInput,placeholder:"Confirm your password"}))),r.a.createElement("button",{className:"ui fluid large teal submit button"},"Sign up")))}}]),t}(r.a.Component),$=Object(_.a)({form:"login form",validate:function(e){var t={};return e.fullName||(t.fullName="*"),e.email||(t.email="*"),e.password||(t.password="*"),e.re_password||(t.re_password="*"),e.password!==e.re_password&&(t.re_password="Password confirmation does not match"),t}})(J),z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(){var e=Object(N.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.re_password&&delete t.re_password,e.prev=1,e.next=4,S.post("/users/create",Object(v.a)({},t));case 4:"error"===(n=e.sent).data?j()("Sorry","Unable to create account","error"):(j()("Welcome to PagaMe","Your account has been created successfully","success"),a.props.authUser(n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),j()("Sorry","Unable to create account","error");case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){!0===this.props.isSignedIn&&b.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-md-center",style:{marginTop:"20px"}},r.a.createElement("div",{className:"col-md-8 col-sm-10 col-xs-12"},r.a.createElement($,{onSubmit:this.onSubmit})))}}]),t}(r.a.Component),K=Object(s.b)(function(e){return{usrProfile:e.auth.usrProfile,isSignedIn:e.auth.isSignedIn}},{authUser:I})(z),V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSignOutClick=function(){a.props.signOut(),a.props.authInstance?a.props.authInstance.signOut():b.push("/login")},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderCollapseMenu",value:function(){return this.props.isSignedIn?r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})):null}},{key:"renderLoggedNav",value:function(){return this.props.isSignedIn?r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("h5",{className:"nav-link"},r.a.createElement(M.a,{to:"/"},"Home"))),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("h5",{className:"nav-link"},r.a.createElement(M.a,{to:"/expense/add"},"Add Expense"))),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("h5",{className:"nav-link"},r.a.createElement(M.a,{to:"/expense/request"},"Request Expense")))),r.a.createElement("div",{className:"ui divider"}),r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui teal google button"},"Sign out")):null}},{key:"renderHeader",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg border-bottom bg-white fixed-top shadow-sm justify-content-between navbar-light"},r.a.createElement(M.a,{to:"/"},r.a.createElement("h3",{className:"navbar-brand"},"PagaMe")),this.renderCollapseMenu(),this.renderLoggedNav()))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"70px"}},this.renderHeader())}}]),t}(r.a.Component),Q=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn,authInstance:e.auth.instance}},{signOut:k})(V),Z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{history:b},r.a.createElement("div",{className:"row"},r.a.createElement(Q,null)),r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/login",exact:!0,component:F}),r.a.createElement(u.a,{path:"/signup",exact:!0,component:K}),r.a.createElement(u.a,{path:"/",exact:!0,component:R}),r.a.createElement(u.a,{path:"/expense/add",exact:!0,component:L}),r.a.createElement(u.a,{path:"/expense/request",exact:!0,component:L}),r.a.createElement(u.a,{component:R})))))},ee=a(242),te={isSignedIn:null,usrProfile:null,instance:null},ae=a(42),ne=a(77),re=a.n(ne),ce={},oe=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{isSignedIn:!0,usrProfile:t.payload,instance:t.instance};case"SIGN_OUT":return{isSignedIn:null,usrProfile:null,instance:null};default:return e}},form:ee.a,expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EXPENSE":return Object(v.a)({},e,Object(ae.a)({},t.payload._id,t.payload));case"FETCH_EXPENSES":return Object(v.a)({},re.a.mapKeys(t.payload,"_id"));case"FETCH_EXPENSE":return Object(v.a)({},e,Object(ae.a)({},t.payload._id,t.payload));case"DELETE_EXPENSE":return re.a.omit(e,t.payload);default:return e}}}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,le=Object(l.e)(function(e,t){return"SIGN_OUT"===t.type?oe(void 0,t):oe(e,t)},se(Object(l.a)(i.a)));o.a.render(r.a.createElement(s.a,{store:le},r.a.createElement(Z,null)),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.d8efd45e.chunk.js.map