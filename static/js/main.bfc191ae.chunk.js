(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(26),r=n.n(i),s=(n(32),n(7)),c=n(8),l=n(10),u=n(9),d=(n(33),n(62)),m=n(0),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={showDetails:!1},o}return Object(c.a)(n,[{key:"handleShowDetails",value:function(e){this.setState({showDetails:e})}},{key:"render",value:function(){var e,t=this,n=this.props.event,o=n.summary,a=n.location,i=n.description,r=n.link,s=this.props.event.start.dateTime;return e=this.state.showDetails?Object(m.jsxs)("div",{className:"expanded",children:[Object(m.jsx)("h3",{children:"About the event:"}),Object(m.jsx)("h5",{style:{color:"white"},className:"description",children:i}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{style:{fontSize:"20px",textAlign:"center"},className:"link",href:r,children:"See event on Google Calendar"})}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{variant:"danger",style:{color:"black",fontSize:"18px",fontWeight:"bold",textAlign:"center",marginTop:"10px"},className:"detailsButton",onClick:function(){return t.handleShowDetails(!1)},children:"Hide details"})]}):Object(m.jsx)(d.a,{variant:"success",style:{color:"black",fontSize:"14px",textAlign:"center",fontWeight:"bold"},className:"detailsButton",onClick:function(){return t.handleShowDetails(!0)},children:"Expand for Details"}),Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h2",{className:"summary",children:o}),Object(m.jsx)("h5",{className:"date",children:s}),Object(m.jsx)("h5",{className:"location",children:a}),e]})}}]),n}(o.Component),g=n(58),h=n(59),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"EventList event-rows",children:Object(m.jsx)(g.a,{children:e.map((function(e){return Object(m.jsx)(h.a,{lg:6,children:Object(m.jsx)(p,{event:e})},e.id)}))})})}}]),n}(o.Component),y=n(63),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value,o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===o.length?e.setState({query:n,infoText:"We cannot find the city you are looking for. Please check your spelling or try another city."}):e.setState({query:n,suggestions:o,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsxs)(y.a,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{style:{color:"white",fontSize:"20px",textAlign:"center"},children:Object(m.jsx)("h4",{children:"Enter Your City: "})})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{style:{color:"black",fontSize:"24px",textAlign:"center"},as:"textarea","aria-label":"With textarea",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{style:{color:"white",fontSize:"20px",textAlign:"center"},onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{style:{color:"white",fontSize:"18px",textAlign:"center",padding:"10px"},onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{style:{color:"white"},children:"See all cities"})},"all")]})]})}}]),n}(o.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).handleInputChange=function(e){var t=e.target.value;o.setState({eventListSize:t}),o.props.updateListSize(t)},o.state={eventListSize:e.number,errorText:""},o}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"NumberOfEvents",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("label",{style:{color:"white"},children:Object(m.jsx)("h4",{children:"Events Listed: "})})}),Object(m.jsx)("input",{style:{color:"black",fontSize:"24px",textAlign:"center"},as:"textarea","aria-label":"With textarea",type:"number",className:"number",value:this.state.eventListSize,onChange:this.handleInputChange})]})})}}]),n}(o.Component),w=n(11),j=n.n(w),k=n(13),T=n(27),x=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221506816000"',id:"48m09le389vijbqfs2mcr6i87q",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:39:01.000Z",updated:"2020-07-01T13:39:13.408Z",summary:"Node Gang",description:"We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",location:"Sydney NSW, Australia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;BYDAY=TU"],iCalUID:"48m09le389vijbqfs2mcr6i87q@google.com",sequence:1,hangoutLink:"https://meet.google.com/wdc-wutt-tji",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wdc-wutt-tji",label:"meet.google.com/wdc-wutt-tji"},{entryPointType:"more",uri:"https://tel.meet/wdc-wutt-tji?pin=3796108774207",pin:"3796108774207"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618974",label:"+49 40 8081618974",pin:"170634768"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wdc-wutt-tji",signature:"AL9oL6Xu9pm++ltHcO4H0DIZIngA"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221858184000"',id:"3gi3kabkm3bua5lq3jhscc8s4c",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:23:24.000Z",updated:"2020-07-01T13:42:09.092Z",summary:"Intro to AngularJS-Remote",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",location:"New York, NY, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T22:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T23:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3gi3kabkm3bua5lq3jhscc8s4c@google.com",sequence:2,hangoutLink:"https://meet.google.com/xcb-hfjb-psv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/xcb-hfjb-psv",label:"meet.google.com/xcb-hfjb-psv"},{entryPointType:"more",uri:"https://tel.meet/xcb-hfjb-psv?pin=4442155852117",pin:"4442155852117"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617300",label:"+49 40 8081617300",pin:"657955248"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"xcb-hfjb-psv",signature:"AL9oL6Vr6kh9gtl5ysMlFEENOatu"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187222416180000"',id:"6co0ojl0l0j0rbh3g56vlc2s9i",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMDA3MDFUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:44:15.000Z",updated:"2020-07-01T13:46:48.090Z",summary:"React California",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",location:"California, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T03:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T04:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,WE"],iCalUID:"6co0ojl0l0j0rbh3g56vlc2s9i@google.com",sequence:1,hangoutLink:"https://meet.google.com/imt-kabh-cib",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/imt-kabh-cib",label:"meet.google.com/imt-kabh-cib"},{entryPointType:"more",uri:"https://tel.meet/imt-kabh-cib?pin=8711708481601",pin:"8711708481601"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618688",label:"+49 40 8081618688",pin:"752695860"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"imt-kabh-cib",signature:"AL9oL6WYel9u3hoOeIb7hgrLvnb4"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187224991890000"',id:"3glt4dve9uip7oh5g5kb2bid2s",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMDA3MDJUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T14:07:59.000Z",updated:"2020-07-01T14:08:15.945Z",summary:"Fun with Node.js",description:"Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",location:"Nairobi, Kenya",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-02T18:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-02T19:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=MO,TH"],iCalUID:"3glt4dve9uip7oh5g5kb2bid2s@google.com",sequence:1,hangoutLink:"https://meet.google.com/wkx-akyy-omd",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wkx-akyy-omd",label:"meet.google.com/wkx-akyy-omd"},{entryPointType:"more",uri:"https://tel.meet/wkx-akyy-omd?pin=9536747460380",pin:"9536747460380"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081616512",label:"+49 40 8081616512",pin:"576339034"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wkx-akyy-omd",signature:"AL9oL6X2ScwivP2TCtlKxH/W396F"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187231386852000"',id:"7qqm95l3op6khilck5cprvbq2u",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMDA3MDFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:00:58.000Z",updated:"2020-07-01T15:01:33.426Z",summary:"Fun with Angular",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",location:"Dubai - United Arab Emirates",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SU,WE"],iCalUID:"7qqm95l3op6khilck5cprvbq2u@google.com",sequence:1,hangoutLink:"https://meet.google.com/bim-zvvi-nio",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/bim-zvvi-nio",label:"meet.google.com/bim-zvvi-nio"},{entryPointType:"more",uri:"https://tel.meet/bim-zvvi-nio?pin=8340594476418",pin:"8340594476418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617267",label:"+49 40 8081617267",pin:"692195842"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"bim-zvvi-nio",signature:"AL9oL6VK/Xi1CF/j2IBq2+aC20WS"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232047578000"',id:"013qoq4ns44cam7q4hqcf13eab",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:05:49.000Z",updated:"2020-07-01T15:07:03.789Z",summary:"jQuery and More",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Santiago, Santiago Metropolitan Region, Chile",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T01:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T02:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"013qoq4ns44cam7q4hqcf13eab@google.com",sequence:1,hangoutLink:"https://meet.google.com/mqx-jyfg-uoc",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/mqx-jyfg-uoc",label:"meet.google.com/mqx-jyfg-uoc"},{entryPointType:"more",uri:"https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",pin:"9759553023326"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618734",label:"+49 40 8081618734",pin:"678190650"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"mqx-jyfg-uoc",signature:"AL9oL6VHobyPBr0/S2vHjBpDOIxY"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232499498000"',id:"7rclpdp8egm60g7kepei7j0bt9",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMDA3MDFUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:10:03.000Z",updated:"2020-07-01T15:10:49.749Z",summary:"Hello JavaScript!!",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",location:"Bangkok, Thailand",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T11:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T12:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,WE"],iCalUID:"7rclpdp8egm60g7kepei7j0bt9@google.com",sequence:1,hangoutLink:"https://meet.google.com/tbu-cgma-ikb",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/tbu-cgma-ikb",label:"meet.google.com/tbu-cgma-ikb"},{entryPointType:"more",uri:"https://tel.meet/tbu-cgma-ikb?pin=5464596701700",pin:"5464596701700"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618071",label:"+49 40 8081618071",pin:"382271360"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"tbu-cgma-ikb",signature:"AL9oL6VCtngxEgEGBy9IdRM1iDju"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232532588000"',id:"20c51je3q99mnolr1rp06dt9jd",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA2MzBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T14:17:12.000Z",updated:"2020-07-01T15:11:06.294Z",summary:"Use jQuery, bring in interactivity easily ",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Mumbai, Maharashtra, India",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"20c51je3q99mnolr1rp06dt9jd@google.com",sequence:1,hangoutLink:"https://meet.google.com/nns-htdr-ijk",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/nns-htdr-ijk",label:"meet.google.com/nns-htdr-ijk"},{entryPointType:"more",uri:"https://tel.meet/nns-htdr-ijk?pin=9302146320475",pin:"9302146320475"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618430",label:"+49 40 8081618430",pin:"810644618"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"nns-htdr-ijk",signature:"AL9oL6WlWyj+Q0HnkEu6+hb3ozyG"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232583216000"',id:"3m5n6mcl1aqrdsg6k5vkr6to5p",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA2MzBUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:54:32.000Z",updated:"2020-07-01T15:11:31.608Z",summary:"Build Your First App with JavaScript",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",location:"Amsterdam, Netherlands",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T18:30:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T19:30:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TU"],iCalUID:"3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",sequence:1,hangoutLink:"https://meet.google.com/vxc-jcvs-juv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/vxc-jcvs-juv",label:"meet.google.com/vxc-jcvs-juv"},{entryPointType:"more",uri:"https://tel.meet/vxc-jcvs-juv?pin=7178471106778",pin:"7178471106778"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081619886",label:"+49 40 8081619886",pin:"257304091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"vxc-jcvs-juv",signature:"AL9oL6VUF+Rqztz7MRBPu5hm+yjy"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234500432000"',id:"65jg7h2f96klim15fie75mj1a1",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMDA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:26:57.000Z",updated:"2020-07-01T15:27:30.216Z",summary:"AngularJS Workshop",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",location:"Cape Town, South Africa",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"65jg7h2f96klim15fie75mj1a1@google.com",sequence:1,hangoutLink:"https://meet.google.com/ctp-pwtc-pmq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ctp-pwtc-pmq",label:"meet.google.com/ctp-pwtc-pmq"},{entryPointType:"more",uri:"https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",pin:"2824243883315"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195220",label:"+49 30 300195220",pin:"987090091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ctp-pwtc-pmq",signature:"AL9oL6U13oi8UFLDdKA/EOcTu4yA"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234769062000"',id:"46717o686s7ibj1lp300pabro9",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMDA3MDFUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:28:56.000Z",updated:"2020-07-01T15:29:44.531Z",summary:"React Workshop",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Toronto, ON, Canada",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T20:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T21:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SU,WE"],iCalUID:"46717o686s7ibj1lp300pabro9@google.com",sequence:1,hangoutLink:"https://meet.google.com/jnj-edux-duq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/jnj-edux-duq",label:"meet.google.com/jnj-edux-duq"},{entryPointType:"more",uri:"https://tel.meet/jnj-edux-duq?pin=3356856978418",pin:"3356856978418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195194",label:"+49 30 300195194",pin:"599388176"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"jnj-edux-duq",signature:"AL9oL6UELeOdTZenxESVomP5VDUq"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187237556010000"',id:"111vmlbl7p8gmc0fbf5u107p8u",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MDJUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:47:59.000Z",updated:"2020-07-01T15:52:58.005Z",summary:"React Native Tokyo",description:"We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",location:"Tokyo, Japan",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-02T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-02T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=MO,TH"],iCalUID:"111vmlbl7p8gmc0fbf5u107p8u@google.com",sequence:1,hangoutLink:"https://meet.google.com/ceo-behe-ssp",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ceo-behe-ssp",label:"meet.google.com/ceo-behe-ssp"},{entryPointType:"more",uri:"https://tel.meet/ceo-behe-ssp?pin=2641490783465",pin:"2641490783465"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617770",label:"+49 40 8081617770",pin:"889553795"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ceo-behe-ssp",signature:"AL9oL6WazoB4DN0vp1CiTzQ/GCgi"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187238088812000"',id:"7e4k9oop7bb86svd42vui37k6o",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMDA2MzBUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:56:05.000Z",updated:"2020-07-01T15:57:24.406Z",summary:"Angular Moscow",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",location:"Moscow, Russia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T17:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T18:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=TU"],iCalUID:"7e4k9oop7bb86svd42vui37k6o@google.com",sequence:1,hangoutLink:"https://meet.google.com/fip-gdth-tdu",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/fip-gdth-tdu",label:"meet.google.com/fip-gdth-tdu"},{entryPointType:"more",uri:"https://tel.meet/fip-gdth-tdu?pin=1369000914291",pin:"1369000914291"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081616684",label:"+49 40 8081616684",pin:"516915292"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"fip-gdth-tdu",signature:"AL9oL6WvmNwHDjaBzk3iI/OxS8HT"},reminders:{useDefault:!0},eventType:"default"}],S=n(16),Z=n.n(S),D=n(14),M=n.n(D),W=function(e,t){for(var n=[],o=0;o<t;o++)e[o]&&n.push(e[o]);return n},E=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},A=function(){var e=Object(k.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(k.a)(j.a.mark((function e(){var t,n,o,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),M.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return M.a.done(),e.abrupt("return",x);case 8:return e.next=10,R();case 10:if(!(n=e.sent)){e.next=20;break}return U(),o="https://ub4wuf4uii.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,Z.a.get(o);case 16:return(a=e.sent).data&&(i=E(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(i))),M.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(k.a)(j.a.mark((function e(){var t,n,o,a,i,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,A(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=18;break}if(localStorage.removeItem("access_token"),o=new URLSearchParams(window.location.search),a=o.get("code")){e.next=17;break}return e.next=14,Z.a.get("https://ub4wuf4uii.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 14:return i=e.sent,r=i.data.authUrl,e.abrupt("return",window.location.href=r);case 17:return e.abrupt("return",a&&Y(a));case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(k.a)(j.a.mark((function e(t){var n,o,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ub4wuf4uii.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=n(60),O=n(61),_=(n(54),n.p+"static/media/logo.5557688f.png"),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],eventListSize:32,limitedList:[]},e.updateEvents=function(t){L().then((function(n){var o="all"===t||""===t?n:n.filter((function(e){return e.location===t})),a=W(o,e.state.eventListSize);e.setState({events:o,limitedList:a})}))},e.updateListSize=function(t){var n=W(e.state.events,t);e.setState({eventListSize:t,limitedList:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,L().then((function(t){if(e.mounted){var n=W(t,e.state.eventListSize);e.setState({events:t,locations:E(t),limitedList:n})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.limitedList;return Object(m.jsx)("div",{className:"center",children:Object(m.jsxs)(q.a,{fluid:"md",className:"App",children:[Object(m.jsx)(g.a,{className:"justify-content-md-center",children:Object(m.jsx)(O.a,{src:_,alt:"logo image",className:"logo"})}),Object(m.jsxs)(g.a,{className:"justify-content-md-center",children:[Object(m.jsx)(h.a,{children:Object(m.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents})}),Object(m.jsx)(h.a,{children:Object(m.jsx)(v,{number:this.state.eventListSize,updateListSize:this.updateListSize})})]}),Object(m.jsx)(g.a,{className:"justify-content-md-center",children:Object(m.jsx)(h.a,{children:Object(m.jsx)(f,{events:e,eventListSize:this.state.eventListSize})})})]})})}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),N()}},[[57,1,2]]]);
//# sourceMappingURL=main.bfc191ae.chunk.js.map