// ServiceWorker is a progressive technology. Ignore unsupported browsers



if ('serviceWorker' in navigator) {

  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker
  			.register('/serviceworker.js')
  			.then(function() {
			    console.log('CLIENT: service worker registration complete.');
			}, function() {
				console.log('CLIENT: service worker registration failure.');
			});
} else {
  console.log('CLIENT: service worker is not supported.');
}

var greg;
var vapidPublicKey = "BI-oQNGza-sZbg2-D1FNDoJY_HEg-6wmq_vZKvWFSy7ybzWde54aE6lTO_Oy8NhFqijTNsY_Qd5OCwwSumCsdDA";
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/serviceworker.js').then(function(reg) {
	  console.log('Service Worker Registered!', reg);
	  greg = reg;
	  reg.pushManager.getSubscription().then(function(sub) {
		if (sub === null) {
		
		  // Update UI to ask user to register for Push
		  const convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
		   reg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: convertedVapidPublicKey,
		  });
		  console.log('Not subscribed to push service!');
		} else {
		  // We have a subscription, update the database
		  console.log('Subscription object: ', sub);
		  const convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
		   reg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: convertedVapidPublicKey,
		  });
		  //document.getElementById("dataId").innerHTML =JSON.stringify(sub); 
		  
		// alert(JSON.stringify(sub));
		  console.log('Subscription object: '+JSON.stringify(sub));
		 localStorage.setItem("notifyId", JSON.stringify(sub));
		}
	  });
	})
	 .catch(function(err) {
	  console.log('Service Worker registration failed: ', err);
	});
  }
  function subscribeUser() {
  	alert("In subscribeUser");
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/serviceworker.js').then(function(reg) {
	  console.log('Service Worker Registered!', reg);
	  greg = reg;
	  reg.pushManager.getSubscription().then(function(sub) {
		if (sub === null) {
		
		  // Update UI to ask user to register for Push
		  const convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
		   reg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: convertedVapidPublicKey,
		  });
		  console.log('Not subscribed to push service!');
		} else {
		  // We have a subscription, update the database
		  console.log('Subscription object: ', sub);
		  const convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
		   reg.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: convertedVapidPublicKey,
		  });
		  //document.getElementById("dataId").innerHTML =JSON.stringify(sub); 
		  //localStorage.setItem("notifyId", JSON.stringify(sub)); 
		 // alert(JSON.stringify(sub));
		}
	  });
	})
	 .catch(function(err) {
	  console.log('Service Worker registration failed: ', err);
	});
  }
  }
  function urlBase64ToUint8Array(base64String) {
	var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
	var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  
	var rawData = window.atob(base64);
	var outputArray = new Uint8Array(rawData.length);
  
	for (var i = 0; i < rawData.length; ++i) {
	  outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
  }