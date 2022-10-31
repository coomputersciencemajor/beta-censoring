import{r,o as s,c as i,a as e,b as a,F as c,e as o,d as n}from"./app.a918adb8.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l={},h=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),o(" Installation")],-1),p=e("p",null,"There's no installation required for the current version of Beta Censoring. Just download the version appropriate to your platform and run it.",-1),u=e("p",null,"The server is currently built for 64-bit versions of Windows, Linux and macOS.",-1),m=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),o(" Download")],-1),g=o("Download the latest release from the "),f={href:"https://github.com/silveredgold/beta-censoring/releases",target:"_blank",rel:"noopener noreferrer"},w=o("GitHub Releases"),y=o(". Find the latest release and download the ZIP file for your platform. Unpack it somewhere convenient."),b=n('<h2 id="running" tabindex="-1"><a class="header-anchor" href="#running" aria-hidden="true">#</a> Running</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p>Open the folder you extracted the app to, then just double-click the executable (<code>BetaCensor.Server.exe</code>) to start the server. You may get alerts from SmartScreen or Windows Defender that they can&#39;t verify the app. That&#39;s expected since I&#39;m not willing to pay the hundreds of dollars required for a code signing certificate to make those go away.</p><p>A console window should appear and after a few seconds, you&#39;re ready to rock, the server is now running. You can point your clients (like Beta Protection) to <code>http://localhost:2382</code> and get censoring.</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>Open your terminal of choice and <code>cd</code> to the directory you unpacked the server to. The permissions sometimes get broken during build, so run <code>chmod 755 BetaCensor.Server</code> then <code>./BetaCensor.Server</code>. The server will unpack itself and then you&#39;re ready to rock, the server is now running. You can point your clients (like Beta Protection) to <code>http://localhost:2382</code> and get censoring.</p><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3><p>Apple doesn&#39;t think you know how to operate your own computer, so this shit is about to get complex.</p><p>Drag the folder you just unpacked onto the Terminal icon to open a terminal in the current directory. Run the following command to mark the server as executable: <code>chmod +x ./BetaCensor.Server</code>. Now, run the server with <code>./BetaCensor.Server</code>. After a few seconds, the server will <strong>appear</strong> to be running, but you also will have received some warnings about this app being unrecognised. This is expected as I&#39;m not willing to pay Apple for the certificate they are expecting. You can close the current terminal window while we fix this.</p><p>Open Preferences &gt; Security &amp; Privacy and look for a note at the bottom of the page about how <code>BetaCensor.Server</code> was stopped from running. Click Open Anyway to allow it. Now, repeat the process as before: drag the folder on to Terminal, run <code>./BetaCensor.Server</code> and after a few seconds, you&#39;re ready to rock, the server is now running. You can point your clients (like Beta Protection) to <code>http://localhost:2382</code> and get censoring.</p><h2 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues" aria-hidden="true">#</a> Known Issues</h2>',11),v=o("On both Windows and macOS, you may get alerts from your operating system that they can't verify the app. That's expected since I'm not willing to pay the hundreds of dollars required for a code signing certificate to make those go away (in the case of macOS, that requires paying Apple a recurring subscription fee). If you're worried about the security of the server, you can always submit your downloaded files to VirusTotal, or just check the sources yourself "),k={href:"https://github.com/silveredgold/beta-censoring",target:"_blank",rel:"noopener noreferrer"},_=o("on GitHub"),x=o("."),S=n(`<h2 id="alternate-methods" tabindex="-1"><a class="header-anchor" href="#alternate-methods" aria-hidden="true">#</a> Alternate Methods</h2><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>There is also a Docker image available if you&#39;re comfortable running the server in a container. Just pull <code>quay.io/beta-censoring/server:&lt;VERSION-HERE&gt;</code> and run it with Docker (or Docker Compose). You&#39;ll want to expose the listening port for the HTTP/SignalR API, so the final command will likely be something like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">2382</span>:2382 quay.io/beta-censoring/server:<span class="token operator">&lt;</span>version-here<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,4),B=o("See the available versions "),q={href:"https://quay.io/repository/beta-censoring/server",target:"_blank",rel:"noopener noreferrer"},C=o("at the repo on Quay.io"),T=o("."),I=n(`<h3 id="system-service" tabindex="-1"><a class="header-anchor" href="#system-service" aria-hidden="true">#</a> System service</h3><p>If you want to integrate running Beta Censoring Server with your system, you can! It supports both Systemd and Windows Services out of the box. Set it up to run with either method and the server will correctly integrate with startup/shutdown as well as logging to make it easier to manage.</p><h4 id="example-windows-service-installation" tabindex="-1"><a class="header-anchor" href="#example-windows-service-installation" aria-hidden="true">#</a> Example Windows Service installation</h4><p>Here&#39;s an example of setting the server up as a Windows Service. Change the path to match, and (optionally) adjust to suit your needs.</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token variable">$rootDir</span> = <span class="token string">&quot;X:\\Beta\\betacensor-server-win-x64&quot;</span>
<span class="token function">New-Service</span> <span class="token operator">-</span>Name beta-censoring <span class="token operator">-</span>BinaryPathName <span class="token string">&quot;<span class="token variable">$rootDir</span>/BetaCensor.Server.exe --contentRoot \\&quot;</span><span class="token variable">$rootDir</span>\\<span class="token string">&quot;&quot;</span> <span class="token operator">-</span>DisplayName <span class="token string">&quot;Beta Censoring Server&quot;</span> <span class="token operator">-</span>StartupType Automatic
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,5);function D(N,O){const t=r("ExternalLinkIcon");return s(),i(c,null,[h,p,u,m,e("p",null,[g,e("a",f,[w,a(t)]),y]),b,e("p",null,[v,e("a",k,[_,a(t)]),x]),S,e("p",null,[B,e("a",q,[C,a(t)]),T]),I],64)}var E=d(l,[["render",D]]);export{E as default};
