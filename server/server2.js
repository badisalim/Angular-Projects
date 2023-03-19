// const express = require('express');
// const cors = require('cors');
// const app = express();
// const fs = require('fs');
// const _ = require('lodash');

// async function init() {
//   const invoiceFile = './server/invoice.json';

//   let invoice = await loadData(invoiceFile);

//   app
//     .use(cors())
//     .use(express.json())
//     .get('/invoice', (req, res) => {
//       res.send(invoice)
//     })
//     .get('/invoice/:id', (req, res) => {
//       const id = parseInt(req.params.id);
//       res.send(invoice.find(product => product.id === id));
//     })
//     .post('/invoice', (req, res) => {
//       console.log(req.body);

//       const product = req.body;
//       product.id = getNextid(invoice);
//       invoice.push(product);
//       saveData(invoiceFile, invoice).then(() => res.send(invoice));
//     })
//     .put('/invoice', async (req, res) => {
//       const product = req.body;
//       const existingProduct = invoice.find(p => p.id === product.id);
//       Object.assign(existingProduct, product);
//       await saveData(invoiceFile, invoice).then(() => res.send(invoice));
//     })
//     // .edit('/invoice/:id', async (req, res) => {
//     //   const id = parseInt(req.params.id);
//     //   invoice = invoice.filter(p => p.id !== id);
//     //   await saveData(invoiceFile, invoice).then(() => res.send(invoice));
//     // })

//     .delete('/invoice/:id', async (req, res) => {
//       const id = parseInt(req.params.id);
//       invoice = invoice.filter(p => p.id !== id);
//       await saveData(invoiceFile, invoice).then(() => res.send(invoice));
//     })
//     .listen(3000, () => console.log('server started on port 3000'));
// }

// function getNextid(items) {
//   return (
//     items
//     .map(item => item.id)
//     .sort((item1, item2) => (item1.id > item2.id ? 1 : -1))
//     .pop() + 1
//   );
// }

// async function loadData(filename) {
//   return new Promise(resolve =>
//     fs.readFile(filename, {
//       encoding: 'UTF-8'
//     }, (err, data) => resolve(JSON.parse(data).data))
//   );
// }

// async function saveData(filename, data) {
//   return new Promise(resolve =>
//     fs.writeFile(
//       filename,
//       JSON.stringify({
//         data: data
//       }), {
//         encoding: 'UTF-8'
//       },
//       resolve
//     )
//   );
// }

// init();
