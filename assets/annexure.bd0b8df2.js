import{d as c,N as o}from"./index.d23e1ea8.js";import{a}from"./authheader.813c6670.js";import{u as i}from"./auth.4460aee2.js";import{api as s}from"./axios.ec30bc7f.js";const n=c("heirarchy",{state:()=>({heirarchyData:[],heirarchyD:{startdate:"",enddate:"",placeOfPosting:"",reportingOfficer1:"",reportingOfficer2:"",reviewingOfficer:"",acceptingOfficer:"",reportingOfficer1N:"",reportingOfficer2N:"",reviewingOfficerN:"",acceptingOfficerN:"",hrms:"DM64E6"}}),actions:{async getData(){const e=i();try{const r=await s.get(`/heirarchy/${e.user.hrms}`,{headers:a()});this.heirarchyData=r.data}catch(r){console.log(r),e.logout()}},async postData(){const e=i();this.heirarchyD.hrms=e.user.hrms;try{await s.post("/heirarchy/",this.heirarchyD,{headers:a()}),this.getData()}catch(r){console.log(r),e.logout()}},async deleteData(e){const r=i();try{await s.delete(`/heirarchy/${e}/`,{headers:a()}),this.getData()}catch(t){console.log(t),r.logout()}},updateheirarchy(e,r,t,h){this.heirarchyD.reportingOfficer1=e.hrms,this.heirarchyD.reportingOfficer2=r.hrms,this.heirarchyD.reviewingOfficer=t.hrms,this.heirarchyD.acceptingOfficer=h.hrms,this.heirarchyD.reportingOfficer1N=e.Name,this.heirarchyD.reportingOfficer2N=r.Name,this.heirarchyD.reviewingOfficerN=t.Name,this.heirarchyD.acceptingOfficerN=h.Name}}}),p=c("annexure",{state:()=>({annexure1:[],annexureD:{annexure_id:0,Membership:"",award:"",duties:"",targets:"",achievement:"",shortfall:"",propertyreturn:"",medicalcheckup:""}}),actions:{async getData(e){const r=i();try{const t=await s.get(`/annexure1/${e}/`,{headers:a()});this.annexure1=t.data}catch(t){console.log(t),r.logout()}},async postData(){const e=i(),r=n();try{await s.post("/annexure1/",this.annexureD,{headers:a()}),o.create({message:"submitted successfully",color:"positive",position:"top"})}catch(t){console.log(t),e.logout()}r.getData()},updateId(e){this.annexureD.annexure_id=e}}});export{p as a,n as u};
