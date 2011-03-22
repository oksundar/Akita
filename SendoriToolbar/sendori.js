setTimeout("adjustHeight()", 100);
        numurls = contents.length;
        var defaultImageURL = 'assets/icons_sets.png';
        var thisPage = 0;
        var thisURL = 0;

        // Get the screen size for different browsers
        function getSize() {
            var myWidth = 0, myHeight = 0;
            if (typeof( window.innerWidth ) == 'number') {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if (document.body && ( document.body.clientWidth || document.body.clientHeight )) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            try {
                return [myWidth,myHeight];
            }
            catch(e) {
                //alert(e);
            }
        }

        // Adjust the height of the Iframe dynamically
        function adjustHeight() {
            var size = getSize();
            document.getElementById('iFrameId').style.height = (size[1] - 36) + 'px';
        }

        var timeout = 500;
        var closetimer = 0;
        var ddmenuitem = 0;
        var ddmenuitem1 = 0;

        //--------- Functions for Feedback menu--------//
        // open hidden layer
        function mopen(ids)
        {
            try {
                // cancel close timer
                mcancelclosetime();
                // close old layer
                if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';
                if (ddmenuitem1) ddmenuitem1.style.visibility = 'hidden';
                // get new layer and show it
                ddmenuitem = document.getElementById(ids[0]);
                ddmenuitem.style.visibility = 'visible';
                ddmenuitem1 = document.getElementById(ids[1]);
                ddmenuitem1.style.visibility = 'visible';
            } catch(e) {
                //alert(e);
            }
        }
        // close showed layer
        function mclose()
        {
            if (ddmenuitem) ddmenuitem.style.visibility = 'hidden';
            if (ddmenuitem1) ddmenuitem1.style.visibility = 'hidden';
        }

        // go close timer
        function mclosetime()
        {
            closetimer = window.setTimeout(mclose, timeout);
        }

        // cancel close timer
        function mcancelclosetime()
        {
            if (closetimer)
            {
                window.clearTimeout(closetimer);
                closetimer = null;
            }
        }

        function changeBgImage(id_name, url_image) {
            var element = document.getElementById(id_name);
            element.style.backgroundImage = url_image;
        }

        // Navigate to Next
        function forwardToNext() {
            try {
                var textContent1 = document.getElementById('brand');
                var siteContent1 = document.getElementById('title');
                if(thisURL==thisPage){
			thisURL=0;thisPage=1;
		}
		else{
		if (thisURL == numurls-1) {
                    thisURL = 0;
                }
                else {
                    thisURL = thisURL + 1;
                }
                if (thisURL == numurls-1) {
                    thisPage = 0;
                }
                else {
                    thisPage = thisURL + 1;
                }}
                textContent1.innerHTML = contents[thisPage][1];
                siteContent1.innerHTML = contents[thisPage][3];
                document.getElementById('iFrameId').src = contents[thisURL][0];
                defaultingFavIcon(contents[thisPage][2]);
            } catch(e) {
                //alert(e)
            }
        }

        // Navigate to Previous
        function forwardToPrevious() {
            try {
		var textContent2 = document.getElementById('brand');
                var siteContent2 = document.getElementById('title');
                if(thisURL==0){
			thisURL=numurls-1;
		}
		else {
			thisURL=thisURL-1;
		}
		if(thisURL==0){
			thisPage=numurls-1;
		}
		else{
			thisPage=thisURL-1;
}
                textContent2.innerHTML = contents[thisPage][1];
                siteContent2.innerHTML = contents[thisPage][3];
                document.getElementById('iFrameId').src = contents[thisURL][0];
                defaultingFavIcon(contents[thisPage][2]);
            } catch(e) {
                //alert(thisURL)
            }
        }

        // Function for defaulting the favIcon if no fav Icon URL is supplied
        function defaultingFavIcon(imageURL) {
            var brandImg = document.getElementById('favicon');
            try {
                if (imageURL.length == 0) {
                    brandImg.style.backgroundImage = "url(" + defaultImageURL + ")";
                    brandImg.style.width = "16px";
                    brandImg.style.height = "16px";
                    brandImg.style.backgroundPosition = "-310px 0px";
                    brandImg.style.margin = "10px 2px 10px 2px";
                } else {
                    brandImg.style.backgroundImage = "url(" + imageURL + ")";
                    brandImg.style.width = "16px";
                    brandImg.style.height = "16px";
                    brandImg.style.backgroundPosition = "0px 0px";
                    brandImg.style.margin = "10px 2px 10px 2px";
                }
            } catch(e) {
                //alert(e)
            }
        }

        // To initialize the image, url and description
        function initialize() {
            document.getElementById('brand').innerHTML = contents[0][1];
            document.getElementById('title').innerHTML = contents[0][3];
            defaultingFavIcon(contents[0][2]);
        }
