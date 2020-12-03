/*************
 * Landrick Vue
 *************/

const app = new Vue({
  el: '#app',
  data: {

    // Menu list Navbar
    listMenu: [
      {
        text: 'home',
      },
      {
        text: 'landing',
        nameIcon: 'fa-chevron-down',
        family: 'fas',
      },
      {
        text: 'pages',
        nameIcon: 'fa-chevron-down',
        family: 'fas',
      },
      {
        text: 'docs',
        nameIcon: 'fa-chevron-down',
        family: 'fas',
      },
    ],

    // Icon Navbar colored
    iconsNav: [
      {
        nameIcon: 'fa-github',
        family: 'fab',
      },
      {
        nameIcon: 'fa-stack-overflow',
        family: 'fab',
      },
      {
        nameIcon: 'fa-user',
        family: 'far',
      },
    ],

    // Icon Navbar gray
    iconsNavGray: [
      {
        nameIcon: 'fa-search',
        family: 'fas',
      }
    ],

    // Companies list Header
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

    // Footer column 1 social-list
    listSocial: [
      {
        nameSocial: 'fa-facebook-f',
        family: 'fab',
      },
      {
        nameSocial: 'fa-instagram',
        family: 'fab',
      },
      {
        nameSocial: 'fa-twitter',
        family: 'fab',
      },
      {
        nameSocial: 'fa-linkedin-in',
        family: 'fab',
      },
    ],

    // Footer column 2 list
    listFooter2: [
      {
        listCompany: 'About us',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Sevices',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Team',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Pricing',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Project',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Careers',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Blog',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Login',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
    ],

    // footer column 3 list
    listFooter3: [
      {
        listCompany: 'Terms of Sevices',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Privacy Policy',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Documentation',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Changelog',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
      {
        listCompany: 'Components',
        nameIcon: 'fa-chevron-right',
        family: 'fas',
      },
    ],

    // Payments footer bottom
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
  }


});
