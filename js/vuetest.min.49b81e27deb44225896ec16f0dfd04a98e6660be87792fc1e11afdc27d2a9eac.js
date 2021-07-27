import{createApp}from'.././esm-browser/vue.esm-browser.js';const Counter={data(){return{counter:0}},mounted(){setInterval(()=>{this.counter++},1e3)}};createApp(Counter).mount('#counter');const EventHandling={data(){return{message:'Hello Vue.js!'}},methods:{reverseMessage(){this.message=this.message.split('').reverse().join('')}}};createApp(EventHandling).mount('#event-handling');const emptybox=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ee5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
`,checkedbox=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009922" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
`,remindbox=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4466ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
`,remindsmall=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4466ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
`,Checkbox={data(){return{selectHtml:`
        <span class="checkbox">${emptybox}</span>
        
      `,remindHtml:`
        <span class="checkbox">${remindsmall}</span>
      
    `,state:"empty"}},methods:{select(){console.log(this.state),this.state==="empty"?(this.selectHtml=`
          <span class="checkbox"> ${checkedbox} </span>
        `,this.remindHtml=`
          <span class="checkbox"></span>
        `,this.state="checked"):this.state==="remind"?(this.selectHtml=`
          <span class="checkbox"> ${emptybox} </span>
        `,this.remindHtml=`
          <span class="checkbox"> ${remindsmall}</span>
        `,this.state="empty"):this.state==="checked"&&(this.selectHtml=`
          <span class="checkbox"> ${emptybox} </div>
        `,this.remindHtml=`
          <span class="checkbox"> ${remindsmall}</span>
        `,this.state="empty"),console.log(this.state)},remind(){console.log(this.state),this.state==="empty"&&(this.selectHtml=`
          <span class="checkbox">${remindbox} </span>
        `,this.remindHtml=`
          <span class="checkbox"></span>
        `,this.state="remind"),console.log(this.state)}}};createApp(Checkbox).mount('#checkbox')