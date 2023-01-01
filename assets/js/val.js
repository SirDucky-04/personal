    function validate() 
    {
        var fname = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();
        var subject = document.getElementById("subject").value.trim();
        
        var nameformat = /^[a-zA-Z ]+$/;
        if (fname == ""||fname == null) 
        {
            document.getElementById("alert1").innerHTML="Invalid name syntax";
            document.submitform.massage.focus();
            return false;
        }
        else{
            document.getElementById("alert1").innerHTML="";
        }

        if (fname.match(nameformat)) 
        {
        } 
        else 
        {
            document.getElementById("alert1").innerHTML="Invalid name syntax";
          document.submitform.name.focus();
          return false;
        }
        
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (email.match(mailformat)) 
        {
            document.getElementById("alert2").innerHTML="";
        } 
        else
        {
            document.getElementById("alert2").innerHTML="Invalid email format";
            document.submitform.email.focus();
            return false;
        }
        

        if (subject == "") 
        {
            document.getElementById("alert3").innerHTML="Enter the subject";
            document.submitform.massage.focus();
            return false;
        }
        else
        {
            document.getElementById("alert3").innerHTML="";
        }

        if (message == "") {
            document.getElementById("alert4").innerHTML="Enter the message";
            document.submitform.massage.focus();
            return false;
        }
        else
        {
            document.getElementById("alert4").innerHTML="";
        }

        return true;
      }
  