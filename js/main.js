/*************
 * Landrick Vue
 *************/

const app = new Vue({
  el: '#app',
  data: {

    // Menu list
    listMenu: [
      {
        text: 'home',
      },
      {
        text: 'landing',
        prefix: 'fa-',
        type: 'chevron-down',
        family: 'fas',
      },
      {
        text: 'pages',
        prefix: 'fa-',
        type: 'chevron-down',
        family: 'fas',
      },
      {
        text: 'docs',
        prefix: 'fa-',
        type: 'chevron-down',
        family: 'fas'
      },
    ],
  },
});
