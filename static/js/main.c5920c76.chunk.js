(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Cswo",Modal:"Modal_Modal__39JBl"}},13:function(e,t,a){e.exports={Loader:"Loader_Loader__2YwpB"}},24:function(e,t,a){e.exports={Button:"Button_Button__8YqnQ"}},26:function(e,t,a){e.exports={App:"App_App__3OiHS"}},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(10),c=a.n(o),s=a(15),l=a(4),i=a(5),u=a(7),h=a(6),m=a(8),d=a.n(m),g=a(0),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){var a=t.currentTarget;e.setState({query:a.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query,t=this.handleChange,a=this.handleSubmit;return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:a,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:t})]})})}}]),a}(r.Component),b=a(9),j=a.n(b),y=function(e){var t=e.webformatURL,a=e.onClick,r=e.largeImg;return Object(g.jsx)("li",{className:j.a.ImageGalleryItem,onClick:a,children:Object(g.jsx)("img",{src:t,alt:"#","data-src":r,className:j.a.ImageGalleryItemImage})})},f=function(e){var t=e.onClick,a=e.images;return Object(g.jsx)("ul",{className:j.a.ImageGallery,children:a.map((function(e){var a=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(g.jsx)(y,{onClick:t,webformatURL:r,largeImg:n},a)}))})},v=a(24),O=a.n(v),_=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:O.a.Button,onClick:t,children:"Load more"})},S=a(12),I=a.n(S),x=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props.largeImg;return Object(o.createPortal)(Object(g.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:I.a.Modal,children:Object(g.jsx)("img",{src:e,alt:"#"})})}),x)}}]),a}(r.Component),C=a(25),k=a.n(C),L=a(13),B=a.n(L),M=(a(52),function(){return Object(g.jsx)("div",{className:B.a.Loader,children:Object(g.jsx)(k.a,{style:B.a,type:"ThreeDots",color:"#3f51b5",height:100,width:100})})}),F=a(14),N=a.n(F);N.a.defaults.baseURL="https://pixabay.com/api";var G=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,o="/?q=".concat(a,"&page=").concat(n,"&key=").concat("12522641-80de9d05059a5e43399a2205e","&image_type=photo&orientation=horizontal&per_page=12");return N.a.get(o).then((function(e){return e.data.hits}))},Q=a(26),q=a.n(Q),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],showModal:!1,currentPage:1,searchQuery:"",largeImg:"",isLoading:!1,error:null},e.onOpenModal=function(t){var a=t.target.dataset.src;e.setState({showModal:!0,largeImg:a})},e.onCloseModal=function(){e.setState({showModal:!1})},e.onChangeQuery=function(t){e.setState({images:[],searchQuery:t,currentPage:1,error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,r={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),G(r).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+=1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchQuery;t.searchQuery!==a&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,r=e.isLoading,n=e.largeImg,o=this.onOpenModal,c=this.onCloseModal,s=this.onChangeQuery,l=this.fetchImages;return Object(g.jsxs)("div",{className:q.a.App,children:[Object(g.jsx)(p,{onSubmit:s}),!r&&Object(g.jsx)(f,{onClick:o,images:t}),t.length>0&&!r&&Object(g.jsx)(_,{onClick:l}),r&&Object(g.jsx)(M,{}),a&&Object(g.jsx)(w,{onClose:c,largeImg:n})]})}}]),a}(r.Component);a(71),a(72);c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3nQy1",SearchForm:"Searchbar_SearchForm__7qzTZ",SearchFormButton:"Searchbar_SearchFormButton__1io0P",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1B1-D",SearchFormInput:"Searchbar_SearchFormInput__2JWup"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2gxpA",ImageGalleryItem:"ImageGallery_ImageGalleryItem__2C9cJ",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__bvQ9A"}}},[[73,1,2]]]);
//# sourceMappingURL=main.c5920c76.chunk.js.map