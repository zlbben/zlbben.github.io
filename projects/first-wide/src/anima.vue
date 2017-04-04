<style>
	@import "../common/css/_reset.css";
	html {
		background-color: #fff;
		width: 100%;
		height: 100%;
	}
	
	body {
		position: relative;
		width: 100%;
		height: 100%;
	}
	
	.container {
		color: #fff;
		display: flex;
		position: fixed;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		background-color: #000;
	}
	
	.logo {
		position: relative;
		width: 246px;
		height: 70px;
		margin-right: 150px;
		margin: 0 auto;
	}
	
	.logo img {
		width: 100%;
	}
	
	.text {
		font-family: ProximaNova;
		white-space: nowrap;
		text-align: center;
		font-size: 60px;
		margin-bottom: 15px;
		overflow: hidden;
		animation: addWidth .8s 2.5s ease both;
		-webkit-animation: addWidth .8s 2.5s ease both;
		-moz-animation: addWidth .8s 2.5s ease both;
	}
	@keyframes addWidth {
		0% {
			width: 0;
		}
		100% {
			width: 980px;
		}
	}
	
	@-webkit-keyframes addWidth {
		0% {
			width: 0;
		}
		100% {
			width: 980px;
		}
	}
	
	@-moz-keyframes addWidth {
		0% {
			width: 0;
		}
		100% {
			width: 980px;
		}
	}
	
	@keyframes pulse {
		0% {
			-webkit-transform: scale(1)
		}
		50% {
			-webkit-transform: scale(1.1)
		}
		100% {
			-webkit-transform: scale(1)
		}
	}
	@-webkit-keyframes pulse {
		0% {
			-webkit-transform: scale(1)
		}
		50% {
			-webkit-transform: scale(1.1)
		}
		100% {
			-webkit-transform: scale(1)
		}
	}
	
	@-moz-keyframes pulse {
		0% {
			-moz-transform: scale(1)
		}
		50% {
			-moz-transform: scale(1.1)
		}
		100% {
			-moz-transform: scale(1)
		}
	}
	
	.logo_a {
		position: absolute;
		height: 70px;
		top: 0;
	}
	
	.logo_a__left {
		width: 112px;
		left: 0;
	}
	
	.logo_a__right {
		width: 134px;
		right: 0;
	}
	
	#animation_bottom__line {
		animation: fadeInUpBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
		-webkit-animation: fadeInUpBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
		-moz-animation: fadeInUpBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
	}
	
	@keyframes fadeInUpBig {
		0% {
			-webkit-transform: translateY(2000px)
		}
		100% {
			-webkit-transform: translateY(0)
		}
	}
	@-webkit-keyframes fadeInUpBig {
		0% {
			-webkit-transform: translateY(2000px)
		}
		100% {
			-webkit-transform: translateY(0)
		}
	}
	
	@-moz-keyframes fadeInUpBig {
		0% {
			-moz-transform: translateY(2000px)
		}
		100% {
			-moz-transform: translateY(0)
		}
	}
	
	#animation_top__line {
		animation: fadeInDownBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
		-webkit-animation: fadeInDownBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
		-moz-animation: fadeInDownBig 1s .2s ease-in-out both, rotateOut 1s 1.2s ease-in-out forwards;
	}
	
	@keyframes fadeInDownBig {
		0% {
			-webkit-transform: translateY(-2000px)
		}
		100% {
			-webkit-transform: translateY(0)
		}
	}
	
	@-webkit-keyframes fadeInDownBig {
		0% {
			-webkit-transform: translateY(-2000px)
		}
		100% {
			-webkit-transform: translateY(0)
		}
	}
	
	@-moz-keyframes fadeInDownBig {
		0% {
			-moz-transform: translateY(-2000px)
		}
		100% {
			-moz-transform: translateY(0)
		}
	}
	
	@keyframes rotateOut {
		0% {
			-webkit-transform: rotate(0);
			opacity: 1
		}
		100% {
			-webkit-transform: rotate(-360deg);
			opacity: 0
		}
	}
	@-webkit-keyframes rotateOut {
		0% {
			-webkit-transform: rotate(0);
			opacity: 1
		}
		100% {
			-webkit-transform: rotate(-360deg);
			opacity: 0
		}
	}
	
	@-moz-keyframes rotateOut {
		0% {
			-moz-transform: rotate(0);
			opacity: 1
		}
		100% {
			-moz-transform: rotate(-360deg);
			opacity: 0
		}
	}
	
	.line_one {
		height: 200px;
		width: 5px;
		position: absolute;
		margin-left: -2.5px;
		margin-top: -100px;
		top: 50%;
		left: 50%;
		background-color: #fff;
	}
	
	.line_two {
		width: 200px;
		height: 5px;
		position: absolute;
		margin-top: -2.5px;
		top: 50%;
		background-color: #fff;
		right: -200px;
	}
	
	.text_top {
		margin-bottom: 20px;
	}
	
	#animation_logo {
		animation: fadeInUp 1s 2.5s ease both;
		-webkit-animation: fadeInUp 1s 2.5s ease both;
		-moz-animation: fadeInUp 1s 2.5s ease both;
	}
	
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			-webkit-transform: translateY(20px)
		}
		100% {
			opacity: 1;
			-webkit-transform: translateY(0)
		}
	}
	@-webkit-keyframes fadeInUp {
		0% {
			opacity: 0;
			-webkit-transform: translateY(20px)
		}
		100% {
			opacity: 1;
			-webkit-transform: translateY(0)
		}
	}
	
	@-moz-keyframes fadeInUp {
		0% {
			opacity: 0;
			-moz-transform: translateY(20px)
		}
		100% {
			opacity: 1;
			-moz-transform: translateY(0)
		}
	}
	.logo_arrow_one{
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		background-image: url(../images/arrow.png);
		bottom: -50px;
		left: 24px;
		animation: fadeInUp 1s 2.5s ease both;
		-webkit-animation: fadeInUp 1s 2.5s ease both;
		-moz-animation: fadeInUp 1s 2.5s ease both;
	}
	.logo_arrow_two{
		background-size: 100%;
		background-repeat: no-repeat;
		position: absolute;
		background-image: url(../images/arrow.png);
		bottom: -50px;
		right: 35px;
	}
	.arrow_ani{
		height: 25px;
		width: 25px;
		animation: fadeInUp 2s 3.5s ease both infinite;
		-webkit-animation: fadeInUp 2s 3.5s ease both infinite;
		-moz-animation: fadeInUp 2s 3.5s ease both infinite;
	}
	
</style>
<template>

	<div class="container" id="container">

		<div>
			<div class="text text_top">
				<div class="text">THE <span style="color: #d20865;">BESPOKE</span></div>
				<div class="text">EXPERIENCE</div>
			</div>

			<div class="logo" id="animation_logo">
				<img src="../images/logo_white.png" />
				<a href="http://www.imi-spring.com/travel.html" class="logo_a logo_a__left"></a>
				<a href="http://www.imi-spring.com/communication.html" class="logo_a logo_a__right"></a>
				<div class="logo_arrow_one arrow_ani"></div>
				<div class="logo_arrow_two arrow_ani"></div>
			</div>
		</div>

		<div class="line_one" id="animation_top__line"></div>
		<div class="line_one" id="animation_bottom__line"></div>
	</div>

</template>

<script>
	module.exports = {
		components: {

		},
		data: {

		},
		watch: {

		},
		computed: {

		},
		methods: {

		},
		created() {

		},
		mounted() {

		}

	}
</script>