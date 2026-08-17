// const data = [
//     {
//         id: 1,
//         image_url: "https://cdn.dribbble.com/users/2919663/screenshots/18372585/media/22afc4757735732a96d5a9563202f729.png",
//         work_title: "Blockchain Platform",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Digital Assets"
//     },
//     {
//         id: 2,
//         image_url: "https://cdn.dribbble.com/users/702789/screenshots/15916650/media/ec203705bbc00f7338ba4e356b2c8af9.png",
//         work_title: "Web Application",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Design & Dev"
//     },
//     {
//         id: 3,
//         image_url: "https://cdn.dribbble.com/users/2417352/screenshots/6918204/media/d88f537661e3ea9cc4802e31b06e0ad8.png",
//         work_title: "Site Optimization",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Interactive guide"
//     },
//     {
//         id: 4,
//         image_url: "https://cdn.dribbble.com/users/2417352/screenshots/6918204/media/d88f537661e3ea9cc4802e31b06e0ad8.png",
//         work_title: "Site Optimization",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Interactive guide"
//     },
//     {
//         id: 5,
//         image_url: "https://cdn.dribbble.com/users/2919663/screenshots/18372585/media/22afc4757735732a96d5a9563202f729.png",
//         work_title: "Blockchain Platform",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Digital Assets"
//     },
//     {
//         id: 6,
//         image_url: "https://cdn.dribbble.com/users/702789/screenshots/15916650/media/ec203705bbc00f7338ba4e356b2c8af9.png",
//         work_title: "Web Application",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         genre: "Design & Dev"
//     },
// ];

// Ordered ascending: id 9 = Chat Buddies UI (newest/latest), id 1 = Auth App (oldest)
const data = [
	{
		id: 1,
		work_title: "Auth App",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730353070/user-auth-app_xajed2.png",
		description: "A full-stack user authentication system built on the MERN stack (MongoDB, Express.js, React, Node.js), implementing secure signup/login flows with token-based authentication.",
		genre: "Full Stack Development",
		deploye_url: "https://user-auth-app-five.vercel.app/",
		is_deployed: true,
	},
	{
		id: 2,
		work_title: "E-commerce App with Zustand and CRUD Functionality",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730353534/e-commerce-app_hdgbnb.png",
		description: "A front-end-focused e-commerce web application built with React, featuring full CRUD functionality for both products and shopping cart management. Demonstrates component-based architecture and state handling for a typical online store experience.",
		genre: "E-commerce",
		deploye_url: "https://e-commerce-react-lilac-five.vercel.app/",
		is_deployed: true,
	},
	{
		id: 3,
		work_title: "Mastermind Game",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730354491/master-mind_qptikb.png",
		description: "A browser-based implementation of the classic MasterMind code-breaking game, built with HTML, CSS, and JavaScript. Includes a dedicated rules page and interactive gameplay logic for guessing the secret code.",
		genre: "Game | JS",
		deploye_url: "https://master-mind-game.vercel.app/",
		is_deployed: true,
	},
	{
		id: 4,
		work_title: "Figma to HTML | CSS",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730355239/figma-to-html_vpxvaa.png",
		description: "A pixel-perfect conversion of a Figma design into a fully responsive HTML/CSS/JS webpage (deployed as \"Quick Pick\"). Demonstrates strong front-end fundamentals including custom Tailwind-style CSS classes, media queries, and component-based section styling (header, search bar, testimonials, etc.).",
		genre: "Web | HTML | CSS | JS",
		deploye_url: "https://quick-pick-buggcy.vercel.app/",
		is_deployed: true,
	},
	{
		id: 5,
		work_title: "Simple Age Calculator",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730356524/age-calculator_iwtbf7.png",
		description: "A simple, responsive Age Calculator built with vanilla HTML, CSS, and JavaScript. Users input their birth date and instantly get their exact age, showcasing core DOM manipulation and date-handling logic.",
		genre: "Web Development",
		deploye_url: "https://age-caclulator-nu.vercel.app/",
		is_deployed: true,
	},
	{
		id: 6,
		work_title: "Attendance Management System",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730358716/attendance-system_bswuh0.png",
		description: "A Windows Forms application for efficiently managing student attendance. It enables administrators to perform CRUD operations on student records and includes a secure admin login for data protection. With an intuitive interface, it streamlines the attendance management process for educational institutions.",
		genre: "Desktop Application Development | C#",
		deploye_url: "https://github.com/Muhammad-Huzaifa24/Employee_Attendance_System_EAD_PreMidProject/",
		is_deployed: false,
	},
	{
		id: 7,
		work_title: "Student Interest System",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1730359798/student-interest-system_knhoxe.png",
		description: "A Student Interest System built with ASP.NET Core MVC on the front end and ADO.NET with MSSQL (plus Firebase) on the back end. Developed as an Enterprise Application Development (EAD) academic project to manage and track student interests/preferences.",
		genre: "Web Application Development | c# | ASP.NET",
		deploye_url: "https://github.com/Muhammad-Huzaifa24/BCSF20M024-EAD-Project-Student-Interest-System",
		is_deployed: false,
	},
	{
		id: 8,
		work_title: "ToDo App",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1742198782/to-dos-app_bzda4v.png",
		description: "A to-do list application frontend built with React, featuring user authentication, React Query for data fetching, and Axios for API calls. Includes theme support for a customizable user experience.",
		genre: "Full Stack Development",
		deploye_url: "https://your-todos-omega.vercel.app/",
		is_deployed: true,
	},
	{
		id: 9,
		work_title: "Chat Buddies UI",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1749111593/chat-buddies-ui_cotbr4.jpg",
		description: "Chat App UI — A responsive chat application interface built with React and Vite, styled using Chakra UI and Tailwind CSS, with Redux for state management.",
		genre: "Frontend",
		deploye_url: "https://chat-app-ui-olive.vercel.app/",
		is_deployed: true,
	},
	{
		id: 10,
		work_title: "QR Code Generator",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1786969568/qr-code-genetator_oqmrph.png",
		description: "Create high-resolution, customized QR codes for Wi-Fi, contacts, links, locations, and events. 100% private & client-side.",
		genre: "Vibe Coding | Frontend",
		deploye_url: "https://qr-code-generator-2821.ai.studio/",
		is_deployed: true,
	},
	{
		id: 11,
		work_title: "Open NoteBook",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1786971712/open-notebook_zyddbx.jpg",
		description: "An iOS note-taking app built in Swift/Xcode, scaffolded and managed with the 10x app-development platform. The project includes structured folders for product ideation, growth/App Store assets, and release notes alongside the native iOS source code.",
		genre: "Vibe Coded | 10x-App | IOS",
		deploye_url: "https://github.com/Muhammad-Huzaifa24/Open-NoteBook",
		is_deployed: false,
	},
	{
		id: 12,
		work_title: "E-Commerce Client Side template",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1786971249/e-commerce-client-template_vebuza.png",
		description: "A Next.js e-commerce storefront template scaffolded with v0, using shadcn/ui components and Tailwind CSS. Built for rapid deployment (live demo on Vercel), it's structured as a clean, ready-to-customize base for online store projects.",
		genre: "Vibe Coded | Template | Vercel",
		deploye_url: "https://boty-ecommerce-template-bay-six.vercel.app/",
		is_deployed: true,
	},
	{
		id: 13,
		work_title: "E-Commerce Admin Dashboard",
		image_url: "https://res.cloudinary.com/dvycqni2r/image/upload/v1786971570/e-commerce-admin-template_qzslll.png",
		description: "A modern, responsive admin dashboard built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. It includes customizable themes, multiple dashboard layouts, authentication screens, and reusable management interfaces for scalable applications.",
		genre: "Vibe Coded | Template | Vercel",
		deploye_url: "https://next-js-and-shadcn-ui-admin-dashboa-ten-iota.vercel.app/",
		is_deployed: true,
	},
];

export default data;
