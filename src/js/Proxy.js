let user = {
    name: "John",
    age: 30,
    _password: "***"
  };
  
  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });
  
  // "ownKeys" 过滤掉了 _password
  for(let key in user) alert(key); // name，然后是 age
  
  // 对这些方法的效果相同：
  alert( Object.keys(user) ); // name,age
  alert( Object.values(user) ); // John,30