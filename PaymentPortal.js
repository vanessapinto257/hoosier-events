// Render the PayPal button
paypal.Button.render({
						// Set your environment
						env : 'sandbox', // sandbox | production

						// Specify the style of the button
						style : {
							layout : 'vertical', // horizontal | vertical
							size : 'medium', // medium | large | responsive
							shape : 'rect', // pill | rect
							color : 'gold' // gold | blue | silver | white | black
						},

						// Specify allowed and disallowed funding sources
						//
						// Options:
						// - paypal.FUNDING.CARD
						// - paypal.FUNDING.CREDIT
						// - paypal.FUNDING.ELV
						funding : {
							allowed : [ paypal.FUNDING.CARD,
									paypal.FUNDING.CREDIT ],
							disallowed : []
						},

						// PayPal Client IDs - replace with your own
						// Create a PayPal app: https://developer.paypal.com/developer/applications/create
						client : {
							sandbox : 'AQLepnBdVqmuvr05Yc2K_yHJuRqCXTmaWHgjEdjc7a62MIMky-BDQx3W-hj4D63MW4QsrfaTTmGN3lTf',
							production : '<insert production client id>'
						},

						payment : function(data, actions) {
							return actions.payment.create({
								payment : {
									transactions : [ {
										amount : {
											total : '10.00',
											currency : 'USD'
										}
									} ]
								}
							});
						},

						onAuthorize : function(data, actions) {
							return actions.payment.execute().then(function() {
								window.alert('Payment Complete!');
								//window.location.href = 'HomePage.html';
							});
						}
					}, '#paypal-button-container');