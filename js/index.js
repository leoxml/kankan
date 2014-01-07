$(function(){
	// 搜索框焦点事件
	$('.search_text').focus(function() {
		$(this).val("").removeClass().addClass('blue');
	}).blur(function() {
		$(this).removeClass('blue').addClass('search_text');
	});
	// 中间隐藏盒子
	$('.user_m').hover(function() {
		$('.user_m .hidden_m').show();
	}, function() {
		$('.user_m .hidden_m').hide();
	});
	// 中间隐藏盒子文字样式
	$('.hidden_m_top span').mouseover(function() {
		$('.hidden_m_top span').removeClass('span_style');
		$(this).addClass('span_style');
	});
	// 中间隐藏盒子选项卡切换
	$('span.update').mouseover(function() {
		$('.history_box').hide();
		$('.user_m .hidden_m').show();
	});
	$('span.history').mouseover(function() {
		$('.history_box').show();
	});
	// 右侧隐藏盒子
	$('.user_r').hover(function() {
		$('.hidden_r').show();
	}, function() {
		$('.hidden_r').hide();
	});
	
	/* 导航条 */
	
})