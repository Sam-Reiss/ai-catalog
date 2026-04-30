import { useState, useRef } from "react";

const t={n0:"#ffffff",n10:"#fbfafd",n50:"#f8f9fa",n100:"#ececef",n200:"#d1d0d3",n300:"#b2b1b6",n400:"#89888d",n500:"#6f6e77",n600:"#535158",n700:"#3b3942",n800:"#2b2830",n900:"#1f1c24",n950:"#171321",p50:"#f6f3fe",p100:"#e9ddfe",p200:"#d2b7fb",p700:"#6e49cb",p800:"#5943b6",b50:"#edf4ff",b100:"#d8e9ff",b200:"#b3d4ff",b500:"#1f75cb",b600:"#0b5cad",g50:"#edf8f0",g100:"#cae9d3",g400:"#2da160",g500:"#1f8f4a",g600:"#1a7f3f",o50:"#fff6e8",o100:"#fce7c4",o400:"#b87400",o500:"#9f6700",r50:"#feefee",r500:"#dd2b0e",purple500:"#7759c2",purple600:"#5943b6"};
const ff='"GitLab Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

function Ic({name,size=16,color="currentColor"}){
const d={
"tanuki-ai":<path fillRule="evenodd" clipRule="evenodd" d="M2.377.266a.4.4 0 0 0-.754 0l-.291.823a.4.4 0 0 1-.243.243l-.823.291a.4.4 0 0 0 0 .754l.823.291a.4.4 0 0 1 .243.243l.291.823a.4.4 0 0 0 .754 0l.291-.823a.4.4 0 0 1 .243-.243l.823-.291a.4.4 0 0 0 0-.754l-.823-.291a.4.4 0 0 1-.243-.243L2.377.266Zm12.018 6.602-.014-.038-.55-1.44-.172.53-.337 1.035H6.678L6.342 5.92l-.172-.528-.551 1.445-.004.01-.004.01-.012.03a1.557 1.557 0 0 0 .512 1.78l.001.001.003.003.01.008.01.008.004.002 2.474 1.862.005.004 1.232.935.148.112.146-.112 1.233-.935.006-.004 2.49-1.873.006-.004.009-.006a1.558 1.558 0 0 0 .51-1.79l-.003-.009Zm.391 3-2.502 1.88-1.233.936-.748.569a.505.505 0 0 1-.61 0l-.75-.569-1.232-.935-2.485-1.87-.013-.011-.007-.005A3.057 3.057 0 0 1 4.2 6.343l.017-.042L5.431 3.12l.068-.178.043-.114.173-.453.017-.045.118-.308a.425.425 0 0 1 .356-.27.43.43 0 0 1 .46.314l.099.305.004.013.193.594.06.181.746 2.296h4.464l.747-2.296.06-.18.193-.595.004-.013.099-.305a.433.433 0 0 1 .648-.248.43.43 0 0 1 .168.204l.116.305.019.048.171.45.045.117.068.177L15.784 6.3l.016.044a3.057 3.057 0 0 1-1.007 3.518l-.007.006ZM3.03 11.333a.5.5 0 0 1 .942 0l.364 1.028a.5.5 0 0 0 .304.304l1.028.364a.5.5 0 0 1 0 .942l-1.028.364a.5.5 0 0 0-.304.304l-.364 1.028a.5.5 0 0 1-.942 0l-.364-1.028a.5.5 0 0 0-.304-.304l-1.028-.364a.5.5 0 0 1 0-.942l1.028-.364a.5.5 0 0 0 .304-.304l.364-1.028Z" fill={color}/>,
"flow-ai":<path d="M7.156 1.446c.412-.662 1.437-.614 1.762.141l1.447 3.362a.75.75 0 0 1-1.378.593l-.988-2.295-1.113 2.591c-.202.47-.578.846-1.048 1.048l-2.59 1.113 2.59 1.115c.47.203.846.577 1.048 1.047l1.113 2.59 1.312-3.048.33-.779a2.75 2.75 0 0 1 2.532-1.674h.956l-.97-.97a.75.75 0 0 1 1.061-1.06L16 8l-2.78 2.78a.75.75 0 0 1-1.06-1.06l.97-.97h-.957c-.501 0-.954.3-1.15.761l-.333.782-.001.003-1.77 4.116c-.348.807-1.49.807-1.838 0l-1.573-3.658a.501.501 0 0 0-.262-.262L1.587 8.918c-.806-.347-.806-1.49 0-1.837l3.66-1.573a.501.501 0 0 0 .261-.262l1.573-3.659.075-.141Z" fill={color}/>,
"agent-ai":<path d="M14.25 1a.75.75 0 0 1 .75.75V8.5l-.004.07a4.46 4.46 0 0 1-2.176 3.728l-4.284 2.55-.121.061a1 1 0 0 1-.9-.06L3.19 12.295A4.46 4.46 0 0 1 1.01 8.75l-.005-.174L1 8.5V1.75a.75.75 0 0 1 1.5 0v3.373a4.44 4.44 0 0 1 2.728-1.117L5.457 4h5.08l.23.006a4.44 4.44 0 0 1 2.733 1.12V1.75a.75.75 0 0 1 .75-.75M5.457 5.5a2.957 2.957 0 0 0-1.504 5.502l4.07 2.404 4.03-2.397A2.963 2.963 0 0 0 10.537 5.5zm5.293 2a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5z" fill={color}/>,
"link":<path fillRule="evenodd" clipRule="evenodd" d="M9.929 3.132a2.078 2.078 0 1 1 2.94 2.94l-.65.648a.75.75 0 0 0 1.061 1.06l.649-.648a3.579 3.579 0 0 0-5.06-5.06L6.218 4.72a3.578 3.578 0 0 0 0 5.06.75.75 0 0 0 1.061-1.06 2.078 2.078 0 0 1 0-2.94L9.93 3.132Zm-.15 3.086a.75.75 0 0 0-1.057 1.064c.816.81.818 2.13.004 2.942l-2.654 2.647a2.08 2.08 0 0 1-2.94-2.944l.647-.647a.75.75 0 0 0-1.06-1.06l-.648.647a3.58 3.58 0 0 0 5.06 5.066l2.654-2.647a3.575 3.575 0 0 0-.007-5.068Z" fill={color}/>,
"star-o":<path d="M8 1.25l2.03 4.11 4.54.66-3.29 3.2.78 4.53L8 11.67l-4.06 2.08.78-4.53-3.29-3.2 4.54-.66L8 1.25z" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>,
"search":<><circle cx="7" cy="7" r="4.25" fill="none" stroke={color} strokeWidth="1.5"/><path d="M10.25 10.25L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
"project":<path fillRule="evenodd" clipRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h4.79a.75.75 0 0 1 .53.22l1.28 1.28h3.85a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-10.5A.75.75 0 0 1 2 12.75V2.75zm1.5.75v8.5h9V5H9.11a.75.75 0 0 1-.53-.22L7.3 3.5H3.5z" fill={color}/>,
"group":<><path d="M5.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="none" stroke={color} strokeWidth="1.3"/><path d="M1 14c0-2.49 2.01-4.5 4.5-4.5S10 11.51 10 14" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/><path d="M10.5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke={color} strokeWidth="1.3"/><path d="M11 9.5c1.66 0 3.5 1.12 3.5 3" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"package":<path fillRule="evenodd" clipRule="evenodd" d="M8.27 1.1a.75.75 0 0 0-.54 0l-6 2.5A.75.75 0 0 0 1.25 4.3v7.4a.75.75 0 0 0 .48.7l6 2.5a.75.75 0 0 0 .54 0l6-2.5a.75.75 0 0 0 .48-.7V4.3a.75.75 0 0 0-.48-.7l-6-2.5zM8 2.62L3.41 4.53 8 6.44l4.59-1.91L8 2.62zM2.75 5.57v5.58L7.25 13V7.42L2.75 5.57zm6 7.43 4.5-1.85V5.57L8.75 7.42V13z" fill={color}/>,
"tag":<path fillRule="evenodd" clipRule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h5a.75.75 0 0 1 .53.22l5.5 5.5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5.5-5.5A.75.75 0 0 1 2 7.75v-5zM5.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color}/>,
"snippet":<><path d="M4 4.5l-3 3.5 3 3.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4.5l3 3.5-3 3.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.5 2l-3 12" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"chevron-left":<path d="M10.5 3L5.5 8l5 5" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>,
"chevron-down":<path d="M3 5.5l5 5 5-5" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>,
"check-circle":<><circle cx="8" cy="8" r="7" fill="none" stroke={color} strokeWidth="1.3"/><path d="M5 8l2 2 4-4" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>,
"external-link":<><path d="M12 9v3.25a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 .75-.75H7" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/><path d="M10 2h4v4M14 2L7.5 8.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></>,
"settings":<><circle cx="8" cy="8" r="2.25" fill="none" stroke={color} strokeWidth="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"namespace":<><rect x="1.5" y="1.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3"/><rect x="9.5" y="1.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3"/><rect x="5.5" y="9.5" width="5" height="5" rx=".75" fill="none" stroke={color} strokeWidth="1.3"/><path d="M4 6.5v2.25c0 .414.336.75.75.75H5.5M12 6.5v2.25a.75.75 0 0 1-.75.75H10.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"close":<path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>,
"plus":<path d="M8 2.5v11M2.5 8h11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>,
"eye":<><path d="M8 4C4.5 4 1.7 7.1 1.1 7.8a.5.5 0 0 0 0 .4C1.7 8.9 4.5 12 8 12s6.3-3.1 6.9-3.8a.5.5 0 0 0 0-.4C14.3 7.1 11.5 4 8 4z" fill="none" stroke={color} strokeWidth="1.3"/><circle cx="8" cy="8" r="2" fill={color}/></>,
"filter":<path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm2 5A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75zm3 5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75z" fill={color}/>,
"user":<><circle cx="8" cy="5" r="3" fill="none" stroke={color} strokeWidth="1.3"/><path d="M2 15c0-3.31 2.69-6 6-6s6 2.69 6 6" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"earth":<><circle cx="8" cy="8" r="6.25" fill="none" stroke={color} strokeWidth="1.3"/><ellipse cx="8" cy="8" rx="3" ry="6.25" fill="none" stroke={color} strokeWidth="1.3"/><path d="M2 8h12" stroke={color} strokeWidth="1.3"/></>,
"sort-desc":<><path d="M4 2v11M2 11l2 2 2-2" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 4h6M8 7h4.5M8 10h3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"fork":<><path d="M5 2v4M11 2v4M8 10v4M5 6c0 2.2 1.3 4 3 4s3-1.8 3-4" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/><circle cx="5" cy="2" r="1" fill={color}/><circle cx="11" cy="2" r="1" fill={color}/><circle cx="8" cy="14" r="1" fill={color}/></>,
"clock":<><circle cx="8" cy="8" r="6.25" fill="none" stroke={color} strokeWidth="1.3"/><path d="M8 4.5V8l2.5 1.5" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></>,
"chart":<><path d="M2 13h12M4 9v2M7 5v6M10 7v4M13 3v8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
"inbox":<><path d="M2 10l2.5-7h7L14 10" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/><path d="M2 10h3.5a1 1 0 0 1 1 1 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 0 1 1-1H14v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10z" fill="none" stroke={color} strokeWidth="1.3"/></>,
"book-open":<><path d="M8 4.25C8 4.25 6.25 3 3 3v9.5c3.25 0 5 1.25 5 1.25s1.75-1.25 5-1.25V3c-3.25 0-5 1.25-5 1.25z" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/><path d="M8 4.25v9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/></>,
"command":<><path d="M5.5 2.5a2 2 0 1 0 0 4h2v-2a2 2 0 0 0-2-2zM10.5 13.5a2 2 0 1 0 0-4h-2v2a2 2 0 0 0 2 2zM2.5 10.5a2 2 0 1 0 4 0v-2h-2a2 2 0 0 0-2 2zM13.5 5.5a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2zM6.5 6.5h3v3h-3z" fill="none" stroke={color} strokeWidth="1.2" strokeLinejoin="round"/></>,
};
return <svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>{d[name]||null}</svg>;
}

function FBadge(){return <span title="Foundational" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:11,background:t.p50,border:`1px solid ${t.p100}`,flexShrink:0}}><Ic name="tanuki-ai" size={12} color={t.purple500}/></span>}

function Badge({children,variant="neutral",sz="sm"}){
const v={neutral:{bg:t.n50,c:t.n700,b:t.n100},purple:{bg:t.p50,c:t.p700,b:t.p100},blue:{bg:t.b50,c:t.b600,b:t.b100},green:{bg:t.g50,c:t.g600,b:t.g100},orange:{bg:t.o50,c:t.o500,b:t.o100}}[variant]||{bg:t.n50,c:t.n700,b:t.n100};
return <span style={{display:"inline-flex",alignItems:"center",gap:4,padding:sz==="sm"?"1px 6px":"2px 8px",fontSize:sz==="sm"?"11px":"13px",fontWeight:500,borderRadius:4,lineHeight:"18px",background:v.bg,color:v.c,border:`1px solid ${v.b}`}}>{children}</span>;
}

function VisBadge({vi}){
const m={Public:{bg:t.g50,c:t.g600,b:t.g100,ic:"earth"},"Group-scoped":{bg:t.b50,c:t.b600,b:t.b100,ic:"group"},"Org-wide":{bg:t.p50,c:t.p700,b:t.p100,ic:"namespace"},Private:{bg:t.n50,c:t.n700,b:t.n100,ic:"eye"}}[vi]||{bg:t.n50,c:t.n700,b:t.n100,ic:"eye"};
return <span style={{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",fontSize:"12px",fontWeight:500,borderRadius:4,background:m.bg,color:m.c,border:`1px solid ${m.b}`}}><Ic name={m.ic} size={12} color={m.c}/>{vi}</span>;
}

const items=[
{id:1,nm:"CI Expert Agent (Beta)",tp:"agent",au:"GitLab",ds:"Helps you create, debug, and optimize GitLab CI/CD pipelines. Generates .gitlab-ci.yml configurations, explains syntax, suggests templates.",vi:"Public",ns:342,st:89,fo:true,up:"Updated 2 weeks ago",tg:["CI/CD / DevOps"],sr:94,fk:null},
{id:2,nm:"Security Analyst Agent",tp:"agent",au:"GitLab",ds:"Automate vulnerability management and security workflows. Analyzes, triages, and remediates security findings autonomously.",vi:"Public",ns:278,st:67,fo:true,up:"Updated 1 month ago",tg:["Security Scanning"],sr:87,fk:null},
{id:3,nm:"Issue to MR",tp:"flow",au:"GitLab",ds:"Automatically generates a merge request from an issue description, including branch creation, code changes, and test scaffolding.",vi:"Public",ns:891,st:203,fo:true,up:"Updated 3 days ago",tg:["Project Management","Code Review"],sr:91,fk:null},
{id:4,nm:"Fix Pipeline",tp:"flow",au:"GitLab",ds:"Diagnoses and fixes common CI pipeline failures. Analyzes logs, identifies root causes, and proposes fixes as merge requests.",vi:"Public",ns:654,st:178,fo:true,up:"Updated 1 week ago",tg:["CI/CD / DevOps"],sr:89,fk:null},
{id:5,nm:"Planner Agent",tp:"agent",au:"GitLab",ds:"Automates project planning and task organization workflows. Breaks down complex projects into actionable issues and epics.",vi:"Public",ns:156,st:41,fo:true,up:"Updated 8 hours ago",tg:["Project Management"],sr:82,fk:null},
{id:6,nm:"Code Review Flow",tp:"flow",au:"GitLab",ds:"Analyzes code changes, MR comments, and project context to streamline code reviews with AI-native analysis and feedback.",vi:"Public",ns:412,st:94,fo:true,up:"Updated 5 days ago",tg:["Code Review"],sr:90,fk:null},
{id:7,nm:"Claude Agent by GitLab",tp:"agent",au:"GitLab",ds:"Claude Code Agent by GitLab. Uses GitLab-managed credentials for Anthropic Claude-powered code assistance.",vi:"Public",ns:187,st:56,fo:true,ex:true,up:"Updated 2 months ago",tg:["Code Review"],sr:86,fk:null},
{id:8,nm:"MR Security Scanner",tp:"agent",au:"Acme Corp",ds:"Custom agent forked from Security Analyst. Tuned for SQL injection and XSS detection in merge request diffs.",vi:"Group-scoped",ns:14,st:5,fo:false,up:"Updated 1 week ago",tg:["Security Scanning"],sr:78,fk:"Security Analyst Agent v1.4.0"},
{id:9,nm:"Dependency Scanner Flow",tp:"flow",au:"Acme Corp",ds:"Scans project dependencies for known vulnerabilities and auto-creates issues for critical findings with priority labels.",vi:"Group-scoped",ns:43,st:12,fo:false,up:"Updated 3 weeks ago",tg:["Dependency Management","Security Scanning"],sr:81,fk:null},
{id:10,nm:"Jira Sync MCP",tp:"mcp",au:"Atlassian",ds:"Bidirectional sync between GitLab issues and Jira tickets. Keeps status, labels, and assignees in sync across both platforms.",vi:"Public",ns:67,st:28,fo:false,ex:true,up:"Updated 5 days ago",tg:["Project Management"],sr:null,fk:null},
{id:11,nm:"Auto-Docs Generator",tp:"flow",au:"Festo Engineering",ds:"Generates and maintains API documentation from code changes. Triggered on MR merge to main branch.",vi:"Org-wide",ns:31,st:8,fo:false,up:"Updated 1 week ago",tg:["Documentation"],sr:73,fk:null},
{id:12,nm:"Slack Notifications MCP",tp:"mcp",au:"SlackHQ",ds:"Sends configurable Slack notifications for pipeline events, MR approvals, deployment status, and security alerts.",vi:"Public",ns:189,st:73,fo:false,ex:true,up:"Updated 2 weeks ago",tg:["CI/CD / DevOps"],sr:null,fk:null},
{id:13,nm:"Terraform Plan Reviewer",tp:"agent",au:"Mercedes-Benz MBition",ds:"Reviews Terraform plan output in MR pipelines. Flags risky changes, estimates cost impact, suggests safer alternatives.",vi:"Public",ns:52,st:31,fo:false,up:"Updated 2 weeks ago",tg:["CI/CD / DevOps"],sr:76,fk:null},
{id:14,nm:"Sprint Retro Summarizer",tp:"flow",au:"Kraken Engineering",ds:"Aggregates issue comments, MR discussions, and pipeline metrics to generate a structured retrospective summary.",vi:"Public",ns:18,st:14,fo:false,up:"Updated 4 days ago",tg:["Project Management"],sr:71,fk:null},
{id:15,nm:"Stale Issue Cleanup",tp:"flow",au:"T-Mobile Platform",ds:"Identifies and labels stale issues based on configurable inactivity thresholds. Optionally closes after a warning period.",vi:"Public",ns:71,st:22,fo:false,up:"Updated 1 week ago",tg:["Project Management"],sr:85,fk:null},
{id:16,nm:"ISO 26262 Safety Review",tp:"skill",au:"Acme Corp",ds:"Loads ISO 26262 functional safety guidelines and ASIL checklists when agents review safety-critical automotive code. Activates on discussions of ASIL-rated components, hazard analysis, and automotive compliance.",vi:"Group-scoped",ns:8,st:4,fo:false,up:"Last used 2 hours ago",tg:["Security Scanning"],sr:null,fk:null,src:{repo:"acme-corp/safety-standards",path:"iso-26262/SKILL.md",sync:"Synced 3 days ago"},frontMatter:{name:"iso-26262-safety-review",version:"1.2.0",audience:"automotive-platform-team",slashCommand:"safety-review"},body:`# ISO 26262 Safety Review

Apply ISO 26262 functional safety guidelines when reviewing safety-critical automotive code. This skill should activate when the agent encounters discussions of ASIL-rated components, hazard analysis, or automotive compliance.

## When to use this skill

Load this skill when reviewing or generating code that:

- Touches ASIL-rated components (ASIL-A through ASIL-D)
- Implements safety mechanisms or fault detection
- Modifies hazard analysis or FMEA artifacts
- Affects automotive E/E architecture

## Review process

1. Identify the ASIL classification of affected components. If unclear, ask before proceeding.
2. Apply the ASIL-specific checklist from \`references/asil-checklist.md\`.
3. Validate that safety mechanisms have corresponding tests and that test coverage matches the required level.
4. Flag any deviations from the team's coding standard documented in \`references/coding-standard.md\`.

See \`references/examples.md\` for worked examples of safety-critical review feedback.`},
{id:17,nm:"API Documentation Style",tp:"skill",au:"GitLab",ds:"Applies GitLab's API documentation conventions when agents generate or review reference material. Covers tone, structure, request/response examples, and error code patterns.",vi:"Public",ns:126,st:34,fo:true,up:"Last used 12 minutes ago",tg:["Documentation"],sr:null,fk:null,src:{repo:"gitlab-org/docs-standards",path:"api-style/SKILL.md",sync:"Synced 1 week ago"},frontMatter:{name:"api-documentation-style",version:"2.0.1",audience:"developers"},body:`# API Documentation Style

Applies GitLab's API documentation conventions when agents generate or review reference material.

## Scope

Use this skill when working with:

- REST and GraphQL endpoint documentation
- Request and response examples
- Error code reference tables
- Authentication and pagination patterns

## Conventions

Follow the structure documented in \`references/structure.md\`. Lead with the use case, then the endpoint, then parameters in a table. Examples come last.

Tone is direct and instructional. Avoid marketing language. Prefer present tense ("Returns the project") over future tense ("Will return the project").

For error responses, use the matrix in \`references/error-codes.md\` rather than re-describing common errors per endpoint.`},
{id:18,nm:"Accessible React Patterns",tp:"skill",au:"GitLab",ds:"Provides WCAG AA patterns for React component authoring and review. Loaded when agents generate or review frontend code touching user-facing UI.",vi:"Public",ns:87,st:22,fo:true,up:"Last used 4 hours ago",tg:["Code Review"],sr:null,fk:null,src:{repo:"gitlab-org/frontend-patterns",path:"a11y-react/SKILL.md",sync:"Synced 5 days ago"},frontMatter:{name:"accessible-react-patterns",version:"1.4.2",audience:"frontend-developers"},body:`# Accessible React Patterns

Provides WCAG AA patterns for React component authoring and review. Load this skill when generating or reviewing frontend code that touches user-facing UI.

## Activation triggers

- New React components in \`src/components/\` or equivalent
- Changes to existing components that affect rendered markup
- Modal, dialog, popover, menu, or tab patterns
- Form inputs, validation, and error messaging

## Patterns

The full pattern library is in \`references/patterns.md\`. Common starting points:

- **Focus management** for dialog and route transitions
- **ARIA labelling** for icon-only buttons and decorative elements
- **Keyboard support** for custom interactive elements

When in doubt, prefer native semantics over ARIA.`},
{id:19,nm:"RSpec Test Generation",tp:"skill",au:"Acme Corp",ds:"Guides agents on generating unit and integration tests matching the team's RSpec conventions, fixture patterns, and mocking style.",vi:"Group-scoped",ns:19,st:6,fo:false,up:"Last used 1 day ago",tg:["Code Review"],sr:null,fk:null,src:{repo:"acme-corp/test-patterns",path:"rspec/SKILL.md",sync:"Synced 2 weeks ago"},frontMatter:{name:"rspec-test-generation",version:"0.9.3",audience:"backend-developers",slashCommand:"gen-spec"},body:`# RSpec Test Generation

Guides agents on generating unit and integration tests that match the team's RSpec conventions, fixture patterns, and mocking style.

## Conventions

- Use \`describe\` for classes and modules, \`context\` for branches.
- One expectation per example unless they're closely related.
- Prefer \`let\` over instance variables. Avoid \`before(:all)\`.

## Fixtures

The team uses FactoryBot. Factories live in \`spec/factories/\`. See \`references/factories.md\` for the existing factories and their traits.

## Mocking

Use \`instance_double\` and \`class_double\` over plain doubles. Stub external services with WebMock. Examples in \`references/mocking.md\`.`},
];

const pendingReqs=[
{id:101,nm:"DAST Scanner Flow",tp:"flow",by:"Jamie Chen",dt:"2 days ago",ds:"Triggers dynamic application security testing on staging deployments."},
{id:102,nm:"License Compliance Agent",tp:"agent",by:"Alex Rivera",dt:"5 days ago",ds:"Scans dependencies for license compliance issues in proprietary projects."},
{id:103,nm:"Confluence Sync MCP",tp:"mcp",by:"Morgan Blake",dt:"1 week ago",ds:"Syncs GitLab wiki pages with Confluence spaces. Bidirectional updates."},
];

// Item IDs enabled in the current demo project (frontend-app)
const enabledInProject=new Set([1,3,4,6,11]);

// Initial request states for the User persona, keyed by item id.
// Demonstrates the four states a Consumer can be in: not-requested (absent),
// pending, approved (treated as enabled), rejected (re-requestable with reason).
const initialUserReqStates={
2:{status:"pending",when:"2 hours ago",routedTo:"Maintainers of frontend-app"},
13:{status:"rejected",when:"yesterday",by:"Sebastian Rehm",reason:"We're standardizing on the Acme-tuned fork instead. Use 'MR Security Scanner' for now."},
};

// Type tabs matching Roman's vision doc structure. "All" is the umbrella for cross-type discovery.
const typeTabs=[
{k:"all",l:"All",ic:"package"},
{k:"agent",l:"Agents",ic:"agent-ai"},
{k:"flow",l:"Flows",ic:"flow-ai"},
{k:"mcp",l:"MCP Servers",ic:"link"},
{k:"skill",l:"Skills",ic:"book-open"},
];

function TypeTabs({items,active,setActive}){
const count=(k)=>k==="all"?items.length:items.filter(i=>i.tp===k).length;
return <div style={{display:"flex",gap:0,borderBottom:`1px solid ${t.n100}`,marginBottom:16,overflowX:"auto"}}>
{typeTabs.map(tb=>{const c=count(tb.k);const isAct=active===tb.k;return <button key={tb.k} onClick={()=>setActive(tb.k)} style={{padding:"8px 12px",border:"none",background:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,fontSize:"13px",fontWeight:isAct?600:500,color:isAct?t.n900:t.n500,fontFamily:ff,borderBottom:isAct?`2px solid ${t.b500}`:"2px solid transparent",marginBottom:-1,whiteSpace:"nowrap"}}><Ic name={tb.ic} size={14} color={isAct?t.n900:t.n500}/>{tb.l}<span style={{fontSize:"12px",color:isAct?t.n500:t.n400,fontWeight:500}}>{c}</span></button>})}
</div>;
}

function SearchBar({tq,setTq,sb,setSb,vm,setVm,placeholder}){
return <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
<div style={{flex:1,position:"relative"}}>
<div style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}><Ic name="search" size={14} color={t.n400}/></div>
<input value={tq} onChange={e=>setTq(e.target.value)} placeholder={placeholder||"Search catalog..."} style={{width:"100%",height:32,padding:"0 12px 0 32px",border:`1px solid ${t.n200}`,borderRadius:6,fontSize:"13px",lineHeight:"24px",fontFamily:ff,color:t.n950,background:t.n0,outline:"none",boxSizing:"border-box"}}/>
</div>
<div style={{display:"flex",alignItems:"center"}}><select value={sb} onChange={e=>setSb(e.target.value)} style={{height:32,padding:"0 24px 0 8px",border:`1px solid ${t.n200}`,borderRadius:"6px 0 0 6px",fontSize:"13px",fontFamily:ff,background:t.n0,color:t.n950,cursor:"pointer",appearance:"none",WebkitAppearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l3 3 3-3' stroke='%23666' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center",borderRight:"none"}}><option value="ns">Recommended</option><option value="st">Most stars</option><option value="nm">Name</option></select><button style={{height:32,width:32,border:`1px solid ${t.n200}`,borderRadius:"0 6px 6px 0",background:t.n0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}><Ic name="sort-desc" size={16} color={t.n600}/></button></div>
<div style={{display:"flex"}}><button onClick={()=>setVm("list")} style={{height:32,width:32,border:`1px solid ${t.n200}`,borderRadius:"4px 0 0 4px",background:vm==="list"?t.n50:t.n0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,borderRight:"none"}}><svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 3h12M2 6.5h12M2 10h12M2 13.5h12" stroke={vm==="list"?t.n950:t.n400} strokeWidth="1.3" strokeLinecap="round"/></svg></button><button onClick={()=>setVm("grid")} style={{height:32,width:32,border:`1px solid ${t.n200}`,borderRadius:"0 4px 4px 0",background:vm==="grid"?t.n50:t.n0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}><svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1" stroke={vm==="grid"?t.n950:t.n400} strokeWidth="1.3" fill="none"/><rect x="9" y="2" width="5" height="5" rx="1" stroke={vm==="grid"?t.n950:t.n400} strokeWidth="1.3" fill="none"/><rect x="2" y="9" width="5" height="5" rx="1" stroke={vm==="grid"?t.n950:t.n400} strokeWidth="1.3" fill="none"/><rect x="9" y="9" width="5" height="5" rx="1" stroke={vm==="grid"?t.n950:t.n400} strokeWidth="1.3" fill="none"/></svg></button></div>
</div>;
}

function Row({it,onClick,last,reqState}){
const[h,setH]=useState(false);
const typeIcon={agent:"agent-ai",flow:"flow-ai",mcp:"link",skill:"book-open"}[it.tp];
return <div><div onClick={()=>onClick(it)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{padding:h?"12px 12px":"12px 0",cursor:"pointer",background:h?t.n10:"transparent",margin:h?"0 -12px":"0",transition:"background 0.1s",display:"flex",gap:12,alignItems:"flex-start",borderRadius:h?6:0}}>
<div style={{flexShrink:0,width:28,height:28,borderRadius:4,background:t.n50,border:`1px solid ${t.n100}`,display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}><Ic name={typeIcon} size={14} color={t.n700}/></div>
<div style={{flex:1,minWidth:0}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
<span style={{fontWeight:600,fontSize:"15px",color:t.n950}}>{it.nm}</span>
{it.fo&&<FBadge/>}
{it.fk&&<span style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:"11px",color:t.n400}}><Ic name="fork" size={11} color={t.n400}/>forked</span>}
{reqState?.status==="pending"&&<span style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:"11px",color:t.o500,background:t.o50,border:`1px solid ${t.o100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}><Ic name="clock" size={10} color={t.o500}/>Requested</span>}
{reqState?.status==="rejected"&&<span style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:"11px",color:t.r500,background:t.r50,border:`1px solid ${t.r500}33`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>Declined</span>}
</div>
<div style={{fontSize:"13px",color:t.n600,lineHeight:"20px",marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.ds}</div>
<div style={{fontSize:"13px",color:t.n400,display:"flex",alignItems:"center",gap:4,flexWrap:"wrap"}}>
<Ic name={{"Public":"earth","Group-scoped":"group","Org-wide":"namespace","Private":"eye"}[it.vi]} size={12} color={t.n400}/><span>{it.vi}</span><span style={{margin:"0 4px"}}>·</span>
<Ic name="namespace" size={12} color={t.n400}/><span>{it.ns} {it.tp==="skill"?"available":"namespaces"}</span><span style={{margin:"0 4px"}}>·</span>
<Ic name="user" size={12} color={t.n400}/><span>{it.up} by {it.au}</span>
{it.ex&&<><span style={{margin:"0 4px"}}>·</span><Ic name="external-link" size={12} color={t.n400}/><span>External</span></>}
</div></div></div>{!last&&<div style={{borderBottom:`1px solid ${t.n100}`}}/>}</div>;
}

function Card({it,onClick,reqState}){
const[h,setH]=useState(false);
return <div onClick={()=>onClick(it)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{border:`1px solid ${h?t.b200:t.n100}`,borderRadius:4,padding:16,cursor:"pointer",transition:"all 0.1s",background:h?t.n10:t.n0,display:"flex",flexDirection:"column",minHeight:160,overflow:"hidden",boxSizing:"border-box",position:"relative"}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
<Ic name={{agent:"agent-ai",flow:"flow-ai",mcp:"link",skill:"book-open"}[it.tp]} size={16} color={t.n950}/>
<span style={{fontWeight:600,fontSize:"14px",color:t.n950,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.nm}</span>
{reqState?.status==="pending"&&<span style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:"11px",color:t.o500,background:t.o50,border:`1px solid ${t.o100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px",flexShrink:0}}><Ic name="clock" size={10} color={t.o500}/>Requested</span>}
{reqState?.status==="rejected"&&<span style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:"11px",color:t.r500,background:t.r50,border:`1px solid ${t.r500}33`,padding:"0 6px",borderRadius:4,lineHeight:"18px",flexShrink:0}}>Declined</span>}
</div>
<div style={{fontSize:"13px",color:t.n600,lineHeight:"18px",marginBottom:10,flex:1,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{it.ds}</div>
<div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>{it.tg.slice(0,2).map(tg=><Badge key={tg} variant="neutral" sz="sm">{tg}</Badge>)}</div>
<div style={{display:"flex",alignItems:"center",gap:8,fontSize:"12px",color:t.n400,borderTop:`1px solid ${t.n100}`,paddingTop:8,marginTop:"auto"}}>
<span style={{display:"flex",alignItems:"center",gap:3}}><Ic name="namespace" size={11} color={t.n400}/>{it.ns}</span>
<span style={{display:"flex",alignItems:"center",gap:3}}><Ic name="star-o" size={11} color={t.n400}/>{it.st}</span>
<span style={{display:"flex",alignItems:"center",gap:3}}><Ic name={{"Public":"earth","Group-scoped":"group","Org-wide":"namespace","Private":"eye"}[it.vi]} size={11} color={t.n400}/>{it.vi}</span>
</div>
{it.fo&&<div style={{position:"absolute",bottom:12,right:12}}><FBadge/></div>}
</div>;
}

function RequestedTab({onItemClick}){
const[reqs,setReqs]=useState(pendingReqs);
// Synthesize an item-like object for a pending request so Detail can render it
const reqToItem=(r)=>({id:"req-"+r.id,nm:r.nm,tp:r.tp,au:r.by,ds:r.ds,vi:"Group-scoped",ns:0,st:0,fo:false,up:"Requested "+r.dt,tg:["Project Management"],sr:null,fk:null,isPending:true});
return <div>{reqs.length===0?<div style={{textAlign:"center",padding:40,color:t.n400}}>No pending requests</div>:reqs.map((r,i)=><div key={r.id} style={{padding:"12px 0",borderBottom:i<reqs.length-1?`1px solid ${t.n100}`:"none"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
<div onClick={()=>onItemClick&&onItemClick(reqToItem(r))} style={{cursor:"pointer",flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
<Ic name={{agent:"agent-ai",flow:"flow-ai",mcp:"link",skill:"book-open"}[r.tp]} size={14} color={t.n600}/>
<span style={{fontWeight:600,fontSize:"14px",color:t.n950}}>{r.nm}</span>
<Badge variant="neutral" sz="sm">{r.tp}</Badge>
</div>
<div style={{fontSize:"13px",color:t.n600,marginBottom:4}}>{r.ds}</div>
<div style={{fontSize:"12px",color:t.n400}}>Requested by {r.by} · {r.dt}</div>
</div>
<div style={{display:"flex",gap:6,flexShrink:0,marginLeft:16}}>
<button onClick={(e)=>{e.stopPropagation();setReqs(p=>p.filter(x=>x.id!==r.id))}} style={{height:28,padding:"0 10px",borderRadius:4,border:"none",background:t.b500,color:t.n0,fontWeight:600,fontSize:"13px",fontFamily:ff,cursor:"pointer"}}>Approve</button>
<button onClick={(e)=>{e.stopPropagation();setReqs(p=>p.filter(x=>x.id!==r.id))}} style={{height:28,padding:"0 10px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontWeight:500,fontSize:"13px",fontFamily:ff,cursor:"pointer"}}>Reject</button>
</div>
</div>
</div>)}</div>;
}

function GroupPerformanceTab(){
const agents=[
{nm:"CI Expert Agent",proj:"frontend-app",sr:94,sess:128,cred:342},
{nm:"Security Analyst Agent",proj:"api-gateway",sr:87,sess:84,cred:218},
{nm:"Issue to MR",proj:"frontend-app",sr:91,sess:267,cred:512},
{nm:"Code Review Flow",proj:"api-gateway",sr:90,sess:156,cred:298},
{nm:"MR Security Scanner",proj:"security-tools",sr:78,sess:34,cred:87},
{nm:"Fix Pipeline",proj:"infra-deploy",sr:89,sess:198,cred:445},
];
return <div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:20}}>
{[{l:"Active agents",v:"12",s:"+3 this month",sc:t.g600},{l:"Total sessions",v:"867",s:"last 30 days"},{l:"Avg success rate",v:"87%",s:"across all agents",sc:t.g600},{l:"Credits consumed",v:"1,902",s:"last 30 days"}].map((c,i)=><div key={i} style={{padding:12,background:t.n10,borderRadius:4,border:`1px solid ${t.n100}`}}><div style={{fontSize:"12px",color:t.n400,marginBottom:2}}>{c.l}</div><div style={{fontSize:"20px",fontWeight:600,color:c.sc||t.n950}}>{c.v}</div>{c.s&&<div style={{fontSize:"11px",color:t.n300}}>{c.s}</div>}</div>)}
</div>
<table style={{width:"100%",borderCollapse:"collapse",fontSize:"14px"}}>
<thead><tr style={{borderBottom:`2px solid ${t.n100}`}}>
{["Agent","Project","Success rate","Sessions","Credits"].map(h=><th key={h} style={{padding:"8px 12px",textAlign:"left",fontWeight:600,fontSize:"12px",color:t.n500,textTransform:"uppercase",letterSpacing:"0.5px"}}>{h}</th>)}
</tr></thead>
<tbody>{agents.map((a,i)=><tr key={i} style={{borderBottom:`1px solid ${t.n100}`}}>
<td style={{padding:"8px 12px",fontWeight:500,color:t.n950}}>{a.nm}</td>
<td style={{padding:"8px 12px",color:t.n600}}>{a.proj}</td>
<td style={{padding:"8px 12px"}}><span style={{color:a.sr>=85?t.g500:a.sr>=70?t.o500:t.r500,fontWeight:500}}>{a.sr}%</span></td>
<td style={{padding:"8px 12px",color:t.n600}}>{a.sess}</td>
<td style={{padding:"8px 12px",color:t.n600}}>{a.cred}</td>
</tr>)}</tbody>
</table>
</div>;
}

function Modal({title,children,onConfirm,onCancel,confirmLabel,confirmDanger,footer,wide}){
return <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:20}}>
<div style={{background:t.n0,borderRadius:4,boxShadow:"0 4px 16px rgba(0,0,0,0.15)",width:"100%",maxWidth:wide?640:480,maxHeight:"85vh",display:"flex",flexDirection:"column"}}>
<div style={{padding:"12px 16px",borderBottom:`1px solid ${t.n100}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<h3 style={{margin:0,fontSize:"16px",fontWeight:600,color:t.n950}}>{title}</h3>
<button onClick={onCancel} style={{width:24,height:24,border:"none",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}><Ic name="close" size={12} color={t.n500}/></button>
</div>
<div style={{padding:16,overflow:"auto",flex:1,fontSize:"14px",color:t.n700,lineHeight:"20px"}}>{children}</div>
{footer||<div style={{padding:"12px 16px",borderTop:`1px solid ${t.n100}`,display:"flex",justifyContent:"flex-end",gap:8}}>
<button onClick={onCancel} style={{height:32,padding:"0 12px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontWeight:500,fontSize:"14px",fontFamily:ff,cursor:"pointer"}}>Cancel</button>
<button onClick={onConfirm} style={{height:32,padding:"0 12px",borderRadius:4,border:"none",background:confirmDanger?t.r500:t.b500,color:t.n0,fontWeight:600,fontSize:"14px",fontFamily:ff,cursor:"pointer"}}>{confirmLabel}</button>
</div>}
</div>
</div>;
}

function VersionManagement({persona,itemName}){
const[versions,setVersions]=useState([
{v:"1.4.0",note:"Updated system prompt for improved diff analysis",ago:"3 days ago",deprecated:false},
{v:"1.3.2",note:"Added support for multi-file context",ago:"3 weeks ago",deprecated:true},
{v:"1.3.0",note:"Initial public release",ago:"2 months ago",deprecated:false},
]);
const[recommended,setRecommended]=useState("1.4.0");
const[onVersion,setOnVersion]=useState("1.3.0");
const[modal,setModal]=useState(null);
const[reviewing,setReviewing]=useState(null);
const latest=versions[0];
const onVersionObj=versions.find(x=>x.v===onVersion);
const recommendedObj=versions.find(x=>x.v===recommended);
const isDeprecated=onVersionObj?.deprecated;
const isOnRecommended=onVersion===recommended;

const toggleDeprecated=(v)=>setVersions(p=>p.map(x=>x.v===v?{...x,deprecated:!x.deprecated}:x));
const setAsRecommended=(v)=>setRecommended(v);
const restoreAsNew=(v)=>{
const src=versions.find(x=>x.v===v);
const parts=latest.v.split(".").map(Number);
parts[2]+=1;
const newV=parts.join(".");
setVersions(p=>[{v:newV,note:`Restored from v${v}: ${src.note}`,ago:"just now",deprecated:false,restoredFrom:v},...p]);
setRecommended(newV);
};

// USER persona: read-only — no version management at all
if(persona==="User"){
return <div>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:8}}>Version</div>
<div style={{padding:"8px 12px",background:t.n10,border:`1px solid ${t.n100}`,borderRadius:4,display:"flex",alignItems:"center",gap:8}}>
<Ic name="tag" size={14} color={t.n500}/>
<span style={{fontSize:"14px",color:t.n700}}>Running version <code style={{fontWeight:600,color:t.n950,fontFamily:"monospace"}}>{onVersion}</code></span>
</div>
<div style={{fontSize:"12px",color:t.n400,marginTop:6}}>Contact your maintainer if this needs to change.</div>
</div>;
}

// MAINTAINER persona: project admin side (update to recommended, see deprecated warnings — no arbitrary version picker)
if(persona==="Maintainer"){
return <div>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:12}}>Version management</div>

{isDeprecated&&<div style={{padding:"10px 12px",background:t.o50,border:`1px solid ${t.o100}`,borderRadius:4,marginBottom:12,display:"flex",gap:8,alignItems:"flex-start"}}>
<div style={{marginTop:1}}><Ic name="close" size={14} color={t.o500}/></div>
<div style={{flex:1}}>
<div style={{fontSize:"13px",fontWeight:600,color:t.o500,marginBottom:2}}>This version has been deprecated</div>
<div style={{fontSize:"13px",color:t.n700}}>v{onVersion} was marked as deprecated by the author. Update to the recommended version (v{recommended}).</div>
</div>
</div>}

{!isOnRecommended&&!isDeprecated&&<div style={{padding:"10px 12px",background:t.b50,border:`1px solid ${t.b100}`,borderRadius:4,marginBottom:12,display:"flex",gap:8,alignItems:"center"}}>
<Ic name="check-circle" size={14} color={t.b600}/>
<div style={{fontSize:"13px",color:t.n700,flex:1}}>The author recommends updating to v{recommended}.</div>
</div>}

<div style={{padding:"12px 14px",background:t.n10,border:`1px solid ${t.n100}`,borderRadius:4,marginBottom:12,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
<div style={{display:"flex",gap:24}}>
<div>
<div style={{fontSize:"11px",fontWeight:600,color:t.n500,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:2}}>You're on</div>
<code style={{fontSize:"14px",fontWeight:600,color:t.n950,fontFamily:"monospace"}}>v{onVersion}</code>
</div>
<div>
<div style={{fontSize:"11px",fontWeight:600,color:t.n500,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:2}}>Author recommends</div>
<code style={{fontSize:"14px",fontWeight:600,color:t.n950,fontFamily:"monospace"}}>v{recommended}</code>
</div>
</div>
{!isOnRecommended&&<button onClick={()=>setModal("update")} style={{height:28,padding:"0 10px",borderRadius:4,border:"none",background:t.b500,color:t.n0,fontWeight:600,fontSize:"13px",fontFamily:ff,cursor:"pointer"}}>Update to recommended</button>}
{isOnRecommended&&<span style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:"12px",color:t.b600,padding:"4px 8px",background:t.b50,border:`1px solid ${t.b100}`,borderRadius:4}}><Ic name="check-circle" size={12} color={t.b500}/>On recommended</span>}
</div>

<div style={{fontSize:"12px",fontWeight:600,color:t.n500,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:8}}>History</div>
{versions.map((ver,i)=><div key={ver.v} style={{display:"flex",gap:12,marginBottom:i<versions.length-1?16:0}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",width:16}}><div style={{width:10,height:10,borderRadius:5,background:ver.v===recommended?t.g500:ver.v===onVersion?t.b500:t.n200,flexShrink:0,marginTop:4}}/>{i<versions.length-1&&<div style={{width:1,flex:1,background:t.n100,marginTop:4}}/>}</div>
<div style={{flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2,flexWrap:"wrap"}}>
<code style={{fontSize:"14px",fontWeight:600,color:t.n950,fontFamily:"monospace"}}>{ver.v}</code>
{ver.v===recommended&&<span style={{fontSize:"11px",fontWeight:600,color:t.g600,background:t.g50,border:`1px solid ${t.g100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>recommended</span>}
{ver.v===onVersion&&<span style={{fontSize:"11px",fontWeight:600,color:t.b600,background:t.b50,border:`1px solid ${t.b100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>you're here</span>}
{ver.deprecated&&<span style={{fontSize:"11px",fontWeight:600,color:t.o500,background:t.o50,border:`1px solid ${t.o100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>deprecated</span>}
</div>
<div style={{fontSize:"13px",color:t.n600}}>{ver.note}</div>
<div style={{fontSize:"12px",color:t.n400}}>{ver.ago}</div>
</div></div>)}

{modal==="update"&&<Modal title="Update to recommended version" onConfirm={()=>{setOnVersion(recommended);setModal(null);}} onCancel={()=>setModal(null)} confirmLabel={`Update to v${recommended}`}>
<p style={{margin:"0 0 12px"}}>This will move you from <strong>v{onVersion}</strong> to <strong>v{recommended}</strong>. Future executions will use v{recommended}'s configuration.</p>
<div style={{padding:12,background:t.n10,border:`1px solid ${t.n100}`,borderRadius:4}}>
<div style={{fontSize:"12px",fontWeight:600,color:t.n500,marginBottom:4}}>What's in v{recommended}</div>
<div style={{fontSize:"13px",color:t.n700}}>{recommendedObj?.note}</div>
</div>
</Modal>}

</div>;
}

// ENGINEER persona: author/owner side (set recommended, restore older version as new, mark as deprecated)
return <div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950}}>Published versions</div>
<button style={{height:28,padding:"0 10px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontWeight:500,fontSize:"13px",fontFamily:ff,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4}}><Ic name="plus" size={12} color={t.n600}/>Publish new version</button>
</div>
<div style={{padding:"10px 12px",background:t.g50,border:`1px solid ${t.g100}`,borderRadius:4,marginBottom:12,display:"flex",gap:8,alignItems:"center"}}>
<Ic name="check-circle" size={14} color={t.g600}/>
<div style={{fontSize:"13px",color:t.n700,flex:1}}>Currently recommending <code style={{fontWeight:600,color:t.n950,fontFamily:"monospace"}}>v{recommended}</code> to consumers.</div>
</div>
{versions.map((ver,i)=><div key={ver.v} style={{display:"flex",gap:12,marginBottom:i<versions.length-1?16:0}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",width:16}}><div style={{width:10,height:10,borderRadius:5,background:ver.v===recommended?t.g500:t.n200,flexShrink:0,marginTop:4}}/>{i<versions.length-1&&<div style={{width:1,flex:1,background:t.n100,marginTop:4}}/>}</div>
<div style={{flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2,flexWrap:"wrap"}}>
<code style={{fontSize:"14px",fontWeight:600,color:t.n950,fontFamily:"monospace"}}>{ver.v}</code>
{ver.v===recommended&&<span style={{fontSize:"11px",fontWeight:600,color:t.g600,background:t.g50,border:`1px solid ${t.g100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>recommended</span>}
{ver.restoredFrom&&<span style={{fontSize:"11px",color:t.n400,fontStyle:"italic"}}>restored from v{ver.restoredFrom}</span>}
{ver.deprecated&&<span style={{fontSize:"11px",fontWeight:600,color:t.o500,background:t.o50,border:`1px solid ${t.o100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px"}}>deprecated</span>}
</div>
<div style={{fontSize:"13px",color:t.n600}}>{ver.note}</div>
<div style={{fontSize:"12px",color:t.n400,marginBottom:6}}>{ver.ago}</div>
<div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
{ver.v!==recommended&&!ver.deprecated&&<button onClick={()=>setAsRecommended(ver.v)} style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontSize:"12px",fontFamily:ff,cursor:"pointer"}}>Set as recommended</button>}
{ver.v!==latest.v&&<button onClick={()=>setModal({type:"restore",target:ver.v})} style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontSize:"12px",fontFamily:ff,cursor:"pointer"}}>Restore as new version</button>}
<button onClick={()=>setModal({type:ver.deprecated?"undeprecate":"deprecate",target:ver.v})} style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${ver.deprecated?t.n200:t.o100}`,background:t.n0,color:ver.deprecated?t.n700:t.o500,fontSize:"12px",fontFamily:ff,cursor:"pointer"}}>{ver.deprecated?"Unmark as deprecated":"Mark as deprecated"}</button>
</div>
</div></div>)}

{modal?.type==="restore"&&<Modal title="Restore as new version" onConfirm={()=>{restoreAsNew(modal.target);setModal(null);}} onCancel={()=>setModal(null)} confirmLabel="Create new version">
<p style={{margin:"0 0 12px"}}>This will create a <strong>new version</strong> using the configuration from <strong>v{modal.target}</strong> and set it as recommended. Versions are immutable, so v{modal.target} itself stays unchanged.</p>
<p style={{margin:0,fontSize:"13px",color:t.n500}}>Consumers will see a prompt to update to the new recommended version on their next visit to the Catalog.</p>
</Modal>}

{modal?.type==="deprecate"&&<Modal title={`Mark v${modal.target} as deprecated`} onConfirm={()=>{toggleDeprecated(modal.target);setModal(null);}} onCancel={()=>setModal(null)} confirmLabel="Mark as deprecated" confirmDanger>
<p style={{margin:"0 0 12px"}}>Deprecating <strong>v{modal.target}</strong> signals to consumers that it should no longer be used. Consumers on this version will see a warning with a prompt to update to the recommended version.</p>
<p style={{margin:0,fontSize:"13px",color:t.n500}}>Deprecation does not affect running sessions. You can unmark at any time.</p>
</Modal>}

{modal?.type==="undeprecate"&&<Modal title={`Unmark v${modal.target} as deprecated`} onConfirm={()=>{toggleDeprecated(modal.target);setModal(null);}} onCancel={()=>setModal(null)} confirmLabel="Unmark">
<p style={{margin:0}}>This will remove the deprecated marker from <strong>v{modal.target}</strong>. Consumers on this version will no longer see the deprecation warning.</p>
</Modal>}

</div>;
}

function VisibilityEditModal({currentVi,onConfirm,onCancel}){
const[selected,setSelected]=useState(currentVi);
const tiers=[
{v:"Private",desc:"Only members of the managing project."},
{v:"Group-scoped",desc:"Visible within the managing group and its subgroups."},
{v:"Org-wide",desc:"All groups within this instance."},
{v:"Public",desc:"Any GitLab user."},
];
const order={"Private":0,"Group-scoped":1,"Org-wide":2,"Public":3};
const isDowngrade=order[selected]<order[currentVi];
const isChange=selected!==currentVi;
return <Modal title="Edit visibility" onConfirm={()=>onConfirm(selected)} onCancel={onCancel} confirmLabel={isChange?"Save changes":"No changes"} confirmDanger={isDowngrade}>
<p style={{margin:"0 0 12px",fontSize:"13px",color:t.n600}}>Choose who can see and enable this item.</p>
{tiers.map(tier=><div key={tier.v} onClick={()=>setSelected(tier.v)} style={{padding:"10px 12px",border:`1px solid ${selected===tier.v?t.b200:t.n100}`,borderRadius:4,marginBottom:8,cursor:"pointer",background:selected===tier.v?t.b50:t.n0,display:"flex",alignItems:"flex-start",gap:10}}>
<div style={{width:14,height:14,borderRadius:7,border:`2px solid ${selected===tier.v?t.b500:t.n200}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>{selected===tier.v&&<div style={{width:6,height:6,borderRadius:3,background:t.b500}}/>}</div>
<div style={{flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}><VisBadge vi={tier.v}/>{tier.v===currentVi&&<span style={{fontSize:"11px",color:t.n400}}>current</span>}</div>
<div style={{fontSize:"13px",color:t.n600}}>{tier.desc}</div>
</div>
</div>)}
{isDowngrade&&<div style={{padding:"10px 12px",background:t.o50,border:`1px solid ${t.o100}`,borderRadius:4,marginTop:12,display:"flex",gap:8,alignItems:"flex-start"}}>
<div style={{marginTop:1}}><Ic name="eye" size={14} color={t.o500}/></div>
<div style={{flex:1}}>
<div style={{fontSize:"13px",fontWeight:600,color:t.o500,marginBottom:2}}>This change will affect existing users</div>
<div style={{fontSize:"13px",color:t.n700}}>Lowering visibility will affect consumers who are currently enabled under the wider tier. Exact behavior (retain vs revoke) is still being decided.</div>
</div>
</div>}
</Modal>;
}

function RequestEnablementModal({it,onConfirm,onCancel}){
const[reason,setReason]=useState("");
return <Modal title="Request enablement" onConfirm={()=>onConfirm(reason)} onCancel={onCancel} confirmLabel="Send request">
<p style={{margin:"0 0 14px",fontSize:"14px",color:t.n700,lineHeight:"20px"}}>You'll need a Maintainer of <strong>frontend-app</strong> to enable <strong>{it.nm}</strong> here. We'll send your request to them.</p>
<div style={{padding:"10px 12px",background:t.n10,border:`1px solid ${t.n100}`,borderRadius:4,marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
<Ic name="inbox" size={14} color={t.n500}/>
<div style={{fontSize:"13px",color:t.n600}}>Sent to the <strong style={{color:t.n950}}>Requested</strong> tab for <strong style={{color:t.n950}}>Platform Engineering</strong>. Any Maintainer can approve.</div>
</div>
<label style={{display:"block",fontSize:"13px",fontWeight:600,color:t.n950,marginBottom:6}}>Reason <span style={{color:t.n400,fontWeight:400}}>(optional)</span></label>
<textarea value={reason} onChange={e=>setReason(e.target.value)} placeholder="Briefly, why you need this. Helps the Maintainer review faster." style={{width:"100%",minHeight:80,padding:"8px 10px",border:`1px solid ${t.n200}`,borderRadius:4,fontSize:"13px",lineHeight:"18px",fontFamily:ff,color:t.n950,background:t.n0,outline:"none",boxSizing:"border-box",resize:"vertical"}}/>
</Modal>;
}

// Lightweight markdown preview tuned for SKILL.md bodies. Renders headings, paragraphs,
// lists, and inline code without pulling in a full markdown parser.
function SkillMarkdownPreview({body}){
if(!body) return null;
const lines=body.split("\n");
const blocks=[];
let listBuffer=null;
const flushList=()=>{if(listBuffer){blocks.push({type:"ul",items:listBuffer});listBuffer=null;}};
lines.forEach((ln)=>{
if(/^\s*[-*]\s+/.test(ln)){
if(!listBuffer) listBuffer=[];
listBuffer.push(ln.replace(/^\s*[-*]\s+/,""));
return;
}
if(/^\d+\.\s+/.test(ln)){
if(!listBuffer) listBuffer=[];
listBuffer.push(ln.replace(/^\d+\.\s+/,""));
return;
}
flushList();
if(/^#\s+/.test(ln)) blocks.push({type:"h1",text:ln.replace(/^#\s+/,"")});
else if(/^##\s+/.test(ln)) blocks.push({type:"h2",text:ln.replace(/^##\s+/,"")});
else if(/^###\s+/.test(ln)) blocks.push({type:"h3",text:ln.replace(/^###\s+/,"")});
else if(ln.trim()==="") blocks.push({type:"br"});
else blocks.push({type:"p",text:ln});
});
flushList();
// Inline rendering: backtick code spans and bold (** **)
const inline=(text)=>{
const parts=[];
const re=/(`[^`]+`|\*\*[^*]+\*\*)/g;
let last=0,m;
while((m=re.exec(text))){
if(m.index>last) parts.push({type:"text",value:text.slice(last,m.index)});
const tok=m[0];
if(tok.startsWith("`")) parts.push({type:"code",value:tok.slice(1,-1)});
else parts.push({type:"strong",value:tok.slice(2,-2)});
last=m.index+tok.length;
}
if(last<text.length) parts.push({type:"text",value:text.slice(last)});
return parts.map((p,i)=>{
if(p.type==="code") return <code key={i} style={{background:t.n0,padding:"1px 5px",borderRadius:3,fontSize:"12.5px",fontFamily:"monospace",border:`1px solid ${t.n100}`}}>{p.value}</code>;
if(p.type==="strong") return <strong key={i} style={{fontWeight:600,color:t.n950}}>{p.value}</strong>;
return <span key={i}>{p.value}</span>;
});
};
return <div style={{background:t.n50,border:`1px solid ${t.n100}`,borderRadius:4,padding:"14px 16px",fontSize:"13.5px",lineHeight:"22px",color:t.n700,maxHeight:360,overflow:"auto"}}>
{blocks.map((bk,i)=>{
if(bk.type==="h1") return <div key={i} style={{fontSize:"16px",fontWeight:600,color:t.n950,marginTop:i===0?0:14,marginBottom:6}}>{inline(bk.text)}</div>;
if(bk.type==="h2") return <div key={i} style={{fontSize:"14px",fontWeight:600,color:t.n950,marginTop:14,marginBottom:4}}>{inline(bk.text)}</div>;
if(bk.type==="h3") return <div key={i} style={{fontSize:"13px",fontWeight:600,color:t.n800,marginTop:10,marginBottom:2}}>{inline(bk.text)}</div>;
if(bk.type==="ul") return <ul key={i} style={{margin:"4px 0 4px 0",paddingLeft:20}}>{bk.items.map((it,j)=><li key={j} style={{marginBottom:2}}>{inline(it)}</li>)}</ul>;
if(bk.type==="br") return <div key={i} style={{height:6}}/>;
return <div key={i} style={{margin:"4px 0"}}>{inline(bk.text)}</div>;
})}
</div>;
}

function Detail({it,persona,onBack,userReqStates,setUserReqStates}){
const[actOpen,setActOpen]=useState(false);const[tab,setTab]=useState("config");
const[visEditOpen,setVisEditOpen]=useState(false);const[currentVi,setCurrentVi]=useState(it.vi);
const[enabled,setEnabled]=useState(enabledInProject.has(it.id));
const[tipOpen,setTipOpen]=useState(false);
const[reqModalOpen,setReqModalOpen]=useState(false);
const reqState=userReqStates[it.id];
const isApproved=reqState?.status==="approved";
const isPending=reqState?.status==="pending";
const isRejected=reqState?.status==="rejected";
const hasPerm=persona!=="User";
const label=enabled?"Disable":"Enable";
const primary={height:32,padding:"0 12px",borderRadius:4,border:"none",cursor:"pointer",background:t.b500,color:t.n0,fontWeight:600,fontSize:"14px",fontFamily:ff,display:"inline-flex",alignItems:"center"};
const secondary={height:32,padding:"0 12px",borderRadius:4,border:`1px solid ${t.n200}`,cursor:"pointer",background:t.n0,color:t.n700,fontWeight:500,fontSize:"14px",fontFamily:ff,display:"inline-flex",alignItems:"center"};
const enableBtn=enabled?secondary:primary;
const admActs=[{l:"Manage versions",ic:"tag"},{l:"Enable for instance",ic:"check-circle"}];
const isSkill=it.tp==="skill";
return <div>
<button onClick={onBack} style={{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 0",border:"none",background:"none",cursor:"pointer",color:t.b600,fontSize:"14px",marginBottom:16,fontFamily:ff}}><Ic name="chevron-left" size={14} color={t.b600}/> Back to catalog</button>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
<div>
<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
<h1 style={{margin:0,fontSize:"20px",fontWeight:600,color:t.n950,lineHeight:"28px"}}>{it.nm}</h1>
{it.fo&&<FBadge/>}
{it.fk&&<span style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:"12px",color:t.n400,background:t.n50,padding:"2px 8px",borderRadius:4,border:`1px solid ${t.n100}`}}><Ic name="fork" size={12} color={t.n400}/>Forked from {it.fk}</span>}
{isSkill&&it.frontMatter?.slashCommand&&<span title="This skill is invokable as a slash command in the IDE and CLI" style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:"12px",color:t.p700,background:t.p50,padding:"2px 8px",borderRadius:4,border:`1px solid ${t.p100}`,fontFamily:"monospace"}}><Ic name="command" size={11} color={t.p700}/>/{it.frontMatter.slashCommand}</span>}
{isSkill&&it.frontMatter?.audience&&<span title="Audience" style={{display:"inline-flex",alignItems:"center",gap:4,fontSize:"12px",color:t.n600,background:t.n50,padding:"2px 8px",borderRadius:4,border:`1px solid ${t.n100}`}}><Ic name="user" size={11} color={t.n500}/>{it.frontMatter.audience}</span>}
</div>
<p style={{margin:0,color:t.n500,fontSize:"14px",lineHeight:"20px"}}>{it.up} by {it.au}</p>
</div>
<div style={{display:"flex",gap:8,alignItems:"center"}}>
{(persona==="Engineer"||persona==="Maintainer")&&<>
<button style={{height:32,padding:"0 8px",border:"none",background:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4,fontSize:"14px",color:t.b600,fontFamily:ff}}><Ic name="fork" size={14} color={t.b600}/> Duplicate</button>
</>}
{persona==="User"&&<div style={{display:"flex",alignItems:"center",gap:10}}>
{enabled&&<span style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:"13px",color:t.g600,padding:"6px 10px",background:t.g50,border:`1px solid ${t.g100}`,borderRadius:4}}><Ic name="check-circle" size={13} color={t.g500}/>Enabled in frontend-app</span>}
{!enabled&&!reqState&&<button onClick={()=>setReqModalOpen(true)} style={primary}>Request enablement</button>}
{!enabled&&isPending&&<>
<span style={{fontSize:"13px",color:t.n500,display:"inline-flex",alignItems:"center",gap:6}}>
<Ic name="clock" size={13} color={t.o500}/>
<span>Requested {reqState.when} · sent to {reqState.routedTo}</span>
</span>
<button onClick={()=>setUserReqStates(p=>{const n={...p};delete n[it.id];return n;})} style={{height:32,padding:"0 12px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontWeight:500,fontSize:"14px",fontFamily:ff,cursor:"pointer"}}>Cancel request</button>
</>}
{!enabled&&isApproved&&<span style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:"13px",color:t.g600,padding:"6px 10px",background:t.g50,border:`1px solid ${t.g100}`,borderRadius:4}}><Ic name="check-circle" size={13} color={t.g500}/>Enabled in frontend-app</span>}
{!enabled&&isRejected&&<button onClick={()=>setReqModalOpen(true)} style={primary}>Request enablement</button>}
</div>}
{persona==="Engineer"&&<button onClick={()=>setEnabled(!enabled)} style={enableBtn}>{label}</button>}
{persona==="Maintainer"&&<div style={{display:"flex",position:"relative"}}>
<button onClick={()=>setEnabled(!enabled)} style={{...enableBtn,borderRadius:"4px 0 0 4px",...(enabled?{borderRight:"none"}:{})}}>{label}</button>
<button onClick={()=>setActOpen(!actOpen)} style={enabled?{height:32,width:32,border:`1px solid ${t.n200}`,borderRadius:"0 4px 4px 0",background:t.n0,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}:{height:32,width:32,border:`1px solid ${t.b500}`,borderLeft:"1px solid rgba(255,255,255,0.3)",borderRadius:"0 4px 4px 0",background:t.b500,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0}}><Ic name="chevron-down" size={12} color={enabled?t.n500:t.n0}/></button>
{actOpen&&<div style={{position:"absolute",top:"calc(100% + 4px)",right:0,width:210,background:t.n0,border:`1px solid ${t.n200}`,borderRadius:4,boxShadow:"0 2px 8px rgba(0,0,0,0.1)",zIndex:10,padding:"4px 0"}}>{admActs.map(a=><button key={a.l} onClick={()=>setActOpen(false)} style={{display:"flex",alignItems:"center",gap:8,width:"100%",padding:"7px 12px",border:"none",background:"transparent",cursor:"pointer",fontSize:"14px",color:t.n950,textAlign:"left",fontFamily:ff}} onMouseEnter={e=>e.currentTarget.style.background=t.n50} onMouseLeave={e=>e.currentTarget.style.background="transparent"}><Ic name={a.ic} size={14} color={t.n500}/>{a.l}</button>)}</div>}
</div>}
</div>
</div>
{persona==="User"&&isRejected&&!enabled&&<div style={{padding:"10px 12px",background:t.r50,border:`1px solid ${t.r500}33`,borderRadius:4,marginBottom:16,display:"flex",gap:10,alignItems:"flex-start"}}>
<div style={{marginTop:1}}><Ic name="close" size={14} color={t.r500}/></div>
<div style={{flex:1}}>
<div style={{fontSize:"13px",fontWeight:600,color:t.r500,marginBottom:2}}>Request declined by {reqState.by} · {reqState.when}</div>
<div style={{fontSize:"13px",color:t.n700,lineHeight:"18px"}}>{reqState.reason}</div>
</div>
</div>}
<div style={{display:"flex",gap:24,padding:"12px 16px",background:t.n10,borderRadius:4,marginBottom:20,border:`1px solid ${t.n100}`}}>
{(it.tp==="skill"?[{l:"Available in",v:it.ns,s:"projects/groups"},{l:"Stars",v:it.st},{l:"Visibility",v:null,custom:<VisBadge vi={currentVi}/>},{l:"Category",v:it.tg[0]},{l:"Last used",v:it.up.replace(/^Last used /,""),sc:t.n700}]:[{l:"Namespaces",v:it.ns,s:"last 30 days"},{l:"Stars",v:it.st},{l:"Visibility",v:null,custom:<VisBadge vi={currentVi}/>},{l:"Category",v:it.tg[0]},{l:"Success rate",v:it.sr!=null?it.sr+"%":"N/A",sc:it.sr>=85?t.g600:it.sr>=70?t.o500:t.n400}]).map((s,i)=><div key={i} style={{minWidth:90}}><div style={{fontSize:"12px",color:t.n400,marginBottom:2}}>{s.l}</div>{s.custom||<div style={{fontSize:"16px",fontWeight:600,color:s.sc||t.n950}}>{s.v}</div>}{s.s&&<div style={{fontSize:"11px",color:t.n300}}>{s.s}</div>}</div>)}
</div>
<div style={{marginBottom:20}}><h2 style={{fontSize:"14px",fontWeight:600,color:t.n950,margin:"0 0 6px"}}>About</h2><p style={{color:t.n600,lineHeight:"20px",margin:0,fontSize:"14px"}}>{it.ds}</p></div>
<div style={{marginBottom:20}}><h2 style={{fontSize:"14px",fontWeight:600,color:t.n950,margin:"0 0 6px"}}>How to use</h2>{isSkill?<p style={{color:t.n600,fontSize:"14px",margin:0,lineHeight:"20px"}}>Once enabled, this skill becomes available to agents running in the selected scope. Agents load it automatically when the task matches the skill's description{it.frontMatter?.slashCommand?<>, or you can invoke it directly with <code style={{background:t.n50,padding:"1px 4px",borderRadius:3,fontSize:"13px",border:`1px solid ${t.n100}`,fontFamily:"monospace"}}>/{it.frontMatter.slashCommand}</code> in the IDE or CLI</>:""}.</p>:<p style={{color:t.n600,fontSize:"14px",margin:0,lineHeight:"20px"}}>Once enabled in your project, trigger this {it.tp} by mentioning <code style={{background:t.n50,padding:"1px 4px",borderRadius:3,fontSize:"13px",border:`1px solid ${t.n100}`}}>@{it.nm.toLowerCase().replace(/\s/g,"-")}</code> in an issue or merge request.</p>}</div>
{(it.tp==="agent"||it.tp==="flow")&&<div style={{marginBottom:20}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
<h2 style={{fontSize:"14px",fontWeight:600,color:t.n950,margin:0}}>Skills available in this scope</h2>
<span style={{fontSize:"12px",color:t.n400}}>3 of 5 available here</span>
</div>
<p style={{color:t.n500,fontSize:"13px",margin:"0 0 10px",lineHeight:"18px"}}>Skills this {it.tp} may load at runtime when a task matches. Enable additional skills at group or project level to expand this list.</p>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,overflow:"hidden"}}>
{[{n:"Ruby Code Review Standards",d:"Loaded when reviewing Ruby changes",au:"GitLab",on:true},{n:"API Documentation Standards",d:"Loaded when generating API reference docs",au:"GitLab",on:true},{n:"Terraform Review Guidelines",d:"Loaded when reviewing Terraform plans",au:"GitLab",on:true}].map((sk,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderBottom:i<2?`1px solid ${t.n100}`:"none"}}>
<Ic name="book-open" size={14} color={t.n600}/>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:"13px",fontWeight:500,color:t.n950}}>{sk.n}</div>
<div style={{fontSize:"12px",color:t.n400}}>{sk.d} · by {sk.au}</div>
</div>
<span style={{fontSize:"11px",fontWeight:600,color:t.g600,background:t.g50,border:`1px solid ${t.g100}`,padding:"0 6px",borderRadius:4,lineHeight:"18px",flexShrink:0}}>available</span>
</div>)}
</div>
</div>}
{(persona==="Engineer"||persona==="Maintainer")&&<div style={{marginBottom:20}}>
{persona==="Maintainer"?<div style={{display:"flex",borderBottom:`2px solid ${t.n100}`,marginBottom:16}}>
{["config","governance","performance"].map(tb=><button key={tb} onClick={()=>setTab(tb)} style={{padding:"8px 16px",border:"none",background:"transparent",cursor:"pointer",fontSize:"14px",fontWeight:tab===tb?600:400,color:tab===tb?t.n950:t.n500,fontFamily:ff,borderBottom:tab===tb?`2px solid ${t.b500}`:"2px solid transparent",marginBottom:-2,textTransform:"capitalize"}}>{tb==="config"?"Configuration":tb==="governance"?"Governance":"Performance"}</button>)}
</div>:<h2 style={{fontSize:"16px",fontWeight:600,color:t.n950,margin:"0 0 16px"}}>Configuration</h2>}
{(tab==="config"||persona==="Engineer")&&<>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,marginBottom:16,overflow:"hidden"}}>
<div style={{background:t.n50,padding:"8px 16px",borderBottom:`1px solid ${t.n100}`}}><span style={{fontSize:"14px",fontWeight:600,color:t.n950}}>Visibility & access</span></div>
<div style={{padding:16}}>
<div style={{marginBottom:12}}><div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:2}}>Managed by</div><div style={{fontSize:"14px",color:t.n600}}>{it.au}</div></div>
<div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950}}>Visibility</div>
{(persona==="Engineer"||persona==="Maintainer")&&<button onClick={()=>setVisEditOpen(true)} style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontSize:"12px",fontFamily:ff,cursor:"pointer"}}>Edit</button>}
</div>
<VisBadge vi={currentVi}/>
<div style={{fontSize:"13px",color:t.n500,marginTop:4}}>{currentVi==="Public"?"Anyone can view and enable.":currentVi==="Group-scoped"?"Visible within the managing group and its subgroups.":currentVi==="Org-wide"?"All groups within this instance.":"Only managing project members."}</div>
<div style={{fontSize:"12px",color:t.n400,marginTop:6}}>Set by {it.au} on Mar 15, 2026</div>
</div>
</div></div>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,overflow:"hidden"}}>
<div style={{background:t.n50,padding:"8px 16px",borderBottom:`1px solid ${t.n100}`}}><span style={{fontSize:"14px",fontWeight:600,color:t.n950}}>{isSkill?"Skill definition":"Tools & system prompt"}</span></div>
<div style={{padding:16}}>
{isSkill?<>
<div style={{marginBottom:16}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:6}}>Description</div>
<div style={{fontSize:"13px",color:t.n500,marginBottom:8,lineHeight:"18px"}}>Agents use this description to decide when to load the skill. Keep it specific.</div>
<div style={{background:t.n50,border:`1px solid ${t.n100}`,borderRadius:4,padding:12,fontSize:"13px",color:t.n700,lineHeight:"20px"}}>{it.ds}</div>
</div>
{it.frontMatter&&<div style={{marginBottom:16}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:6}}>Metadata</div>
<div style={{fontSize:"13px",color:t.n500,marginBottom:8,lineHeight:"18px"}}>From the SKILL.md front matter.</div>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,overflow:"hidden"}}>
{[
{k:"Name",v:it.frontMatter.name,mono:true},
{k:"Version",v:`v${it.frontMatter.version}`,mono:true},
it.frontMatter.audience&&{k:"Audience",v:it.frontMatter.audience},
it.frontMatter.slashCommand&&{k:"Slash command",v:`/${it.frontMatter.slashCommand}`,mono:true,help:"Available in IDE and CLI"},
].filter(Boolean).map((row,i,arr)=><div key={row.k} style={{display:"flex",padding:"8px 12px",borderBottom:i<arr.length-1?`1px solid ${t.n100}`:"none",alignItems:"center",gap:12,fontSize:"13px"}}>
<div style={{width:120,color:t.n500,fontWeight:500,flexShrink:0}}>{row.k}</div>
<div style={{flex:1,color:t.n950,...(row.mono?{fontFamily:"monospace",fontSize:"13px"}:{})}}>{row.v}{row.help&&<span style={{marginLeft:8,fontSize:"12px",color:t.n400,fontFamily:ff}}>· {row.help}</span>}</div>
</div>)}
</div>
</div>}
<div style={{marginBottom:16}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950}}>SKILL.md preview</div>
<button style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontSize:"12px",fontFamily:ff,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4}}><Ic name="external-link" size={11} color={t.n600}/>Open in repo</button>
</div>
<div style={{fontSize:"13px",color:t.n500,marginBottom:8,lineHeight:"18px"}}>The instructions an agent loads when this skill activates. Reference files load on demand, only when the agent needs them.</div>
<SkillMarkdownPreview body={it.body}/>
</div>
<div style={{marginBottom:16}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:6}}>Source</div>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,padding:12,fontSize:"13px",color:t.n700,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
<div style={{display:"flex",alignItems:"center",gap:8,minWidth:0,flex:1}}>
<Ic name="project" size={14} color={t.n500}/>
<code style={{fontFamily:"monospace",fontSize:"13px",color:t.n950,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.src?`${it.src.repo}/${it.src.path}`:`${it.au.toLowerCase().replace(/\s/g,"-")}/ai-skills/${it.nm.toLowerCase().replace(/\s/g,"-")}/SKILL.md`}</code>
</div>
<button style={{height:24,padding:"0 8px",borderRadius:4,border:`1px solid ${t.n200}`,background:t.n0,color:t.n700,fontSize:"12px",fontFamily:ff,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4,flexShrink:0}}><Ic name="external-link" size={11} color={t.n600}/>View in repo</button>
</div>
<div style={{fontSize:"12px",color:t.n400,marginTop:6,display:"flex",alignItems:"center",gap:4}}><Ic name="clock" size={11} color={t.n400}/>{it.src?.sync||"Synced recently"}. Next sync on commit to main.</div>
</div>
<div style={{marginBottom:16}}>
<div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:6}}>Reference files</div>
<div style={{fontSize:"13px",color:t.n500,marginBottom:8,lineHeight:"18px"}}>Additional files in the skill directory that an agent can read on demand. The agent only loads these when it decides they're relevant, so they don't bloat context up front.</div>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,overflow:"hidden"}}>
{[{n:"references/checklist.md",d:"Review checklist reference",sz:"8.1 KB"},{n:"references/examples.md",d:"Worked examples",sz:"12 KB"},{n:"references/coding-standard.md",d:"Team coding conventions",sz:"4.7 KB"}].map((f,i,arr)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",borderBottom:i<arr.length-1?`1px solid ${t.n100}`:"none"}}><div style={{display:"flex",alignItems:"center",gap:8,minWidth:0}}><Ic name="snippet" size={12} color={t.n500}/><code style={{fontFamily:"monospace",fontSize:"13px",color:t.n950}}>{f.n}</code><span style={{fontSize:"12px",color:t.n400}}>{f.d}</span></div><span style={{fontSize:"12px",color:t.n400,flexShrink:0}}>{f.sz}</span></div>)}
</div>
</div>
<VersionManagement persona={persona} itemName={it.nm}/>
</>:<>
<div style={{marginBottom:16}}><div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:8}}>Tools</div>{(it.tp==="agent"?[{n:"Search code",d:"Searches the codebase using keywords or regex",on:true},{n:"Read file",d:"Reads the contents of a file at a given path",on:true},{n:"List directory",d:"Lists the files and subdirectories within a path",on:true},{n:"Create file",d:"Creates a new file with given contents",on:true},{n:"Edit file",d:"Modifies a file using find-and-replace",on:true},{n:"Run terminal",d:"Executes shell commands",on:false},{n:"Create MR",d:"Opens a merge request",on:true}]:[{n:"Run Pipeline",d:"Triggers a CI/CD pipeline run",on:true},{n:"Create Merge Request",d:"Opens a new merge request",on:true},{n:"Get Job Log",d:"Retrieves logs from a pipeline job",on:true},{n:"Update Issue",d:"Modifies an existing issue",on:true}]).map((tool,i)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:i<6?`1px solid ${t.n100}`:"none"}}><div><div style={{fontSize:"14px",fontWeight:500,color:t.n950}}>{tool.n}</div><div style={{fontSize:"12px",color:t.n400}}>{tool.d}</div></div><div style={{width:36,height:20,borderRadius:10,background:tool.on?t.g500:t.n200,position:"relative",cursor:"pointer",flexShrink:0}}><div style={{width:16,height:16,borderRadius:8,background:t.n0,position:"absolute",top:2,left:tool.on?18:2,transition:"left 0.15s",boxShadow:"0 1px 2px rgba(0,0,0,0.15)"}}/></div></div>)}</div>
<div style={{marginBottom:16}}><div style={{fontSize:"14px",fontWeight:600,color:t.n950,marginBottom:8}}>System prompt</div><div style={{background:t.n50,border:`1px solid ${t.n100}`,borderRadius:4,padding:16,fontFamily:"monospace",fontSize:"13px",lineHeight:1.6,color:t.n700,maxHeight:160,overflow:"auto",whiteSpace:"pre-wrap"}}>{`# ${it.nm}\n\n## Core Identity\nYou are **${it.nm}**, an AI assistant embedded in GitLab.\n\n## Rules\n- FILTER FIRST: Use available filters\n- PAGINATE: Check hasNextPage\n…`}</div></div>
<VersionManagement persona={persona} itemName={it.nm}/>
</>}
</div></div>
</>}
{tab==="governance"&&persona==="Maintainer"&&<div style={{display:"flex",flexDirection:"column",gap:16}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
{[{l:"Instance-level status",v:"Enabled",dot:t.g400,vc:t.g600},{l:"Active version",v:"v2.1.0 (recommended)",vc:t.n600},{l:"Groups with access",v:"12 of 34 groups",vc:t.n600},{l:"Pending requests",v:pendingReqs.length+"",vc:pendingReqs.length>0?t.o500:t.n600}].map((g,i)=><div key={i} style={{padding:12,background:t.n0,borderRadius:4,border:`1px solid ${t.n100}`}}><div style={{fontSize:"12px",fontWeight:600,color:t.n500,marginBottom:4}}>{g.l}</div><div style={{display:"flex",alignItems:"center",gap:6}}>{g.dot&&<div style={{width:8,height:8,borderRadius:"50%",background:g.dot}}/>}<span style={{fontSize:"14px",color:g.vc}}>{g.v}</span></div></div>)}
</div>
</div>}
{tab==="performance"&&persona==="Maintainer"&&<div style={{display:"flex",flexDirection:"column",gap:16}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
{[{l:"Success rate",v:(it.sr||0)+"%",sc:it.sr>=85?t.g600:t.o500},{l:"Sessions (30d)",v:Math.round(it.ns*0.7)+"",sc:t.n950},{l:"Credits (30d)",v:Math.round(it.ns*1.8)+"",sc:t.n950}].map((m,i)=><div key={i} style={{padding:12,background:t.n0,borderRadius:4,border:`1px solid ${t.n100}`}}><div style={{fontSize:"12px",fontWeight:600,color:t.n500,marginBottom:4}}>{m.l}</div><div style={{fontSize:"20px",fontWeight:600,color:m.sc}}>{m.v}</div></div>)}
</div>
<div style={{border:`1px solid ${t.n100}`,borderRadius:4,overflow:"hidden"}}>
<div style={{background:t.n50,padding:"8px 16px",borderBottom:`1px solid ${t.n100}`}}><span style={{fontSize:"14px",fontWeight:600,color:t.n950}}>Phase 1 metrics</span></div>
<div style={{padding:16}}>
{[{l:"Avg steps per task",v:"4.2"},{l:"Failure reason",v:"Tool timeout (34%), Bad input (22%), Rate limit (18%)"},{l:"Code acceptance rate",v:"Coming in Phase 2"}].map((m,i)=><div key={i} style={{marginBottom:i<2?12:0}}><div style={{fontSize:"13px",fontWeight:600,color:t.n700,marginBottom:2}}>{m.l}</div><div style={{fontSize:"14px",color:t.n600}}>{m.v}</div></div>)}
</div>
</div>
</div>}
</div>}
{visEditOpen&&<VisibilityEditModal currentVi={currentVi} onConfirm={(v)=>{setCurrentVi(v);setVisEditOpen(false);}} onCancel={()=>setVisEditOpen(false)}/>}
{reqModalOpen&&<RequestEnablementModal it={it} onCancel={()=>setReqModalOpen(false)} onConfirm={(reason)=>{setUserReqStates(p=>({...p,[it.id]:{status:"pending",when:"just now",routedTo:"Maintainers of frontend-app",reason}}));setReqModalOpen(false);}}/>}
</div>;
}

function Sidebar({persona,setPersona,scope,setScope}){
const exploreNav=[{id:"projects",l:"Projects",ic:"project"},{id:"groups",l:"Groups",ic:"group"},{id:"cicd",l:"CI/CD Catalog",ic:"package"},{id:"ai",l:"AI Catalog",ic:"tanuki-ai",a:true},{id:"topics",l:"Topics",ic:"tag"},{id:"snippets",l:"Snippets",ic:"snippet"}];
const groupProjectNav=[{id:"manage",l:"Manage",ic:"settings"},{id:"plan",l:"Plan",ic:"project"},{id:"ai",l:"AI Catalog",ic:"tanuki-ai",a:true},{id:"code",l:"Code",ic:"snippet"},{id:"build",l:"Build",ic:"package"},{id:"secure",l:"Secure",ic:"eye"},{id:"deploy",l:"Deploy",ic:"external-link"},{id:"operate",l:"Operate",ic:"settings"},{id:"monitor",l:"Monitor",ic:"chart"},{id:"analyze",l:"Analyze",ic:"chart"}];
const nav=scope==="Explore"?exploreNav:groupProjectNav;
const scopeTitle=scope==="Explore"?"Explore":scope==="Group"?"Platform Engineering":"frontend-app";
const scopeSub=scope==="Project"?"Platform Engineering /":null;
return <div style={{width:232,borderRight:`1px solid ${t.n100}`,background:t.n0,display:"flex",flexDirection:"column",height:"100%",flexShrink:0}}>
<div style={{padding:"12px 16px 4px"}}><svg width="32" height="30" viewBox="100 0 180 260" xmlns="http://www.w3.org/2000/svg"><path fill="#e24329" d="M265.26416,174.37243l-.2134-.55822-21.19899-55.30908c-.4236-1.08359-1.18542-1.99642-2.17699-2.62689-.98837-.63373-2.14749-.93253-3.32305-.87014-1.1689.06239-2.29195.48925-3.20809 1.21821-.90957.73554-1.56629 1.73047-1.87493 2.85346l-14.31327 43.80662h-57.90965l-14.31327-43.80662c-.30864-1.12299-.96536-2.11791-1.87493-2.85346-.91614-.72895-2.03911-1.15582-3.20809-1.21821-1.17548-.06239-2.33468.23641-3.32297.87014-.99166.63047-1.75348 1.5433-2.17707 2.62689l-21.19891 55.31237-.21348.55493c-6.28158 16.38521-.92929 34.90803 13.05891 45.48782.02621.01641.04922.03611.07552.05582l.18719.14119 32.29094 24.17392 15.97151 12.09024 9.71951 7.34871c2.34117 1.77316 5.57877 1.77316 7.92002 0l9.71943-7.34871 15.96822-12.09024 32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568 13.97834-10.57977 19.32735-29.09604 13.04905-45.47796Z"/><path fill="#fc6d26" d="M265.26416,174.37243l-.2134-.55822c-10.5174 2.16062-20.20405 6.6099-28.49844 12.81593-.1346.0985-25.20497 19.05805-46.55171 35.19699 15.84998 11.98517 29.6477 22.40405 29.6477 22.40405l32.48142-24.31511c.02958-.02299.05588-.04269.08538-.06568 13.97834-10.57977 19.32735-29.09604 13.04905-45.47796Z"/><path fill="#fca326" d="M160.34962,244.23117l15.97151 12.09024 9.71951 7.34871c2.34117 1.77316 5.57877 1.77316 7.92002 0l9.71943-7.34871 15.96822-12.09024s-13.79772-10.41888-29.6477-22.40405c-15.85327 11.98517-29.65099 22.40405-29.65099 22.40405Z"/><path fill="#fc6d26" d="M143.44561,186.63014c-8.29111-6.20274-17.97446-10.65531-28.49507-12.81264l-.21348.55493c-6.28158 16.38521-.92929 34.90803 13.05891 45.48782.02621.01641.04922.03611.07552.05582l.18719.14119 32.29094 24.17392s13.79772-10.41888 29.65099-22.40405c-21.34673-16.13894-46.42031-35.09848-46.55499-35.19699Z"/></svg></div>
<div style={{padding:"8px 16px 4px"}}>
{scopeSub&&<div style={{fontSize:"11px",color:t.n400,marginBottom:2}}>{scopeSub}</div>}
<div style={{display:"flex",alignItems:"center",gap:6}}>
{scope!=="Explore"&&<div style={{width:20,height:20,borderRadius:4,background:scope==="Group"?t.p100:t.b100,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:600,color:scope==="Group"?t.p700:t.b600}}>{scope==="Group"?"P":"f"}</div>}
<span style={{fontWeight:600,fontSize:"14px",color:t.n950}}>{scopeTitle}</span>
</div>
</div>
<nav style={{padding:"4px 8px",flex:1}}>{nav.map(n=><div key={n.id} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 10px",fontSize:"13px",background:n.a?t.b50:"transparent",color:n.a?t.b600:t.n700,fontWeight:n.a?600:400,borderLeft:n.a?`2px solid ${t.b500}`:"2px solid transparent",borderRadius:6,cursor:"pointer"}}><Ic name={n.ic} size={15} color={n.a?t.b600:t.n500}/>{n.l}</div>)}</nav>
<div style={{padding:"12px 16px",borderTop:`1px solid ${t.n100}`}}>
<div style={{fontSize:"11px",color:t.n400,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600}}>Scope</div>
{["Explore","Group","Project"].map(s=><button key={s} onClick={()=>setScope(s)} style={{display:"block",width:"100%",padding:"6px 10px",marginBottom:2,border:"none",borderRadius:4,cursor:"pointer",textAlign:"left",fontSize:"13px",fontWeight:s===scope?600:400,background:s===scope?t.b50:"transparent",color:s===scope?t.b600:t.n600,fontFamily:ff}}>{s}</button>)}
<div style={{borderTop:`1px solid ${t.n100}`,marginTop:8,paddingTop:8}}>
<div style={{fontSize:"11px",color:t.n400,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.5px",fontWeight:600}}>Viewing as</div>
{["User","Engineer","Maintainer"].map(p=><button key={p} onClick={()=>setPersona(p)} style={{display:"block",width:"100%",padding:"6px 10px",marginBottom:2,border:"none",borderRadius:4,cursor:"pointer",textAlign:"left",fontSize:"13px",fontWeight:p===persona?600:400,background:p===persona?t.p50:"transparent",color:p===persona?t.p700:t.n600,fontFamily:ff}}>{p}</button>)}
</div>
<div style={{fontSize:"11px",color:t.n300,marginTop:8,fontStyle:"italic"}}>Prototype only</div>
</div>
</div>;
}

export default function App(){
const[persona,setPersona]=useState("User");const[scope,setScope]=useState("Explore");
const[sel,setSel]=useState(null);const[tq,setTq]=useState("");const[activeType,setActiveType]=useState("all");const[sb,setSb]=useState("ns");const[vm,setVm]=useState("list");
const[groupTab,setGroupTab]=useState("catalog");
const[userReqStates,setUserReqStates]=useState(initialUserReqStates);

// Items filtered by scope first — tab counts reflect what's actually visible in this scope.
const scopeItems=items.filter(it=>scope==="Explore"?it.vi==="Public":it.vi!=="Private");

const filtered=scopeItems.filter(it=>{
const mq=!tq||it.nm.toLowerCase().includes(tq.toLowerCase())||it.ds.toLowerCase().includes(tq.toLowerCase());
const typeOk=activeType==="all"||it.tp===activeType;
return mq&&typeOk;
}).sort((a,b)=>sb==="ns"?b.ns-a.ns:sb==="st"?b.st-a.st:a.nm.localeCompare(b.nm));

const scopeLabel=scope==="Group"?"Platform Engineering / AI Catalog":scope==="Project"?"Platform Engineering / frontend-app / AI Catalog":"Explore / AI Catalog";
const searchPlaceholder=activeType==="all"?"Search catalog...":`Search ${typeTabs.find(x=>x.k===activeType)?.l.toLowerCase()}...`;

return <div style={{fontFamily:ff,display:"flex",height:"100vh",background:t.n0,color:t.n950}}>
<Sidebar persona={persona} setPersona={setPersona} scope={scope} setScope={setScope}/>
<div style={{flex:1,overflow:"auto"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 24px",borderBottom:`1px solid ${t.n100}`,position:"sticky",top:0,zIndex:20,background:t.n0}}>
<div style={{display:"flex",alignItems:"center",gap:6}}><Ic name="search" size={14} color={t.n400}/><input placeholder="Search or go to..." style={{height:32,padding:"0 12px",width:240,border:`1px solid ${t.n200}`,borderRadius:6,fontSize:"13px",fontFamily:ff,outline:"none",color:t.n950,background:t.n50}}/></div>
<div style={{display:"flex",alignItems:"center",gap:12}}><div style={{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}><Ic name="plus" size={16} color={t.n500}/></div><div style={{width:28,height:28,borderRadius:"50%",background:t.p100,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"13px",fontWeight:600,color:t.p700}}>S</div></div>
</div>
<div style={{maxWidth:1040,margin:"0 auto",width:"100%",boxSizing:"border-box",padding:"0 16px"}}>
<div style={{padding:"8px 0 0",fontSize:"13px",color:t.n400}}>{scopeLabel}{sel?` / ${sel.nm}`:""}</div>
<div style={{padding:"12px 0 40px"}}>
{sel?<Detail it={sel} persona={persona} onBack={()=>{setSel(null)}} userReqStates={userReqStates} setUserReqStates={setUserReqStates}/>:(
<>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
<h1 style={{margin:0,fontSize:"20px",fontWeight:600,lineHeight:"28px"}}>AI Catalog</h1>
{persona==="Engineer"&&<div style={{display:"flex",gap:8}}>
<button style={{height:32,padding:"0 12px",borderRadius:4,border:`1px solid ${t.n200}`,cursor:"pointer",background:t.n0,color:t.n700,fontWeight:500,fontSize:"14px",fontFamily:ff}}>New flow</button>
<button style={{height:32,padding:"0 12px",borderRadius:4,border:"none",cursor:"pointer",background:t.b500,color:t.n0,fontWeight:600,fontSize:"14px",fontFamily:ff}}>New agent</button>
</div>}
{persona==="Maintainer"&&<button style={{height:32,padding:"0 12px",borderRadius:4,border:`1px solid ${t.n200}`,cursor:"pointer",background:t.n0,color:t.n700,fontWeight:500,fontSize:"14px",fontFamily:ff,display:"flex",alignItems:"center",gap:6}}><Ic name="settings" size={14} color={t.n500}/> Manage settings</button>}
</div>
<p style={{color:t.n500,fontSize:"14px",margin:"0 0 16px",lineHeight:"20px"}}>{scope==="Explore"?"Discover, enable, and manage AI agents, flows, skills, and MCP servers.":scope==="Group"?"Items available to Platform Engineering and its projects.":"Items enabled in or available to frontend-app."}</p>

{scope==="Group"&&(persona==="Maintainer"||persona==="Engineer")&&<div style={{display:"flex",borderBottom:`2px solid ${t.n100}`,marginBottom:16}}>
{[{k:"catalog",l:"AI Catalog"},{k:"performance",l:"Agent Performance"+(persona==="Maintainer"?"":"")},{k:"requested",l:<span style={{display:"flex",alignItems:"center",gap:4}}>Requested{pendingReqs.length>0&&<span style={{background:t.o50,color:t.o500,fontSize:"11px",fontWeight:600,padding:"0 6px",borderRadius:10,lineHeight:"18px"}}>{pendingReqs.length}</span>}</span>}].map(tb=><button key={tb.k} onClick={()=>setGroupTab(tb.k)} style={{padding:"8px 16px",border:"none",background:"transparent",cursor:"pointer",fontSize:"14px",fontWeight:groupTab===tb.k?600:400,color:groupTab===tb.k?t.n950:t.n500,fontFamily:ff,borderBottom:groupTab===tb.k?`2px solid ${t.b500}`:"2px solid transparent",marginBottom:-2}}>{tb.l}</button>)}
</div>}

{(scope!=="Group"||(scope==="Group"&&groupTab==="catalog")||(scope==="Group"&&persona==="User"))&&<>
<TypeTabs items={scopeItems} active={activeType} setActive={setActiveType}/>
<SearchBar tq={tq} setTq={setTq} sb={sb} setSb={setSb} vm={vm} setVm={setVm} placeholder={searchPlaceholder}/>
<div style={{fontSize:"13px",color:t.n400,marginBottom:8}}>{filtered.length} {filtered.length===1?"item":"items"}</div>
{vm==="list"&&<div style={{borderTop:`1px solid ${t.n100}`}}>{filtered.map((it,i)=><Row key={it.id} it={it} onClick={setSel} last={i===filtered.length-1} reqState={persona==="User"?userReqStates[it.id]:undefined}/>)}</div>}
{vm==="grid"&&<div style={{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:12}}>{filtered.map(it=><Card key={it.id} it={it} onClick={setSel} reqState={persona==="User"?userReqStates[it.id]:undefined}/>)}</div>}
{filtered.length===0&&<div style={{textAlign:"center",padding:40,color:t.n400}}><p style={{fontSize:"14px",marginBottom:4}}>No {activeType==="all"?"items":typeTabs.find(x=>x.k===activeType)?.l.toLowerCase()} found</p><p style={{fontSize:"13px"}}>Try a different tab or search term.</p></div>}
</>}

{scope==="Group"&&groupTab==="performance"&&(persona==="Maintainer"||persona==="Engineer")&&<GroupPerformanceTab/>}
{scope==="Group"&&groupTab==="requested"&&(persona==="Maintainer"||persona==="Engineer")&&<RequestedTab onItemClick={setSel}/>}
</>
)}
</div>
</div>
</div>
</div>;
}
