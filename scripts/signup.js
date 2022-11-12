document.getElementById("logo").addEventListener("click",()=>{
    window.location.href="../index.html"
  })
  var data=JSON.parse(localStorage.getItem("signupdata"))||[]
  document.getElementById("sup").addEventListener("click",getdata)
  function getdata(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var obj={
      name,
      email,
      password
    }
    data.push(obj)
    localStorage.setItem("signupdata",JSON.stringify(data))
    setTimeout(() => {
      return alert("Signup Successful! Go to login page")
    }, 1000)
  }