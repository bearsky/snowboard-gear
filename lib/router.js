Router.configure ({
 layoutTemplate: 'Layout'
});

Router.route('home', {
    path: '/',
    template: 'HomePage',
});

Router.route('signIn', {
    path: '/sign-in',
    template: 'SignIn',
});