const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy configuration for different services
const options = {
  target: 'http://localhost:3000', 
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to: ${options.target}${req.originalUrl}`);
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error occurred.');
  }
};

app.use('/api/employeeDetails', createProxyMiddleware({
  ...options,
  target: 'http://localhost:3000/api/employeeDetails',
}));

app.use('/api/login', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/login',
}));

app.use('/api/adminPage', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/adminPage',
}));

app.use('/api/branch', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/branch',
}));

app.use('/api/areaManager', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/areaManager',
}));  

app.use('/api/transferRequest', createProxyMiddleware({
  ...options,
  target: 'http://localhost:3000/api/transferRequest',
}));

app.use('/api/deleteTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/deleteTransfer',
}));

app.use('/api/dependents', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/dependents',
}));

app.use('/api/employeeSearch', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/employeeSearch',
}));

app.use('/api/transferCycle', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/transferCycle',
}));

app.use('/api/enterEmployeeBranch', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/enterEmployeeBranch',
}));

app.use('/api/findEmployeeTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/findEmployeeTransfer',
}));

app.use('/api/insertTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/insertTransfer',
}));

app.use('/api/rejectTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/rejectTransfer',
}));

app.use('/api/viewBranch', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/viewBranch',
}));

app.use('/api/viewTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/viewTransfer',
}));

app.use('/api/viewFinalizeTentative', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/viewFinalizeTentative',
}));

app.use('/api/makeTenativeTransfer', createProxyMiddleware({
    ...options,
    target: 'http://localhost:3000/api/makeTenativeTransfer',
}));

// Default route
app.get('/', (req, res) => {
  res.send('API Gateway is running.');
});

app.listen(3001, () => {
  console.log('API Gateway is running on port 3001');
});
