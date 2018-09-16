# aws-elb-healthcheck-koa
Simple solution to satisfy AWS ELB's healthcheck when using Koa

## NPM
```
npm install aws-elb-healthcheck-koa --save
```

## Usage
```
 app.use(require('aws-elb-healthcheck-koa'))
```
Point your ELB healthcheck towards `/hc`