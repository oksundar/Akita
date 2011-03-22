// On the click of 'Fast Navigation' button
		function fastNavigation () {
			document.getElementById('mainTextNavigation').style.display='block';
			document.getElementById('mainTextMalware').style.display='none';
			document.getElementById('mainTextPhishing').style.display='none';
			document.getElementById('downloadPageContent').style.display='none';	
			document.getElementById('otherPageContent').style.display='block';	
			clicked('fastNavigation');
			unClicked('antiPhishing');
			unClicked('malwareProtection');			
			unClicked('freeDownload');
		}
		
		// On the click of 'Anti Phishing' button
		function antiPhishing () {
			document.getElementById('mainTextNavigation').style.display='none';
			document.getElementById('mainTextMalware').style.display='none';
			document.getElementById('mainTextPhishing').style.display='block';
			document.getElementById('downloadPageContent').style.display='none';	
			document.getElementById('otherPageContent').style.display='block';	
			clicked('antiPhishing');
			unClicked('fastNavigation');			
			unClicked('malwareProtection');			
			unClicked('freeDownload');			
		}
		
		// On the click of 'Malware Protection' button
		function malwareProtection() {
			document.getElementById('mainTextNavigation').style.display='none';
			document.getElementById('mainTextMalware').style.display='block';
			document.getElementById('mainTextPhishing').style.display='none';
			document.getElementById('downloadPageContent').style.display='none';	
			document.getElementById('otherPageContent').style.display='block';	
			clicked('malwareProtection');
			unClicked('fastNavigation');			
			unClicked('antiPhishing');			
			unClicked('freeDownload');			
		}
		
		// On the click of 'Free Download' button
		function freeDownload () {
			document.getElementById('downloadPageContent').style.display='block';
			document.getElementById('otherPageContent').style.display='none';
			clicked('freeDownload');
			unClicked('fastNavigation');
			unClicked('malwareProtection');
			unClicked('antiPhishing');
		}
		
		// To hold the clicked state of a button
		function clicked(divElement) { 
		try{
			document.getElementById(divElement).style.height="102px";
			document.getElementById(divElement).style.lineHeight="102px";
			document.getElementById(divElement).style.backgroundImage="url('assets/nav_active.jpg')";
			document.getElementById(divElement).style.border="none";
			document.getElementById(divElement).style.width="238px";	
			document.getElementById(divElement).style.fontWeight="bold";			
		} catch(e) { alert(e)}
		}
		
		//To release the clicked button
		function unClicked(divElement) { 
		try{
			document.getElementById(divElement).style.height="100px";
			document.getElementById(divElement).style.lineHeight="100px";
			document.getElementById(divElement).style.backgroundImage="";
			document.getElementById(divElement).style.border="1px solid #000";
			document.getElementById(divElement).style.width="236px";
			document.getElementById(divElement).style.fontWeight="normal";
		} catch(e) { alert(e)}
		}

