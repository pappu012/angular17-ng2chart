// server.js
import { Server } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  console.log("server")
  let server = new Server({
    environment,

    routes() {
      this.namespace = 'api'; // Base API route

      this.get("/items", () => ([
        {
          "id": 1,
          "itemName": "Product 1",
          "description": "sample",
          "stock": 10,
        },
        {
          "id": 2,
          "itemName": "Product 2",
          "description": "sample",
          "stock": 20,
        },
        {
          "id": 3,
          "itemName": "Product 3",
          "description": "sample",
          "stock": 30,
        },
        {
          "id": 4,
          "itemName": "Product 4",
          "description": "sample",
          "stock": 40,
        },
       
      ]
      ))

      this.get("/chart1", () => ({
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            fill: 'origin',
          },
          {
            data: [180, 480, 770, 90, 1000, 270, 400],
            label: 'Series C',
            yAxisID: 'y1',
            backgroundColor: 'rgba(2, 20, 51,0.5)',
            borderColor: 'rgba(2, 20, 51,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      }))

      this.get("/chart2", () => ({
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'rgba(148,159,177,0.8)', },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ],
      }))

      this.get("/chart3", () => ({
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            fill: 'origin',
          },
          {
            data: [180, 480, 770, 90, 1000, 270, 400],
            label: 'Series C',
            yAxisID: 'y1',
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      }))

      this.get("/chart4", () => ({
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
          {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            fill: 'origin',
          },
          {
            data: [180, 480, 770, 90, 1000, 270, 400],
            label: 'Series C',
            yAxisID: 'y1',
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'red',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
          },
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      }))

      this.post('/items', (schema, request) => {
        const item = JSON.parse(request.requestBody);
        item.id = Date.now();
        return schema.db['items'].insert(item);
        console.log(item, "mirage-post");
      });

      this.put('/items/:id', (schema, request) => {
        const item = JSON.parse(request.requestBody);

        // NOTE: this is for searching based on id 
        const existingItem = schema.db['items'].find(request.params['id']);

        // NOTE: this is just to update specific item
        schema.db['items'].update(request.params['id'], {
          itemName: item.itemName,

        });
        console.log(existingItem, "mirage-put")
        return existingItem;
      });
    },
  });

  return server;
}
