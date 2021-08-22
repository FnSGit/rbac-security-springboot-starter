import{e,d as a,y as l,p as o,b as d,L as t,r as n,o as r,c as s,i,F as u,l as c,j as m,t as p,w as h}from"./vendor.47dfe678.js";import{h as f}from"./moment.08a7f518.js";import{a as g}from"./index.f0cfd1f9.js";const b={name:"basetable",setup(){let o=e({roles:[],pageData:[]});g.getRoles().then((e=>{200==e.code&&(o.roles=e.data,o.roles.unshift({name:"全部"}))}));const d=e({role:"",name:"",pageNo:1,pageSize:10,totalPages:0,recordCount:0}),n=()=>{"全部"===d.role&&(d.role=""),g.listUser(d).then((e=>{200==e.code?(o.pageData=e.data.pageData,d.totalPages=e.data.totalPages,d.recordCount=e.data.recordCount):l.error(e.message)}))};n();const r=a(!1);let s=e({id:1,username:"",password:""}),i=-1;let u=a(!1);return{dat:o,query:d,editVisible:r,addVisible:u,form:s,handlePageChange:e=>{d.pageNo=e,n()},handleDelete:e=>{t.confirm("确定要删除吗？","提示",{type:"warning"}).then((()=>{l.success("删除成功"),tableData.value.splice(e,1)})).catch((()=>{}))},handleEdit:(e,a)=>{i=e,Object.keys(s).forEach((e=>{s[e]=a[e]})),r.value=!0},saveEdit:()=>{null!=s.password&&0!=s.password.length||s.username!==o.pageData[i].username?g.updateUser(s).then((e=>{200===e.code?(r.value=!1,l.success("修改成功"),Object.keys(s).forEach((e=>{o.pageData[i][e]=s[e]}))):l.error(e.message)})):l.error("用户名未发生变化")},momentTime:function(e){return f(e).format("yyyy-MM-DD HH:mm")},updateAccountNonExpired:(e,a)=>{let o=a.id,d=a.accountNonExpired;g.updateAccountNonExpired({id:o,accountNonExpired:d}).then((e=>{200==e.code?l.success("更新成功"):(l.error(e.message),a.accountNonExpired=!a.accountNonExpired)}))},updateAccountNonLocked:(e,a)=>{let o=a.id,d=a.accountNonLocked;g.updateAccountNonLocked({id:o,accountNonLocked:d}).then((e=>{200==e.code?l.success("更新成功"):(l.error(e.message),a.accountNonLocked=!a.accountNonLocked)}))},updateEnabled:(e,a)=>{let o=a.id,d=a.enabled;g.updateEnabled({id:o,enabled:d}).then((e=>{200==e.code?l.success("更新成功"):(l.error(e.message),a.enabled=!a.enabled)}))},handleAdd:()=>{Object.keys(s).forEach((e=>{s[e]=""})),u.value=!0},register:()=>{g.register(s).then((e=>{200===e.code?(l.success("添加成功"),u.value=!1,n()):l.error(e.message)}))},handleSearch:()=>{d.pageNo=1,n()}}},data:()=>({data:[],userRole:[],grantVisible:!1,uid:0}),methods:{rightData(e){g.listUserRole(e).then((e=>{if(200===e.code){this.userRole=[];for(let a=0;a<e.data.length;a++){let l=e.data[a];this.userRole.push(l.id)}}}))},handleGrant(e,a){this.uid=a.id,this.rightData(a.id),this.grantVisible=!0},handleChange(e,a,o){"right"==a?g.grantUserRole(this.uid,o).then((a=>{200===a.code?this.userRole=e:l.error(a.message)})):g.cancelUserRole(this.uid,o).then((a=>{200===a.code?this.userRole=e:l.error(a.message)})),this.rightData(this.uid)},filterMethod:(e,a)=>a.spell.indexOf(e)>-1},created(){g.getRoles().then((e=>{200==e.code&&e.data.forEach((e=>{let a=!1;"ANONYMOUS"==e.name&&(a=!0),this.data.push({label:e.name,key:e.id,spell:e.name,disabled:a})}))}))}},V=h();o("data-v-033bd53e");const w={class:"crumbs"},y=i("i",{class:"el-icon-lx-cascades"},null,-1),C=m(" 用户管理 "),k={class:"container"},U={class:"handle-box"},_=m("搜索"),x=m("编辑"),v=m("授权"),N={class:"pagination"},E={class:"dialog-footer"},D=m("取 消"),L=m("确 定"),R={class:"dialog-footer"},A=m("取 消"),q=m("确 定");d();const j=V(((e,a,l,o,d,t)=>{const h=n("el-breadcrumb-item"),f=n("el-breadcrumb"),g=n("el-option"),b=n("el-select"),j=n("el-input"),O=n("el-button"),M=n("el-table-column"),P=n("el-switch"),S=n("el-table"),$=n("el-pagination"),z=n("el-form-item"),T=n("el-form"),G=n("el-dialog"),H=n("el-transfer");return r(),s("div",null,[i("div",w,[i(f,{separator:"/"},{default:V((()=>[i(h,null,{default:V((()=>[y,C])),_:1})])),_:1})]),i("div",k,[i("div",U,[i(b,{modelValue:o.query.role,"onUpdate:modelValue":a[1]||(a[1]=e=>o.query.role=e),placeholder:"角色",class:"handle-select mr10"},{default:V((()=>[(r(!0),s(u,null,c(o.dat.roles,(e=>(r(),s(g,{key:e.id,label:e.name,value:e.name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),i(j,{modelValue:o.query.name,"onUpdate:modelValue":a[2]||(a[2]=e=>o.query.name=e),placeholder:"用户名",class:"handle-input mr10"},null,8,["modelValue"]),i(O,{type:"primary",icon:"el-icon-search",onClick:o.handleSearch},{default:V((()=>[_])),_:1},8,["onClick"]),i(O,{icon:"el-icon-lx-add",onClick:o.handleAdd,circle:""},null,8,["onClick"])]),i(S,{data:o.dat.pageData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:V((()=>[i(M,{prop:"id",label:"ID",width:"55",align:"center"}),i(M,{prop:"username",label:"用户名"}),i(M,{label:"注册时间"},{default:V((e=>[m(p(o.momentTime(e.row.gmtCreate)),1)])),_:1}),i(M,{prop:"lastLogin",label:"最后登陆时间"},{default:V((e=>[m(p(o.momentTime(e.row.lastLogin)),1)])),_:1}),i(M,{label:"账户是否过期",align:"center"},{default:V((e=>[i(P,{disabled:"anonymousUser"===e.row.username,modelValue:e.row.accountNonExpired,"onUpdate:modelValue":a=>e.row.accountNonExpired=a,onChange:a=>o.updateAccountNonExpired(e.$index,e.row),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(M,{label:"账户是否锁定",align:"center"},{default:V((e=>[i(P,{disabled:"anonymousUser"===e.row.username,modelValue:e.row.accountNonLocked,"onUpdate:modelValue":a=>e.row.accountNonLocked=a,onChange:a=>o.updateAccountNonLocked(e.$index,e.row),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(M,{label:"密码是否过期",align:"center"},{default:V((e=>[i(P,{disabled:"",modelValue:e.row.credentialsNonExpired,"onUpdate:modelValue":a=>e.row.credentialsNonExpired=a,"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(M,{label:"账户是否启用（删除）",align:"center"},{default:V((e=>[i(P,{modelValue:e.row.enabled,"onUpdate:modelValue":a=>e.row.enabled=a,disabled:"anonymousUser"===e.row.username,onChange:a=>o.updateEnabled(e.$index,e.row),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),_:1}),i(M,{label:"操作",width:"180",align:"center"},{default:V((e=>[i(O,{disabled:"anonymousUser"===e.row.username,type:"text",icon:"el-icon-edit",onClick:a=>o.handleEdit(e.$index,e.row)},{default:V((()=>[x])),_:2},1032,["disabled","onClick"]),i(O,{disabled:"anonymousUser"===e.row.username,type:"text",icon:"el-icon-edit",onClick:a=>t.handleGrant(e.$index,e.row)},{default:V((()=>[v])),_:2},1032,["disabled","onClick"])])),_:1})])),_:1},8,["data"]),i("div",N,[i($,{background:"",layout:"total, prev, pager, next","current-page":o.query.pageNo,"page-size":o.query.pageSize,total:o.query.recordCount,onCurrentChange:o.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])]),i(G,{title:"编辑",modelValue:o.editVisible,"onUpdate:modelValue":a[6]||(a[6]=e=>o.editVisible=e),width:"30%"},{footer:V((()=>[i("span",E,[i(O,{onClick:a[5]||(a[5]=e=>o.editVisible=!1)},{default:V((()=>[D])),_:1}),i(O,{type:"primary",onClick:o.saveEdit},{default:V((()=>[L])),_:1},8,["onClick"])])])),default:V((()=>[i(T,{"label-width":"70px"},{default:V((()=>[i(z,{label:"用户名"},{default:V((()=>[i(j,{modelValue:o.form.username,"onUpdate:modelValue":a[3]||(a[3]=e=>o.form.username=e)},null,8,["modelValue"])])),_:1}),i(z,{label:"密码"},{default:V((()=>[i(j,{type:"password",modelValue:o.form.password,"onUpdate:modelValue":a[4]||(a[4]=e=>o.form.password=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),i(G,{title:"添加用户",modelValue:o.addVisible,"onUpdate:modelValue":a[10]||(a[10]=e=>o.addVisible=e),width:"30%"},{footer:V((()=>[i("span",R,[i(O,{onClick:a[9]||(a[9]=e=>o.editVisible=!1)},{default:V((()=>[A])),_:1}),i(O,{type:"primary",onClick:o.register},{default:V((()=>[q])),_:1},8,["onClick"])])])),default:V((()=>[i(T,{"label-width":"70px"},{default:V((()=>[i(z,{label:"用户名"},{default:V((()=>[i(j,{modelValue:o.form.username,"onUpdate:modelValue":a[7]||(a[7]=e=>o.form.username=e)},null,8,["modelValue"])])),_:1}),i(z,{label:"密码"},{default:V((()=>[i(j,{type:"password",modelValue:o.form.password,"onUpdate:modelValue":a[8]||(a[8]=e=>o.form.password=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),i(G,{modelValue:d.grantVisible,"onUpdate:modelValue":a[12]||(a[12]=e=>d.grantVisible=e),width:"650px"},{default:V((()=>[i(H,{modelValue:d.userRole,"onUpdate:modelValue":a[11]||(a[11]=e=>d.userRole=e),filterable:"","filter-method":t.filterMethod,"filter-placeholder":"请输入角色名",titles:["未拥有角色","已拥有角色"],data:d.data,onChange:t.handleChange},null,8,["modelValue","filter-method","data","onChange"])])),_:1},8,["modelValue"])])}));b.render=j,b.__scopeId="data-v-033bd53e";export default b;