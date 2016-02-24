 	//1. Create an XMLHTTP Request object
    var xhr = new XMLHttpRequest();
    //2. Create a callback function
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          var employees = JSON.parse(xhr.responseText);

          var statusHTML = '<ul class="bullet">';
          var list = '';
          for (var i=0; i<employees.length; i +=1) {
            if (employees[i].inoffice === true) {
              list +='<li class="in">'+employees[i].name+"</li>"
            }
            else {
              list +='<li class="out">'+employees[i].name+"</li>"
            }
          }

          document.getElementById('ajax').innerHTML = statusHTML+list+"</ul>"
          
        }else if (xhr.status === 404) {
          document.getElementById('ajax').innerHTML = xhr.statusText; 
          alert(xhr.statusText + " by Jorge Monroy");//File not found
        }else if (xhr.status === 500) {
          alert(xhr.statusText + "Server had a problem");//Server had a problem
        }
      } 
    }
    //3. Open a request
    xhr.open('GET', 'employees.json');
    //4. Send the request.
    xhr.send()