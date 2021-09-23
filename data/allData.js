import Glob from "/public/services/glob.gif"
import Code from "/public/services/code.gif"
import Tool from "/public/services/tool.gif"
import Marketing from "/public/services/marketing.gif"
import EcoIcon from '@material-ui/icons/Eco';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AlbumIcon from "@material-ui/icons/Album";
import { FaFacebookF , FaFacebook, FaTwitter, FaLinkedinIn, FaPinterestP} from "react-icons/fa";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import labiba from "../public/team/labiba.jpg";
import aminul from "../public/team/aminul.jpg";
import amit from "../public/team/amit.jpg";
import ferdous from "../public/team/ferdous.jpg";
import mihadul from "../public/team/mihadul.jpg";
import  mukim from "../public/team/mukim.jpg";
import rafid from "../public/team/rafid.jpg";
import sabbir from "../public/team/sabbir.jpg";
import vision from "../public/about/vision.gif";
import values from "../public/about/values.gif";
import mission from "../public/about/mission.gif";
import goal from "../public/about/goal.gif";
import goal1 from "../public/about/goal1.gif";




const allData = {
  heroSubTitle: "Grow Your Businesses With Our Creative Graphic Design, Interactive Websites, And Gather Customers That Connect To Your Brand With Our Leading-Edge Digital Marketing Services.",
  services:[
    {
      id: 1,
      image: Glob,
      title: "Web Design",
      details: "Our Vision To Be The Only Customer-Priority, Quality-Driven Web Design Firm .",
    },
    {
      id: 2,
      image: Code,
      title: " Development",
      details: "Web Development We Work With The Newest Tech Stacks To Engineer Back-End .",
    },
    {
      id: 3,
      image: Tool,
      title: "Cloud Computing",
      details: " Unique Email Templates With Mobile Responsive Tested Multiple Devices.",
    },
    {
      id: 4,
      image: Marketing,
      title: "Digital Marketing",
      details: "We Increase Your Site's Organic Traffic By Keyword Rankings, Using Industry Best Practices .",
    },
  ],
  serviceRt: "features",
  serviceRst: "Let’s Check Our all Services",
  serviceRpt: "We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time.",
  aboutusRt: "About us",
  aboutusRst: "Affordable. Customer Friendly. Results-Oriented",
  aboutusRpt: "Tech IT house is a one-stop digital Service agency located in Bangladesh. Wе hаvе up to date еxреriеnсе in uѕеr web and graphics design, web development, digital marketing. We fосuѕ оn dеlivеring with professional services аnd building lоng-tеrm relationship with оur сliеntѕ.Our team holds themselves accountable for every client's project.",

  socials:[
    {
      id:1,
      name:"Facebook",
      icon: FaFacebook,
      link:"https://www.facebook.com/",
    },
    {
      id:2,
      name:"Twitter",
      icon: FaTwitter,
      link:"https://www.facebook.com/",
    },
    {
      id:3,
      name:"Linkedin",
      icon: FaLinkedinIn,
      link:"https://www.facebook.com/",
    },
    {
      id:4,
      name:"Pinterest",
      icon: FaPinterestP,
      link:"https://www.facebook.com/",
    },
  ],
  abouts: [
    {
      icon: <EcoIcon />,
      header: "Vision",
      details:
        "Our Vission Is To Provide Our Clients With The Utmost Satisfaction And Create A Better Online Experience For Many People.",
    },
    {
      icon: <VerifiedUserIcon />,
      header: "Values",
      details:
        "Take The Header Builder To A New Level With New Awesome Components: Socials, Contact, Breadcrumbs And Many.",
    },
    {
      icon: <BeachAccessIcon />,
      header: "Mission",
      details:
        "Our Mission Is To Reach The Goal Of Our Clients And Provide Services That Are Suitable For Their Needs.",
    },
    {
      icon: <AlbumIcon />,
      header: "Goals",
      details:
        "Give A Huge Boost To Your Entire Blogging Experience With Features Specially Designed For Increased User Experience.",
    },
  ],
  homeaccordions: [
    {
      id: "panel1",
      h1: "Will I Find My Website On The Search Engines?",
      h2: "Yes. We Always Design Websites To Be Search-Engine Friendly.",
    },

    {
      id: "panel2",
      h1: "I Already Have A Website And It Needs Updating. Can You Help Me?",
      h2: "Yes. We Are Happy To Look At Your Existing Site And Give You A Quote For Updating It.",
    },

    {
      id: "panel3",
      h1: "What If I Do Not Like The Design?",
      h2: "If You Are Not Satisfied With The Initial Design, We Will Work With You Further And Come Up With Another Design. Our Aim Is To Design A Website That You Are Completely Happy With.",
    },

    {
      id: "panel4",
      h1: "How Do I Get My Website On Search Engines, Especially Google?",
      h2: "Modern Search Engines Will Find Your Site Naturally, Through Links To Your Site From Other Sites. Google Especially Relies On Your Incoming Links To Determine Popularity And Relevance.",
    },
    {
      id: "panel5",
      h1: "How Much Will A Website Cost Me?",
      h2: "The Cost Of A Website Varies Depends On Its Complexity. We Are Happy To Discuss Your Requirements And Provide A Quote At Any Time",
    },
   
  ],
  aboutaccordions: [
    {
      id: "panel6",
      h1: "What Graphic Design Services Do You Provide?",
      h2: "Pretty Much Everything. We Can Help You With: Web Design, Logo DesignPrint, Design, Packaging Design, Illustration, Photo Manipulation …And More. We Can Help You Get What You Need.",
    },
    {
      id: "panel7",
      h1: "How SEO Agency Improve The Ranking Of A Website?",
      h2: "“SEO Is A Combination Of Different Techniques Which Can Help Your Website Get Relevant Traffic And Improve It’s Overall Ranking. SEO Agency Have Experts To Analyze Your Website And It’s Different Aspects.They Test Your Website On Criteria Like UX, Mobile Responsiveness Website Content, Technical Errors, On-Page Changes, Backlink Quality And Overall Improvement Of Website Quality.Once The Concise Report Is Made About Required Changes, The Changes Get Implemented On Website And SEO Strategy Is Made According To The Scope Of Work. Execution Of Strategy Is Done By SEOs Throughout The Campaign. Also Frequent Monitoring Is Done To Validate The SEO Strategy. The Continuous Efforts Throughout The Campaign Make The Targeted Keywords Rank Better And Improve The Organic Traffic Of Website.”",
    },
    {
      id: "panel8",
      h1: "What Are The Services Provided By Digital Marketing Agencies ?",
      h2: "Digital Marketing Agencies Provide A Lot Of Services For Various Online Activities Like Search Engine Optimization (SEO), Content Marketing (Blogging & Article Writing), Downloadable Content Offerings, Email Marketing, Social Media Marketing, Pay-Per-Click (PPC) Marketing, Website Design / Micro-Site Development.",
    },
    {
      id: "panel9",
      h1: "How Many Revisions Do I Get?",
      h2: "We Provide As Many As Possible So That You Can Get The Best Graphic Design Services",
    },
    {
      id: "panel10",
      h1: "Can You Provide Business Application?",
      h2: "Yes We Have C# Developer Who Makes Simple Retail Management System, Sales Management, Quick Sell, Factory Management Services Application For You.",
    },
  ],
  teamTitle:"Our Best",
  teamStitle:"Dedicated Team",
  teamDetails: "We are a digitalized, full-service creative agency. We combine Web Development-design, Digital marketing, and Graphics design to help you stay ahead of your competition and grow your business.",
  teams: [
    {
      image: labiba,
      name: "Labiba Tahsin",
      position: "Graphics Designer",
      details:
        "Hello There,I'm Labiba Tahsin, An Expert Of Illustrations With 2+ Long Periods Of....",
      fullposition: "Graphics Designer & Content Writer",
      fulldetails:
        "Hello there, I'm Labiba Tahsin, an expert of illustrations with 2+ long periods of involvement. I'm skilled at Adobe Photoshop and Adobe Illustrator. I'm working as a Graphics Designer & Content writer here. Since I have gotten 100+ customers for my unique content and stunning designs or illustrations, You would be the lucky person for working with me. Thanks.",
      experiance: "Photoshop, Illustrator, Website Content, Etc",
     

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: mihadul,
      name: "Md.Mihadul Islam",
      position: "Web developer",
      details:
        "Hi! This Is Mihadul, A Web Programmer Of ASP.NET CORE MVC. With Three Years Of ....",
      fullposition: "Web Designer & Developer",
      fulldetails:
        "Hi! This is Mihadul, a web programmer of ASP.NET CORE MVC. With three years of working experience in this field now, I can make any website you need for your business, institution, personal portfolio, and so on. I was a c# developer, So, I can also create windows applications for your business; besides, I have worked with WordPress, HTML, CSS, BOOTSTRAP, and Javascript. Please take a look at my portfolio for further details. Thanks.",
      experiance: "c# proggramming, HTML, CSS, Cloud platform.",
     


      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: ferdous,
      name: "MD.Ferdous",
      position: "Web Designer & developer",
      details:
        "Good Tidings! This Is Ferdous, An Expert Web Designer And Developer. I Have....",
      fullposition: "Web Designer & developer",
      fulldetails:
        "Good tidings! This is Ferdous, an expert Web Designer and Developer. I have learned HTML5, CSS3, Bootstrap, Javascript, WordPress, and PHP. With over three years of experience with site creation and improvement, I ensure any web work fulfillment and offer limitless updates. I'm an Experienced Web Designer and Developer who can oversee such an undertaking satisfactorily. If you need to get some answers concerning my work and are charmed to work with me, it's not all that much difficulty; feel free to deal with me..",
      experiance: "HTML, CSS, Bootstrap, JavaScript, ReactJs",
      

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: sabbir,
      name: "Md. Sabbir Hossain",
      position: "Web Designer",
      details:
        "Hi, My Name Is Sabbir. I Have A Skillset Of A Front-End Developer And Web Designer.....",
      fullposition: "Web Designer & Content Writer",
      fulldetails:
        "Hi, My name is Sabbir. I have a skillset of a Front-End Developer and Web Designer. For being more than a year in the online market, and working with HTML, CSS, BOOTSTRAP, and WordPress, I can ensure you with a unique, attractive, and engaging website for your business. You can see some of my works in my portfolio. Hoping to work with you, thanks for your time.",
      experiance: "HTML, CSS, Bootstrap, JS, jQuery, Content Writing",

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: amit,
      name: "MD Amit Hasan",
      position: "Digital Marketer",
      details:
        "Greetings! I Am Amit Hasan Evan, A Professional SEO Expert & Digital Marketer....",
      fullposition: "Digital Marketer",
      fulldetails:
        "Greetings! I am Amit Hasan Evan, a Professional SEO Expert & Digital Marketer. By one year of market experience and working with Keyword Research, OnPage & Offpage SEO, Guest Posting, Content Marketing, E-Commerce Marketing, Video Marketing, YouTube Marketing, and Social Media Marketing and more than 350 customer satisfaction, I place your website on the first place of search engines. If you want to know more about me and my work and interested in working with me, please contact with me.",
      experiance: "SEO, Marketing",
     


      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: rafid,
      name: "Rafid Ahmed",
      position: "Web designer & Developer.",
      details:
        "Welcome, I Am Rafid Ahmed, An Expert Front-End Developer, Email AutoMarketing..",
      fullposition: "Web designer & Developer.",
      fulldetails:
        "Welcome, I am Rafid Ahmed, an expert Front-End Developer, Email AutoMarketing & ChatBot Specialist with 2+ years of working experience. I am skilled in HTML, CSS, WordPress, Domain-Hosting, and Bootstrap. I am engaging as a web developer here, but all my services are equally available. I have worked with 209+ customers. If you wish to know more about me and my work or are interested in working with me, let's discuss it.",
      experiance: "HTML, CSS, Bootstrap, Python, PHP",

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    // {
    //   image: "Images/team/rokibul.jpg",
    //   name: "Rockybul Hasan",
    //   position: "Graphics Designer",
    //   details:
    //     "Hello, I'm Rockybul. I'm An Expert Graphic Designer With Two Years Of Professional ...",
    //   fullposition: "Graphics Designer",
    //   fulldetails:
    //     "Hello, I'm Rockybul. I'm An Expert Graphic Designer With Two Years Of Professional Experience. I'm A Skilled Person With Knowledge Of Adobe Photoshop And Adobe Illustrator. I Follow All The Illustration Rules To Make Your Artwork Stunning. I Guarantee You, My Work Will Be Unique, Exceptional, And Eye-Getting, Which Would Assist You With Attract A Focused Audience For Your Brand Or Event. Please Message Me For Any Task-Related To Illustrations. Check My Portfolio For Details.",
    //   experiance: "Photoshop, Illustrator",

    //   links: [
    //     { link: "https://www.google.com", icon: <LinkedInIcon /> },
    //     { link: "https://www.google.com", icon: <FacebookIcon /> },
    //     { link: "https://www.google.com/", icon: <TwitterIcon /> },
    //   ],
    // },
    {
      image: mukim,
      name: "MD.Mukim ",
      position: "Web Designer & Developer",
      details:
        "Hello, I'm Mukim Billah. I'm An Expert Web Development & Desginer With Two Years Of ...",
      fullposition: "Web Designer & Developer",
      fulldetails:
        "Hello, I'm Mukim Billah. I'm An Expert Web Design & Development With Two Years Of Professional Experience. I'm A Skilled Person With Knowledge Of HTML, CSS, JavaScript. I Follow All The JavaScript Rules To Make Your Artwork Stunning. I Guarantee You, My Work Will Be Unique, Exceptional, And Eye-Getting, Which Would Assist You With Attract A Focused Audience For Your Brand Or Event. Please Message Me For Any Task-Related To Illustrations. Check My Portfolio For Details.",
      experiance: "HTML, CSS, JavaScript, React",

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
    {
      image: aminul,
      name: "Aminul Islam",
      position: "UI/UX Designer",
      details:
        "Hello, I'm Aminul Islam. I'm An Expert Graphic Designer With Two Years Of Professional ...",
      fullposition: "UI/UX Designer",
      fulldetails:
        "Hello, I'm Aminul Islam. I'm An Expert UI/X & Graphic Designer With Two Years Of Professional Experience. I'm A Skilled Person With Knowledge Of AdobeXD, Figma, Adobe Photoshop And Adobe Illustrator. I Follow All The Illustration Rules To Make Your Artwork Stunning. I Guarantee You, My Work Will Be Unique, Exceptional, And Eye-Getting, Which Would Assist You With Attract A Focused Audience For Your Brand Or Event. Please Message Me For Any Task-Related To Illustrations. Check My Portfolio For Details.",
      experiance: "Adobe XD, Figma, Photoshop, Illustrator",

      links: [
        { link: "https://www.google.com", icon: <FaFacebookF /> },
        { link: "https://www.google.com", icon: <FaLinkedinIn /> },
        { link: "https://www.google.com/", icon: <FaTwitter /> },
      ],
    },
  ],
  aboutvision:[
    {
      id:1,
      icon:vision ,
      title: "Vision",
      details: "Our Vission Is To Provide Our Clients With The Utmost Satisfaction And Create A Better Online Experience For Many People.",
    },
    {
      id:2,
      icon: mission ,
      title: "Mission",
      details: "Our Mission Is To Reach The Goal Of Our Clients And Provide Services That Are Suitable For Their Needs.",
    },
    {
      id:3,
      icon: values ,
      title: "Values",
      details: "Take The Header Builder To A New Level With New Awesome Components: Socials, Contact, Breadcrumbs And Many.",
    },
    {
      id:4,
      icon: goal1,
      title: "Goals",
      details: "Give A Huge Boost To Your Entire Blogging Experience With Features Specially Designed For Increased User Experience.",
    },
  ],
};
export default allData;