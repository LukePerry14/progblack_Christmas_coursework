'use strict';

const request = require('supertest');
const app = require('./app.js');
const fs = require('fs');
describe('Testing ToDo service', () => {
    test('GET /TodayTitleToDo succeeds', () => {
        return request(app)
	    .get('/TodayTitleToDo')
	    .expect(200);
    });

    test('GET /TmrTitleToDo succeeds', () => {
        return request(app)
	    .get('/TmrTitleToDo')
	    .expect(200);
    });

    test('GET /TodayTitleToDo returns JSON', () => {
        return request(app)
	    .get('/TodayTitleToDo')
	    .expect('Content-type', /json/);
    });

    test('GET /TmrTitleToDo returns JSON', () => {
        return request(app)
	    .get('/TmrTitleToDo')
	    .expect('Content-type', /json/);
    });

    test('GET /TodaydescToDo succeeds', () => {
        return request(app)
	    .get('/TodaydescToDo')
	    .expect(200);
    });

    test('GET /TmrdescToDo succeeds', () => {
        return request(app)
	    .get('/TmrdescToDo')
	    .expect(200);
    });

    test('GET /TodaydescToDo returns JSON', () => {
        return request(app)
	    .get('/TodaydescToDo')
	    .expect('Content-type', /json/);
    });

    test('GET /TmrdescToDo returns JSON', () => {
        return request(app)
	    .get('/TmrdescToDo')
	    .expect('Content-type', /json/);
    });

    test('POST /TodaynewToDo Succeeds', () => {
        const body = {'inptitle':'REST_jest_test_title', 'inpdesc':'REST_jest_test_desc'};
        return request(app)
        .post('/TodaynewToDo')
        .send(body)
	    .expect(200);
    });

    test('POST /TmrnewToDo Succeeds', () => {
        const body = {'inptitle':'REST_jest_test_title', 'inpdesc':'REST_jest_test_desc'};
        return request(app)
        .post('/TmrnewToDo')
        .send(body)
	    .expect(200);
    });

    test('POST /Todayitemdel Succeeds', () => {
        let stuff = {'REST_jest_test_title':'REST_jest_test_desc'};
        let jsonstuff = JSON.stringify(stuff);
        fs.writeFileSync('testjson.json', jsonstuff);

        return request(app)
        .post('/Todayitemdel')
        .send(jsonstuff)
        .expect(200);
    });

    test('POST /Todayitemdel Succeeds', () => {
        let stuff = {'REST_jest_test_title':'REST_jest_test_desc', 'second':'test'};
        let jsonstuff = JSON.stringify(stuff);
        fs.writeFileSync('testjson.json', jsonstuff);

        return request(app)
        .post('/Todayitemdel')
        .send(jsonstuff)
        .expect(200);
    });
});