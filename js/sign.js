/*
 #method1
var func = function(){
	
	var first_name = doc.getElementById('first_name').value;
	var last_name = doc.getElementById('last_name').value;
	var userid = doc.getElementById('id').value;
	var password = doc.getElementById('password').value;
	var chpassword = doc.getElementById('chpassword').value;
	var birth_year = doc.getElementById('birth_year').value;
	var emailad = doc.getElementById('emailad').value;
	var phonenum = doc.getElementById('phonenum').value;

	//console.log(first_name)
	//console.log(last_name)
	//console.log(id)
	//console.log(password)
	//console.log(chpassword)
	//console.log(birth_year)
	//console.log(emailad)
	//console.log(phonenum)
	
	alert('Welcome!!')
}
sign.addEventListener('click',func);
	
	if (!first_nmae){
		alert('Enter your First name')
		doc.getElementById('first_nmae').focus();
		return;
	}

	if (!lastname){
		alert('Enter your Last name')
		doc.getElementById('lastname').focus();
		return;
	}

	if (!id){
		alert('Enter your Id')
		doc.getElementById('id').focus();
		return;
	}
	
	if (!password){
		alert('Enter your Password')
		doc.getElementById('password').focus();
		return;
	}
	
	if (!chpassword){
		alert('Enter your Check password')
		doc.getElementById('chpassword').focus();
		return;
	}
	
	if (!birth_year){
		alert('Enter your birth_year')
		doc.getElementById('birth_year').focus();
		return;
	}
	
	if (!emailad){
		alert('Enter your Email')
		doc.getElementById('emailad').focus();
		return;
	}
	
	if(password != chpassword){
		alert('The passwords are different from each other')
		doc.getElementById('password').value='';
		doc.getElementById('chpassword').value='';
		
		doc.getElementById('password').focus();
	}
*/
 // method2
function validate(){
	
	if(f.first_name.value == ""){
	      alert("please Enter your First_name");   
	      return false;
	   }
	if(f.last_name.value == ""){
	      alert("please Enter your Last_name");   
	      return false;
	   }
	
	if(f.id.value == ""){
		alert("please Enter your ID");   
		return false;
	}
	if(f.password.value == ""){
		alert("please Enter your Password");
		return false;
	}
	
	if(f.chpassword.value == ""){
		alert("please Enter your Check Password");
		return false;
	}
	if(f.birth_year.value == ""){
		alert("please Enter your Check Password");
		return false;
	}
	
   if(f.emailad.value == ""){
      alert("please Enter your Email address");
      return false;
   }
   if(f.phonenum.value == ""){
      alert("please Enter your Phone number");
      return false;
   } 
   if(f.password.value != f.chpassword.value){
		alert('The passwords are different from each other')
		return false;
	}
}
