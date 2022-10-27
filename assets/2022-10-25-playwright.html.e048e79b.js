import{_ as i,r as o,o as l,c as p,a as n,b as e,e as t,d as s}from"./app.3ecaf2f5.js";const c={},r=t('<h1 id="playwright\u4ECB\u7D39\u8207\u722C\u87F2\u6559\u5B78" tabindex="-1"><a class="header-anchor" href="#playwright\u4ECB\u7D39\u8207\u722C\u87F2\u6559\u5B78" aria-hidden="true">#</a> Playwright\u4ECB\u7D39\u8207\u722C\u87F2\u6559\u5B78</h1><p>\u672C\u7BC7\u5206\u70BA\u5169\u500B\u90E8\u5206\uFF0C</p><p>\u7B2C\u4E00\u90E8\u5206\u4ECB\u7D39playwright\u8207\u57FA\u672C\u64CD\u4F5C\uFF0C</p><p>\u7B2C\u4E8C\u90E8\u5206\u5206\u4EAB\u5982\u4F55\u9032\u884CPTT\u722C\u87F2\u3002</p><h2 id="playwright\u4ECB\u7D39" tabindex="-1"><a class="header-anchor" href="#playwright\u4ECB\u7D39" aria-hidden="true">#</a> Playwright\u4ECB\u7D39</h2><p>Playwright \u662F\u5FAE\u8EDF\u958B\u767C\u7684 web \u81EA\u52D5\u5316\u6E2C\u8A66\u5DE5\u5177\uFF0C\u5B83\u6709\u5E7E\u9805\u7279\u6027\uFF1A</p><ul><li>\u8DE8\u5E73\u53F0 <ul><li>Windows</li><li>Linux</li><li>macOS</li></ul></li><li>\u8DE8\u700F\u89BD\u5668 <ul><li>Chromium</li><li>WebKit</li><li>Firefox</li></ul></li><li>\u8DE8\u8A9E\u8A00 <ul><li>NodeJs</li><li>Python</li><li>.NET</li><li>JAVA</li></ul></li></ul><p>\u63A5\u4E0B\u4F86\u4EE5\u4E0B\u90FD\u6703\u4F7F\u7528.NET\u9032\u884C\u64CD\u4F5C\u6F14\u793A</p><h2 id="\u5275\u5EFA\u5C08\u6848" tabindex="-1"><a class="header-anchor" href="#\u5275\u5EFA\u5C08\u6848" aria-hidden="true">#</a> \u5275\u5EFA\u5C08\u6848</h2>',9),d=n("p",null,"\u5275\u5EFA\u5C08\u6848",-1),u=n("p",null,"\u4F7F\u7528.NET CLI\u9032\u884C\u64CD\u4F5C\uFF0C",-1),h=s("\u53EF\u4EE5\u53C3\u8003"),k={href:"https://playwright.dev/dotnet/docs/library",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B98\u65B9\u6587\u4EF6"),v=s("\u7684Usage\u90E8\u5206\u9032\u884C\u8907\u88FD\u4E26\u66F4\u6539\u4E00\u4E9B\u5730\u65B9\uFF0C"),g=t(`<p>\u66F4\u6539\u7B2C\u5341\u884C\uFF0C\u6539\u70BA\u6B63\u5728\u4F7F\u7528\u7684.net\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5275\u5EFA\u5C08\u6848</span>
dotnet new console <span class="token parameter variable">-n</span> PlaywrightDemo
<span class="token builtin class-name">cd</span> PlaywrightDemo

<span class="token comment"># \u6DFB\u52A0 Playwright \u5957\u4EF6\u4F9D\u8CF4</span>
dotnet <span class="token function">add</span> package Microsoft.Playwright
<span class="token comment"># \u5EFA\u7F6E\u5C08\u6848</span>
dotnet build
<span class="token comment"># \u5B89\u88DD playwright \u6240\u9700\u7684\u700F\u89BD\u5668\u8CC7\u6E90\uFF0C\u5B83\u9ED8\u8A8D\u4E0D\u662F\u5403\u81EA\u5DF1\u7684\u700F\u89BD\u5668</span>
pwsh bin/Debug/net6.0/playwright.ps1 <span class="token function">install</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=t(`<li><p>\u64B0\u5BEB\u7A0B\u5F0F\u78BC</p><p>\u958B\u555F <strong>Program.cs</strong> \u4E26\u8CBC\u4E0A\u4EE5\u4E0B\u7A0B\u5F0F\u78BC</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Playwright</span><span class="token punctuation">;</span>
<span class="token comment">// \u5275\u5EFA\u4E00\u500B Playwright \u7684 Instance</span>
<span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> playwright <span class="token operator">=</span> <span class="token keyword">await</span> Playwright<span class="token punctuation">.</span><span class="token function">CreateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D6\u5F97\u4E00\u500B Browser \u7684 Instance</span>
<span class="token keyword">await</span> <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> browser <span class="token operator">=</span> <span class="token keyword">await</span> playwright<span class="token punctuation">.</span>Chromium<span class="token punctuation">.</span><span class="token function">LaunchAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D6\u5F97\u4E00\u500BPage \u7684 Instance</span>
<span class="token class-name"><span class="token keyword">var</span></span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">NewPageAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u524D\u5F80 https://playwright.dev/dotnet \u9019\u500B\u7DB2\u9801</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">GotoAsync</span><span class="token punctuation">(</span><span class="token string">&quot;https://playwright.dev/dotnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u622A\u5716\u7576\u524D\u756B\u9762</span>
<span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">ScreenshotAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Path <span class="token operator">=</span> <span class="token string">&quot;screenshot.png&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u57F7\u884C\u7A0B\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u89C0\u770B\u7D50\u679C</p><p>\u53EF\u4EE5\u770B\u5230\u8CC7\u6599\u593E\u5167\u6709 <strong>screenshot.png</strong> \u9019\u5F35\u622A\u5716\u5C31\u4EE3\u8868\u6210\u529F\u56C9!</p></li>`,3),w=n("h2",{id:"\u7B2C\u4E8C\u90E8\u5206\u672A\u5B8C\u5F85\u7E8C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C\u4E8C\u90E8\u5206\u672A\u5B8C\u5F85\u7E8C","aria-hidden":"true"},"#"),s(" \u7B2C\u4E8C\u90E8\u5206\u672A\u5B8C\u5F85\u7E8C....")],-1),_=n("h2",{id:"\u53C3\u8003\u6587\u737B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C3\u8003\u6587\u737B","aria-hidden":"true"},"#"),s(" \u53C3\u8003\u6587\u737B")],-1),y={href:"https://blog.miniasp.com/post/2021/09/12/Writing-E2E-Testing-using-Playwright-for-NET",target:"_blank",rel:"noopener noreferrer"},f=s("https://blog.miniasp.com/post/2021/09/12/Writing-E2E-Testing-using-Playwright-for-NET"),P={href:"https://dotblogs.com.tw/supershowwei/2021/11/07/234421",target:"_blank",rel:"noopener noreferrer"},x=s("https://dotblogs.com.tw/supershowwei/2021/11/07/234421");function E(N,T){const a=o("ExternalLinkIcon");return l(),p("div",null,[r,n("ol",null,[n("li",null,[d,u,n("p",null,[h,n("a",k,[m,e(a)]),v]),g]),b]),w,_,n("p",null,[n("a",y,[f,e(a)]),n("a",P,[x,e(a)])])])}const I=i(c,[["render",E],["__file","2022-10-25-playwright.html.vue"]]);export{I as default};
