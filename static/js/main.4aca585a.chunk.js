(this["webpackJsonpsuper-react-bros"]=this["webpackJsonpsuper-react-bros"]||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(2),s=(a(22),a(23),a(3)),l=a(1),u=a(5);function b(e,t){return String(e).padStart(t,"0")}function E(e){var t=e||"silent";"silent"!==t&&(console.log('NoiseMaker() ran: "'.concat(t,'.mp3"')),new Audio("/".concat(t,".mp3")).play())}var m={brother:"mario",super:!1,fire:!1,invincible:!1,starManTimer:0,alive:!0,inPlay:!0,helpVisible:!1,points:"000000",lives:3,coins:0,timer:400,buttonDepressed:{buttonMushroom:!1,buttonFire:!1,buttonCoin:!1,buttonStar:!1,buttonEnemy:!1,buttonOneUp:!1,buttonBrosToggle:!1,buttonQuestion:!1},actionButtonDepressed:{buttonJump:!1,buttonFire:!1},dPad:"d-right"};var p=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch("DECREMENT_TIMER"!==t.type&&"DECREMENT_STARMANTIMER"!==t.type&&console.log("reducer() ran ".concat(t.type)),t.type){case"INCREMENT_LIVES":return Object(l.a)(Object(l.a)({},e),{},{lives:e.lives+1});case"DECREMENT_LIVES":return Object(l.a)(Object(l.a)({},e),{},{lives:e.lives-1});case"START_NEW_LIFE":return Object(l.a)(Object(l.a)({},e),{},{alive:!0,invincible:!1,starManTimer:0,super:!1,fire:!1,timer:400});case"MAKE_SUPER":return Object(l.a)(Object(l.a)({},e),{},{super:!0,points:b(parseInt(e.points)+1e3,6)});case"MAKE_FIRE":return Object(l.a)(Object(l.a)({},e),{},{fire:!0,super:!0,points:b(parseInt(e.points)+1e3,6)});case"MAKE_INVINCIBLE":return Object(l.a)(Object(l.a)({},e),{},{invincible:!0,starManTimer:10,points:b(parseInt(e.points)+1e3,6)});case"END_INVINCIBLE":return Object(l.a)(Object(l.a)({},e),{},{invincible:!1,starManTimer:0});case"MAKE_SMALL":return Object(l.a)(Object(l.a)({},e),{},{super:!1});case"LOSE_FIRE":return Object(l.a)(Object(l.a)({},e),{},{fire:!1,super:!1});case"LOSE_LIFE":return Object(l.a)(Object(l.a)({},e),{},{alive:!1,lives:e.lives-1});case"SELECT_MARIO":return Object(l.a)(Object(l.a)({},e),{},{brother:"mario"});case"SELECT_LUIGI":return Object(l.a)(Object(l.a)({},e),{},{brother:"luigi"});case"ADD_COIN":return Object(l.a)(Object(l.a)({},e),{},{coins:e.coins+1,points:b(parseInt(e.points)+200,6)});case"RESET_100_COINS":return Object(l.a)(Object(l.a)({},e),{},{coins:0,lives:e.lives+1});case"RESET_GAME":return Object(l.a)(Object(l.a)({},m),{},{brother:e.brother});case"RESET_TIMER":return Object(l.a)(Object(l.a)({},m),{},{timer:400});case"RESET_STARMANTIMER":return Object(l.a)(Object(l.a)({},e),{},{starManTimer:0});case"DECREMENT_TIMER":return Object(l.a)(Object(l.a)({},e),{},{timer:e.timer-1});case"DECREMENT_STARMANTIMER":return Object(l.a)(Object(l.a)({},e),{},{starManTimer:e.starManTimer-1});case"SHOW_DEATH_SCREEN":return Object(l.a)(Object(l.a)({},e),{},{inPlay:!1});case"HIDE_DEATH_SCREEN":return Object(l.a)(Object(l.a)({},e),{},{inPlay:!0});case"SHOW_HELP":return Object(l.a)(Object(l.a)({},e),{},{helpVisible:!0});case"DEPRESS_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{buttonDepressed:Object(l.a)(Object(l.a)({},e.buttonDepressed),{},Object(s.a)({},t.payload,!0))});case"UNPRESS_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{buttonDepressed:Object(l.a)(Object(l.a)({},e.buttonDepressed),{},Object(s.a)({},t.payload,!1))});case"DEPRESS_ACTION_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{actionButtonDepressed:Object(l.a)(Object(l.a)({},e.actionButtonDepressed),{},Object(s.a)({},t.payload,!0))});case"UNPRESS_ACTION_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{actionButtonDepressed:Object(l.a)(Object(l.a)({},e.actionButtonDepressed),{},Object(s.a)({},t.payload,!1))});case"UPDATE_DPAD":return Object(l.a)(Object(l.a)({},e),{},{dPad:t.payload});default:return console.log("".concat(t.type," is an invalid reducer action.")),e}}));console.log("created",p.getState());var d,O,N=p;function v(){console.log("StartTimer() ran"),d=setInterval((function(){var e=N.getState();101===e.timer&&E("time-warning"),1===e.timer?(console.log("StopTimer() ran"),clearInterval(d),S(),N.dispatch({type:"DECREMENT_TIMER"}),N.dispatch({type:"LOSE_LIFE"}),E("death"),f()):N.dispatch({type:"DECREMENT_TIMER"})}),420)}function S(){console.log("StopStarManTimer() ran"),clearInterval(O)}function T(){console.log("StopAllTimers() ran"),clearInterval(d),clearInterval(O)}function f(){console.log("ManageDeathScreen() ran");var e=N.getState();setTimeout((function(){N.dispatch({type:"SHOW_DEATH_SCREEN"}),0===e.lives&&E("game-over"),e.lives>0&&setTimeout((function(){N.dispatch({type:"START_NEW_LIFE"}),N.dispatch({type:"HIDE_DEATH_SCREEN"}),v()}),3e3)}),2e3)}function _(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e}));Object(n.useEffect)((function(){v()}),[]);var a=r.a.createElement("div",null," ",t.brother.toUpperCase(),r.a.createElement("span",{className:"small-spacer"},"\xd7"),t.lives," "),c=function(){return r.a.createElement("div",null," ",t.points," ")},o=function(){return r.a.createElement("div",{className:"coin-counter"},r.a.createElement("div",{className:"mini-coin-sprite"}),"\xd7",function(){var a=b(t.coins,2);return t.coins>99&&(E("1up"),e({type:"RESET_100_COINS"})),a}())},s=function(){return r.a.createElement("div",null," TIME ",r.a.createElement("br",null),b(t.timer,3))};return r.a.createElement("div",null,r.a.createElement("div",{className:"scoreboard row"},r.a.createElement("div",{className:"sb-col-01"},a,r.a.createElement(c,null)),r.a.createElement("div",{className:"sb-col-02"},r.a.createElement(o,null)),r.a.createElement("div",{className:"sb-col-03"},r.a.createElement(s,null))))}function j(){Object(i.b)();var e=Object(i.c)((function(e){return e})),t="Render-brother ";switch(!0){case e.alive&&e.invincible:t+=e.super?"invincible-super":"invincible";break;case e.alive&&"mario"===e.brother:e.fire?t+="fire":t+=e.super?"mario-super":"mario";break;case e.alive&&"luigi"===e.brother:e.fire?t+="fire":t+=e.super?"luigi-super":"luigi";break;default:switch(!0){case 0===e.timer&&e.fire:t+="fire-dead",console.log("Timer ran out while Mario-Luigi was Fire");break;case 0===e.timer:console.log("Timer ran out"),"luigi"===e.brother?t+="luigi-dead":t+="mario-dead";break;case"luigi"===e.brother:t+="luigi-dead";break;default:t+="mario-dead"}}return r.a.createElement("div",{className:"mario-container"}," ",r.a.createElement("div",{className:t})," ")}function g(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a="message-holder ",n="",c="button-restart ",o=function(t){var n=t.message;return r.a.createElement("div",{className:a}," ",r.a.createElement("div",{className:"message-contents"},n,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:c,onClick:function(){return e({type:"RESET_GAME"}),T(),void v()}},"TRY AGAIN ?"))," ")};return t.inPlay||(a+="death-screen"),t.alive||(0===t.timer?(n=0===t.lives?"GAME OVER":"TIME UP",c+=0===t.lives?"show-button":""):(n=0===t.lives?"GAME OVER":"luigi"===t.brother?"LUIGI \xd7 "+t.lives:"MARIO \xd7 "+t.lives,c+=0===t.lives?"show-button":"")),r.a.createElement(o,{message:n})}function I(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a={buttonMushroom:"item-button button-mushroom ",buttonFire:"item-button button-fire ",buttonStar:"item-button button-starman ",buttonStarSpan:"",buttonEnemy:"item-button button-enemy ",buttonCoin:"item-button button-coin ",buttonOneUp:"item-button button-oneup ",buttonBrosToggle:"item-button button-bros-toggle ",buttonBrosSpan:"",buttonQuestion:"item-button button-question "};switch(!0){case t.invincible:a.buttonStar+="show-star-countdown ",a.buttonStarSpan+="flicker-star ";break;default:a.buttonStar+="hide-star-countdown "}switch(!0){case"luigi"===t.brother:a.buttonBrosSpan+="toggle-mario";break;default:a.buttonBrosSpan+="toggle-luigi"}Object.keys(t.buttonDepressed).forEach((function(e){switch(!0){case t.buttonDepressed[e]:a[e]+="depressed ";break;default:a[e]=a[e].replace("depressed ","")}}));var n=function(){e({type:"MAKE_INVINCIBLE"}),S(),console.log("StartStarManTimer() ran"),O=setInterval((function(){1===N.getState().starManTimer?(S(),N.dispatch({type:"END_INVINCIBLE"})):N.dispatch({type:"DECREMENT_STARMANTIMER"})}),1e3)},c=function(t){e({type:"DEPRESS_BUTTON",payload:"".concat(t)}),setTimeout((function(){e({type:"UNPRESS_BUTTON",payload:"".concat(t)})}),400)},o=r.a.createElement("button",{className:a.buttonMushroom,onClick:function(){e({type:"MAKE_SUPER"}),E("power-up"),c("buttonMushroom")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",null)),s=r.a.createElement("button",{className:a.buttonStar,onClick:function(){n(),E("power-up"),c("buttonStar")}}," ",t.starManTimer," ",r.a.createElement("span",{className:a.buttonStarSpan})),l=r.a.createElement("button",{className:a.buttonEnemy,onClick:function(){!function(){switch(!0){case t.invincible:break;case t.fire:e({type:"LOSE_FIRE"}),E("shrink");break;case t.super:e({type:"MAKE_SMALL"}),E("shrink");break;default:T(),e({type:"LOSE_LIFE"}),E("death"),f()}}(),c("buttonEnemy")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",{className:"walk-enemy"})),u=r.a.createElement("button",{className:a.buttonFire,onClick:function(){!function(){switch(t.super){case!0:e({type:"MAKE_FIRE"});break;default:e({type:"MAKE_SUPER"})}}(),E("power-up"),c("buttonFire")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",null)),b=r.a.createElement("button",{className:a.buttonCoin,onClick:function(){e({type:"ADD_COIN"}),t.coins<99&&E("coin"),c("buttonCoin")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",{className:"glow-coin"})),m=r.a.createElement("button",{className:a.buttonOneUp,onClick:function(){e({type:"INCREMENT_LIVES"}),E("1up"),c("buttonOneUp")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",null)),p=r.a.createElement("button",{className:a.buttonBrosToggle,onClick:function(){"mario"===t.brother?e({type:"SELECT_LUIGI"}):e({type:"SELECT_MARIO"}),c("buttonBrosToggle")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",{className:a.buttonBrosSpan})),d=r.a.createElement("button",{className:a.buttonQuestion,onClick:function(){e({type:"SHOW_HELP"}),E("pause"),c("buttonQuestion")}},r.a.createElement("div",{className:"align-me"},"_"),r.a.createElement("span",null));return r.a.createElement("div",{className:"item-button-container"}," ",o," ",u," ",s," ",l," ",b," ",m," ",p," ",d," ")}function h(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a=function(t){e({type:"DEPRESS_ACTION_BUTTON",payload:t}),setTimeout((function(){e({type:"UNPRESS_ACTION_BUTTON",payload:t})}),400)},n=function(t){e({type:"UPDATE_DPAD",payload:t})},c=r.a.createElement("button",{className:"button-action action-stop "+t.dPad,onClick:function(){e({type:"SHOW_HELP"}),n("d-stop")}},"\u2666"),o=r.a.createElement("button",{className:"button-action action-left "+t.dPad,onClick:function(){e({type:"SHOW_HELP"}),n("d-left")}},"\u25c0"),s=r.a.createElement("button",{className:"button-action action-right "+t.dPad,onClick:function(){e({type:"SHOW_HELP"}),n("d-right")}},"\u25b6"),l=r.a.createElement("button",{className:"button-action a ".concat(t.actionButtonDepressed.buttonJump?"depressed":""),onClick:function(){e({type:"SHOW_HELP"}),E("jump"),a("buttonJump")}},"\u2191"),u=r.a.createElement("button",{className:"button-action action-climb "+t.dPad,onClick:function(){e({type:"SHOW_HELP"}),n("d-up")}},"\u25b2"),b=r.a.createElement("button",{className:"button-action action-duck "+t.dPad,onClick:function(){e({type:"SHOW_HELP"}),n("d-down")}},"\u25bc"),m=r.a.createElement("button",{className:"button-action b action-fire ".concat(t.actionButtonDepressed.buttonFire?"depressed":""),onClick:function(){e({type:"SHOW_HELP"}),E("fireball"),a("buttonFire")}},r.a.createElement("span",null));return r.a.createElement("div",{className:"action-button-container"},r.a.createElement("div",{className:"square-buttons-wrap "+t.dPad},r.a.createElement("div",{className:"square-buttons"},u,r.a.createElement("div",{className:"break"}),o," ",c," ",s,r.a.createElement("div",{className:"break"}),b)),r.a.createElement("div",{className:"round-buttons"}," ",m," ",l," "))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(){return r.a.createElement(i.a,{store:N},r.a.createElement(_,null),r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"mario-column"},r.a.createElement(j,null),r.a.createElement(h,null)),r.a.createElement("div",{className:"items-column"},r.a.createElement(I,null)),r.a.createElement(g,null)))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4aca585a.chunk.js.map