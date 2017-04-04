<style>
	.case_wrap {
		height: 80px;
		margin-bottom: 20px;
	}
	
	.case_header {
		height: 80px;
		width: 130px;
		background-color: rgb(209, 94, 149);
		font-size: 30px;
		color: #fff;
		line-height: 1.2;
		padding-left: 10px;
		margin-right: 500px;
		float: left;
	}
	
	.case_header--right {
		float: right;
	}
	
	.case_header--right img {
		height: 70px;
	}
	
	.case_title {
		font-size: 26px;
		margin-bottom: 10px;
	}
	
	.case_title span {
		display: inline-block;
	}
	
	.case_content {
		display: flex;
		margin-bottom: 80px;
	}
	
	.case_content--left {
		width: 380px;
		margin-right: 20px;
	}
	
	.case_content--right {
		width: 580px;
	}
	
	.case_con__tit {
		font-weight: bold;
		font-size: 15px;
		margin-bottom: 30px;
	}
	
	.case_con__des {
		font-size: 16px;
		margin-bottom: 30px;
		/*color: #aaa;*/
		margin-bottom: 25px;
	}
	
	.case_ul__tit {
		margin-bottom: 5px;
	}
	
	.case_ul {
		font-size: 14px;
		margin-bottom: 30px;
	}
	
	.case_ul li:before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		background-image: url(../images/point.png);
		background-size: contain;
		height: 12px;
		width: 12px;
		margin-right: 4px;
	}
	
	.case_ul li {
		line-height: 1.2;
		margin-bottom: 10px;
	}
	
	.case_content__wrap {
		display: flex;
	}
	
	.case_content__pic {
		flex: 1;
		height: 260px;
		margin: 1px;
		background-size: cover;
		background-position: center;
	}
</style>
<template>
	<div class="mod_wrap">
		<div class="mod_tit">What We Did / Cases</div>
		<div class="mod_des">
			We take our client as our core and heart as we deeply understand at the end of day, it is all about customer services on what we do. We are very blessed to have some of the best accounts in the world that gives out the support we could.
		</div>

		<!--case show-->
		<div class="case" v-for="val in content">
			<!--header-->
			<!--<div class="case_wrap">
				<div class="case_header">
					Case<br />Show
				</div>
				<div class="case_header--right">
					<img src="../images/minilogo.png" />
				</div>
			</div>-->

			<!--data-->
			<div class="case_title"><span :style="{color: val.tit.color,backgroundColor: val.tit.bgcolor}">{{val.tit.value}}</span></div>
			<div class="case_content">
				<div class="case_content--left">
					<div class="case_con__tit">{{val.des}}</div>
					<div class="case_con__des" v-if="val.contit">{{val.contit}}</div>
					<div class="case_ul" v-for="obj in val.list">
						<div class="case_ul__tit">{{obj.header}}</div>
						<ul>
							<li v-for="item in obj.item">{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="case_content--right" v-if="val.pic.length">
					<div class="case_content__wrap">
						<div class="case_content__pic" :style="{backgroundImage: 'url('+ val.pic[0] +')'}"></div>
						<div class="case_content__pic" :style="{backgroundImage: 'url('+ val.pic[1] +')'}"></div>
					</div>
					<div class="case_content__wrap">
						<div class="case_content__pic" :style="{backgroundImage: 'url('+ val.pic[2] +')'}"></div>
						<div class="case_content__pic" :style="{backgroundImage: 'url('+ val.pic[3] +')'}"></div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	module.exports = {
		components: {

		},
		data() {
			return {
				content: [{
						tit: {
							value: '"EXPLORE INFINITY BEAUTY"',
							color: '#fff',
							bgcolor: '#d400fa'
						},
						des: 'Marie Dalgar Art Festival Shanghai',
						list: [{
							header: 'CHANLLENGES',
							item: ['Being a pioneer brand in beauty industry in China, transforming itself from made in China to create in China, and even more importantly CREATE FOR CHINA, Marie Dalgar needs a say to set-up its own position in this extremely competitive market sector.', 'Make it ENCHANTING !']
						}, {
							header: 'WHAT WE DID',
							item: ['Build a PALACE that was inspired by colors – a palace of color that creating an enchanting exotic world', 'A virtual world filled with multi-ways to interactive, to have fun, and most importantly to integrate with guests  from the minute walk-in, till exit. Make them feel they passing through a journey', 'Inspirational set-up, to form up a story that smartly transformed in Marie Dalgar’ s brand messages in a more vivid and easy way.']
						}],
						pic: ['../images/pic45.jpeg', '../images/pic46.jpeg', '../images/pic47.jpeg', '../images/pic48.jpeg']
					}, {
						tit: {
							value: '"SET UP THE RIGHT WAY"',
							color: '#fff',
							bgcolor: '#7f7f7f'
						},
						des: 'The Lincoln Way  ',
						list: [{
							header: 'CHANLLENGES ',
							item: ['Continental is the flagship car for Lincoln that is designed for such specific crowd that all the sales need to master the small differences that makes big impact', 'How to enhance the Lincoln way through out the entire training that demonstrate the lifestyle Lincoln is all about', 'Make it EDUCATIONAL !']
						}, {
							header: 'WHAT WE DID',
							item: ['Designed the test drive program to highlight out this newly launched car’s key features through dynamic driving experiences, and detailed branding lifestyle build-up’s.', 'Venue sourcing in beautiful She Shan region including a nice route for scenic drive', 'Tent production makes it functional including both the overall structure, exterior and interior décor', 'Site hospitality program including coffee / tea for whole day, tea break session, and lunch box.', 'On-site staff support for 11 days in a row to ensure a smooth operations and deliveries for over 300']
						}],
						pic: ['../images/pic9.png', '../images/pic10.png', '../images/pic11.png', '../images/pic12.png']
					}, {
						tit: {
							value: '"CONNECTION THAT MATTERS"',
							color: '#fff',
							bgcolor: '#7f7f1e'
						},
						des: 'Luxury brand Customer Engagement',
						list: [{
							header: 'CHANLLENGES',
							item: ['This luxury cellphone brand needs a stronger ties to its VIP customers that they are seeking for – more than cellphone', 'Something that have a close to their fundamental needs, and can inspire their appreciation of being their customers, and something that can be associated to their customer profile and their needs.', 'Make it CONNECTED !']
						}, {
							header: 'WHAT WE DID',
							item: ['A rare opportunity with very exclusive chance to sit-down with ETON Windsor School admission director Mr. Charles Milnes', 'Revealing the credentials and the admission requirement trends by ETON by Mr. Milnes in person', 'Venue sourcing at Beijing Peninsula private restaurant with the right décor to fit the branding image', 'With only 30 seats available with RSVP\'d customer over 180.']
						}],
						pic: ['../images/pic13.png', '../images/pic14.png', '../images/pic15.png', '../images/pic16.png']
					},
					{
						tit: {
							value: '"Green Power United"',
							color: '#63af57',
							bgcolor: '#ffff3c'
						},
						des: 'Bring Solar Power Alive !',
						list: [{
							header: 'CHANLLENGES',
							item: ['GREEN energies can be such a boring concepts that news talk about daily but people rarely feels connect to.', 'A green energy cooperation finds us to come up with a solution that can easily integrate their concept to be easy approach to everyone', 'Make it RELATED !']
						}, {
							header: 'WHAT WE DID',
							item: ['Created the superhero stories together with unique characters that each one of them tied up to the group’s business units', 'Customer designed and character set-up', 'Launch in China at leading solar energy show ground, with breaking through visitor attention that day', 'Daily performance combined with martial arts performance, attracted daily more than 1,500 visitors / pro-channel partners on the show']
						}],
						pic: ['../images/pic17.png', '../images/pic18.png', '../images/pic19.png', '../images/pic20.png']
					},
//					{
//						tit: {
//							value: '"ONE RECEPTION AT TWO CONTINENTS"',
//							color: '#811e1d',
//							bgcolor: '#ffff3c'
//						},
//						des: 'Gala Awards Dinner',
//						contit: 'Created the best-of-the-best incentive program for one of the leading automobile brand in Asia Pacific dealers in Istanbul with the Gala Dinner highlights',
//						list: [{
//							header: 'PROGRAM HIGHLIGHTS',
//							item: ['One night across TWO continents with the sunset reception over Asia with beautiful ocean view', 'Then crossing with exclusive hire boat from Asia to Europe', 'Exclusive hire dinner at Europe side at the Cirgan Palace – the former Sultan royal palace']
//						}],
//						pic: ['../images/pic21.png', '../images/pic22.png', '../images/pic23.png', '../images/pic24.png']
//					},
					{
						tit: {
							value: '"WONDERFUL REUION WITH A LEGACY LEFT"',
							color: '#fff',
							bgcolor: '#d9795e'
						},
						des: 'Hong Kong University IMBA Alumni Reunion',
						list: [{
							header: 'CHANLLENGES',
							item: ['Grouping 50 elites from varied industries for a good calling', 'Quality program that can attract everyone’s interests that eventually drives for more attendance', 'Make it LEGENDARY !']
						}, {
							header: 'WHAT WE DID',
							item: ['Attracted almost 100% RSVP ratio as all people joined! Even together  with family members', '4-night program at Siem Reap from touch-down till take-off', 'Creative itinerary planning including picnic lunch along Royal Pond', 'Final gala night in private residence to set the celebration alive', 'CSR elements including house building project for local poor family.']
						}],
						pic: ['../images/pic25.png', '../images/pic26.png', '../images/pic27.png', '../images/pic28.png']
					},
					{
						tit: {
							value: '"ALL OVER THE MAP"',
							color: '#fff',
							bgcolor: '#487f1e'
						},
						des: 'Secret Customer Visits for a national bank   ',
						list: [{
							header: 'CHANLLENGES',
							item: ['Coverage – this local bank has one of its largest national branch network in China covering 316 city-level branches across 58 cities', 'A massive secret customer visit across a year to cover the customer service, brand operation standards and customer complain solving issues', 'Make it NATIONAL !']
						}, {
							header: 'WHAT WE DID',
							item: ['A whole year secret customer visit plan that covers all 33 provinces / municipal cities including Tibet, Xinjiang, Hong Kong and Macau.', 'Crossing 58 cities within one year with sustainable visiting / reporting plans ', 'Hiring / selecting / training 120 candidates became fully qualified as secret customers.', 'Created 30 varied levels of customer complains that require branch follow-up’s that we built a comprehensive customer service investigate tree', 'A cloud base video / photo storage basis for all the visit reports including 368 video clippings and more than 50GB photos for post- review']
						}],
						pic: ['../images/pic29.png', '../images/pic30.png', '../images/pic31.png', '../images/pic32.png']
					},
					{
						tit: {
							value: '"PARTNERSHIP JOINED"',
							color: '#fff',
							bgcolor: '#7f7f1e'
						},
						des: 'CapitaLand X Ascott Tujia Somerset Brand Launch ',
						list: [{
							header: '',
							item: ['A young dynamic new residence brand launch targeting for Online Z Generation', 'Creative method to launch the registration process to attract people’s attention to ‘FORM-UP’ the new brand together ', 'Fun way ‘Door Opening’ ceremony to launch the brand', 'A memory take-away by poster card (as staying coupon) post the event']
						}],
						pic: ['../images/pic33.png', '../images/pic34.png', '../images/pic35.png', '../images/pic36.png']
					},
					{
						tit: {
							value: '"Knowledge Better Experienced"',
							color: '#fff',
							bgcolor: '#0000fb'
						},
						des: 'Ford Everest None-Technical Training Enhancement ',
						list: [{
							header: 'CHANLLENGES',
							item: ['Switching the sales network from JIANGLING Ford to Chang An Ford, after a under-expected year of sales among strong competing marketing sector', 'Ford calls out for a stronger voice of confidence and a clearer vision understanding Everest’s great adventure features', 'Make it EXCITING !']
						}, {
							header: 'WHAT WE DID',
							item: ['Added in a half day alive experience program that fully highlights out Ford features', 'Sourced a perfect venue that provides a perfect PLAYGROUND for Everest', 'Designed a drive program that shows SAND, WATER, MUD, and Off-Road barriers to alive, all SORTS of FUN for dealers to try out', 'Facilitated all above driving program with national professional SUV expertise to approve / to solve all the questions dealers have']
						}],
						pic: ['../images/pic37.png', '../images/pic38.png', '../images/pic39.png', '../images/pic40.png']
					},
					{
						tit: {
							value: '"A DREAM NIGHT"',
							color: '#3965bd',
							bgcolor: '#d70101'
						},
						des:'Gala Dinner with Chartered Palace Versailles ',
						contit: 'When this client chose a destination of Paris for its national top sales incentive, a place almost all of its sales have been already. The client gave a challenge to make everyone a big surprise moment when walk-in for the gala and iMi-Spring just had the perfect solution for it.',
						list: [{
							header: '',
							item: ['Exclusive hire for the Palace of Versailles, stepping from the Golden Gate to the whole palace.', 'A golden themed gala dinner inside the Napoleon Hall for 500 pax including all catering services', 'Tailor-made touring of the Palace of Versailles with including the each hall installed with a live performance / band to re-alive the golden era for France']
						}],
						pic: ['../images/pic41.png', '../images/pic42.png', '../images/pic43.png', '../images/pic44.png']
					}
				]
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