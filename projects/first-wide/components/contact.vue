<style>
	.contact_wrap {
		width: 100%;
		position: relative;
	}
	
	.contact_bg {
		width: 100%;
	}
	
	.contact_logo {
		position: absolute;
		width: 246px;
		height: 70px;
		right: 20px;
		top: 50%;
		margin-top: -123px;
	}
	
	.contact_logo img {
		width: 100%;
	}
	
	.contact_text {
		text-align: right;
		padding: 5px;
		position: absolute;
		width: 246px;
		right: 20px;
		top: 50%;
		margin-top: -40px;
		border: 2px solid #fff;
	}
	.contact_text span{
		color: #D15F96;
	}
</style>
<template>
	<div class="contact_wrap">
		<img class="contact_bg" src="../images/contact_bg.jpg" />

		<div class="contact_logo">
			<img src="../images/minilogo2.png" />
		</div>

		<div class="contact_text">
			<span>Your Bespoke Program</span><br /><br />
			iMi-Spring Partners<br />
			Suite 202, HuaiZhong Mansion<br />
			1162 Middle Huaihai Road<br />
			Shanghai, China<br />
			<span>T</span>. +86 21 6473 0600<br />
			<!--<span>C</span>. + 86 177 2147 0932<br />-->
			<span>E</span>. <a href="mailto:inquiry@imi-spring.com">inquiry@imi-spring.com</a>

		</div>

	</div>
</template>

<script>
	module.exports = {
		components: {},
		data() {
			return {

			}
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