<template>


		<main class="l-main">
			<home-section/>
			<about-section/>
			<services-section/>
			<menu-section/>
			<contact-section/>
		</main>

    
</template>

<script>
import HomeSection from '../components/Home.vue'
import AboutSection from '../components/About.vue'
import ServicesSection from '../components/Services.vue'
import MenuSection from '../components/MenuOfTheWeek.vue'
import ContactSection from '../components/ContactUs.vue'
export default{
	name:"index",
	data:()=>({

	}),
	methods:{
	},
	components:{
		HomeSection,
		AboutSection,
		ServicesSection,
		MenuSection,
		ContactSection
	}
}

</script>
