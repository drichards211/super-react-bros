(this["webpackJsonpsuper-react-bros"]=this["webpackJsonpsuper-react-bros"]||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=a(2),s=(a(22),a(23),a(3)),l=a(1),u=a(5);function b(e,t){return String(e).padStart(t,"0")}function m(e){var t=e||"silent";"silent"!==t&&(console.log('NoiseMaker() ran: "'.concat(t,'.mp3"')),new Audio("/super-react-bros/".concat(t,".mp3")).play())}var E={brother:"mario",super:!1,fire:!1,invincible:!1,starManTimer:0,alive:!0,inPlay:!0,helpVisible:!1,points:"000000",lives:3,coins:0,timer:400,buttonDepressed:{buttonMushroom:!1,buttonFire:!1,buttonCoin:!1,buttonStar:!1,buttonEnemy:!1,buttonOneUp:!1,buttonBrosToggle:!1,buttonQuestion:!1},actionButtonDepressed:{buttonStop:!1,buttonWalkLeft:!1,buttonWalkRight:!1,buttonClimb:!1,buttonDuck:!1,buttonJump:!1,buttonFire:!1},dPad:"d-right",brotherSlipLeft:!1,brotherSlipRight:!1};var p=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch("DECREMENT_TIMER"!==t.type&&"DECREMENT_STARMANTIMER"!==t.type&&console.log("reducer() ran ".concat(t.type)),t.type){case"INCREMENT_LIVES":return Object(l.a)(Object(l.a)({},e),{},{lives:e.lives+1});case"DECREMENT_LIVES":return Object(l.a)(Object(l.a)({},e),{},{lives:e.lives-1});case"START_NEW_LIFE":return Object(l.a)(Object(l.a)({},e),{},{alive:!0,invincible:!1,starManTimer:0,super:!1,fire:!1,timer:400,buttonDepressed:{buttonMushroom:!1,buttonFire:!1,buttonCoin:!1,buttonStar:!1,buttonEnemy:!1,buttonOneUp:!1,buttonBrosToggle:!1,buttonQuestion:!1},actionButtonDepressed:{buttonStop:!1,buttonWalkLeft:!1,buttonWalkRight:!1,buttonClimb:!1,buttonDuck:!1,buttonJump:!1,buttonFire:!1},dPad:"d-right",brotherSlipLeft:!1,brotherSlipRight:!1});case"MAKE_SUPER":return Object(l.a)(Object(l.a)({},e),{},{super:!0,points:b(parseInt(e.points)+1e3,6)});case"MAKE_FIRE":return Object(l.a)(Object(l.a)({},e),{},{fire:!0,super:!0,points:b(parseInt(e.points)+1e3,6)});case"MAKE_INVINCIBLE":return Object(l.a)(Object(l.a)({},e),{},{invincible:!0,starManTimer:10,points:b(parseInt(e.points)+1e3,6)});case"END_INVINCIBLE":return Object(l.a)(Object(l.a)({},e),{},{invincible:!1,starManTimer:0});case"MAKE_SMALL":return Object(l.a)(Object(l.a)({},e),{},{super:!1});case"LOSE_FIRE":return Object(l.a)(Object(l.a)({},e),{},{fire:!1,super:!1});case"LOSE_LIFE":return Object(l.a)(Object(l.a)({},e),{},{alive:!1,lives:e.lives-1});case"SELECT_MARIO":return Object(l.a)(Object(l.a)({},e),{},{brother:"mario"});case"SELECT_LUIGI":return Object(l.a)(Object(l.a)({},e),{},{brother:"luigi"});case"ADD_COIN":return Object(l.a)(Object(l.a)({},e),{},{coins:e.coins+1,points:b(parseInt(e.points)+200,6)});case"RESET_100_COINS":return Object(l.a)(Object(l.a)({},e),{},{coins:0,lives:e.lives+1});case"RESET_GAME":return Object(l.a)(Object(l.a)({},E),{},{brother:e.brother});case"RESET_STARMANTIMER":return Object(l.a)(Object(l.a)({},e),{},{starManTimer:0});case"DECREMENT_TIMER":return Object(l.a)(Object(l.a)({},e),{},{timer:e.timer-1});case"DECREMENT_STARMANTIMER":return Object(l.a)(Object(l.a)({},e),{},{starManTimer:e.starManTimer-1});case"SHOW_DEATH_SCREEN":return Object(l.a)(Object(l.a)({},e),{},{inPlay:!1});case"HIDE_DEATH_SCREEN":return Object(l.a)(Object(l.a)({},e),{},{inPlay:!0});case"SHOW_HELP":return Object(l.a)(Object(l.a)({},e),{},{helpVisible:!0});case"DEPRESS_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{buttonDepressed:Object(l.a)(Object(l.a)({},e.buttonDepressed),{},Object(s.a)({},t.payload,!0))});case"UNPRESS_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{buttonDepressed:Object(l.a)(Object(l.a)({},e.buttonDepressed),{},Object(s.a)({},t.payload,!1))});case"DEPRESS_ACTION_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{actionButtonDepressed:Object(l.a)(Object(l.a)({},e.actionButtonDepressed),{},Object(s.a)({},t.payload,!0))});case"UNPRESS_ACTION_BUTTON":return Object(l.a)(Object(l.a)({},e),{},{actionButtonDepressed:Object(l.a)(Object(l.a)({},e.actionButtonDepressed),{},Object(s.a)({},t.payload,!1))});case"UPDATE_DPAD":return Object(l.a)(Object(l.a)({},e),{},{dPad:t.payload});case"SLIP_LEFT":return Object(l.a)(Object(l.a)({},e),{},{brotherSlipLeft:!0});case"SLIP_RIGHT":return Object(l.a)(Object(l.a)({},e),{},{brotherSlipRight:!0});case"CANCEL_SLIP":return Object(l.a)(Object(l.a)({},e),{},{brotherSlipLeft:!1,brotherSlipRight:!1});default:return console.log("".concat(t.type," is an invalid reducer action.")),e}}));console.log("created",p.getState());var d,O,S=p;function f(){console.log("StartTimer() ran"),d=setInterval((function(){var e=S.getState();101===e.timer&&m("time-warning"),1===e.timer?(console.log("StopTimer() ran"),clearInterval(d),N(),S.dispatch({type:"DECREMENT_TIMER"}),S.dispatch({type:"LOSE_LIFE"}),m("death"),v()):S.dispatch({type:"DECREMENT_TIMER"})}),420)}function N(){console.log("StopStarManTimer() ran"),clearInterval(O)}function T(){console.log("StopAllTimers() ran"),clearInterval(d),clearInterval(O)}function v(){console.log("ManageDeathScreen() ran");var e=S.getState();setTimeout((function(){S.dispatch({type:"SHOW_DEATH_SCREEN"}),0===e.lives&&m("game-over"),e.lives>0&&setTimeout((function(){S.dispatch({type:"START_NEW_LIFE"}),S.dispatch({type:"HIDE_DEATH_SCREEN"}),f()}),3e3)}),2e3)}function h(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e}));Object(n.useEffect)((function(){f()}),[]);var a=o.a.createElement("div",null," ",t.brother.toUpperCase(),o.a.createElement("span",{className:"small-spacer"},"\xd7"),t.lives," "),r=function(){return o.a.createElement("div",null," ",t.points," ")},c=function(){return o.a.createElement("div",{className:"coin-counter"},o.a.createElement("div",{className:"mini-coin-sprite"}),"\xd7",function(){var a=b(t.coins,2);return t.coins>99&&(m("1up"),e({type:"RESET_100_COINS"})),a}())},s=function(){return o.a.createElement("div",null," TIME ",o.a.createElement("br",null),b(t.timer,3))};return o.a.createElement("div",null,o.a.createElement("div",{className:"scoreboard row"},o.a.createElement("div",{className:"sb-col-01"},a,o.a.createElement(r,null)),o.a.createElement("div",{className:"sb-col-02"},o.a.createElement(c,null)),o.a.createElement("div",{className:"sb-col-03"},o.a.createElement(s,null))))}function _(){Object(i.b)();var e=Object(i.c)((function(e){return e})),t="Render-brother ";switch(!0){case e.alive&&e.invincible:t+=e.super?"invincible-super":"invincible";break;case e.alive&&"mario"===e.brother:e.fire?t+="fire":t+=e.super?"mario-super":"mario";break;case e.alive&&"luigi"===e.brother:e.fire?t+="fire":t+=e.super?"luigi-super":"luigi";break;default:switch(!0){case 0===e.timer&&e.fire:t+="fire-dead",console.log("Timer ran out while Mario-Luigi was Fire");break;case 0===e.timer:console.log("Timer ran out"),"luigi"===e.brother?t+="luigi-dead":t+="mario-dead";break;case"luigi"===e.brother:t+="luigi-dead";break;default:t+="mario-dead"}}return t+=" "+e.dPad,t+=e.brotherSlipLeft?" slip-left":"",t+=e.brotherSlipRight?" slip-right":"",o.a.createElement("div",{className:"mario-container"}," ",o.a.createElement("div",{className:t})," ")}function g(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a="message-holder ",n="",r="button-restart ",c=function(t){var n=t.message;return o.a.createElement("div",{className:a}," ",o.a.createElement("div",{className:"message-contents"},n,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:r,onClick:function(){return e({type:"RESET_GAME"}),T(),void f()}},"TRY AGAIN ?"))," ")};return t.inPlay||(a+="death-screen"),t.alive||(0===t.timer?(n=0===t.lives?"GAME OVER":"TIME UP",r+=0===t.lives?"show-button":""):(n=0===t.lives?"GAME OVER":"luigi"===t.brother?"LUIGI \xd7 "+t.lives:"MARIO \xd7 "+t.lives,r+=0===t.lives?"show-button":"")),o.a.createElement(c,{message:n})}function j(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a={buttonMushroom:"item-button button-mushroom ",buttonFire:"item-button button-fire ",buttonStar:"item-button button-starman ",buttonStarSpan:"",buttonEnemy:"item-button button-enemy ",buttonCoin:"item-button button-coin ",buttonOneUp:"item-button button-oneup ",buttonBrosToggle:"item-button button-bros-toggle ",buttonBrosSpan:"",buttonQuestion:"item-button button-question "};switch(!0){case t.invincible:a.buttonStar+="show-star-countdown ",a.buttonStarSpan+="flicker-star ";break;default:a.buttonStar+="hide-star-countdown "}switch(!0){case"luigi"===t.brother:a.buttonBrosSpan+="toggle-mario";break;default:a.buttonBrosSpan+="toggle-luigi"}Object.keys(t.buttonDepressed).forEach((function(e){switch(!0){case t.buttonDepressed[e]:a[e]+="depressed ";break;default:a[e]=a[e].replace("depressed ","")}}));var n=function(){e({type:"MAKE_INVINCIBLE"}),N(),console.log("StartStarManTimer() ran"),O=setInterval((function(){1===S.getState().starManTimer?(N(),S.dispatch({type:"END_INVINCIBLE"})):S.dispatch({type:"DECREMENT_STARMANTIMER"})}),1e3)},r=function(t){e({type:"DEPRESS_BUTTON",payload:"".concat(t)}),setTimeout((function(){e({type:"UNPRESS_BUTTON",payload:"".concat(t)})}),400)},c=o.a.createElement("button",{className:a.buttonMushroom,onClick:function(){e({type:"MAKE_SUPER"}),m("power-up"),r("buttonMushroom")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",null)),s=o.a.createElement("button",{className:a.buttonStar,onClick:function(){n(),m("power-up"),r("buttonStar")}}," ",t.starManTimer," ",o.a.createElement("span",{className:a.buttonStarSpan})),l=o.a.createElement("button",{className:a.buttonEnemy,onClick:function(){!function(){switch(!0){case t.invincible:break;case t.fire:e({type:"LOSE_FIRE"}),m("shrink");break;case t.super:e({type:"MAKE_SMALL"}),m("shrink");break;default:T(),e({type:"LOSE_LIFE"}),m("death"),v()}}(),r("buttonEnemy")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",{className:"walk-enemy"})),u=o.a.createElement("button",{className:a.buttonFire,onClick:function(){!function(){switch(t.super){case!0:e({type:"MAKE_FIRE"});break;default:e({type:"MAKE_SUPER"})}}(),m("power-up"),r("buttonFire")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",null)),b=o.a.createElement("button",{className:a.buttonCoin,onClick:function(){e({type:"ADD_COIN"}),t.coins<99&&m("coin"),r("buttonCoin")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",{className:"glow-coin"})),E=o.a.createElement("button",{className:a.buttonOneUp,onClick:function(){e({type:"INCREMENT_LIVES"}),m("1up"),r("buttonOneUp")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",null)),p=o.a.createElement("button",{className:a.buttonBrosToggle,onClick:function(){"mario"===t.brother?e({type:"SELECT_LUIGI"}):e({type:"SELECT_MARIO"}),r("buttonBrosToggle")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",{className:a.buttonBrosSpan})),d=o.a.createElement("button",{className:a.buttonQuestion,onClick:function(){e({type:"SHOW_HELP"}),m("pause"),r("buttonQuestion")}},o.a.createElement("div",{className:"align-me"},"_"),o.a.createElement("span",null));return o.a.createElement("div",{className:"item-button-container"}," ",c," ",u," ",s," ",l," ",b," ",E," ",p," ",d," ")}function I(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),a=function(t){e({type:"DEPRESS_ACTION_BUTTON",payload:t}),setTimeout((function(){e({type:"UNPRESS_ACTION_BUTTON",payload:t})}),400)},n=function(){"d-left"!==t.dPad&&"d-right"!==t.dPad||(e({type:"".concat("d-left"===t.dPad?"SLIP_LEFT":"SLIP_RIGHT")}),setTimeout((function(){e({type:"CANCEL_SLIP"})}),433))},r=o.a.createElement("button",{className:"button-action action-stop ".concat(t.dPad," ").concat(t.actionButtonDepressed.buttonStop?"depressed":""),onClick:function(){e({type:"UPDATE_DPAD",payload:"".concat("d-left"===t.dPad?"d-stop-left":"d-stop")}),a("buttonStop")}},"\u2666"),c=o.a.createElement("button",{className:"button-action action-left ".concat(t.dPad," ").concat(t.actionButtonDepressed.buttonWalkLeft?"depressed":""),onClick:function(){"d-left"!==t.dPad&&n(),e({type:"UPDATE_DPAD",payload:"d-left"}),a("buttonWalkLeft")}},"\u25c0"),s=o.a.createElement("button",{className:"button-action action-right ".concat(t.dPad," ").concat(t.actionButtonDepressed.buttonWalkRight?"depressed":""),onClick:function(){"d-right"!==t.dPad&&n(),e({type:"UPDATE_DPAD",payload:"d-right"}),a("buttonWalkRight")}},"\u25b6"),l=o.a.createElement("button",{className:"button-action a ".concat(t.actionButtonDepressed.buttonJump?"depressed":""),onClick:function(){e({type:"SHOW_HELP"}),m("jump"),a("buttonJump")}},"\u2191"),u=o.a.createElement("button",{className:"button-action action-climb ".concat(t.dPad," ").concat(t.actionButtonDepressed.buttonClimb?"depressed":""),onClick:function(){e({type:"UPDATE_DPAD",payload:"d-up"}),a("buttonClimb")}},"\u25b2"),b=o.a.createElement("button",{className:"button-action action-duck ".concat(t.dPad," ").concat(t.actionButtonDepressed.buttonDuck?"depressed":""),onClick:function(){e({type:"UPDATE_DPAD",payload:"".concat("d-left"===t.dPad?"d-down-left":"d-down")}),a("buttonDuck")}},"\u25bc"),E=o.a.createElement("button",{className:"button-action b action-fire ".concat(t.actionButtonDepressed.buttonFire?"depressed":""),onClick:function(){e({type:"SHOW_HELP"}),m("fireball"),a("buttonFire")}},o.a.createElement("span",null));return o.a.createElement("div",{className:"action-button-container"},o.a.createElement("div",{className:"square-buttons-wrap "+t.dPad},o.a.createElement("div",{className:"square-buttons"},u,o.a.createElement("div",{className:"break"}),c," ",r," ",s,o.a.createElement("div",{className:"break"}),b)),o.a.createElement("div",{className:"round-buttons"}," ",E," ",l," "))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(){return o.a.createElement(i.a,{store:S},o.a.createElement(h,null),o.a.createElement("div",{className:"game-container"},o.a.createElement("div",{className:"mario-column"},o.a.createElement(_,null),o.a.createElement(I,null)),o.a.createElement("div",{className:"items-column"},o.a.createElement(j,null)),o.a.createElement(g,null)))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.05709800.chunk.js.map