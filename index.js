fetch().then(function (respone){
  return respone.text()
}).then(function (data){
  document.write(data);
})
