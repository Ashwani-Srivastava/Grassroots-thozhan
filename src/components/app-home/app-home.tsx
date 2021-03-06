import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
    @State() obj: any = {
        name:"",
        vision:"",
    };
    async componentWillLoad(){
        const response = await fetch("../../assets/thozhan.json");
        this.obj = await response.json();
        console.log(this.obj);
    }
  render() {
    return [
      <ion-content class="ion-padding">
        {/* <!-- Start Preloader Area --> */}
        <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        {/* <!-- End Preloader Area -->

        <!-- Start Header Area --> */}
        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-content">
                            <p>
                                <a href="#">The fund will go to the poor... <span>Donate Now</span></a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="top-header-social">
                            <span>Follow us:</span>
                            <a href={this.obj.reachOut.facebook} target="_blank">
                                <i class='flaticon-facebook'></i>
                            </a>

                            <a href={this.obj.reachOut.twitter} target="_blank">
                                <i class='flaticon-twitter'></i>
                            </a>

                            <a href={this.obj.reachOut.instagram} target="_blank">
                                <i class='flaticon-instagram'></i>
                            </a>

                            <a href={this.obj.reachOut.linkedin} target="_blank">
                                <i class='flaticon-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Header Area -->

        <!-- Start Navbar Area --> */}
        <div class="navbar-area fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src={this.obj.logo.url} class="white-logo" alt="logo" height="165" width="186"/>
                            <img src={this.obj.logo.url} class="black-logo" height="68" width="202" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">
                                        <span>o1</span>
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-4.html" class="nav-link active">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link">
                                        <span>o2</span>
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o3</span>
                                        Causes 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="causes.html" class="nav-link">
                                                Causes
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-causes.html" class="nav-link">
                                                Single Causes
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o4</span>
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="about.html" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="team.html" class="nav-link">
                                                Team
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">
                                                Gallery
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Events 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="events.html" class="nav-link">
                                                        Events
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="single-events.html" class="nav-link">
                                                        Events Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">
                                                Faq
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="feedback.html" class="nav-link">
                                                Feedback
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                User 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="log-in.html" class="nav-link">
                                                        Log In
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="sign-up.html" class="nav-link">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="recover-password.html" class="nav-link">
                                                        Recover Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">
                                                404 Error
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="contact.html" class="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <span>o5</span>
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog-1.html" class="nav-link">
                                                Blog Grid
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-2.html" class="nav-link">
                                                Blog Right Sidebar
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-blog.html" class="nav-link">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        <span>o6</span>
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">
                                <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/flag/france-flag.jpg" class="shadow" alt="image"/>
                                        <span>Eng <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/germany-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/italy-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/spain-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/russia-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/us-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text"/>

                                                <button class="search-button" type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- End Navbar Area -->

        <!-- Sidebar Modal --> */}
        <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-about-area">
                    <div class="title">
                        <h2>About Us</h2>
                        <p>{this.obj.description}</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
							<a href="#">
								<img src="assets/img/sidebar/1.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/2.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/3.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/4.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/5.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/6.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/7.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/8.jpg" alt="image"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href={this.obj.reachOut.phone1}>
                                    {this.obj.reachOut.phone1}
                                </a>
                                <span>OR</span>
                                <a href={this.obj.reachOut.email}>
                                    {this.obj.reachOut.email}
                                </a>
                            </h2>
    
                            <ul class="social">
                                <li>
                                    <a href={this.obj.reachOut.facebook} target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.twitter} target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.instagram} target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.linkedin} target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.obj.reachOut.pinterest} target="_blank">
                                        <i class="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="close-btn sidebar-modal-close-btn">
                    <i class="flaticon-close"></i>
                </span>
            </div>
        </div>
       {/*  <!-- End Sidebar Modal -->

        <!-- Start Home Banner Three Area --> */}
        <div class="home-banner-three home-banner-four">
            <div class="home-slides-four owl-carousel owl-theme">
                <div class="home-item item-bg-1">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="main-banner-content main-banner-content-four text-center">
                                    <span>{this.obj.slug}</span>
                                    <h1>It is more difficult to give money away </h1>
                                    <p>{this.obj.vision}</p>
                                    <div class="banner-btn">
                                        <a href="#" class="default-btn">
                                            Donate Now
                                            <i class="flaticon-right"></i>
                                            <span></span>
                                        </a>
                                        <a class="optional-btn" href="#">
                                            Become Member
                                            <i class="flaticon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-item item-bg-2">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="main-banner-content main-banner-content-four text-center">
                                    <span>{this.obj.slug}</span>
                                    <h1>It is more difficult to give money away </h1>
                                    <p>{this.obj.vision}</p>
                                    <div class="banner-btn">
                                        <a href="#" class="default-btn">
                                            Donate Now
                                            <i class="flaticon-right"></i>
                                            <span></span>
                                        </a>
                                        <a class="optional-btn" href="#">
                                            Become Member
                                            <i class="flaticon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-item item-bg-3">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="main-banner-content main-banner-content-four text-center">
                                <span>{this.obj.slug}</span>
                                    <h1>It is more difficult to give money away </h1>
                                    <p>{this.obj.vision}</p>
                                        <div class="banner-btn">
                                        <a href="#" class="default-btn">
                                            Donate Now
                                            <i class="flaticon-right"></i>
                                            <span></span>
                                        </a>
                                        <a class="optional-btn" href="#">
                                            Become Member
                                            <i class="flaticon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Home Banner Three Area -->

        <!-- Start Top Feature Area --> */}
        <section class="feature-section">
            <div class="container-fluid">
                <div class="row">
                { this.obj.sdg.slice(0, 4).map(s => (
                            <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                            <div class="feature-card">
                                <div class="icon">
                                    <img src={s.photo.url} alt="image"/>
                                    <img src={s.photo.url} alt="image"/>
                                </div>
                                
                                <h3>{s.name}</h3>
                                <p>{s.description}</p>
    
                                <a href="#" class="feature-btn">
                                    Join now +
                                </a>
                            </div>
                        </div>
                            )) }

                </div>
            </div>
        </section>
       {/*  <!-- End Top Feature Area -->

        <!-- Start About Area --> */}
        <section class="about-section pt-70 pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-item">
                            <span>
                                <i class="flaticon-care-about-plants"></i>
                                About us
                            </span>
                            <h3>An International Independent Charity Organization</h3>
                            <p class="main-color">
                                Your support will help us to make life better living for poor vulnerable children.
                            </p>
                            <p>{this.obj.mission} </p>

                            <div class="about-btn">
                                <a href="#" class="default-btn">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                    <span></span>
                                </a>
                                <a class="optional-btn" href="#">
                                    More about us
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-image about-four">
                            <img src={this.obj.photos[1]} class="shadow" alt="image"/>
                            <img src={this.obj.photos[0]} class="shadow" alt="image"/>
                        </div>

                        <div class="about-video">
                            <a href={this.obj.video.url} class="video-btn popup-youtube">
                                <i class="bx bx-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End About Area -->

        <!-- Start Fun Facts Area --> */}
        <section class="fun-facts-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Average Rating</p>
                            <h3>
                                <span class="sign-icon dolor">$</span>
                                <span class="odometer" data-count="500">00</span>
                                <span class="sign-icon">M</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Happy Donators</p>
                            <h3>
                                <span class="odometer" data-count="458">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Volunteer</p>
                            <h3>
                                <span class="odometer" data-count="45">00</span>
                                <span class="sign-icon">+</span>
                            </h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-fun-fact">
                            <p>Donated Poor</p>
                            <h3>
                                <span class="odometer" data-count="20">00</span>
                                <span class="sign-icon">K</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Fun Facts Area -->

        <!-- Start Causes Area --> */}
        <section class="causes-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-ribbon"></i>
                        Our Causes
                    </span>
                    <h2>Our Projects</h2>
                        
                    </div>

                <div class="row">
                { this.obj.projects.slice(0, 3) .map(p => (
                             <div class="col-lg-4 col-md-6">
                             <div class="single-causes">
                                 <img src="/assets/7.jpeg" height="520" width="360" alt="image"/ >
                                 <div class="icon">
                                     <i class="flaticon-book-1"></i>
                                 </div>
     
                                 <div class="causes-content">
                                     <span>{p.photo.caption}</span>
                                     <h3>{p.name}</h3>
                                     {/* <p>{p.description}</p> */}
     
                                     <div class="causes-progress-bar">
                                         <div class="causes-progress-content">
                                             <span>Raised: $5,000.00</span>
                                             
                                             <div class="text-right">
                                                 <span>Goal: $8,000.00</span>
                                             </div>
                                         </div>
                                         <p>Raised by 60 people within 10 days</p>
                                     </div>
                                     
                                     <a href="single-causes.html" class="causes-btn-one">
                                         Donate Now
                                         <i class="flaticon-right"></i>
                                     </a>
                                 </div>
                             </div>
                         </div>
                            )) }

                    {/* <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/1.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-book-1"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Education</span>
                                <h3>Education for poor child</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $5,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 60 people within 10 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/2.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-laptop"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Donation</span>
                                <h3>Massive donation to poor</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $4,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 40 people within 12 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-causes">
                            <img src="assets/img/causes/3.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-blood-bag"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Helpless</span>
                                <h3>Huge help to homeless pupil</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $1,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $5,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 50people within 20days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* <!-- End Causes Area -->

        <!-- Start Donor Area --> */}
        <section class="donor-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Why Volunteer Here</h2>
                </div>

                <div class="row">
                    {this.obj.whyVolunteerHere.slice(0,3).map(m=>(
                        <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-support"></i>
                            </div>
                            <h3>{m.text}</h3>
                            {/* <p>Lorem ipsum dolor siamet ecteturadipisicing</p> */}
                            <a href="#" class="donor-btn">Give Requist +</a>
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-support"></i>
                            </div>
                            <h3>Select Position</h3>
                            <p>Lorem ipsum dolor siamet ecteturadipisicing</p>
                            <a href="#" class="donor-btn">Give Requist +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-confirmation"></i>
                            </div>
                            <h3>Get Confirmation</h3>
                            <p>Dolor Lorem ipsumsiamet ecteturadipisicin</p>
                            <a href="#" class="donor-btn">Get Reaction +</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-md-6 offset-md-3 offset-lg-0">
                        <div class="donor-item">
                            <div class="icon">
                                <i class="flaticon-enjoy"></i>
                            </div>
                            <h3>Get Enjoyed</h3>
                            <p>Lorem ipsum dolor siamet ecteturadipisicing</p>
                            <a href="#" class="donor-btn">Enjoy Now +</a>
                        </div>
                    </div> */}
                </div>
            </div>

            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
      {/*   <!-- End Donor Area -->

        <!-- Start Solve Area --> */}
        <section class="solve-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-to-do-list"></i>
                        Activities
                    </span>
                    <h2>A mission to solve a problem</h2>
                    <p>{this.obj.vision}</p>
                </div>

                <div class="row">
                    {this.obj.activities.slice(0,4).map(s => (
                        <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/1.png" alt="image"/>
                            </div>
                            <h3>{s}</h3>
                            {/* <p>Roknin sanso dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p> */}
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/1.png" alt="image"/>
                            </div>
                            <h3>Education Facilities</h3>
                            <p>Roknin sanso dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/2.png" alt="image"/>
                            </div>
                            <h3>Medical Facilities</h3>
                            <p>Dobani Kulie dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/3.png" alt="image"/>
                            </div>
                            <h3>Healthy Food</h3>
                            <p>Horith ipsum dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="solve-item">
                            <div class="icon">
                                <img src="assets/img/solve/4.png" alt="image"/>
                            </div>
                            <h3>Pure Water</h3>
                            <p>Warek ipsum dolor sit amet consecteturadipisicingitsed do eiusmod tempor.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* <!-- End Solve Area -->

        <!-- Start Mission Area --> */}
        <section class="mission-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        <div class="mission-image">
                            <img src="assets/img/mission.png" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
						<div class="mission-tab">
                            <span>
                                <i class="flaticon-target"></i>
                                Our Mission
                            </span>
							<h2>Concern about Our Mission</h2>
							<div class="tab mission-list-tab">
								<ul class="tabs">
									<li>
										<a href="#">
											Our Mission
										</a>
									</li>
									<li>
										<a href="#">
											Our Vision
										</a>
									</li>
									<li>
										<a href="#">
											Our Goal
										</a>
									</li>
                                </ul>
                                
								<div class="tab_content">
									<div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </section>
        {/* <!-- End Mission Area -->

        <!-- Start Team Area --> */}
        <section class="team-section pt-100 pb-70">
            <div class="container">
                <div class="team-title-area">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-title text-left">
                                <span>
                                    <i class="flaticon-support"></i>
                                    Meet Our Team
                                </span>
                                <h2>Talented Team behind Huruma</h2>
                                <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="team-btn text-right">
                                <a href="#" class="optional-btn">
                                    Meet Our Team
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    {this.obj.team.slice(0,3).map(s => (
                        <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src={s.photo.url} alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href={s.reachOut.facebook}>
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href={s.reachOut.twitter}>
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href={s.reachOut.instagram}>
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>{s.name}</h3>
                                <span>{s.role}</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/7.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Alex Maxwel</h3>
                                <span>CEO & Founder</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/8.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Smith Jhon</h3>
                                <span>Manager</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/9.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Ched Kurtsovski</h3>
                                <span>Volunteer</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-team-member">
                            <div class="team-image">
                                <img src="assets/img/team/10.png" alt="image"/>
                            </div>
    
                            <ul class="social-btn">
                                <li>
                                    <a href="#">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
    
                            <div class="member-content">
                                <h3>Ched Kurtsovski</h3>
                                <span>Volunteer</span>
                            </div>

                            <div class="team-icon">
                                <i class="flaticon-plus"></i>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* <!-- End Team Area -->

        <!-- Start Events Area --> */}
        <section class="event-section pt-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-clipboard"></i>
                        Upcoming Events
                    </span>
                    <h2>Be ready for Our Events</h2>
                    <p>Event makes suspendice  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="event-slider owl-carousel owl-theme">
                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-130</h3>
                                    <span>5 December 2020</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Huruma  Con Donation 2020</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            8:00 - 10:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Newyork City
                                        </li>
                                    </ul>
                                    <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="event-time">
                                    <h3>0-140</h3>
                                    <span>10 January 2021</span>

                                    <div class="icon">
                                        <i class="flaticon-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="event-content">
                                    <h4>Poor funding for helpless</h4>

                                    <ul class="event-meta">
                                        <li>
                                            <i class="flaticon-clock"></i>
                                            9:00 - 12:00
                                        </li>

                                        <li>
                                            <i class="flaticon-pin"></i>
                                            Calfornia City
                                        </li>
                                    </ul>
                                    <p>Suspendice quis ipsum  consectetucaquuis ipsums gravida.</p>
                                    <a href="single-events.html" class="event-btn-one">Join Now +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  <!-- End Events Area -->

        <!-- Start Testimonials Area --> */}
        <section class="testimonials-section pt-140 pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-testimonial"></i>
                        Testimonials
                    </span>
                    <h2>Don’t Believe Us? See review</h2>
                </div>
                <div class="testimonials-slider owl-carousel owl-theme">
                    {this.obj.review.slice(0,4).map( s=> (
                        <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src={s.event.photo.url} alt="image"/>
                                    <h3>{s.name}</h3>
                                    <span>Charity Bingo <b>Tamil Nadu</b></span>
                                    <ul class="social-info">
                                        
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>{s.feedback}</h3>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p> */}
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="assets/img/testimonials/1.jpg" alt="image"/>
                                    <h3>Juhan Luis</h3>
                                    <span>Charity Bingo <b>Uk</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="testimonials-item">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="testimonials-info">
                                    <img src="assets/img/testimonials/2.jpg" alt="image"/>
                                    <h3>juhon Dew</h3>
                                    <span>Charity Bingo <b>Canada</b></span>
                                    <ul class="social-info">
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                        <li>
                                            <i class='bx bxs-star'></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <h3>Precious Journey With You”</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, autem totam. Et ipsam similique consequatur! Numquam, inventore delectus sequi, ullam, placeat molestias velit dolore praesentium ea distinctio cum vitae aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veniam reprehenderit. Id sed itaque quam voluptates deleniti autem facilis sequi! Voluptatibus voluptas dolorum nisi tenetur laboriosam modi quis.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div class="testimonials-shape">
                <img src="assets/img/testimonials/shape.png" alt="image"/>
            </div>
        </section>
        {/* <!-- End Testimonials Area -->

        <!-- Start Donate Area --> */}
        <section class="donate-section ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Why Help Matters?</h2>
                    <p>{this.obj.whyHelpMatters.slice(0,3).map(s=>(
                        <p>{s.text}</p>
                    ))}</p>
                    <a href="#" class="donate-btn">
                        Donate Now
                        <i class="flaticon-right"></i>
                    </a>
                </div>
            </div>

            <div class="default-shape">
                <img src="assets/img/donate/1.png" alt="image"/>
                <img src="assets/img/donate/2.png" alt="image"/>
            </div>
        </section>
       {/*  <!-- End Donate Area -->

        <!-- Start Blog Area --> */}
        <section class="blog-section pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-book"></i>
                        Our Blog
                    </span>
                    <h2>Check Out Our Latest News</h2>
                </div>

                <div class="row">
                    {this.obj.media.slice(0,3).map(s=>(
                        <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src={s.photo.url} alt="image"/>

                            <div class="content">
                                <a href={s.link}>
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>{s.date._seconds}</span>
                                <h3>
                                    <a href={s.link}>
                                        {s.name}
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    ))}
                    {/* <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/1.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Poor, 22 January</span>
                                <h3>
                                    <a href="#">
                                        Poverty not only money it can be food sometimes
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/2.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Food, 21 December</span>
                                <h3>
                                    <a href="#">
                                        Strawberry-Banana Quinoa Muffins Recipe for poor
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                        <div class="single-blog">
                            <img src="assets/img/blog/3.jpg" alt="image"/>

                            <div class="content">
                                <a href="#">
                                    <i class='bx bx-user'></i>
                                </a>
                                <span>Healthy, 21 June</span>
                                <h3>
                                    <a href="#">
                                        The Plant-Powered Dietitian To Consume Habit
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
       {/*  <!-- End Blog Area --> */}

        {/* <!-- Start Footer Area --> */}
        <footer class="footer-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Contact info</h3>

                            <div class="footer-info-contact">
                                <i class="flaticon-pin"></i>
                                <h3>Location</h3>
                                <span>{this.obj.address}</span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-call"></i>
                                <h3>Call Us</h3>
                                <span><a href={this.obj.reachOut.phone1}>{this.obj.reachOut.phone1}</a></span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-email"></i>
                                <h3>Email Us</h3>
                                <span>
                                    <a href={this.obj.reachOut.email}>
                                        {this.obj.reachOut.email}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Support</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Private Policies
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Donate Now
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Become a Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Paid programs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partnership
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Our Services</h3>

                            <ul class="footer-quick-links">
                                <li>
                                    <a href="#">
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Sponsor
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Fundraise
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Partner
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Form 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Recent News</h3>
                            {this.obj.media.slice(0,2).map(s => (
                                <div class="footer-news">
                                <a href={s}>
                                     <img src={s.photo.url} alt="image"/>
                                     <h4>{s.name}</h4>
                                     <span>{s.date._seconds}</span>
                                </a>
                             </div>
                            ))}
                            {/* <div class="footer-news">
                               <a href="single-blog.html">
                                    <img src="assets/img/footer-news/1.jpg" alt="image"/>
                                    <h4>Support about poverty to poor family</h4>
                                    <span>Poor, 22 January</span>
                               </a>
                            </div>

                            <div class="footer-news">
                               <a href="single-blog.html">
                                    <img src="assets/img/footer-news/2.jpg" alt="image"/>
                                    <h4>Mostly suffered school Boys care</h4>
                                    <span>Health, 24 February</span>
                               </a>
                            </div>*/}
                        </div> 
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src="assets/img/white-logo.png" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>
                                    <i class="far fa-copyright"></i> 
                                    2020 Huruma. All Rights Reserved by
                                    <a href="https://envytheme.com/" target="_blank">
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                        <a href="terms-condition.html">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- End Footer Area --> */}

       {/*  <!-- Start Go Top Section --> */}
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
        {/* <!-- End Go Top Section --> */}

      </ion-content>,
    ];
  }
}
