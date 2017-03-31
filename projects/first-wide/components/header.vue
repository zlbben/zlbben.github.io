<style>
	.header {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100px;
		width: 100%;
		background: white;
		border-bottom: solid 1px rgba( 0, 0, 0, .1);
		box-shadow: 0 0 6px rgba( 0, 0, 0, .05);
		z-index: 999;
	}
	
	.header_logo__pic {
		width: 124px;
		position: absolute;
		left: 20px;
	}
	
	.header_nav {
		position: absolute;
		top: 30px;
		right: 20px;
	}
	
	.header_li {
		display: inline-block;
	}
	
	.header_ul {
		margin: 16px 0;
		padding-left: 40px;
	}
	
	.header_li a {
		font-family: "Gotham Rounded Book", "HelveticaLight", Helvetica, sans-serif;
		font-size: 18px;
		text-transform: lowercase;
		color: #777;
		text-decoration: none;
		margin: 0 10px 0 10px;
		font-weight: 100;
	}
	
	.header_li .header--active {
		color: #7bbab1;
	}
</style>
<template>
	<div class="header">
		<a class="header_logo" href="javasript:">
			<img src="../images/logo.jpg" alt="" class="header_logo__pic" />
		</a>

		<div class="header_nav">
			<ul class="header_ul">
				<li class="header_li">
					<a :class="{'header--active':this.item == 'about'}" href="javascript:" @click="headerCall('about')">about</a>
				</li>
				<li class="header_li">
					<a :class="{'header--active':this.item == 'wecase'}" href="javascript:" @click="headerCall('wecase')">case</a>
				</li>
				<li class="header_li">
					<a :class="{'header--active':this.item == 'clients'}" href="javascript:" @click="headerCall('clients')">clients</a>
				</li>
				<li class="header_li">
					<a :class="{'header--active':this.item == 'contact'}" href="javascript:" @click="headerCall('contact')">contact</a>
				</li>
				<li class="header_li">
					<a href="http://www.imi-spring.com/travel.html">travel</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	module.exports = {
		components: {},
		data() {
			return {
				item: 'about'
			}
		},
		watch: {

		},
		computed: {

		},
		methods: {
			headerCall(data) {
				this.item = data
				EVENT_HUB.$emit('headerClick', data)
			}
		},
		created() {

		},
		mounted() {}

	}
</script>