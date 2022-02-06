function checkEmptyInput()
            {
                    var fname = document.getElementById("userName").value;
                    var lname = document.getElementById("password").value;
                    
            
                if(fname == ""){
                    alert("Username cannot be empty!");
                }
                else if(lname == ""){
                    alert("Password cannot be empty!");
                    
                }
            }