//   {
//   method: 'POST',
//   path: '/hello',
//   handler: function (request, reply) {
//       console.log(request.payload)
//       reply('successful');
//   }


const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
})

server.route([{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return '<h1>Hello, world!</h1>';
    }
}, {
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        var name = request.params['name']
        console.log(name)
        return name
    }
}]);

server.start();

// const init = async () => {

//     await server.register({
//         // plugin: require('hapi-pino'),
//         options: {
//             prettyPrint: false,
//             logEvents: ['response']
//         }
//     });

//     await server.start();
//     console.log(`Server running at: ${server.info.uri}`);
// };

// process.on('unhandledRejection', (err) => {

//     console.log(err);
//     process.exit(1);
// });

// init();