new Vue({
  el: '#content',

  data:{
  disksElement:[],
  selected:''
  },

  mounted() {
  const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(resp) {
        const disks = resp.data.response
        console.log(disks);
        self.disksElement = disks;


      })

  },
  methods:{

   searchingGenre:function(){
     const self = this;
     self.disksElement.forEach((item, i) => {
       if (item.genre.toLowerCase().includes(self.selected.toLowerCase())) {
         item.visible = true;
       }else {
         item.visible = false;
       }
     });

   }


  }





});
Vue.config.devtools = true;
