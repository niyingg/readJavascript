代理

```javascript
const target = {
  id: "target",
};
const handler = {};
const proxy = new Proxy(target, handler);
proxy.id === "target"; // true
```

定义捕获器
