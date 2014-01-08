$(function(){
	var timer = '';	// 定时器
	var i = 0;	//索引

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
	
	// 轮播
	$('.small_pic li').mouseover(function() {
		clearInterval(timer);
		var i = $(this).index();
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var backGround = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : backGround});
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings().hide();
	}).mouseleave(function() {
		timer = setInterval(move, 3000);
	});;
	timer = setInterval(move, 3000);
	function move() {
		if(i>11) i=0;
		var backImg = $('.small_pic li').eq(i).find('img').attr('backImg');
		var backColor = $('.small_pic li').eq(i).find('img').attr('backColor');
		var backGround = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : backGround});
		$('.small_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings().hide();
		i++;
	}
})