/**
 * Created by python on 17-10-29.
 */
// 焦点的判断和输入格式的判断
$(function(){

	var error_name = false;
	var error_password = false;


	$('.name_input').blur(function() {
		check_user_name();
	});

	$('.pass_input').blur(function() {
		check_pwd();
	});

	function check_user_name(){
		var len = $('.name_input').val().length;
		if(len<5||len>20)
		{
			$('.name_input').next().html('请输入5-20个字符的用户名')
			$('.name_input').next().show();
			error_name = true;
		}
		else
		{
			$('.name_input').next().hide();
			error_name = false;

		}
	}

	function check_pwd(){
		var len = $('.pass_input').val().length;
		if(len<8||len>20)
		{
			$('.pass_input').next().html('密码最少8位，最长20位')
			$('.pass_input').next().show();
			error_password = true;
		}
		else
		{
			$('.pass_input').next().hide();
			error_password = false;
		}
	}

	$('#reg_form').submit(function() {
		check_user_name();
		check_pwd();

		if(error_name == false && error_password == false)
		{
			return true;
		}
		else
		{
			return false;
		}

	});
});