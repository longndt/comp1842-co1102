var app1 = new Vue({
   el: '#app-1',
   data: {
      mevn: "MEVN stack: MongoDB - ExpressJS - VueJS - NodeJS"
   }
})

var app2 = new Vue({
   el: '#app-2',
   data: {
      text: "An introduction to web development frameworks",
      name: "Enter your name here"
   }
})

var app3 = new Vue({
   el: '#app-3',
   data: {
      pass: true
   }
})

var app4 = new Vue({
   el: '#app-4',
   data: {
      todos: [
         {
            text: 'Learn VueJS',
            deadline: '2024-06-15'
         },
         {
            text: 'Learn NodeJS',
            deadline: '2024-06-30'
         },
         {
            text: 'Develop a web app with MEVN stack',
            deadline: '2024-07-15'
         }
      ]
   }
})

var app5 = new Vue({
   el: '#app-5',
   data: {
      message: 'Hello VueJS !'
   },
   methods: {
      reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
      },
      hello: function () {
         return alert("Hello world")
      }
   }
})

var app6 = new Vue({
   el: '#app-6',
   data: {
      text: ''
   }
})