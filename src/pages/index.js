import React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'
import FeaturedPost from '../components/FeaturedPost'
import Features from '../components/Features'
import Tutorials from '../components/Tutorials'
import Format from '../components/Format'
import Footer from '../components/Footer'

export default function Home() {

	return (
		<>
			<Navbar/>
			<Hero/>
			<LatestPosts/>
			<Tutorials/>
			<Format/>
			<Footer/>
		</>
	)

}
