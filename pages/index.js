import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Portfolio Page</title>
          <meta property="og:title" content="Portfolio Page" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <span className="home-text">Heleo&apos;s Den</span>
            <div className="home-links-container">
              <a href="#about" className="home-link">
                About
              </a>
              <span className="home-link01 Navbar-Link">Experience</span>
              <a href="#pricing" className="home-link02">
                Pricing
              </a>
              <a href="#faq" className="home-link03">
                FAQ
              </a>
              <a href="#contact" className="home-link04">
                Contact
              </a>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container01">
                <span className="Card-Heading home-heading">Logo</span>
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link05 Navbar-Link">About</span>
                <span className="home-link06 Navbar-Link">Experience</span>
                <span className="home-link07 Navbar-Link">Portofolio</span>
                <span className="Navbar-Link">Contact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container02">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading1">
                Bring your ideas to life with Heleo&apos;s Den!
              </h1>
              <span className="home-text01">
                With over 3+ years of experience in the industry, let
                Heleo&apos;s Den help you create stunning mobile apps and
                websites at lightning speed.
              </span>
              <div className="home-cta-btn-container">
                <div className="home-container03">
                  <a
                    href="mailto:heleosden@gmail.com?subject=Enquiry Regarding your Services"
                    className="home-cta-btn Anchor button"
                  >
                    <span className="home-text02">
                      <span>cONTACT US</span>
                      <br></br>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fHx8MTY3NjExNTA5OQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-image"
            />
          </div>
        </div>
        <div id="about" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text05 Section-Heading">What Do We Offer</h2>
          </div>
          <div className="home-cards-container">
            <div className="home-card">
              <div className="home-icon-container">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                </svg>
              </div>
              <div className="home-content-container">
                <span className="home-heading2 Card-Heading">
                  Faster Execution of Ideas
                </span>
                <span className="home-text06">
                  <span className="home-text07">
                    Heleo&apos;s Den can help you get your ideas from concept to
                    reality in 1/3rd of the usual time. We specialize in
                    developing mobile apps for both iOS and Android, as well as
                    creating catchy websites for your ideas.
                  </span>
                  <br className="home-text08 Card-Text"></br>
                  <br className="home-text09 Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M708 230l-196 196-196-196 60-60 136 136 136-136zM316 794l196-196 196 196-60 60-136-136-136 136z"></path>
                </svg>
              </div>
              <div className="home-content-container1">
                <span className="home-heading3">
                  <span className="Card-Heading">Reduced Effort</span>
                  <br></br>
                </span>
                <span className="home-text12">
                  Our streamlined process and experienced development team makes
                  it easy to get everything you need done quickly and
                  efficiently. We have the skills and expertise to bring your
                  vision to life.
                </span>
              </div>
            </div>
            <div className="home-card2">
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1316.5714285714284 1024"
                  className="home-icon08"
                >
                  <path d="M109.714 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM951.429 625.143c-45.143-58.857-89.143-118.857-140.571-172.571l-71.429 80c-62.857 71.429-175.429 69.714-236.571-3.429-43.429-52.571-43.429-128 1.143-180l101.143-117.714c-35.429-18.286-78.286-12-116.571-12-33.714 0-66.286 13.714-90.286 37.714l-90.286 90.286h-88.571v310.857c25.143 0 48-3.429 68 16l169.714 166.857c34.857 33.714 80 63.429 129.714 63.429 25.714 0 53.143-8.571 71.429-26.857 42.857 14.857 92.571-9.143 105.714-53.143 27.429 2.286 52.571-6.286 72.571-25.143 13.143-12 30.286-36 28.571-54.857 5.143 5.143 17.714 5.714 24.571 5.714 68 0 103.429-71.429 61.714-125.143zM1042.286 658.286h54.857v-292.571h-53.143l-89.714-102.857c-24-27.429-60-43.429-96.571-43.429h-95.429c-32 0-62.857 14.286-83.429 38.286l-119.429 138.857c-21.143 25.143-21.143 60.571-0.571 85.714 32.571 38.857 92.571 39.429 126.286 1.714l110.286-124.571c26.286-29.143 74.286-1.714 62.286 35.429 21.714 25.143 45.143 49.714 66.286 74.857 28.571 35.429 56 72.571 84 108.571 17.714 22.857 30.857 50.286 34.286 80zM1206.857 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM1316.571 329.143v365.714c0 20-16.571 36.571-36.571 36.571h-248c-20.571 49.714-65.714 82.857-118.286 90.286-24.571 36-62.286 63.429-104.571 72.571-31.429 40-82.286 64-133.143 60.571-94.286 53.143-200.571 6.857-270.857-62.286l-164-161.143h-204.571c-20 0-36.571-16.571-36.571-36.571v-384c0-20 16.571-36.571 36.571-36.571h240.571c66.286-66.286 112-128 211.429-128h66.857c37.143 0 73.143 11.429 103.429 32 30.286-20.571 66.286-32 103.429-32h95.429c108.571 0 153.714 70.857 219.429 146.286h202.857c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <div className="home-content-container2">
                <span className="home-heading4 Card-Heading">
                  Reliable &amp; Professional Service
                </span>
                <span className="home-text13">
                  Our team is dedicated to providing reliable, professional
                  services that will exceed your expectations. We take pride in
                  our work and strive to deliver projects on time and within
                  budget.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-about">
          <div className="home-max-content-width-container">
            <div className="home-heading-container1">
              <h1 className="home-text14">Professional experience</h1>
            </div>
            <div className="home-content-container3">
              <div className="home-about-1">
                <div className="home-container04">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text15">
                    Head of Mobile App Development at MissCallPay
                  </span>
                </div>
                <div className="home-container05">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text16 Card-Text">
                    <span>Technical Consultant at Karnival</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text19 Card-Text">
                    Flutter Developer since 2018
                  </span>
                </div>
              </div>
              <div className="home-about-11">
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text20 Card-Text">
                    <span>
                      Lorem ipsum dolor sit amet aulla quis sem at nibh
                      elementum
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-container08">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text24 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-container09">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="home-text25 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
            </div>
            <button className="home-button Anchor button">CHECK MY WORK</button>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-clients">
          <div className="home-heading-container2">
            <h1 className="home-text26 Section-Heading">Clients</h1>
            <span className="home-text27 Section-Text">
              Here we will put your clients&apos; or partners&apos; logos
            </span>
          </div>
          <div className="home-logo-container">
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="home-logo"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="home-logo1"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="home-logo2"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="home-logo3"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="home-logo4"
            />
          </div>
        </div>
        <div id="pricing" className="home-pricing">
          <div className="home-heading-container3">
            <h1 className="home-text28 Section-Heading">Ask for a quote</h1>
          </div>
          <div className="home-pricing-card-container">
            <div className="home-card3">
              <div className="home-card-heading">
                <span className="home-type Anchor">Minimal</span>
                <span className="home-price Section-Heading">Basic</span>
              </div>
              <div className="home-card-content">
                <div className="home-feature">
                  <span className="home-name Card-Text">
                    Static Landing Page
                  </span>
                  <span className="home-limit">₹10K</span>
                </div>
                <div className="home-feature1">
                  <span className="home-name1">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="Card-Text">Mobile App(</span>
                    <span className="Card-Text">upto</span>
                    <span className="Card-Text"> 6 screens)</span>
                  </span>
                  <span className="home-limit1">₹30K</span>
                </div>
                <div className="home-feature2">
                  <span className="home-name2 Card-Text">Tech Support</span>
                  <span className="home-limit2">1 Month Free </span>
                </div>
              </div>
            </div>
            <div className="home-card4">
              <div className="home-card-heading1">
                <span className="home-type1 Anchor">medium</span>
                <span className="Section-Heading">Complex</span>
              </div>
              <div className="home-card-content1">
                <div className="home-container10">
                  <span className="Card-Text">Feature one</span>
                  <span className="home-text34 Card-Text">TBD</span>
                </div>
                <div className="home-container11">
                  <span className="Card-Text">Feature two</span>
                  <span className="home-text36 Card-Text">TBD</span>
                </div>
                <div className="home-container12">
                  <span className="Card-Text">Feature three</span>
                  <span className="home-text38 Card-Text">UNLIMITED</span>
                </div>
                <div className="home-container13">
                  <span className="Card-Text">Feature four</span>
                  <span className="home-text40 Card-Text">UNLIMITED</span>
                </div>
                <button className="home-button1 Anchor button">CHOOSE</button>
              </div>
            </div>
            <div className="home-card5">
              <div className="home-card-heading2">
                <span className="home-type2 Anchor">Premium</span>
                <span className="home-price2 Section-Heading">
                  Professional
                </span>
              </div>
              <div className="home-card-content2">
                <div className="home-container14">
                  <span className="home-text41 Card-Text">Dynamic Website</span>
                  <span className="home-text42">₹30K</span>
                </div>
                <div className="home-container15">
                  <span className="home-text43 Card-Text">
                    Complex Mobile App
                  </span>
                  <span className="home-text44">₹50K</span>
                </div>
                <div className="home-container16">
                  <span className="home-text45">
                    <span className="Card-Text">Tech Support</span>
                    <br></br>
                  </span>
                  <span className="home-text48">₹5K/Month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
        <div id="faq" className="home-faqs">
          <h2 className="home-text49 Section-Heading">
            Check the most common questions
          </h2>
          <div className="home-content-container4">
            <div className="home-faq">
              <div className="home-question-container">
                <span className="home-question">
                  Frequently Asked Questions
                </span>
              </div>
              <div className="home-answer-container">
                <span className="home-answer">
                  Is the Mobile App iOS or Android?
                </span>
                <span className="home-answer1">
                  <span className="Card-Text">
                    We provide both iOS and Android apps in one. They are
                    platform-agnostic.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-faq1">
              <div className="home-question-container1">
                <span className="home-question1">
                  Frequently Asked Questions
                </span>
              </div>
              <div className="home-answer-container1">
                <span className="home-answer2">
                  <span className="home-text52 Section-Text">
                    Will the apps and websites be able to handle traffic?
                  </span>
                  <br></br>
                </span>
                <span className="home-answer3 Card-Text">
                  Yes, they are hosted on a robust backend provided on our end.
                  They are able to handle in 10K users in the Basic Pack.
                </span>
              </div>
            </div>
            <div className="home-faq2">
              <div className="home-question-container2">
                <span className="home-question2">
                  Frequently Asked Questions
                </span>
              </div>
              <div className="home-answer-container2">
                <span className="home-answer4">
                  What does Tech Support mean?
                </span>
                <span className="home-answer5 Card-Text">
                  This means that debugging when the need arises, updatinf
                  according to the norms, checking and optimizing hosting etc.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator5"></div>
        <div id="contact" className="home-subscribe">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1653378972306-599af0d77fe4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGNvbnRhY3QlMjBkZXRhaWxzfGVufDB8fHx8MTY3NjI2NzYxMw&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image1"
          />
          <div className="home-container17">
            <div className="home-heading-container4">
              <h1 className="home-text54 Section-Heading">
                Get In Touch with Us
              </h1>
            </div>
            <a
              href="mailto:heleosden@gmail.com?subject=Enquiry Regarding your Services"
              className="home-link09 button Anchor"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="home-section-separator6"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-colormind-white);
          }
          .home-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-colormind-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
            background-color: var(--dl-color-colormind-white);
          }
          .home-text {
            color: var(--dl-color-primary-primaryviolet);
            font-size: 24px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            color: var(--dl-color-primary-accentpink);
            font-size: 24px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link01 {
            color: var(--dl-color-primary-accentpink);
            display: none;
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-link02 {
            color: var(--dl-color-primary-accentpink);
            font-size: 24px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link03 {
            color: var(--dl-color-primary-accentpink);
            font-size: 24px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: none;
          }
          .home-link04 {
            color: var(--dl-color-primary-accentpink);
            font-size: 24px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/dddepth-339-1500w.jpg');
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: var(--dl-color-primary-accentpink);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-fiveunits);
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-cta-btn-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-cta-btn {
            color: #ff03ef;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-primaryviolet);
          }
          .home-text02 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-family: Overpass;
            font-weight: 700;
            line-height: 1.55;
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-image {
            width: 40%;
            z-index: 100;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-colormind-white);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text05 {
            color: var(--dl-color-primary-primaryviolet);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            width: 200px;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-icon04 {
            fill: #a8a38f;
            width: 100px;
            height: 100px;
            display: flex;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading2 {
            color: var(--dl-color-primary-primaryviolet);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text06 {
            color: var(--dl-color-colormind-darkgreen);
            font-size: 16px;
            text-align: center;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-text07 {
            font-family: Courier New;
            font-weight: 600;
            letter-spacing: 2px;
          }
          .home-text08 {
            font-size: 16px;
            font-style: normal;
            font-family: Courier New;
            font-weight: 400;
            line-height: 1.55;
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
          }
          .home-text09 {
            font-size: 16px;
            font-style: normal;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 1.55;
            letter-spacing: 1px;
            text-transform: none;
            text-decoration: none;
          }
          .home-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            width: 200px;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-icon06 {
            fill: #a8a38f;
            width: 100px;
            height: 100px;
          }
          .home-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading3 {
            color: var(--dl-color-primary-primaryviolet);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text12 {
            color: var(--dl-color-colormind-darkgreen);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            width: 200px;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-icon08 {
            fill: #a8a38f;
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .home-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading4 {
            color: var(--dl-color-primary-primaryviolet);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text13 {
            color: var(--dl-color-colormind-darkgreen);
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-about {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
          }
          .home-max-content-width-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text14 {
            color: var(--dl-color-primary-primaryviolet);
            font-size: 48px;
            font-family: Overpass;
            font-weight: 900;
            line-height: 1.22;
            text-transform: none;
            text-decoration: none;
          }
          .home-content-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-about-1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-container04 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text15 {
            color: var(--dl-color-primary-accentpink);
            text-align: left;
          }
          .home-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
            display: none;
            text-align: left;
          }
          .home-container06 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text19 {
            color: white;
            text-align: left;
          }
          .home-about-11 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text20 {
            color: White;
            text-align: left;
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon18 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-container09 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .home-icon20 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text25 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-button {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-clients {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text26 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text27 {
            text-align: center;
          }
          .home-logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo1 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo2 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo3 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-logo4 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-colormind-browngrey);
          }
          .home-heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text28 {
            color: var(--dl-color-colormind-darkgreen);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-pricing-card-container {
            width: 760px;
            display: flex;
            flex-wrap: wrap;
            min-width: 200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card3 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-colormind-darkgreen);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-price {
            color: var(--dl-color-primary-accentpink);
          }
          .home-card-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-feature {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-limit {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name1 {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-limit1 {
            color: white;
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-name2 {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-limit2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            font-style: normal;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-card4 {
            width: 30%;
            display: none;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-primary-primaryviolet);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container10 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text34 {
            color: var(--dl-color-gray-700);
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text36 {
            color: var(--dl-color-gray-700);
          }
          .home-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text38 {
            color: var(--dl-color-gray-700);
          }
          .home-container13 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-text40 {
            color: var(--dl-color-gray-700);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-colormind-darkgreen);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-type2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-price2 {
            color: var(--dl-color-primary-accentpink);
          }
          .home-card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-container14 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text41 {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-text42 {
            color: white;
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text43 {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-text44 {
            color: white;
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-container16 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text45 {
            color: var(--dl-color-colormind-darkgreen);
          }
          .home-text48 {
            color: white;
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text49 {
            color: var(--dl-color-primary-primaryviolet);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container4 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #a8a38f;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer {
            color: var(--dl-color-colormind-darkgreen);
            font-size: 18px;
            font-style: normal;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-answer1 {
            color: var(--dl-color-primary-primaryviolet);
          }
          .home-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #a8a38f;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer2 {
            color: var(--dl-color-colormind-darkgreen);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text52 {
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-answer3 {
            color: var(--dl-color-primary-primaryviolet);
          }
          .home-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #a8a38f;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .home-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-answer4 {
            color: var(--dl-color-colormind-darkgreen);
            font-size: 18px;
            font-family: Courier New;
            font-weight: 600;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 2px;
            text-transform: none;
            text-decoration: none;
          }
          .home-answer5 {
            color: var(--dl-color-primary-primaryviolet);
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image1 {
            width: 50%;
            object-fit: cover;
          }
          .home-container17 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-colormind-darkgreen);
          }
          .home-heading-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text54 {
            color: White;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link09 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-primary-accentpink);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon22 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon24 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon26 {
            width: 24px;
            height: 24px;
          }
          .home-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon28 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home-heading {
              text-align: center;
            }
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-image {
              width: 100%;
            }
            .home-text05 {
              text-align: center;
            }
            .home-pricing-card-container {
              align-items: center;
              justify-content: center;
            }
            .home-card3 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-card4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              position: relative;
            }
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-text14 {
              text-align: center;
            }
            .home-content-container3 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .home-about-1 {
              width: 65%;
            }
            .home-about-11 {
              width: 65%;
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-pricing-card-container {
              width: 100%;
              flex-direction: column;
            }
            .home-card3 {
              margin-right: 0px;
            }
            .home-content-container4 {
              width: 100%;
              flex-direction: column;
            }
            .home-faq {
              width: 100%;
            }
            .home-faq1 {
              width: 100%;
            }
            .home-faq2 {
              width: 100%;
            }
            .home-subscribe {
              flex-direction: column;
            }
            .home-image1 {
              width: 70%;
            }
            .home-container17 {
              width: 100%;
              align-items: center;
            }
            .home-heading-container4 {
              width: 100%;
            }
            .home-text54 {
              text-align: center;
            }
            .home-link09 {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-about-1 {
              width: 100%;
            }
            .home-about-11 {
              width: 100%;
            }
            .home-text26 {
              text-align: center;
            }
            .home-pricing {
              flex-wrap: wrap;
              flex-direction: column;
            }
            .home-heading-container3 {
              flex-wrap: wrap;
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
            }
            .home-text28 {
              flex-wrap: wrap;
              text-align: center;
            }
            .home-pricing-card-container {
              padding-left: var(--dl-space-space-unit);
            }
            .home-content-container4 {
              padding-left: 0px;
            }
            .home-image1 {
              width: 100%;
            }
            .home-container17 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-link09 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
