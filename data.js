
const longBlackImage = require("./assets/coffee/long-black.jpeg");
const latteImage = require("./assets/coffee/cafe-latte.jpeg");
const cappucinoImage = require("./assets/coffee/cappucino.jpeg");
const flatWhiteImage = require("./assets/coffee/flat-white.jpeg");
const espressoImage = require("./assets/coffee/espresso.jpeg");
const doubleEspressoImage = require("./assets/coffee/double-espresso.jpeg");
const cortadoImage = require("./assets/coffee/cortado.jpeg");
const mochaImage = require("./assets/coffee/mocha.jpeg");
const redEyeImage = require("./assets/coffee/red-eye.jpeg");

const DATA = [
    {
      id: 1,
      name: "HP EliteBook 840 G8",
      description: "14' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "ABC12345",
      recipient_name: "John Smith",
      image: longBlackImage,
    },
    {
      id: 2,
      name: "Dell XPS 13",
      description: "13' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "DEF67890",
      recipient_name: "Jane Doe",
      image: latteImage,
    },
    {
      id: 3,
      name: "Lenovo ThinkPad T14",
      description: "14' laptop with AMD Ryzen 7 processor and 16GB RAM",
      serial_number: "GHI23456",
      recipient_name: "Mike Johnson",
      image: cappucinoImage,
    },
    {
      id: 4,
      name: "Apple MacBook Pro",
      description: "16' laptop with M1 Max processor and 32GB RAM",
      serial_number: "JKL78901",
      recipient_name: "Sarah Kim",
      image: flatWhiteImage,
    },
    {
      id: 5,
      name: "Asus ZenBook 14",
      description: "14' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "MNO34567",
      recipient_name: "Tom Lee",
      image: espressoImage,
    },
    {
      id: 6,
      name: "HP Pavilion Gaming Laptop",
      description:
        "15.6' laptop with AMD Ryzen 5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "PQR90123",
      recipient_name: "Karen Chen",
      image: doubleEspressoImage,
    },
    {
      id: 7,
      name: "Dell Inspiron 15 3000",
      description: "15.6' laptop with Intel Core i3 processor and 4GB RAM",
      serial_number: "STU45678",
      recipient_name: "David Brown",
      image: doubleEspressoImage,
    },
    {
      id: 8,
      name: "Lenovo IdeaPad 3",
      description: "15.6' laptop with AMD Ryzen 3 processor and 8GB RAM",
      serial_number: "VWX12345",
      recipient_name: "Amy Davis",
      image: doubleEspressoImage,
    },
    {
      id: 9,
      name: "Acer Chromebook Spin 713",
      description: "13.5' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "YZA67890",
      recipient_name: "Mark Wilson",
      image: cortadoImage,
    },
    {
      id: 10,
      name: "Microsoft Surface Laptop 4",
      description: "13.5' laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "BCD23456",
      recipient_name: "Emily Taylor",
      image: cortadoImage,
    },
    {
      id: 11,
      name: "HP EliteBook x360 1040 G8",
      description:
        "14' convertible laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "EFG78901",
      recipient_name: "Kevin Brown",
      image: cortadoImage,
    },
    {
      id: 12,
      name: "Dell Precision 3560",
      description:
        "15.6' laptop with Intel Core i7 processor and 32GB RAM and NVIDIA T500 graphics",
      serial_number: "HIJ23456",
      recipient_name: "Lisa Johnson",
      image: mochaImage,
    },
    {
      id: 13,
      name: "Lenovo ThinkPad X1 Carbon Gen 9",
      description: "14' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "KLM78901",
      recipient_name: "Mike Garcia",
      image: redEyeImage,
    },
    {
      id: 14,
      name: "Apple MacBook Air",
      description: "13.3' laptop with M1 processor and 8GB RAM",
      serial_number: "NOP34567",
      recipient_name: "Mary Lee",
      image: redEyeImage,
    },
    {
      id: 15,
      name: "Asus ROG Zephyrus G15",
      description:
        "15.6' gaming laptop with AMD Ryzen 9 processor and NVIDIA RTX 3060 graphics",
      serial_number: "QRS90123",
      recipient_name: "Jason Smith",
      image: redEyeImage,
    },
    {
      id: 16,
      name: "HP Envy x360",
      description:
        "15.6' convertible laptop with AMD Ryzen 7 processor and 16GB RAM",
      serial_number: "TUV45678",
      recipient_name: "Jessica Davis",
      image: redEyeImage,
    },
    {
      id: 17,
      name: "Dell Latitude 7420",
      description: "14' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "WXY12345",
      recipient_name: "Alex Wilson",
      image: redEyeImage,
    },
    {
      id: 18,
      name: "Lenovo Legion 5 Pro",
      description:
        "16' gaming laptop with AMD Ryzen 7 processor and NVIDIA RTX 3070 graphics",
      serial_number: "ZAB67890",
      recipient_name: "Matt Brown",
      image: redEyeImage,
    },
    {
      id: 19,
      name: "Acer Nitro 5",
      description:
        "15.6' gaming laptop with AMD Ryzen 5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "CDE23456",
      recipient_name: "Karen Lee",
      image: redEyeImage,
    },
    {
      id: 20,
      name: "Microsoft Surface Book 3",
      description:
        "13.5' convertible laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "FGH78901",
      recipient_name: "Steve Johnson",
    },
    {
      id: 21,
      name: "HP Spectre x360",
      description:
        "13.3' convertible laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "IJK34567",
      recipient_name: "Grace Kim",
    },
    {
      id: 22,
      name: "Dell G5 15",
      description:
        "15.6' gaming laptop with Intel Core i5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "LMN90123",
      recipient_name: "Chris Davis",
    },
    {
      id: 23,
      name: "Lenovo IdeaPad Flex 5",
      description:
        "14' convertible laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "OPQ45678",
      recipient_name: "Jessica Brown",
    },
    {
      id: 24,
      name: "Apple MacBook Pro",
      description: "13.3' laptop with M1 Pro processor and 16GB RAM",
      serial_number: "RST12345",
      recipient_name: "Sarah Johnson",
    },
    {
      id: 25,
      name: "HP Pavilion x360",
      description:
        "14' convertible laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "UVW67890",
      recipient_name: "David Lee",
    },
    {
      id: 26,
      name: "Dell XPS 13",
      description: "13.4' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "XYZ23456",
      recipient_name: "Emily Kim",
    },
    {
      id: 27,
      name: "Acer Swift 5",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "ABC78901",
      recipient_name: "John Smith",
    },
    {
      id: 28,
      name: "Lenovo ThinkPad P1 Gen 4",
      description:
        "15.6' laptop with Intel Core i9 processor and NVIDIA T2000 graphics",
      serial_number: "DEF34567",
      recipient_name: "Katie Johnson",
    },
    {
      id: 29,
      name: "Asus ZenBook Duo 14",
      description:
        "14' laptop with Intel Core i7 processor and NVIDIA MX450 graphics",
      serial_number: "GHI90123",
      recipient_name: "Anthony Lee",
    },
    {
      id: 30,
      name: "HP Elite Dragonfly Max",
      description: "13.3' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "JKL45678",
      recipient_name: "Megan Brown",
    },
    {
      id: 31,
      name: "Dell Precision 3560",
      description:
        "15.6' laptop with Intel Core i5 processor and NVIDIA T500 graphics",
      serial_number: "MNO12345",
      recipient_name: "Timothy Johnson",
    },
    {
      id: 32,
      name: "Microsoft Surface Laptop 4",
      description: "13.5' laptop with AMD Ryzen 7 processor and 16GB RAM",
      serial_number: "PQR78901",
      recipient_name: "Linda Lee",
    },
    {
      id: 33,
      name: "Lenovo Yoga 9i",
      description:
        "14' convertible laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "STU23456",
      recipient_name: "Ethan Kim",
    },
    {
      id: 34,
      name: "Asus Chromebook Flip C436",
      description:
        "14' convertible laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "VWX78901",
      recipient_name: "Olivia Johnson",
    },
    {
      id: 35,
      name: "Dell Inspiron 15 3000",
      description: "15.6' laptop with Intel Core i3 processor and 4GB RAM",
      serial_number: "YZA34567",
      recipient_name: "William Lee",
    },
    {
      id: 36,
      name: "HP Chromebook 14",
      description: "14' laptop with Intel Celeron processor and 4GB RAM",
      serial_number: "BCD90123",
      recipient_name: "Sophia Kim",
    },
    {
      id: 37,
      name: "Acer Aspire 5",
      description: "15.6' laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "EFG45678",
      recipient_name: "Jason Johnson",
    },
    {
      id: 38,
      name: "Lenovo Legion 5",
      description:
        "15.6' gaming laptop with AMD Ryzen 7 processor and NVIDIA RTX 3060 graphics",
      serial_number: "HIJ12345",
      recipient_name: "Samantha Lee",
    },
    {
      id: 39,
      name: "Dell Latitude 7320",
      description: "13.3' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "KLM67890",
      recipient_name: "Jacob Kim",
    },
    {
      id: 40,
      name: "Asus ROG Zephyrus G15",
      description:
        "15.6' gaming laptop with AMD Ryzen 9 processor and NVIDIA RTX 3070 graphics",
      serial_number: "NOP23456",
      recipient_name: "Emma Johnson",
    },
    {
      id: 41,
      name: "HP Spectre x360",
      description:
        "15.6' convertible laptop with Intel Core i7 processor and NVIDIA MX450 graphics",
      serial_number: "QRS78901",
      recipient_name: "Nicholas Lee",
    },
    {
      id: 42,
      name: "Dell XPS 15",
      description:
        "15.6' laptop with Intel Core i9 processor and NVIDIA GTX 1650 Ti graphics",
      serial_number: "TUV12345",
      recipient_name: "Avery Kim",
    },
    {
      id: 43,
      name: "Lenovo ThinkPad X1 Carbon Gen 9",
      description: "14' laptop with Intel Core i7 processor and 16GB RAM",
      serial_number: "WXY67890",
      recipient_name: "Ella Johnson",
    },
    {
      id: 44,
      name: "Acer Predator Helios 300",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 3070 graphics",
      serial_number: "ZAB23456",
      recipient_name: "Noah Lee",
    },
    {
      id: 45,
      name: "Asus TUF Dash F15",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 3060 graphics",
      serial_number: "CDE90123",
      recipient_name: "Grace Johnson",
    },
    {
      id: 46,
      name: "HP Omen 15",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 3060 graphics",
      serial_number: "FGH45678",
      recipient_name: "Lucas Lee",
    },
    {
      id: 47,
      name: "Dell G5 15",
      description:
        "15.6' gaming laptop with Intel Core i5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "IJK12345",
      recipient_name: "Olivia Kim",
    },
    {
      id: 48,
      name: "Lenovo Yoga 9i",
      description:
        "14' convertible laptop with Intel Core i7 processor and Intel Iris Xe graphics",
      serial_number: "LMN67890",
      recipient_name: "Daniel Johnson",
    },
    {
      id: 49,
      name: "Asus ZenBook UX425",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "OPQ23456",
      recipient_name: "Madison Lee",
    },
    {
      id: 50,
      name: "Acer Chromebook Spin 311",
      description: "11.6' convertible laptop with MediaTek processor and 4GB RAM",
      serial_number: "RST78901",
      recipient_name: "Anthony Kim",
    },
    {
      id: 51,
      name: "Dell Precision 5560",
      description:
        "15.6' mobile workstation with Intel Core i7 processor and NVIDIA RTX A2000 graphics",
      serial_number: "UVW12345",
      recipient_name: "Isabella Johnson",
    },
    {
      id: 52,
      name: "HP EliteBook 840 G8",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "XYZ67890",
      recipient_name: "Benjamin Lee",
    },
    {
      id: 53,
      name: "Lenovo Legion 7i",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 3080 graphics",
      serial_number: "ABC23456",
      recipient_name: "Sophie Johnson",
    },
    {
      id: 54,
      name: "Asus VivoBook S14",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "DEF90123",
      recipient_name: "Michael Kim",
    },
    {
      id: 55,
      name: "Dell Inspiron 15 3000",
      description: "15.6' laptop with Intel Celeron processor and 4GB RAM",
      serial_number: "GHI45678",
      recipient_name: "Victoria Johnson",
    },
    {
      id: 56,
      name: "Lenovo IdeaPad 5",
      description: "15.6' laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "JKL12345",
      recipient_name: "Ethan Lee",
    },
    {
      id: 57,
      name: "Acer Nitro 5",
      description:
        "15.6' gaming laptop with Intel Core i5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "MNO67890",
      recipient_name: "Mia Johnson",
    },
    {
      id: 58,
      name: "Asus ROG Strix G15",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 3070 graphics",
      serial_number: "PQR23456",
      recipient_name: "Jacob Kim",
    },
    {
      id: 59,
      name: "HP Pavilion x360",
      description:
        "14' convertible laptop with Intel Core i5 processor and Intel Iris Xe graphics",
      serial_number: "STU78901",
      recipient_name: "Chloe Johnson",
    },
    {
      id: 60,
      name: "Dell XPS 13",
      description:
        "13.4' laptop with Intel Core i7 processor and Intel Iris Xe graphics",
      serial_number: "VWX12345",
      recipient_name: "Ryan Lee",
    },
    {
      id: 61,
      name: "Lenovo ThinkPad X1 Carbon",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "YZA67890",
      recipient_name: "Natalie Johnson",
    },
    {
      id: 62,
      name: "Asus Chromebook Flip C434",
      description:
        "14' convertible laptop with Intel Core m3 processor and 4GB RAM",
      serial_number: "BCD23456",
      recipient_name: "Justin Kim",
    },
    {
      id: 63,
      name: "Acer Aspire 5",
      description: "15.6' laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "EFG78901",
      recipient_name: "Ava Johnson",
    },
    {
      id: 64,
      name: "Dell G5 15",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA GTX 1660 Ti graphics",
      serial_number: "HIJ23456",
      recipient_name: "Ethan Kim",
    },
    {
      id: 65,
      name: "Lenovo IdeaPad Flex 5",
      description:
        "14' convertible laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "KLM78901",
      recipient_name: "Aiden Johnson",
    },
    {
      id: 66,
      name: "Asus TUF Gaming A15",
      description:
        "15.6' gaming laptop with AMD Ryzen 5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "NOP23456",
      recipient_name: "Emily Kim",
    },
    {
      id: 67,
      name: "Dell Latitude 7420",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "QRS78901",
      recipient_name: "Carter Johnson",
    },
    {
      id: 68,
      name: "Lenovo Legion 5",
      description:
        "15.6' gaming laptop with AMD Ryzen 7 processor and NVIDIA RTX 3060 graphics",
      serial_number: "TUV23456",
      recipient_name: "Lily Kim",
    },
    {
      id: 69,
      name: "Asus VivoBook 15",
      description: "15.6' laptop with Intel Core i3 processor and 4GB RAM",
      serial_number: "WXY78901",
      recipient_name: "Evelyn Johnson",
    },
    {
      id: 70,
      name: "Acer Spin 3",
      description:
        "14' convertible laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "ZAB23456",
      recipient_name: "Owen Kim",
    },
    {
      id: 71,
      name: "Dell Inspiron 15",
      description: "15.6' laptop with AMD Ryzen 3 processor and 4GB RAM",
      serial_number: "CDE78901",
      recipient_name: "Lucas Johnson",
    },
    {
      id: 72,
      name: "Lenovo Yoga C940",
      description:
        "14' convertible laptop with Intel Core i7 processor and Intel Iris Plus graphics",
      serial_number: "FGH23456",
      recipient_name: "Grace Kim",
    },
    {
      id: 73,
      name: "Asus ROG Zephyrus G14",
      description:
        "14' gaming laptop with AMD Ryzen 9 processor and NVIDIA RTX 3060 graphics",
      serial_number: "IJK78901",
      recipient_name: "Sophia Johnson",
    },
    {
      id: 74,
      name: "HP Envy x360",
      description:
        "15.6' convertible laptop with Intel Core i7 processor and Intel Iris Xe graphics",
      serial_number: "LMN23456",
      recipient_name: "Logan Kim",
    },
    {
      id: 75,
      name: "Dell Precision 5550",
      description:
        "15.6' laptop with Intel Core i7 processor and NVIDIA Quadro T1000 graphics",
      serial_number: "OPQ78901",
      recipient_name: "Benjamin Johnson",
    },
    {
      id: 76,
      name: "Lenovo ThinkPad X1 Yoga",
      description:
        "14' convertible laptop with Intel Core i5 processor and Intel UHD graphics",
      serial_number: "RST23456",
      recipient_name: "Zoe Kim",
    },
    {
      id: 77,
      name: "Asus ZenBook 13",
      description: "13.3' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "UVW78901",
      recipient_name: "Avery Johnson",
    },
    {
      id: 78,
      name: "Acer Predator Triton 500",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA RTX 2070 graphics",
      serial_number: "XYZ23456",
      recipient_name: "Madison Kim",
    },
    {
      id: 79,
      name: "Dell Vostro 14",
      description: "14' laptop with Intel Core i3 processor and 4GB RAM",
      serial_number: "ABC78901",
      recipient_name: "Caleb Johnson",
    },
    {
      id: 80,
      name: "Lenovo ThinkPad T14",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "DEF23456",
      recipient_name: "Isabella Kim",
    },
    {
      id: 81,
      name: "HP Spectre x360",
      description:
        "13.3' convertible laptop with Intel Core i7 processor and Intel Iris Plus graphics",
      serial_number: "GHI78901",
      recipient_name: "Ethan Johnson",
    },
    {
      id: 82,
      name: "Asus VivoBook 15",
      description: "15.6' laptop with AMD Ryzen 5 processor and 8GB RAM",
      serial_number: "JKL23456",
      recipient_name: "Olivia Kim",
    },
    {
      id: 83,
      name: "Lenovo ThinkPad X13",
      description: "13.3' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "MNO78901",
      recipient_name: "Noah Johnson",
    },
    {
      id: 84,
      name: "Dell G3 15",
      description:
        "15.6' gaming laptop with Intel Core i5 processor and NVIDIA GTX 1650 graphics",
      serial_number: "PQR23456",
      recipient_name: "Emma Kim",
    },
    {
      id: 85,
      name: "HP EliteBook x360",
      description:
        "13.3' convertible laptop with Intel Core i5 processor and Intel UHD graphics",
      serial_number: "STU78901",
      recipient_name: "Jackson Johnson",
    },
    {
      id: 86,
      name: "Asus TUF A15",
      description:
        "15.6' gaming laptop with AMD Ryzen 7 processor and NVIDIA GTX 1660 Ti graphics",
      serial_number: "VWX23456",
      recipient_name: "Chloe Kim",
    },
    {
      id: 87,
      name: "Lenovo IdeaPad 3",
      description: "15.6' laptop with Intel Core i3 processor and 4GB RAM",
      serial_number: "YZA78901",
      recipient_name: "Mason Johnson",
    },
    {
      id: 88,
      name: "Acer Aspire 5",
      description: "15.6' laptop with AMD Ryzen 3 processor and 4GB RAM",
      serial_number: "BCD23456",
      recipient_name: "Sophie Kim",
    },
    {
      id: 89,
      name: "Dell Latitude 7400",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "EFG78901",
      recipient_name: "Liam Johnson",
    },
    {
      id: 90,
      name: "Lenovo Legion Y540",
      description:
        "15.6' gaming laptop with Intel Core i7 processor and NVIDIA GTX 1660 Ti graphics",
      serial_number: "HIJ23456",
      recipient_name: "Ava Kim",
    },
    {
      id: 91,
      name: "HP Pavilion x360",
      description:
        "14' convertible laptop with Intel Core i3 processor and Intel UHD graphics",
      serial_number: "KLM78901",
      recipient_name: "Landon Johnson",
    },
    {
      id: 92,
      name: "Asus Chromebook C423",
      description: "14' Chromebook with Intel Celeron processor and 4GB RAM",
      serial_number: "NOP23456",
      recipient_name: "Avery Kim",
    },
    {
      id: 93,
      name: "Lenovo Yoga C940",
      description:
        "14' convertible laptop with Intel Core i7 processor and Intel UHD graphics",
      serial_number: "QRS78901",
      recipient_name: "Evelyn Johnson",
    },
    {
      id: 94,
      name: "Dell Inspiron 14",
      description: "14' laptop with Intel Core i5 processor and 8GB RAM",
      serial_number: "TUV23456",
      recipient_name: "Luke Kim",
    },
    {
      id: 95,
      name: "HP Envy x360",
      description:
        "15.6' convertible laptop with AMD Ryzen 5 processor and AMD Radeon graphics",
      serial_number: "WXY78901",
      recipient_name: "Aria Johnson",
    },
    {
      id: 96,
      name: "Asus ROG Zephyrus G14",
      description:
        "14' gaming laptop with AMD Ryzen 9 processor and NVIDIA RTX 2060 graphics",
      serial_number: "ZAB23456",
      recipient_name: "Caleb Kim",
    },
    {
      id: 97,
      name: "Lenovo Flex 5",
      description:
        "14' convertible laptop with AMD Ryzen 7 processor and AMD Radeon graphics",
      serial_number: "CDE78901",
      recipient_name: "Lila Johnson",
    },
    {
      id: 98,
      name: "Dell XPS 13",
      description:
        "13.3' laptop with Intel Core i7 processor and Intel UHD graphics",
      serial_number: "FGH23456",
      recipient_name: "Owen Kim",
    },
    {
      id: 99,
      name: "HP ProBook 450 G8",
      description:
        "15.6' laptop with Intel Core i5 processor and Intel UHD graphics",
      serial_number: "IJK78901",
      recipient_name: "Audrey Johnson",
    },
    {
      id: 100,
      name: "Asus ZenBook UX425",
      description:
        "14' laptop with Intel Core i5 processor and Intel UHD graphics",
      serial_number: "LMN23456",
      recipient_name: "Ryan Kim",
    },
  ];

  export default DATA
  