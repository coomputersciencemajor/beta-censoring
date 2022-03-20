import{r as n,o,c as i,a as e,b as s,F as r,e as t,d as c}from"./app.69537f53.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const d={},l=e("h1",{id:"beta-censoring-and-beta-safety",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beta-censoring-and-beta-safety","aria-hidden":"true"},"#"),t(" Beta Censoring and Beta Safety")],-1),u=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),t(" Introduction")],-1),f=e("p",null,`If you're a current Beta Safety user, your first thought on seeing this was probably "Isn't this what Beta Safety already does?" and yes, that's largely true, but it's a bit more nuanced than that.`,-1),m=e("p",null,"For many Beta Safety users, your current experience is probably fine, and if that's the case then feel free to stick with it! Beta Safety and Beta Censoring each have their strengths and weaknesses, so feel free to make your own decision.",-1),p=t(`The points discussed below (except where it says otherwise) are generally referring to the "backend" part of Beta Safety, not specifically the Chrome extension. If you're interested in a comparison of the extension, see `),y={href:"https://silveredgold.github.io/beta-protection/#/guide/introduction#how-is-this-different-from-beta-safety",target:"_blank",rel:"noopener noreferrer"},g=t("this page"),b=t(" from the Beta Protection docs."),w=c('<h2 id="open-source-and-extensible" tabindex="-1"><a class="header-anchor" href="#open-source-and-extensible" aria-hidden="true">#</a> Open Source and Extensible</h2><p>Beta Safety is a closed-source proprietary tool. That means it does not accept community contributions, the underlying code is not publically available and there is no way for users to inspect, modify or otherwise change the app. In this author&#39;s opinion, that sucks. Open source software means you can always see the code and moving parts that make the app work, you can always tweak, modify or customise the app at will, and the community is free to contribute features, changes or fixes to the project.</p><p>Beta Censoring (and all of its underlying components and libraries) are all open source under the GPLv3 license. For most users, this one is probably not hugely important, but it is to me, so here we are.</p><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><p>Due to completely different stacks and some pretty significant changes in how they work, Beta Safety and Beta Censoring have extremely different performance impacts. Based on my own (admittedly minimal) testing, Beta Safety will usually be slightly faster in pure censoring time, but at the cost of <em>dramatically</em> more memory usage and often more CPU usage. Beta Censoring, on the other hand, might be a <em>little</em> slower per-image but uses a <em>fraction</em> of the memory, and uses a little less CPU per-image.</p><blockquote><p>For some context here, on my testing rig, Beta Safety is just under a second faster to censor mid-size images, but uses ~3x the RAM</p></blockquote><p>Additionally, since Beta Censoring is configurable, you can customise your own performance. If you&#39;re okay with slower censoring times for less performance impact, you can turn down the workers and caching options. Alternatively, if you have a beefy rig and don&#39;t mind your PC working a bit harder, add some more workers and caching, and revel in the faster response times.</p><p>It&#39;s a much more minor point but if it matters to you Beta Censoring is also about a third the size of Beta Safety. That being said, it&#39;s kinda academic numbers on either side: ~55MB vs ~160MB.</p><h2 id="status-and-monitoring" tabindex="-1"><a class="header-anchor" href="#status-and-monitoring" aria-hidden="true">#</a> Status and Monitoring</h2><p>Beta Censoring includes its own built-in web interface for checking on the status of the server, providing (limited) information on requests, checking on loaded assets or monitoring the performance of the server and all of its components. While this won&#39;t always be useful for all users, it&#39;s a very easy way to check on the server, see what assets you have available and track what&#39;s taking the time in the censoring process.</p><h2 id="customisation" tabindex="-1"><a class="header-anchor" href="#customisation" aria-hidden="true">#</a> Customisation</h2><p>This is a big one so hard to explain succinctly, but essentially every part of the Beta Censoring experience is more configurable and adaptable than it&#39;s counterpart in Beta Safety.</p><h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h4><p>You can customise more of how the server works than with Beta Safety including enabling/disabling entire integrations (like the WebSockets used by Beta Protection or the REST API), though in its current form this isn&#39;t always the easiest since it requires configuration files.</p><p>You can also load assets (like stickers) from anywhere on your PC, no copying/moving required. Combine this with a more fine-grained control over censoring and you can tune the server to match how you want it to work.</p><h4 id="clients" tabindex="-1"><a class="header-anchor" href="#clients" aria-hidden="true">#</a> Clients</h4><p>Beta Censoring offers very fine-grained control of censoring so that clients can offer the most options. As an isolated example, clients can specify not just the type of censoring used, but also the intensity of it for <strong>any</strong> combination of body part and censoring style (even black bars!). Additionally, Beta Censoring makes less assumptions about clients, and is even designed to support any client apps, not just its own!</p><h2 id="incompatibilities" tabindex="-1"><a class="header-anchor" href="#incompatibilities" aria-hidden="true">#</a> Incompatibilities</h2><p>There are some features from Beta Safety that Beta Censoring doesn&#39;t include, either a case of &quot;not yet&quot; or deliberate choice. The list below usually reflects the current state of that feature gap.</p><ul><li>GPU Hardware acceleration</li><li>Domain-based statistics (not currently planned)</li></ul><h4 id="gpu-acceleration" tabindex="-1"><a class="header-anchor" href="#gpu-acceleration" aria-hidden="true">#</a> GPU Acceleration</h4><p>There&#39;s nothing preventing Beta Censoring from supporting GPU acceleration! The runtime we use (ONNX) has support for multiple forms of acceleration, but I simply don&#39;t have the right combination of OS and hardware to test it. If anyone can test and contribute support for acceleration (to Beta Censoring or CensorCore), I&#39;ll happily include it.</p><h4 id="domain-based-statistics" tabindex="-1"><a class="header-anchor" href="#domain-based-statistics" aria-hidden="true">#</a> Domain-based statistics</h4><p>While I am working on a statistics API (to match the existing Performance API), there is no plan for the API to include per-domain information. Storing the origin domains of all client requests turns Beta Censoring into a non-editable, real-time source of data on a user&#39;s browsing habits, something I don&#39;t feel entirely comfortable with it being. If this does get added, it will be up to clients if they want to provide a domain or not.</p>',24);function k(B,v){const a=n("ExternalLinkIcon");return o(),i(r,null,[l,u,f,m,e("blockquote",null,[e("p",null,[p,e("a",y,[g,s(a)]),b])]),w],64)}var C=h(d,[["render",k]]);export{C as default};
