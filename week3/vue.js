const app1 = new Vue({
   el: '#app1',
   data: {
      text: 'Hello Vue2'
   }
})

const app2 = new Vue({
   el: '#app2',
   data: {
      text: 'Have a nice day !',
      holder: 'Enter your name'
   }
})

const app3 = new Vue({
   el: '#app3',
   data: {
      pass: true
   }
})

const app4 = new Vue({
   el: '#app4',
   data: {
      products: [
         {
            name: "iphone 15 pro max",
            price: 1000,
            color: "black"
         },
         {
            name: "macbook pro m2",
            price: 2000,
            color: 'grey'
         },
         {
            name: "ipad 13 pro",
            price: 1500,
            color: 'pink'
         }
      ]
   }
})

const app5 = new Vue({
   el: '#app5',
   data: {
      name: " ",
      quantity: 0,
      price: 0
   },
   methods: {
      calculateTotal() {
         return this.quantity * this.price
      }
   }
})

const app6 = new Vue({
   el: '#app6',
   data: {
      text: ""
   },
   methods: {
      show() {
         this.text = "We are studying Vue2"
      },
      hide() {
         this.text = ""
      }
   }
})