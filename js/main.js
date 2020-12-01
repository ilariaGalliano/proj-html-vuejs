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

    // Companies list
    listCompanies: [
      {
        logoCompany: 'amazon',
      },
      {
        logoCompany: 'google',
      },
      {
        logoCompany: 'lenovo',
      },
      {
        logoCompany: 'paypal',
      },
      {
        logoCompany: 'shopify',
      },
      {
        logoCompany: 'spotify',
      },
    ],

    // Footer
    listFooter2: [
      {
        listCompany: 'About us',
      },
      {
        listCompany: 'Sevices',
      },
      {
        listCompany: 'Team',
      },
      {
        listCompany: 'Pricing',
      },
      {
        listCompany: 'Project',
      },
      {
        listCompany: 'Careers',
      },
      {
        listCompany: 'Blog',
      },
      {
        listCompany: 'Login',
      },
    ],
    listFooter3: [
      {
        listCompany: 'Terms of Sevices',
      },
      {
        listCompany: 'Privacy Policy',
      },
      {
        listCompany: 'Documentation',
      },
      {
        listCompany: 'Changelog',
      },
      {
        listCompany: 'Components',
      },
    ],

    // Payments
    listPayments: [
      {
        card: 'american-ex',
      },
      {
        card: 'discover',
      },
      {
        card: 'master-card',
      },
      {
        card: 'paypal',
      },
      {
        card: 'visa',
      },
    ],

  },
});
