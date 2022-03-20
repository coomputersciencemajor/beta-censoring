import{r as s,o as a,c as i,a as e,b as n,w as l,F as c,e as t}from"./app.69537f53.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=e("h1",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),_=e("p",null,[t("In it's current form, you don't really "),e("em",null,"use"),t(" Beta Censoring in the traditional sense. You leave it running and other apps (we call them 'clients') can interact with it, requesting images to be censored.")],-1),g=e("p",null,"That does mean that you need to leave it running though, as clients will need to contact the running server to request censoring.",-1),p=e("blockquote",null,[e("p",null,"If you're a more advanced user, Beta Censoring can be configured as a Windows Service or Systemd service to have the server running, but not visible.")],-1),m=t("There is a simple web interface available to check on the status of a running Beta Censoring server though. To check it, just open your browser and navigate to "),f={href:"http://beta-censoring.local:2382/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"http://beta-censoring.local:2382/",-1),v=t(" and you should see a simple status panel to check the details of your server. At present, this status panel is just to check on your server details and configuration (though more features are planned)."),k=t("If that URL doesn't work, try directly navigating to the server URL. For example, that would be "),y={href:"http://localhost:2382",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"http://localhost:2382",-1),x=t(" on the PC you're running the server on."),B=e("h2",{id:"clients",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clients","aria-hidden":"true"},"#"),t(" Clients")],-1),C=t("At this time, the only "),L=e("em",null,"known",-1),I=t(" Beta Censoring client is "),q={href:"https://silveredgold.github.io/beta-protection/#/",target:"_blank",rel:"noopener noreferrer"},R=t("Beta Protection"),T=t(", the browser extension for live censoring images while you browse."),E=t("Beta Censoring can accept any client though, and if you're interested in integrating it with other tools or building your own client, the "),F=t("developer documentation"),N=t(" includes more details.");function U(V,j){const o=s("ExternalLinkIcon"),r=s("RouterLink");return a(),i(c,null,[u,_,g,p,e("p",null,[m,e("a",f,[b,n(o)]),v]),e("blockquote",null,[e("p",null,[k,e("a",y,[w,n(o)]),x])]),B,e("p",null,[C,L,I,e("strong",null,[e("a",q,[R,n(o)])]),T]),e("p",null,[E,n(r,{to:"/content/developers.html"},{default:l(()=>[F]),_:1}),N])],64)}var S=h(d,[["render",U]]);export{S as default};