/*******************************************************************
	File name			: validatorchklict.js
	Description			: This file used to set functions for validation of the form elements
	Created By			: Shuvadeep Podder
	Created On			: 19/06/2022
	Update History		:
	<Updated by>		:  <Updated on>			<Remarks>
	sonali satapathy	:  19th-june-2022 
*******************************************************************/

$(document).ready(function(){
	$('input[type=text],input[type=password],textarea').on('keyup',function(){
		if(this.id != 'txtPassword'){
			return blockspecialchar_first(this);
		}
	});
	$('input[type=text],textarea').on('blur',function(){
		var thisVal	= $(this).val().trim();
		$(this).val(thisVal);		
	});
	$('input[type=text]').attr('autocomplete','off');
});
//============ Function to check maximum length of the field ===============
function maxLength(controlId,ctrlLen,fieldName)
{

	if($('#'+controlId).val().length>ctrlLen && $('#'+controlId).val().length>0)
	{
		//viewAlert(fieldName+' can not more than '+ctrlLen+' charater !!!',controlId);
		$('.errMsg_'+controlId).html(fieldName+' can not more than '+ctrlLen+' charater !!!').show();
		$('#'+controlId).addClass('error-input');
		$('#'+controlId).focus();
		return false;
	}
	return true;
}
//============ Function to check minimum length of the field ===============
function minLength(controlId,ctrlLen,fieldName)
{
	if($('#'+controlId).val().length<ctrlLen && $('#'+controlId).val().length>0)
	{
		viewAlert(fieldName+' can not less than '+ctrlLen+' charater !!!');
		$('#'+controlId).focus();
		return false;
	}
	return true;
}
//============ Function to check equal length of the field ===============
function equalLength(controlId,ctrlLen,fieldName)
{
	if($('#'+controlId).val().length!=ctrlLen && $('#'+controlId).val().length>0)
	{
		viewAlert(fieldName+' should be '+ctrlLen+' digit length!!!');
		$('#'+controlId).focus();
		return false;
	}
	return true;
}


//============ Function to check field having no value ===============
function blankCheck(controlId,msg)
{
	if($('#'+controlId).val()=='')
	{
		// alert(controlId);
		$('.errMsg_'+controlId).html(msg).show();
		$('#'+controlId).addClass('error-input');
		$('#'+controlId).focus();
		return false;
	}
	return true;
}

//============ Function to check editor field having no value ===============
function blankEditorCheck(controlId,msg)
{
	var dataVal = CKEDITOR.instances[controlId].getData();
	if(dataVal=='')
	{
		//viewAlert(msg,controlId);
		$('.errMsg_'+controlId).html(msg).show();
		$('#'+controlId).addClass('error-input');
		CKEDITOR.instances[controlId].container.focus();
		return false;
	}
	return true;
}
//============ Function to check radio button or checkbox validation ===============
function blankChkRad(controlName,msg)
{

	if($('input[name="'+controlName+'"]:checked').length<=0)
	{
	$('.errMsg_'+controlName.replace("[]", "")).html(msg).show();

		$('input[name='+controlName+']:first').focus();
		return false;
	}
	return true;
}
//============ Function to block special character on first place of the field on key press ===============
function blockspecialchar_first(e) 
{
	var str;
	str = e.value;
	var idName	= e.id;
	switch (str.charCodeAt(0)) {
		case 44:
			{
				viewAlert(", not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 47:
			{
				viewAlert("/ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 58:
			{
				viewAlert(": not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 46:
			{
				viewAlert(". not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 39:
			{
				viewAlert("Single quote not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 32:
			{
				viewAlert("White space not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 40:
			{
				viewAlert("( not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 41:
			{
				viewAlert(") not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 45:
			{
				viewAlert("- Not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		 case 95:
			{
				viewAlert("_ Not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}	

		case 59:
			{
				viewAlert("; not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 124:
			{
				viewAlert("| not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}

		case 63:
			{
				viewAlert("? not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		/*case 64:
			{
				viewAlert("@ Not allowed in 1st Place!!!");
				e.value = "";
				e.focus();
				return false;
			}*/
		
		case 34:
			{
				viewAlert('" not allowed in 1st place!!!',idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 35:
			{
				viewAlert("# not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 36:
			{
				viewAlert("$ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 38:
			{
				if(idName!='txtPagename'){
					viewAlert("& not allowed in 1st place!!!",idName);
					e.value = "";
					e.focus();
					return false;
				}else{
					return true;
				}	
			}
			
		case 126:
			{
				viewAlert("~ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
	
		case 96:
			{
				viewAlert("` not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 33:
			{
				viewAlert("! not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
		
		case 37:
			{
				viewAlert("% not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
		
		case 94:
			{
				viewAlert("^ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 42:
			{
				viewAlert("* not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
		case 92:
			{
				viewAlert("\\ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 43:
			{
				viewAlert("+ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}	
		case 61:
			{
				viewAlert("= not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
		case 123:
			{
				viewAlert("{ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 125:
			{
				viewAlert("} not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}	
			
		case 91:
			{
				viewAlert("[ not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}
			
		case 93:
			{
				viewAlert("] not allowed in 1st place!!!",idName);
				e.value = "";
				e.focus();
				return false;
			}	
			
		case 60:
			{
				if(idName != 'txtBannerSnptEng'){
					viewAlert("< not allowed in 1st place!!!",idName);
					e.value = "";
					e.focus();
					return false;	
				}
				
			}
			
		case 62:
			{
				if(idName != 'txtBannerSnptEng'){
					viewAlert("> not allowed in 1st place!!!",idName);
					e.value = "";
					e.focus();
					return false;
				}
			}	
	}

}
//============ Function to block special character in the field on key press ===============
function blockspecialchar(ev) 
{


	var str;
	str = event.keyCode;
	//alert(str);
	switch (str) {
		case 44:
			{
				return false;
			}

		case 47:
			{
				return false;
			}

		case 58:
			{
				return false;
			}

		case 46:
			{
				return false;
			}

		case 39:
			{
				return false;
			}

		case 32:
			{
				return false;
			}

		case 40:
			{
				return false;
			}

		case 41:
			{
				return false;
			}

		case 45:
			{
				return false;
			}
			
		 case 95:
			{
				return false;
			}	

		case 59:
			{
				return false;
			}

		case 124:
			{
				return false;
			}

		case 63:
			{
				return false;
			}
			
		case 64:
			{
				return false;
			}
		
		case 34:
			{
				return false;
			}
			
		case 35:
			{
				return false;
			}
			
		case 36:
			{
				return false;
			}
			
		case 38:
			{
				return false;
			}
			
		case 126:
			{
				return false;
			}
	
		case 96:
			{
				return false;
			}
			
		case 33:
			{
				return false;
			}
		
		case 37:
			{
				return false;
			}
		
		case 94:
			{
				return false;
			}
			
		case 42:
			{
				return false;
			}
		case 92:
			{
				return false;
			}
			
		case 43:
			{
				return false;
			}	
		case 61:
			{
				return false;
			}
		case 123:
			{
				return false;
			}
			
		case 125:
			{
				return false;
			}	
			
		case 91:
			{
				return false;
			}
			
		case 93:
			{
				return false;
			}	
			
		case 60:
			{
				return false;
			}
			
		case 62:
			{
				return false;
			}	
	}
}
//============ Function to block character entry in the field on key press ===============	
function isNumberKey(evt)
{
	 var charCode = (evt.which) ? evt.which : event.keyCode
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
	 	return false;
	
		  return true;
	 
}	
//============ Function to block Numeric value entry in the field on key press ===============	
function isCharKey(evt)
{
	
	var charCode = (evt.which) ? evt.which : event.keyCode
	 if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode==13 )
		return true;
	
	 return false;
}	
//============ Function to check field value is decimal ===============
function isDecimal(controlId)
{	
	var data	= $('#'+controlId).val();
	var reg 	= new RegExp(/^[0-9]+(\.[0-9]{1,2})?$/);
	if (reg.test(data)==true)
			return true;
	else 
	{
		viewAlert("Enter Only decimal values having 2 digit after decimal",controlId);
		$('#'+controlId).focus();
		return false;
	}
}
//============ Function to check field value is decimal with 2 digit after decimal and maxLength ===============
function checkMaxDecimal(controlId,maxlen)
{
	var reg 	= new RegExp(/^\d+(\.\d{1,2})?$/);
	var eVal     = $('#'+controlId).val();
	var flen    = eVal.indexOf(".");
	var spl     = eVal.split(".");
	if(flen==-1)
	{
		if(eVal.length>maxlen)
		{
			viewAlert("Enter decimal value of total 13 character with 2 digit after decimal",controlId);
			$('#'+controlId).focus();
			return false;
		}
		else
			return true;
	}
	else if(spl[0].length<=10 && reg.test(eVal)==true)
	{	
			return true;
	}
	else	
	{
		viewAlert("Enter decimal value of total 13 character with 2 digit after decimal",controlId);
		$('#'+controlId).focus();
		return false;
	}
}
//============ Function to check field value is only numeric ===============
function validateNumber(controlId)
{
var numPattern 	= new RegExp(/^\d+$/);
var txtVal		= $('#'+controlId).val();
if(txtVal!='')
{
	if (numPattern.test(txtVal)==true) 
		return true;
	else 
	{
		viewAlert("Enter Only Numeric values",controlId);
		$('#'+controlId).focus();
		return false;
	}
}
else
	return true;
}
//========== Function to validate char and number only By Sunil Kumar Parida  on 11-Mar-2015 ===============
function validateCharNumber(controlId, fieldName)
{
	var txtVal		= $('#'+controlId).val();
	if(txtVal!='')
	{
		if (/^[a-zA-Z0-9]+$/.test(txtVal)) {
			return true;
		}
		else 
		{
			viewAlert(fieldName+' accept only Number and Character',controlId);
			$('#'+controlId).focus();
			return false;
		}
	}
	else
		return true;
}
//============ Function to check space in last position ===============
function whiteSpaceLast(controlId)	
{
	var myString	= $('#'+controlId).val();
	var lastChar 	= myString[myString.length -1];
	if(lastChar==' ')
	{
		viewAlert('Please remove space from last',controlId);
		$('#'+controlId).focus();
		return false;
	}
	return true;
}
//============ Function to check special character  ===============
function checkSpecialChar(controlId)
{
	//var splArr = [ "'", "%", "=", "<", ">", "\\","\"" ];
        var splArr = ["=","'","^","!","%", "<", ">", "\\","\"" ];
	var str		= $('#'+controlId).val();
	for(var i=0; i<splArr.length; i++)
	{
		if (str.indexOf(splArr[i]) > 0) {
			//viewAlert("Special character "+splArr[i]+" is not allowed !!!",controlId);
			$('.errMsg_'+controlId).html("Special character "+splArr[i]+" is not allowed !!!").show();
			$('#'+controlId).addClass('error-input');
			$('#'+controlId).focus();
			return false;
			//$('#'+controlId).focus();
			//return false; 
		}			
	}
	return true;
}
//============ Function to check dropdown is selected  ===============
function selectDropdown(controlId,msg)
{
	var ddlVal	= $('#'+controlId).val();
	if(ddlVal=='0' || ddlVal == '')
	{
		//viewAlert(msg,controlId);
		$('.errMsg_'+controlId).html(msg).show();
		$('#'+controlId).parent('div').addClass('error-input');
		$('#'+controlId).focus();
		return false;
	}
	return true;
}
//============ Function to allow valid decimal value on ley press ===============
function validDesimal(evt,obj)
{		
	var charCode = (evt.which) ? evt.which : event.keyCode;
	var txtVal		= $('#'+obj).val();
	var txtValLen	= txtVal.length;	
	if((charCode>47 && charCode<58) || charCode==46 || charCode==8)
	{
		if(txtVal.indexOf(".")>0 && charCode==46)
			return false;
		else
			return true;
	}
	return false;
}
//============ Function to check upload file types ===============
function IsCheckFile(ControlName,msg,strFileType)
{
	
	var arrFileType	= strFileType.split(',');
	var filename 	= $('#'+ControlName).val();
	var fileLength 	= filename.length;
	if(fileLength==0)
	 return true;
	else
	{
		var extnIndex 	= filename.lastIndexOf(".")+1;
		var fileType	= filename.substring(extnIndex,fileLength).toLowerCase();
		
		for(var i=0;i<arrFileType.length;i++)
		{
			if(fileType==arrFileType[i])
				return true;
		}
		//viewAlert(msg + ' ('+strFileType+')',ControlName);
		$('.errMsg_'+ControlName).html(msg + ' ('+strFileType+')').show();
		$('#'+ControlName).focus();
		return false;
	}
}
//============ Function to validate email ===============
function validEmail(controlId) 
{
	var pattern = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	var email	= $('#'+controlId).val();
	if(email!='')
	{
		if (pattern.test(email)==true) 
			return true;
		else 
		{
			//viewAlert("Please enter a valid Email ID",controlId);
			$('.errMsg_'+controlId).html("Please enter a valid Email ID").show();
			$('#'+controlId).addClass('error-input');
			$('#'+controlId).focus();
			return false;
		}
	}
	else
		return true;
}

//=============== Function to compare date ==============
function compareDate(firstControl, secondControl, field1Name, field2Name,msg)
{
	
	var firstDate	= $('#'+firstControl).val();
	var secondDate	= $('#'+secondControl).val();
	var splitFirstDt= firstDate.split("-");
	firstDate		= splitFirstDt[2]+'-'+splitFirstDt[1]+'-'+splitFirstDt[0];
	var splitSecondDt= secondDate.split("-");
	secondDate		= splitSecondDt[2]+'-'+splitSecondDt[1]+'-'+splitSecondDt[0];
	firstDate		= new Date(firstDate);
	secondDate		= new Date(secondDate);
	if(firstDate>secondDate)
	{
		if(typeof msg == "undefined")
		viewAlert(field1Name+" can not be greater than "+field2Name,firstControl);
		else
			viewAlert(msg,firstControl);
		$('#'+secondControl).focus();
		return false;
	}
	else
		return true;
}

//=============== Function to compare date with current date ==============
function compareCurDate(controlId, fieldName, flag)
{
	//================ set flag as 'g' for not greater than current date and 'l' for not less than current date ========
	var fieldDate	= $('#'+controlId).val();
	var splFieldDt	= fieldDate.split("-");
	fieldDate		= splFieldDt[2]+'-'+splFieldDt[1]+'-'+splFieldDt[0];
	curDate			= new Date((new Date()).setHours(0, 0, 0, 0));
	fieldDate		= new Date((new Date(fieldDate)).setHours(0, 0, 0, 0));
	if(flag.toLowerCase()=='g')
	{
		if(fieldDate>curDate)
		{
			viewAlert(fieldName+" can not be greater than current date",controlId);
			$('#'+controlId).focus();
			return false;
		}
		else
			return true;
	}
	else
	{
		if(curDate>fieldDate)
		{
			viewAlert(fieldName+" can not be less than current date",controlId);
			$('#'+controlId).focus();
			return false;
		}
		else
			return true;
	}
}

//============ Function to Number and slash By Rasmi Ranjan swain on 15-oct-2014 ===============
function validateNumberSlash(controlId,msg)
{
	var numPattern 	= new RegExp(/^\d\/\d$/);
	var txtVal		= $('#'+controlId).val();
	if(txtVal!='')
	{
		if (numPattern.test(txtVal)==true) 
			return true;
		else 
		{
			
			$('#'+controlId).focus();
			viewAlert(msg,controlId);
			return false;
		}
	}
	else 
	return true;
	
}

//============ Function to check Valid URL By Rasmi Ranjan swain on 06-Jan-2015 ===============
function validURL(controlId,msg)
{
	var numPattern 	= new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
	var txtVal		= $('#'+controlId).val();
	if(txtVal!='')
	{
		if (numPattern.test(txtVal)==true) 
			return true;
		else 
		{
			
			$('#'+controlId).focus();
			viewAlert(msg,controlId);
			return false;
		}
	}
	else 
	return true;
	
}

//============ Function to check Valid Phone No By Rasmi Ranjan swain on 28-Jan-2015 ===============
function validatePhone(controlId,msg) {
    var txtVal = $('#'+controlId).val();
    //var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
	var filter = /^[0-9]{4}[ \-][0-9]{7}?$/;
    if(txtVal!='')
    {
        if (filter.test(txtVal))
            return true;    
        else {
            $('#'+controlId).focus();
            viewAlert(msg);
            return false;
        }
     }
	else 
	return true;
}

//============ Function to validate valid name No By Rasmi Ranjan swain on 28-Jan-2015 ===============
function validateName(controlId,msg) {
    var txtVal = $('#'+controlId).val();
    var filter = /^[A-Za-z]{1}/;
    if(txtVal!='')
    {
        if (filter.test(txtVal))
            return true;    
        else {
            $('#'+controlId).focus();
            viewAlert(msg,controlId);
            return false;
        }
     }
	else 
	return true;
}
//============ Function to validate valid name No By Rasmi Ranjan swain on 28-Jan-2015 ===============
function validMobileNo(controlId,msg) {
    var txtVal = $('#'+controlId).val();
    var filter = /^[7-9][0-9]{9}$/;
    if(txtVal!='')
    {
        if (filter.test(txtVal))
            return true;    
        else {
            $('#'+controlId).focus();
            viewAlert(msg,controlId);
            return false;
        }
     }
	else 
	return true;
}
//============ Function to validate valid name No By Rasmi Ranjan swain on 28-Jan-2015 ===============
function validPHno(evt,obj)
{		
	var charCode 	= (evt.which) ? evt.which : event.keyCode;	
	var txtVal		= $('#'+obj).val();
	var txtValLen	= txtVal.length;	
	if((charCode>47 && charCode<58) || charCode==45 || charCode==8)
	{
		if(txtVal.indexOf("-")>0 && charCode==45)
			return false;
		else
			return true;
	}
	return false;
}
//============ Function to validate valid name No By Rasmi Ranjan swain on 28-Jan-2015 ===============
function validUserName(evt)
{		
	var charCode 	= (evt.which) ? evt.which : event.keyCode;	
	if((charCode>47 && charCode<=57) || (charCode>=64 && charCode<=122) || charCode==36 || charCode==8 )
	{
		return true;
	}
	return false;
}  


        
        
        if(typeof escapeHtmlEntities == 'undefined') {
        escapeHtmlEntities = function (text) {
            return text.replace(/[\u00A0-\u2666<>\&]/g, function(c) {
                return '&' + 
                (escapeHtmlEntities.entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0)) + ';';
            });
        };

        // all HTML4 entities as defined here: http://www.w3.org/TR/html4/sgml/entities.html
        // added: amp, lt, gt, quot and apos
        escapeHtmlEntities.entityTable = {
            34 : 'quot', 
            38 : 'amp', 
            39 : 'apos', 
            60 : 'lt', 
            62 : 'gt', 
            160 : 'nbsp', 
            161 : 'iexcl', 
            162 : 'cent', 
            163 : 'pound', 
            164 : 'curren', 
            165 : 'yen', 
            166 : 'brvbar', 
            167 : 'sect', 
            168 : 'uml', 
            169 : 'copy', 
            170 : 'ordf', 
            171 : 'laquo', 
            172 : 'not', 
            173 : 'shy', 
            174 : 'reg', 
            175 : 'macr', 
            176 : 'deg', 
            177 : 'plusmn', 
            178 : 'sup2', 
            179 : 'sup3', 
            180 : 'acute', 
            181 : 'micro', 
            182 : 'para', 
            183 : 'middot', 
            184 : 'cedil', 
            185 : 'sup1', 
            186 : 'ordm', 
            187 : 'raquo', 
            188 : 'frac14', 
            189 : 'frac12', 
            190 : 'frac34', 
            191 : 'iquest', 
            192 : 'Agrave', 
            193 : 'Aacute', 
            194 : 'Acirc', 
            195 : 'Atilde', 
            196 : 'Auml', 
            197 : 'Aring', 
            198 : 'AElig', 
            199 : 'Ccedil', 
            200 : 'Egrave', 
            201 : 'Eacute', 
            202 : 'Ecirc', 
            203 : 'Euml', 
            204 : 'Igrave', 
            205 : 'Iacute', 
            206 : 'Icirc', 
            207 : 'Iuml', 
            208 : 'ETH', 
            209 : 'Ntilde', 
            210 : 'Ograve', 
            211 : 'Oacute', 
            212 : 'Ocirc', 
            213 : 'Otilde', 
            214 : 'Ouml', 
            215 : 'times', 
            216 : 'Oslash', 
            217 : 'Ugrave', 
            218 : 'Uacute', 
            219 : 'Ucirc', 
            220 : 'Uuml', 
            221 : 'Yacute', 
            222 : 'THORN', 
            223 : 'szlig', 
            224 : 'agrave', 
            225 : 'aacute', 
            226 : 'acirc', 
            227 : 'atilde', 
            228 : 'auml', 
            229 : 'aring', 
            230 : 'aelig', 
            231 : 'ccedil', 
            232 : 'egrave', 
            233 : 'eacute', 
            234 : 'ecirc', 
            235 : 'euml', 
            236 : 'igrave', 
            237 : 'iacute', 
            238 : 'icirc', 
            239 : 'iuml', 
            240 : 'eth', 
            241 : 'ntilde', 
            242 : 'ograve', 
            243 : 'oacute', 
            244 : 'ocirc', 
            245 : 'otilde', 
            246 : 'ouml', 
            247 : 'divide', 
            248 : 'oslash', 
            249 : 'ugrave', 
            250 : 'uacute', 
            251 : 'ucirc', 
            252 : 'uuml', 
            253 : 'yacute', 
            254 : 'thorn', 
            255 : 'yuml', 
            402 : 'fnof', 
            913 : 'Alpha', 
            914 : 'Beta', 
            915 : 'Gamma', 
            916 : 'Delta', 
            917 : 'Epsilon', 
            918 : 'Zeta', 
            919 : 'Eta', 
            920 : 'Theta', 
            921 : 'Iota', 
            922 : 'Kappa', 
            923 : 'Lambda', 
            924 : 'Mu', 
            925 : 'Nu', 
            926 : 'Xi', 
            927 : 'Omicron', 
            928 : 'Pi', 
            929 : 'Rho', 
            931 : 'Sigma', 
            932 : 'Tau', 
            933 : 'Upsilon', 
            934 : 'Phi', 
            935 : 'Chi', 
            936 : 'Psi', 
            937 : 'Omega', 
            945 : 'alpha', 
            946 : 'beta', 
            947 : 'gamma', 
            948 : 'delta', 
            949 : 'epsilon', 
            950 : 'zeta', 
            951 : 'eta', 
            952 : 'theta', 
            953 : 'iota', 
            954 : 'kappa', 
            955 : 'lambda', 
            956 : 'mu', 
            957 : 'nu', 
            958 : 'xi', 
            959 : 'omicron', 
            960 : 'pi', 
            961 : 'rho', 
            962 : 'sigmaf', 
            963 : 'sigma', 
            964 : 'tau', 
            965 : 'upsilon', 
            966 : 'phi', 
            967 : 'chi', 
            968 : 'psi', 
            969 : 'omega', 
            977 : 'thetasym', 
            978 : 'upsih', 
            982 : 'piv', 
            8226 : 'bull', 
            8230 : 'hellip', 
            8242 : 'prime', 
            8243 : 'Prime', 
            8254 : 'oline', 
            8260 : 'frasl', 
            8472 : 'weierp', 
            8465 : 'image', 
            8476 : 'real', 
            8482 : 'trade', 
            8501 : 'alefsym', 
            8592 : 'larr', 
            8593 : 'uarr', 
            8594 : 'rarr', 
            8595 : 'darr', 
            8596 : 'harr', 
            8629 : 'crarr', 
            8656 : 'lArr', 
            8657 : 'uArr', 
            8658 : 'rArr', 
            8659 : 'dArr', 
            8660 : 'hArr', 
            8704 : 'forall', 
            8706 : 'part', 
            8707 : 'exist', 
            8709 : 'empty', 
            8711 : 'nabla', 
            8712 : 'isin', 
            8713 : 'notin', 
            8715 : 'ni', 
            8719 : 'prod', 
            8721 : 'sum', 
            8722 : 'minus', 
            8727 : 'lowast', 
            8730 : 'radic', 
            8733 : 'prop', 
            8734 : 'infin', 
            8736 : 'ang', 
            8743 : 'and', 
            8744 : 'or', 
            8745 : 'cap', 
            8746 : 'cup', 
            8747 : 'int', 
            8756 : 'there4', 
            8764 : 'sim', 
            8773 : 'cong', 
            8776 : 'asymp', 
            8800 : 'ne', 
            8801 : 'equiv', 
            8804 : 'le', 
            8805 : 'ge', 
            8834 : 'sub', 
            8835 : 'sup', 
            8836 : 'nsub', 
            8838 : 'sube', 
            8839 : 'supe', 
            8853 : 'oplus', 
            8855 : 'otimes', 
            8869 : 'perp', 
            8901 : 'sdot', 
            8968 : 'lceil', 
            8969 : 'rceil', 
            8970 : 'lfloor', 
            8971 : 'rfloor', 
            9001 : 'lang', 
            9002 : 'rang', 
            9674 : 'loz', 
            9824 : 'spades', 
            9827 : 'clubs', 
            9829 : 'hearts', 
            9830 : 'diams', 
            338 : 'OElig', 
            339 : 'oelig', 
            352 : 'Scaron', 
            353 : 'scaron', 
            376 : 'Yuml', 
            710 : 'circ', 
            732 : 'tilde', 
            8194 : 'ensp', 
            8195 : 'emsp', 
            8201 : 'thinsp', 
            8204 : 'zwnj', 
            8205 : 'zwj', 
            8206 : 'lrm', 
            8207 : 'rlm', 
            8211 : 'ndash', 
            8212 : 'mdash', 
            8216 : 'lsquo', 
            8217 : 'rsquo', 
            8218 : 'sbquo', 
            8220 : 'ldquo', 
            8221 : 'rdquo', 
            8222 : 'bdquo', 
            8224 : 'dagger', 
            8225 : 'Dagger', 
            8240 : 'permil', 
            8249 : 'lsaquo', 
            8250 : 'rsaquo', 
            8364 : 'euro'
        };
    }
	
	function chkFileSize(id,sizeInKb,sizeInMb,type)
    {
        var message = '';
        if(type == 1)
        {
            message = 'File size exceeds '+sizeInMb+'KB.';
        }
        else
        {
            message = 'File size exceeds '+sizeInMb+'MB.';
        }
        var fileSize_inKB = Math.round(($("#"+id)[0].files[0].size / 1024));
        if (fileSize_inKB > sizeInKb)
        {
            viewAlert(message,id);
            //scrollToPosition(id);
            return false;
        }else{
            return true;
        }
    }
//============ Function to check less date time  By Rasmi Ranjan swain on 06-Jan-2015 ===============	
	function lessDateTime(dateFrom,dateTo,msg)
	{
		var splDateFrom   = dateFrom.split("-");
		var date_from   = new Date(splDateFrom[2],Number(splDateFrom[1]-1),splDateFrom[0],splDateFrom[3],splDateFrom[4]);
		var splDateTo   = dateTo.split("-");
		var date_To     = new Date(splDateTo[2],Number(splDateTo[1]-1),splDateTo[0],splDateTo[3],splDateTo[4]);
		if(date_from.getTime()>date_To.getTime())
		{
			viewAlert(msg,dateTo);
			return false;
		}    
		return true;
	}
//============ Function to check less date time  By Rasmi Ranjan swain on 06-Jan-2015 ===============	
function convert12to24(timeStr)
{
	var meridian 	= timeStr.substr(timeStr.length-2).toLowerCase();;
	var hours 		= timeStr.substr(0, timeStr.indexOf(':'));
	var minutes 	= timeStr.substring(timeStr.indexOf(':')+1, timeStr.indexOf(':')+3);
	if (meridian=='pm')
	{
			if (hours!=12)
			{
					hours=hours*1+12;
			}
			else
			{					
					hours = '12'  ;					
			}
	}
	else
	{
			if (hours==12)
			{
					hours='00';
			}
	}	
	return hours+'-'+minutes;
}

function changeTimeFormat(id)
{
	var input = document.getElementById(id).value;
	var output = convert12to24(input);
	return output;
}

//============ Function to check field value is decimal with variable no. of digit before decimal and variable no. of digit after decimal and maxLength ===============
function checkMaxDecimalWithLimit(controlId, maxlen,leftValue,rightValue)
{
    var testPattern = "^\\d{1,"+leftValue+"}\\.\\d{1,"+rightValue+"}?$";

    var reg = new RegExp(testPattern,"i");
    var eVal = $('#' + controlId).val();
    var flen = eVal.indexOf(".");
    var spl = eVal.split(".");
    
    if (flen == -1)
    {
        if (Number(eVal.length) >Number(leftValue))
        {
            viewAlert("Enter decimal value of "+leftValue+" digit before decimal and "+rightValue+" digit after decimal", controlId);
            $('#' + controlId).focus();
            return false;
        }
        else
            return true;
    }
    else if (spl[0].length <= leftValue && spl[1].length <= rightValue && reg.test(eVal) == true)
    {
        return true;
    }
    else
    {
   
        viewAlert("Enter decimal value of "+leftValue+" digit before decimal and "+rightValue+" digit after decimal", controlId);
        $('#' + controlId).focus();
        return false;
    }
}

/*
  Function to viewAll The records.
   Created by     : Sandeep Kumar Senapati
   Created On     : 06-Apr-2021
  */
function viewall(id)
{
   $('#hdn_IsViewAll').val(id);
   $('#listForm').submit(); 
}


function matchpassword(controlId,controlId2){
	
	if($('#'+controlId).val() != $('#'+controlId2).val()){
		$('.errMsg_'+controlId).html('Password And Confirm password should match.').show();
		$('#' + controlId).focus();
        return false;
	}
	return true;
}

//============ Function to check field upload file through ajax ===============
function blankCheckHFile(controlId,controlDBId,fieldId,msg)
{
	if($('#'+controlId).val()=='' && $('#'+controlDBId).val()=='')
	{
		//viewAlert(msg,controlId);
		$('.errMsg_'+fieldId).html(msg).show();
		$('#'+fieldId).addClass('error-input');
		$('#'+fieldId).focus();
		return false;
	}
	return true;
}

function validPAN(ctrID)
{
    var panVal = $('#'+ctrID).val();
    var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if(regpan.test(panVal)){
       return true;
    } else {
       viewAlert(" Not a valid PAN", ctrID);
        $('#' + ctrID).focus();
       return false;
    }
}



function blockspecialcharv2(ev) 
{
	var str;
	str = event.keyCode;
	switch (str) {
		case 35:
			{
				return false;
			}

		case 36:
			{
				return false;
			}

		case 37:
			{
				return false;
			}	

		case 94:
			{
				return false;
			}

		case 42:
			{
				return false;
			}	

		case 61:
			{
				return false;
			}
			
		case 39:
			{
				return false;
			}	

		case 39:
			{
				return false;
			}
			
		case 59:
			{
				return false;
			}					
	}
}




function setCookie(cname, cvalue, exdays)
{
    removeCookie(cname);
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) != -1)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function removeCookie(cname)
{
    document.cookie = cname + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; Domain=localhost";
}