/**
 * Module main
 */
var app = (function($, window, document, undefined) {

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	'use strict';

	var module = {
		progress: function() {
			var $ppc = $('.progress-pie-chart');
			var percent = parseInt($ppc.data('percent'));
			var deg = 360 * percent / 100;

			if (percent > 50) {
				$ppc.addClass('gt-50');
			}

			$('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
			$('.ppc-percents span').html(percent + ' <i class="fa fa-coffee"></i>');
		},

		confirmAdd: function(id) {
			$('#btn-add-coffee').on('click', function() {
		        notie.confirm('Add coffee for you?', 'Yes', 'Cancel', function() {
		            notie.alert(1, 'Added with success!', 1.5);
		            setTimeout(function(argument) {
		        		window.location = '/coffee/' + id;
		            }, 1500);
		        });
	        });
		},

		confirmGuest: function(id) {
			$('#btn-add-guest').on('click', function() {
	            notie.confirm('Add coffee for the guest?', 'Yes', 'Cancel', function() {
	                notie.alert(2, 'Added with success!', 1.5);
	                setTimeout(function(argument) {
	            		window.location = '/coffee/guest/' + id;
	                }, 1500);
	            });
	        });
		},

		init: function(userID) {
			var id = userID;
			module.progress();
			module.confirmAdd(id);
			module.confirmGuest(id);
		}
	};

	return {
		init: module.init
	}

}(jQuery, window, document));