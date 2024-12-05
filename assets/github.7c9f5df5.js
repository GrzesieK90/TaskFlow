import{C as c}from"./index.cbeb5b5e.js";const u=c("github",{state:()=>({repo:null,commits:[],repoStats:null,issues:[],pullRequests:[],error:null,loading:!1}),actions:{async searchRepository(r){this.loading=!0,this.error=null;try{const e=await fetch(`https://api.github.com/repos/${r}`);if(!e.ok)throw new Error("Repository not found");this.repo=await e.json()}catch(e){this.error=e instanceof Error?e.message:"Failed to fetch repository",this.repo=null}finally{this.loading=!1}},async fetchCommits(r,e){this.loading=!0,this.error=null;try{const s=await fetch(`https://api.github.com/repos/${r}/${e}/commits?per_page=10`);if(!s.ok)throw new Error("Failed to fetch commits");const a=await s.json();this.commits=a.map(t=>({sha:t.sha,message:t.commit.message,author:{name:t.commit.author.name,email:t.commit.author.email,date:t.commit.author.date},html_url:t.html_url}))}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch commits",this.commits=[]}finally{this.loading=!1}},async fetchRepoStats(r,e){var s,a,t;this.loading=!0,this.error=null;try{const o=await fetch(`https://api.github.com/repos/${r}/${e}`);if(!o.ok)throw new Error("Failed to fetch repository stats");const i=await o.json(),l=await fetch(`https://api.github.com/repos/${r}/${e}/contributors?per_page=1&anon=1`),n=l.ok?+(((a=(s=l.headers.get("link"))==null?void 0:s.match(/page=(\d+).*?>; rel="last"/))==null?void 0:a[1])||"1"):0;this.repoStats={stars:i.stargazers_count||0,forks:i.forks_count||0,watchers:i.subscribers_count||0,issues:i.open_issues_count||0,contributors:n,language:i.language||"Not specified",license:((t=i.license)==null?void 0:t.name)||"Not specified",lastUpdate:i.updated_at}}catch(o){this.error=o instanceof Error?o.message:"Failed to fetch repository stats",this.repoStats=null}finally{this.loading=!1}},async fetchIssues(r,e){this.loading=!0,this.error=null;try{const s=await fetch(`https://api.github.com/repos/${r}/${e}/issues?state=all&per_page=10`);if(!s.ok)throw new Error("Failed to fetch issues");const a=await s.json();this.issues=a.filter(t=>!t.pull_request).map(t=>({id:t.id,number:t.number,title:t.title,state:t.state,html_url:t.html_url,created_at:t.created_at,updated_at:t.updated_at,user:{login:t.user.login,avatar_url:t.user.avatar_url},labels:t.labels.map(o=>({name:o.name,color:o.color}))}))}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch issues",this.issues=[]}finally{this.loading=!1}},async fetchPullRequests(r,e){this.loading=!0,this.error=null;try{const s=await fetch(`https://api.github.com/repos/${r}/${e}/pulls?state=all&per_page=10`);if(!s.ok)throw new Error("Failed to fetch pull requests");const a=await s.json();this.pullRequests=a.map(t=>({id:t.id,number:t.number,title:t.title,state:t.state==="closed"&&t.merged_at?"merged":t.state,html_url:t.html_url,created_at:t.created_at,updated_at:t.updated_at,user:{login:t.user.login,avatar_url:t.user.avatar_url},head:{ref:t.head.ref},base:{ref:t.base.ref}}))}catch(s){this.error=s instanceof Error?s.message:"Failed to fetch pull requests",this.pullRequests=[]}finally{this.loading=!1}},async searchRepositories(r){this.loading=!0,this.error=null;try{const e=await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(r)}&per_page=10`);if(!e.ok)throw new Error("Failed to search repositories");return(await e.json()).items}catch(e){return this.error=e instanceof Error?e.message:"Failed to search repositories",[]}finally{this.loading=!1}},clearError(){this.error=null}}});export{u};
