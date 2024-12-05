import{d as g,c,a as t,t as i,o as u,_ as y,F as w,r as P,n as _,g as S,h as k,i as m,b as h,j,w as D,e as $}from"./index.cbeb5b5e.js";import{u as T}from"./github.7c9f5df5.js";const R={class:"project-statistics"},A={class:"stats-grid"},C={class:"stat-card"},I={class:"stat-value primary"},x={class:"stat-card"},V={class:"stat-list"},L={class:"stat-item"},N={class:"stat-badge success"},O={class:"stat-item"},B={class:"stat-badge primary"},E={class:"stat-item"},H={class:"stat-badge warning"},q={class:"stat-card"},F={class:"stat-list"},G={class:"stat-item"},z={class:"stat-badge danger"},M={class:"stat-item"},U={class:"stat-badge warning"},J={class:"stat-item"},K={class:"stat-badge success"},Q={class:"stat-card"},W={class:"stat-list"},X={class:"stat-item"},Y={class:"stat-value"},Z={class:"stat-item"},tt={class:"stat-value success"},st={class:"stat-item"},et={class:"stat-value warning"},it={class:"stat-item"},at={class:"stat-value info"},ot={class:"stat-item"},lt={class:"stat-value danger"},dt={class:"stat-card"},nt={class:"stat-list"},rt={class:"stat-item"},ct={class:"stat-value"},ut={class:"stat-item"},vt={class:"stat-value"},_t={class:"stat-item"},pt={class:"stat-value"},mt={class:"stat-item"},ht={class:"stat-value"},gt=g({__name:"ProjectStatistics",props:{stats:{}},setup(b){return(a,s)=>(u(),c("div",R,[t("div",A,[t("div",C,[s[0]||(s[0]=t("h3",null,"Projects Overview",-1)),t("div",I,i(a.stats.total),1),s[1]||(s[1]=t("div",{class:"stat-label"},"Total Projects",-1))]),t("div",x,[s[5]||(s[5]=t("h3",null,"Project Status",-1)),t("div",V,[t("div",L,[t("div",N,i(a.stats.byStatus.active),1),s[2]||(s[2]=t("div",{class:"stat-text"},"Active",-1))]),t("div",O,[t("div",B,i(a.stats.byStatus.completed),1),s[3]||(s[3]=t("div",{class:"stat-text"},"Completed",-1))]),t("div",E,[t("div",H,i(a.stats.byStatus["on-hold"]),1),s[4]||(s[4]=t("div",{class:"stat-text"},"On Hold",-1))])])]),t("div",q,[s[9]||(s[9]=t("h3",null,"Priority Distribution",-1)),t("div",F,[t("div",G,[t("div",z,i(a.stats.byPriority.high),1),s[6]||(s[6]=t("div",{class:"stat-text"},"High",-1))]),t("div",M,[t("div",U,i(a.stats.byPriority.medium),1),s[7]||(s[7]=t("div",{class:"stat-text"},"Medium",-1))]),t("div",J,[t("div",K,i(a.stats.byPriority.low),1),s[8]||(s[8]=t("div",{class:"stat-text"},"Low",-1))])])]),t("div",Q,[s[15]||(s[15]=t("h3",null,"Tasks Overview",-1)),t("div",W,[t("div",X,[t("div",Y,i(a.stats.tasksStats.total),1),s[10]||(s[10]=t("div",{class:"stat-text"},"Total",-1))]),t("div",Z,[t("div",tt,i(a.stats.tasksStats.completed),1),s[11]||(s[11]=t("div",{class:"stat-text"},"Completed",-1))]),t("div",st,[t("div",et,i(a.stats.tasksStats.inProgress),1),s[12]||(s[12]=t("div",{class:"stat-text"},"In Progress",-1))]),t("div",it,[t("div",at,i(a.stats.tasksStats.todo),1),s[13]||(s[13]=t("div",{class:"stat-text"},"Todo",-1))]),t("div",ot,[t("div",lt,i(a.stats.tasksStats.overdue),1),s[14]||(s[14]=t("div",{class:"stat-text"},"Overdue",-1))])])]),t("div",dt,[s[20]||(s[20]=t("h3",null,"GitHub Activity",-1)),t("div",nt,[t("div",rt,[t("div",ct,i(a.stats.githubStats.totalRepos),1),s[16]||(s[16]=t("div",{class:"stat-text"},"Repositories",-1))]),t("div",ut,[t("div",vt,i(a.stats.githubStats.totalIssues),1),s[17]||(s[17]=t("div",{class:"stat-text"},"Issues",-1))]),t("div",_t,[t("div",pt,i(a.stats.githubStats.totalPRs),1),s[18]||(s[18]=t("div",{class:"stat-text"},"Pull Requests",-1))]),t("div",mt,[t("div",ht,i(a.stats.githubStats.totalCommits),1),s[19]||(s[19]=t("div",{class:"stat-text"},"Commits",-1))])])])])]))}});const yt=y(gt,[["__scopeId","data-v-a2b90143"]]),bt={class:"activity-timeline"},ft={class:"timeline"},St={class:"timeline-content"},wt={class:"timeline-header"},Pt={class:"timeline-title"},kt={class:"timeline-date"},jt={class:"timeline-meta"},Dt={key:0,class:"timeline-project"},$t=g({__name:"ActivityTimeline",props:{items:{}},setup(b){const a=v=>new Date(v).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),s=v=>v.type==="project"?"fas fa-project-diagram":"fas fa-tasks";return(v,p)=>(u(),c("div",bt,[p[0]||(p[0]=t("h3",null,"Recent Activity",-1)),t("div",ft,[(u(!0),c(w,null,P(v.items,n=>(u(),c("div",{key:n.id,class:"timeline-item"},[t("div",{class:_(["timeline-icon",n.type])},[t("i",{class:_(s(n))},null,2)],2),t("div",St,[t("div",wt,[t("span",Pt,i(n.title),1),t("span",kt,i(a(n.date)),1)]),t("div",jt,[t("span",{class:_(["timeline-type",n.type])},i(n.type),3),t("span",{class:_(["timeline-status",n.status])},i(n.status),3),n.priority?(u(),c("span",{key:0,class:_(["timeline-priority",n.priority])},i(n.priority),3)):S("",!0)]),n.projectTitle?(u(),c("div",Dt," Project: "+i(n.projectTitle),1)):S("",!0)])]))),128))])]))}});const Tt=y($t,[["__scopeId","data-v-bb62c4b2"]]),Rt={class:"dashboard"},At={class:"recent-projects"},Ct={class:"projects-grid"},It={class:"project-meta"},xt=g({__name:"DashboardView",setup(b){const a=k(),s=T(),v=m(()=>{const o=a.projects;return{total:o.length,byStatus:{active:o.filter(e=>e.status==="active").length,completed:o.filter(e=>e.status==="completed").length,"on-hold":o.filter(e=>e.status==="on-hold").length},byPriority:{high:o.filter(e=>e.priority==="high").length,medium:o.filter(e=>e.priority==="medium").length,low:o.filter(e=>e.priority==="low").length},tasksStats:{total:o.reduce((e,d)=>e+d.tasks.length,0),completed:o.reduce((e,d)=>e+d.tasks.filter(r=>r.status==="completed").length,0),inProgress:o.reduce((e,d)=>e+d.tasks.filter(r=>r.status==="in-progress").length,0),todo:o.reduce((e,d)=>e+d.tasks.filter(r=>r.status==="todo").length,0),overdue:o.reduce((e,d)=>e+d.tasks.filter(r=>{const f=r.dueDate?new Date(r.dueDate):void 0;return r.status!=="completed"&&f&&f<new Date}).length,0)},githubStats:{totalRepos:o.filter(e=>e.githubRepo).length,totalIssues:s.issues.length,totalPRs:s.pullRequests.length,totalCommits:s.commits.length}}}),p=m(()=>{const o=[];return a.projects.forEach(l=>{o.push({id:`project-${l.id}`,type:"project",title:l.title,date:l.createdAt,status:l.status,priority:l.priority}),l.tasks.forEach(e=>{o.push({id:`task-${e.id}`,type:"task",title:e.title,date:e.createdAt,status:e.status,priority:e.priority,projectId:l.id,projectTitle:l.title})})}),o.sort((l,e)=>new Date(e.date).getTime()-new Date(l.date).getTime()).slice(0,10)}),n=m(()=>[...a.projects].sort((o,l)=>new Date(l.createdAt).getTime()-new Date(o.createdAt).getTime()).slice(0,4));return(o,l)=>{const e=j("RouterLink");return u(),c("div",Rt,[l[2]||(l[2]=t("h1",null,"Dashboard",-1)),h(yt,{stats:v.value},null,8,["stats"]),h(Tt,{items:p.value},null,8,["items"]),t("div",At,[l[1]||(l[1]=t("h2",null,"Recent Projects",-1)),t("div",Ct,[(u(!0),c(w,null,P(n.value,d=>(u(),c("div",{key:d.id,class:"project-card"},[t("h3",null,i(d.title),1),t("p",null,i(d.description),1),t("div",It,[t("span",{class:_(["status",d.status])},i(d.status),3),t("span",{class:_(["priority",d.priority])},i(d.priority),3)]),h(e,{to:"/projects/"+d.id,class:"view-project"},{default:D(()=>l[0]||(l[0]=[$(" View Details ")])),_:2},1032,["to"])]))),128))])])])}}});const Nt=y(xt,[["__scopeId","data-v-5cb5bc2a"]]);export{Nt as default};