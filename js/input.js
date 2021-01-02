(function($){
	
	var s;

	$('.acf-css-checkall').on( 'click', function() {
		$(this).toggleClass('checked');
	});

	check_all_function('.acf-css-margin');

	check_all_function('.acf-css-border');

	check_all_function('.acf-css-padding');

	//check_all_function('.acf-css-border-radius');

	

	$('.acf-css-border-radius').on( 'input', function() {
		s = $(this).val();
		checkproperty(s);
		$(this).val(s);
		if ( $(this).closest('.acf-border-settings').find('.acf-border-radius-checkall').hasClass('checked') ) {
			$(this).siblings('.acf-css-border-radius').each( function() {
				$(this).val(s);
			});
		}
		var borderradiusShort = $('.acf-css-border-radius_topleft').val() + ' ' + $('.acf-css-border-radius_topright').val() + ' ' + $('.acf-css-border-radius_bottomright').val() + ' ' + $('.acf-css-border-radius_bottomleft').val();
		$('.acf-css-borderradius-shorthand').val(borderradiusShort);
		$('.acf-css-layout-border').css({
			"border-top-left-radius": $('.acf-css-border-radius_topleft').val(),
			"border-top-right-radius": $('.acf-css-border-radius_topright').val(),
			"border-bottom-right-radius": $('.acf-css-border-radius_bottomright').val(),
			"border-bottom-left-radius": $('.acf-css-border-radius_bottomleft').val(),
		});
	});

	$('.border-style').on( 'change', function() {		
		$('.acf-css-layout-border').css({
			"border-style": $(this).val(),
		})
	});

	$('.acf-css-border-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the border-color
			$(".acf-css-layout-border").css( 'border-color', ui.color.toString());
		}
	});

	$('.acf-css-border-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-layout-border").css( 'border-color', 'transparent');
	});

	$('.acf-css-back-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the background-color
			$(".acf-css-layout-padding").css( 'background', ui.color.toString());
			$(".acf-css-layout-border").css( 'background', ui.color.toString());
			$(".acf-css-layout-padding").css( 'border-style', 'none');
		}
	});

	$('.acf-css-back-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-layout-padding").css( 'background', 'transparent');
		$(".acf-css-layout-padding").css( 'border-style', 'dashed');
	});

	$('.acf-css-text-color-field').wpColorPicker({
		hide: true,
		change: function(event, ui) {
			// change the border-color
			$(".acf-css-center-caption p").css( 'color', ui.color.toString());
		}
	});

	$('.acf-css-text-color-settings .wp-picker-clear').on('click', function() {
		$(".acf-css-center-caption p").css( 'color', 'inherit');
	});

	$('.select2-container.border-style').select2({
		data:[
			{id:'none',text:acf._e('css_margin_padding', 'none')},
			{id:'solid',text:acf._e('css_margin_padding', 'solid')},
			{id:'dashed',text:acf._e('css_margin_padding', 'dashed')},
			{id:'dotted',text:acf._e('css_margin_padding', 'dotted')},
			{id:'double',text:acf._e('css_margin_padding', 'double')},
			{id:'groove',text:acf._e('css_margin_padding', 'groove')},
			{id:'ridge',text:acf._e('css_margin_padding', 'ridge')},
			{id:'inset',text:acf._e('css_margin_padding', 'inset')},
			{id:'outset',text:acf._e('css_margin_padding', 'outset')}
		],
		formatNoMatches: function(term) {
			return acf._e('css_margin_padding', 'nostyle');
		}
	});

	$('.acf-css-info').on('click', function() {
		$('.infotext').slideToggle();
	});

	var checkproperty = function( value) {
		if ( $.isNumeric(value) ) {
			s = value + 'px';
			return s;
		} else if ( value.indexOf('px') > -1  || value.indexOf('%') > -1  || value.indexOf('em') > -1  ) {
			var checkPx  = s.replace("px", "");
			var checkPct = s.replace("%", "");
			var checkEm  = s.replace("em", "");
			if ( $.isNumeric(checkPx) || $.isNumeric(checkPct) || $.isNumeric(checkEm) ) {
				s = value;
				return s;
			} else {
				s = "0px";
				return s;
			}
		} else {
			s = "0px";
			return s;
		}
	};

	function check_all_function(ele){
		$(ele).on( 'input', function() {
			s = $(this).val();
			checkproperty(s);
			$(this).val(s);
			if ( $(this).siblings('.field-caption').find('.acf-css-checkall').hasClass('checked') ) {
				$(this).siblings(ele).each( function() {
					$(this).val(s);
				});
			}
		});
	}

})(jQuery);
