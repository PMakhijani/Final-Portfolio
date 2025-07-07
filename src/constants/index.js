import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Smart Driving Sleep Monitor using Arduino",
    description:
      "Designed a wearable head posture monitoring system to enhance user safety—especially for drivers and machine operators. The system uses an MPU6050 sensor to detect unsafe head tilts and responds in real-time using RGB LEDs, a buzzer, and motor control.",
    subDescription: [
      "IEE Format Report: https://drive.google.com/file/d/1kp5oMlEQhl6yHpjdMm5lW6RPXYQCpO50/view?usp=sharing ",
      "Tilt duration is analyzed to trigger different levels of alerts—ranging from visual to emergency responses. If the head remains tilted beyond 5 seconds, the system activates a blinking LED pattern, sounds an alarm, and halts a simulated motor, mimicking vehicle shutdown. Built using Arduino, the system ensures low cost, modularity, and potential for future enhancements like GSM alerts and wireless communication via ESP32.",
    ],
    href: "https://www.youtube.com/watch?v=myFcbyBCpls",
    logo: "",
    image: "/assets/projects/arduino.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Arduino IDE",
        path: "/assets/logos/arduino.png",
      }
    ],
  },
  {
    id: 2,
    title: "Pandas-Bokeh: High-Level Charting API for Bokeh with Pandas Integration",
    description:
      "As part of a collaborative research project, we explored Pandas-Bokeh — a high-level, interactive charting API that seamlessly integrates the power of Bokeh with the simplicity of Pandas. Our study focused on how Pandas-Bokeh enables the creation of interactive, publication-quality plots directly from Pandas DataFrames, making data visualization more efficient and accessible for data analysts and developers alike.",
    subDescription: [
      "The link to the blog article can be found in the description of the video ",
      "This project strengthened our understanding of Python-based visualization tools and how they can be used in modern data science workflows.",
    ],
    href: "https://www.youtube.com/watch?v=s_riUOVTcsQ",
    logo: "",
    image: "/assets/projects/pandas.png",
    tags: [
      {
        id: 1,
        name: "NumPy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "/assets/logos/matplotlib.jpeg",
      }
    ],
  },
  {
    id: 3,
    title: "HAL Tejas Fighter Jet CAD Model",
    description:
      "A detailed 3D CAD model of the HAL Tejas fighter jet, showcasing precision and design complexity using Autodesk Inventor 2025.",
    subDescription: [
      "This project involved accurately modeling the indigenous HAL Tejas — India’s light combat aircraft — with a focus on structural realism and aerodynamics. Key components such as the fuselage, cockpit, wings, stabilizers, and air intakes were modeled individually and then assembled with precise constraints. The design reflects the balance between stealth, agility, and engineering precision.",
    ],
    href: "https://drive.google.com/file/d/1bOuTmPB4zSn-iwyVqSqonGVqNf-ECXPz/view?usp=sharing",
    logo: "",
    image: "/assets/projects/eg-img.jpg",
    tags: [
      {
        id: 1,
        name: "Autodesk Inventor 2025",
        path: "/assets/logos/inventor.png",
      }
    ],
  },
  {
    id: 4,
    title: "Eklavya De-Trip Hurdles",
    description:
      "As part of the Design Innovation and Prototyping (DIP) course, we designed a safer athletic hurdle aimed at reducing injury risks for amateur runners. We conducted user research by engaging with athletes and coaches to identify key challenges, particularly around impact safety and beginner usability.",
    subDescription: [
      "Detailed Project Report: https://drive.google.com/file/d/1kARBjAnN6NTAI1HzwWHxYQMbDESe3G6F/view?usp=sharing",
      "The project taught me the value of user-centric design, teamwork, and how thoughtful engineering can directly enhance both safety and performance in sports equipment.",
    ],
    href: "https://youtu.be/fY4o6GWbQCg",
    logo: "",
    image: "/assets/projects/dip.png",
    tags: [
      {
        id: 1,
        name: "Prototyping Skills",
        path:"/assets/logos/teamwork.jpeg",
      },
      {
        id: 1,
        name: "TeamWork",
        path:"/assets/logos/teamwork.jpeg",
      }
    ],
  },
  {
    id: 5,
    title: "Small research on ESP-NOW Protocol",
    description:
      "A deep dive into ESP-NOW, a wireless communication protocol by Espressif that enables fast, energy-efficient, peer-to-peer data exchange between ESP32/ESP8266 devices—ideal for IoT applications.",
    subDescription: [
      "This project explores the architecture, communication flow, and practical applications of ESP-NOW, which operates outside traditional TCP/IP stacks by using MAC addresses for direct device-to-device transmission. With support for up to 20 peers, AES-128 encryption, and minimal latency (as low as a few milliseconds), ESP-NOW enables scalable and secure wireless networks without needing routers.",
    ],
    href: "https://drive.google.com/file/d/1cauVH5oVWx7BIfgd18TgL78SHLxE_VF3/view?usp=sharing",
    logo: "",
    image: "/assets/projects/espnow.webp",
    tags: [
      {
        id: 1,
        name: "ESP32",
        path: "/assets/logos/esp32.png",
      }
    ],
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Education upto Class 10th",
    job: "Delhi Public School, Nagpur",
    date: "2015-2022",
    contents: [
      "Achieved 98.6% in Class 10 with a focus on conceptual clarity, discipline, and curiosity.",
      "Achieved academic excellence while actively participating in Olympiads and school events. Balanced academics with involvement in art, sports, and leadership roles throughout the schooling journey."
    ],
  },
  {
    title: "Completed JEE Advanced and Class 12th",
    job: "School of Scholars, Nagpur",
    date: "2022-2024",
    contents: [
      "Qualified JEE Advanced with an All India Rank of 4368 and achieved an outstanding 99.44 percentile in JEE Mains, earning admission to IIT Gandhinagar, one of India’s premier Institutes of Technology.",
      "Secured 95.6% in CBSE Class 12th Boards with a strong academic focus on Physics, Chemistry, and Mathematics.",
      "This journey reflects not only my academic proficiency but also my dedication, perseverance, and hardworking nature—traits that continue to drive my pursuit of excellence in the field of engineering."
    ],
  },
  {
    title: "Full-Time Undergraduate",
    job: "IIT Gandhinagar",
    date: "21st July 2024",
    contents: [
      "Admitted to the B.Tech in Electrical Engineering program at IIT Gandhinagar, a premier Institute of National Importance known for academic excellence, research-driven culture, and interdisciplinary learning." ,
      "This milestone marks the beginning of my journey into advanced topics such as power systems, embedded electronics, signal processing, and intelligent systems. With a strong foundation and a deep passion for innovation, I aim to contribute meaningfully to the ever-evolving field of electrical engineering."
    ],
  },
  {
    title: "Intern",
    job: "Metal and Steel Factory, Ishapore",
    date: "10th June- 17th June 2025",
    contents: [
      "Completed an industrial internship at one of India’s oldest metal factories, the backbone of India's Defence Industry.",
      "Acquired practical knowledge of high-voltage power grid systems, plant-wide electrical distribution, and the role of automation in large-scale industrial operations. An insightful and rewarding experience in real-world electrical engineering."
    ],
  },
];

