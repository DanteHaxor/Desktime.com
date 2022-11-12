document.getElementById("logo").addEventListener("click",()=>{
    window.location.href="../index.html"
  })
  var data=JSON.parse(localStorage.getItem("signupdata"))
  document.getElementById("loginbtn").addEventListener("click",auth)
  function auth(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    data.forEach((ele)=>{
      if(ele.email==email && ele.password==password){
       return alert("Login Successful!")
      }else{
       return alert("Wrong Credentials")
      }
    })
    setTimeout(() => {
      return window.location.href="../index.html"
    }, 1000)
  }
 